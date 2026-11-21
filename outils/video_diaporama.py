"""Génère une vidéo « diaporama » (format vertical téléphone) à partir d'une fiche technique.

Usage : python3 -I outils/video_diaporama.py <id-de-la-fiche> <fichier-sortie.mp4>
Lit fiches-data.js (fichier en clair, non publié). Nécessite ffmpeg et Pillow.
"""
import json, os, re, subprocess, sys, tempfile
from PIL import Image, ImageDraw, ImageFont

W, H = 1080, 1920
MARGE = 80
FOND, ENCRE, GRIS, ACCENT, ACCENT_DOUX, LIGNE = "#faf7f2", "#1f2328", "#5f6670", "#b5482a", "#f6e3dc", "#e6e0d6"
POLICE = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
POLICE_G = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FPS, FONDU = 30, 0.4


def police(taille, gras=False):
    return ImageFont.truetype(POLICE_G if gras else POLICE, taille)


def couper(draw, texte, f, largeur):
    """Découpe un texte en lignes qui tiennent dans la largeur."""
    mots, lignes, cur = texte.split(), [], ""
    for m in mots:
        essai = (cur + " " + m).strip()
        if draw.textlength(essai, font=f) <= largeur:
            cur = essai
        else:
            if cur:
                lignes.append(cur)
            cur = m
    if cur:
        lignes.append(cur)
    return lignes


class Diapo:
    def __init__(self, fiche, progression):
        self.img = Image.new("RGB", (W, H), FOND)
        self.d = ImageDraw.Draw(self.img)
        # bandeau
        self.d.rectangle([0, 0, W, 230], fill=ACCENT)
        self.d.text((MARGE, 60), "CAP CUISINE · FICHE TECHNIQUE", font=police(30, True), fill="#f6d8cd")
        titre = couper(self.d, fiche["titre"], police(46, True), W - 2 * MARGE)
        self.d.text((MARGE, 110), titre[0] + (" …" if len(titre) > 1 else ""), font=police(46, True), fill="white")
        # barre de progression en bas
        self.d.rectangle([MARGE, H - 110, W - MARGE, H - 98], fill=LIGNE)
        self.d.rectangle([MARGE, H - 110, MARGE + int((W - 2 * MARGE) * progression), H - 98], fill=ACCENT)
        self.d.text((MARGE, H - 80), "MFR de Peyregoux", font=police(28), fill=GRIS)
        self.y = 300

    def texte(self, t, taille=40, gras=False, couleur=ENCRE, retrait=0, espace=1.35, apres=0):
        f = police(taille, gras)
        for ligne in couper(self.d, t, f, W - 2 * MARGE - retrait):
            self.d.text((MARGE + retrait, self.y), ligne, font=f, fill=couleur)
            self.y += int(taille * espace)
        self.y += apres

    def hauteur_texte(self, t, taille=40, retrait=0, espace=1.35):
        return len(couper(self.d, t, police(taille), W - 2 * MARGE - retrait)) * int(taille * espace)

    def puce(self, t, taille=40, sous_titre=False):
        if sous_titre:
            self.y += 10
            self.texte(t, taille, gras=True, couleur=ACCENT, apres=6)
            return
        self.d.ellipse([MARGE + 4, self.y + taille * 0.38, MARGE + 20, self.y + taille * 0.38 + 16], fill=ACCENT)
        self.texte(t, taille, retrait=44, apres=14)

    def place(self):
        return H - 160 - self.y


def est_sous_titre(g):
    return len(g) < 40 and not g.rstrip().endswith((".", ":", ";", ")"))


def lecture(texte):
    """Durée d'affichage d'une diapo selon la quantité de texte (environ 14 caractères/seconde)."""
    return max(4.0, min(16.0, 2.5 + len(texte) / 14))


