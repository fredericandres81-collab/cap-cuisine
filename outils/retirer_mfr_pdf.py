"""Remplace la mention de la MFR dans les PDF (schémas, fiches) par « CAP Cuisine · M. Andrès ».

Usage : python3 -I outils/retirer_mfr_pdf.py <dossier contenant les PDF>   (modifie les fichiers sur place)
À lancer après outils/convertir_fiches.py, avant outils/chiffrer.py.
"""
import glob, os, sys
import pymupdf as fitz

# du plus long au plus court : on remplace d'abord les formules complètes
REMPLACEMENTS = [
    ("MFR Peyregoux — Frédéric Andrès, formateur cuisine — CAP Cuisine", "CAP Cuisine · M. Andrès"),
    ("MFR Peyregoux — Frédéric Andrès, formateur cuisine", "M. Andrès, formateur cuisine"),
    ("MFR de Peyregoux · CAP Cuisine", "CAP Cuisine · M. Andrès"),
    ("MFR Peyregoux — CAP Cuisine", "CAP Cuisine · M. Andrès"),
    ("MFR de Peyregoux", "M. Andrès"),
    ("MFR Peyregoux", "M. Andrès"),
]


def style_du_texte(page, rect):
    """Taille, couleur et graisse du texte situé dans rect."""
    for b in page.get_text("dict", clip=rect)["blocks"]:
        for l in b.get("lines", []):
            for s in l["spans"]:
                if s["text"].strip():
                    c = s["color"]
                    couleur = ((c >> 16) & 255) / 255, ((c >> 8) & 255) / 255, (c & 255) / 255
                    gras = "bold" in s["font"].lower() or (s["flags"] & 16)
                    return s["size"], couleur, gras
    return 8, (0.3, 0.3, 0.3), False


def couleur_fond(page, rect):
    """Couleur du fond juste à gauche du texte (pour masquer proprement)."""
    x = max(rect.x0 - 2, 0)
    pix = page.get_pixmap(clip=fitz.Rect(x, rect.y0, x + 1, rect.y1), dpi=72)
    r, g, b = pix.pixel(0, pix.height // 2)[:3]
    return r / 255, g / 255, b / 255


def nouveau_texte(t):
    for ancien, nouveau in REMPLACEMENTS:
        t = t.replace(ancien, nouveau)
    return t


def traiter(chemin):
    doc = fitz.open(chemin)
    n = 0
    for page in doc:
        a_faire = []
        # 1. lignes de texte qui citent la MFR : on réécrit la ligne entière (pas de trou)
        toutes = [l for bloc in page.get_text("dict")["blocks"] for l in bloc.get("lines", [])]
        textes = ["".join(sp["text"] for sp in l["spans"]).strip() for l in toutes]
        a_vider = set()
        for i, ligne in enumerate(toutes):
            if "MFR" in textes[i] or "Peyregoux" in textes[i]:
                # mention coupée « MFR de » / « Peyregoux · CAP » / « Cuisine » : effacer le morceau « Cuisine » juste dessous
                if textes[i] == "Peyregoux · CAP":
                    x0, y1 = ligne["bbox"][0], ligne["bbox"][3]
                    for j, autre in enumerate(toutes):
                        if textes[j] == "Cuisine" and abs(autre["bbox"][0] - x0) < 6 and -3 <= autre["bbox"][1] - y1 < 15:
                            a_vider.add(j)
        for i, ligne in enumerate(toutes):
            spans = [sp for sp in ligne["spans"] if sp["text"]]
            texte = "".join(sp["text"] for sp in spans)
            rect = fitz.Rect(ligne["bbox"])
            if i in a_vider:
                a_faire.append((rect, "", 1, (0, 0, 0), False, fitz.Point(rect.tl), couleur_fond(page, rect)))
                continue
            if "MFR" not in texte and "Peyregoux" not in texte:
                continue
            if texte.strip() == "MFR de":
                texte = "CAP Cuisine ·"
            elif texte.strip() == "Peyregoux · CAP":
                texte = "M. Andrès"
            sp = next(x for x in spans if x["text"].strip())
            c = sp["color"]
            couleur = ((c >> 16) & 255) / 255, ((c >> 8) & 255) / 255, (c & 255) / 255
            gras = "bold" in sp["font"].lower() or bool(sp["flags"] & 16)
            a_faire.append((rect, nouveau_texte(texte).strip(), sp["size"], couleur, gras,
                            fitz.Point(sp["origin"]), couleur_fond(page, rect)))
        # 2. logo de la MFR (petite image en haut de page, environ 98 x 38 points)
        logos = []
        for img in page.get_images(full=True):
            for r in page.get_image_rects(img[0]):
                if r.y1 < page.rect.height * 0.2 and 80 < r.width < 120 and 30 < r.height < 50:
                    logos.append(r)
        for rect, *_rest in a_faire:
            page.add_redact_annot(rect, fill=_rest[-1])
        for r in logos:
            page.add_redact_annot(r, fill=(1, 1, 1))
        if a_faire or logos:
            page.apply_redactions(images=fitz.PDF_REDACT_IMAGE_REMOVE if logos else fitz.PDF_REDACT_IMAGE_NONE,
                                  graphics=fitz.PDF_REDACT_LINE_ART_NONE)
            for rect, texte, taille, couleur, gras, origine, fond in a_faire:
                if texte:
                    page.insert_text(origine, texte, fontsize=taille, fontname="hebo" if gras else "helv",
                                     color=couleur)
            n += len(a_faire) + len(logos)
    if n:
        tmp = chemin + ".tmp"
        doc.save(tmp, garbage=3, deflate=True, no_new_id=True)
        doc.close()
        os.replace(tmp, chemin)
    else:
        doc.close()
    return n


if __name__ == "__main__":
    total = fichiers = 0
    for f in sorted(glob.glob(os.path.join(sys.argv[1], "*.pdf"))):
        n = traiter(f)
        total += n
        fichiers += bool(n)
    print(f"{total} mentions ou logos retirés dans {fichiers} PDF")