def construire(fiche, dossier):
    diapos = []  # (image, durée)
    plan = []    # fonctions de dessin, pour connaître le total avant la barre de progression

    # 1. Titre
    def titre(p):
        s = Diapo(fiche, p)
        s.y = 420
        s.texte(fiche.get("theme", "").upper() + (" · " + fiche["sousTitre"] if fiche.get("sousTitre") else ""), 32, True, ACCENT, apres=20)
        s.texte(fiche["titre"], 76, True, espace=1.2, apres=30)
        if fiche.get("poste"):
            s.texte("Poste : " + fiche["poste"], 38, True, apres=30)
        for i in fiche["infos"]:
            s.d.rounded_rectangle([MARGE, s.y, W - MARGE, s.y + 120], 24, fill=ACCENT_DOUX)
            s.d.text((MARGE + 30, s.y + 18), i["label"].upper(), font=police(26, True), fill=ACCENT)
            s.d.text((MARGE + 30, s.y + 56), i["valeur"], font=police(40, True), fill=ENCRE)
            s.y += 140
        return s, 5.0
    plan.append(titre)

    # 2. Description
    if fiche.get("description"):
        def desc(p):
            s = Diapo(fiche, p)
            s.texte("Le plat", 54, True, apres=30)
            s.texte(fiche["description"], 44, couleur=ENCRE, espace=1.45)
            return s, lecture(fiche["description"])
        plan.append(desc)

    # 3. Denrées (une diapo, police réduite si besoin)
    def denrees(p):
        for taille in (38, 34, 30, 27):
            s = Diapo(fiche, p)
            s.texte("Denrées · 8 couverts", 54, True, apres=24)
            ok = True
            for sec in fiche["denrees"]:
                if sec["titre"]:
                    s.texte(sec["titre"], taille, True, ACCENT, apres=4)
                for it in sec["items"]:
                    q = (it["qte"] + " " + it["unite"]).strip()
                    s.d.text((MARGE + 20, s.y), it["nom"][:44], font=police(taille), fill=ENCRE)
                    wq = s.d.textlength(q, font=police(taille, True))
                    s.d.text((W - MARGE - wq, s.y), q, font=police(taille, True), fill=ENCRE)
                    s.y += int(taille * 1.45)
                s.y += 10
                if s.place() < 0:
                    ok = False
            if ok:
                break
        n = sum(len(sec["items"]) for sec in fiche["denrees"])
        return s, max(6.0, min(14.0, 2 + n * 0.6))
    plan.append(denrees)

    # 4. Matériel
    if fiche.get("materiel"):
        def materiel(p):
            s = Diapo(fiche, p)
            s.texte("Matériel", 54, True, apres=24)
            for m in fiche["materiel"]:
                if m["titre"]:
                    s.texte(m["titre"], 42, True, ACCENT, apres=6)
                for it in m["items"]:
                    s.puce(it, 38)
                s.y += 16
            return s, lecture(" ".join(" ".join(m["items"]) for m in fiche["materiel"]))
        plan.append(materiel)

    # 5. Étapes (découpées en plusieurs diapos si trop longues)
    nb = len(fiche["etapes"])
    for e in fiche["etapes"]:
        morceaux, cur, haut = [], [], 0
        for g in e["gestes"]:
            h = 70 if est_sous_titre(g) else 0
            h += Diapo.hauteur_texte(Diapo(fiche, 0), g, 40, retrait=44) + 14
            if cur and haut + h > 1250:
                morceaux.append(cur)
                cur, haut = [], 0
            cur.append(g)
            haut += h
        morceaux.append(cur)
        for k, gestes in enumerate(morceaux):
            def etape(p, e=e, gestes=gestes, k=k, total=len(morceaux)):
                s = Diapo(fiche, p)
                s.d.ellipse([MARGE, s.y, MARGE + 110, s.y + 110], fill=ACCENT)
                num = e["n"]
                wn = s.d.textlength(num, font=police(56, True))
                s.d.text((MARGE + 55 - wn / 2, s.y + 22), num, font=police(56, True), fill="white")
                s.d.text((MARGE + 140, s.y + 6), f"ÉTAPE {num} / {nb}" + (f"  (suite)" if k else ""), font=police(30, True), fill=GRIS)
                if e.get("duree"):
                    cx, cy, r = MARGE + 160, s.y + 77, 17  # petite horloge dessinée
                    s.d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=ACCENT, width=5)
                    s.d.line([cx, cy, cx, cy - 10], fill=ACCENT, width=4)
                    s.d.line([cx, cy, cx + 8, cy], fill=ACCENT, width=4)
                    s.d.text((MARGE + 190, s.y + 52), e["duree"], font=police(40, True), fill=ACCENT)
                s.y += 150
                s.texte(e["titre"], 50, True, espace=1.25, apres=26)
                for g in gestes:
                    s.puce(g, 40, sous_titre=est_sous_titre(g))
                return s, lecture(e["titre"] + " ".join(gestes))
            plan.append(etape)

    # 6. Remarque + fin
    if fiche.get("remarques"):
        def rem(p):
            s = Diapo(fiche, p)
            s.texte("À retenir", 54, True, apres=30)
            for r in fiche["remarques"]:
                s.d.rectangle([MARGE, s.y, MARGE + 10, s.y + s.hauteur_texte(r, 44, retrait=40, espace=1.45)], fill=ACCENT)
                s.texte(r, 44, retrait=40, espace=1.45, apres=30)
            return s, lecture(" ".join(fiche["remarques"]))
        plan.append(rem)

    def fin(p):
        s = Diapo(fiche, p)
        s.y = 760
        s.texte("Bon service !", 80, True, ACCENT, apres=30)
        s.texte("Retrouve la fiche complète, les quantités et le schéma sur le site de la classe.", 42, couleur=GRIS, espace=1.45)
        return s, 4.0
    plan.append(fin)

    for i, fn in enumerate(plan):
        s, duree = fn((i + 1) / len(plan))
        chemin = os.path.join(dossier, f"{i:03d}.png")
        s.img.save(chemin)
        diapos.append((chemin, duree))
    return diapos


def monter(diapos, sortie):
    """Assemble les images avec un fondu entre chaque diapo."""
    cmd = ["ffmpeg", "-y", "-loglevel", "error"]
    for img, d in diapos:
        cmd += ["-loop", "1", "-t", f"{d:.2f}", "-framerate", str(FPS), "-i", img]
    filtres, prec, decal = [], "0:v", 0.0
    for i in range(1, len(diapos)):
        decal += diapos[i - 1][1] - FONDU
        filtres.append(f"[{prec}][{i}:v]xfade=transition=fade:duration={FONDU}:offset={decal:.2f}[v{i}]")
        prec = f"v{i}"
    cmd += ["-filter_complex", ";".join(filtres) + f";[{prec}]format=yuv420p[out]", "-map", "[out]",
            "-c:v", "libx264", "-preset", "medium", "-crf", "26", "-tune", "stillimage", "-r", str(FPS),
            "-movflags", "+faststart", sortie]
    subprocess.run(cmd, check=True)


def main():
    fid, sortie = sys.argv[1], sys.argv[2]
    racine = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    txt = open(os.path.join(racine, "fiches-data.js"), encoding="utf-8").read()
    data = json.loads(txt[txt.index("=") + 1:].strip().rstrip(";"))
    fiche = next(f for f in data["fiches"] if f["id"] == fid)
    with tempfile.TemporaryDirectory() as tmp:
        diapos = construire(fiche, tmp)
        monter(diapos, sortie)
        duree = sum(d for _, d in diapos) - FONDU * (len(diapos) - 1)
        print(f"{len(diapos)} diapos, {duree:.0f} s → {sortie}")


if __name__ == "__main__":
    main()
