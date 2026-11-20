"""Convertit les fiches techniques Word (.docx) en un fichier de données pour le site."""
import json, os, re, sys, unicodedata, shutil
import docx
from docx.oxml.ns import qn

SRC = sys.argv[1]          # dossier "Fiches techniques CAP Cuisine"
OUT = sys.argv[2]          # dossier du site

CATS = {
    "01 - Potages": "Potages",
    "02 - Hors-d'œuvre froids": "Hors-d'œuvre froids",
    "03 - Hors-d'œuvre chauds": "Hors-d'œuvre chauds",
    "04 - Œufs": "Œufs",
    "05 - Poissons": "Poissons",
    "06 - Coquillages et crustacés": "Coquillages et crustacés",
    "07 - Viandes": "Viandes",
    "08 - Abats": "Abats",
    "09 - Volailles": "Volailles",
    "10 - Garnitures d'accompagnement": "Garnitures d'accompagnement",
    "11 - Desserts": "Desserts",
}
DONNEES = os.path.join(SRC, "fiches techniques données")
NEW_FORMAT = {  # fiches au nouveau modèle -> thème
    "FT_Beignets_gambas_8p_CAP_Cuisine.docx": "Coquillages et crustacés",
    "FT_Papillotes_truite_julienne_8p_CAP_Cuisine.docx": "Poissons",
    "FT_Fumet_truite_safran_creme_8p_CAP_Cuisine.docx": "Poissons",
    "FT_Bavarois_exotique_8p_CAP_Cuisine.docx": "Desserts",
}


def txt(el):
    return "".join(t.text or "" for t in el.iter(qn("w:t"))).strip()


def norm(s):
    s = re.sub(r"[ \t ]+", " ", s or "").strip()
    return s


def cell_paras(tc):
    return [norm(txt(p)) for p in tc.iter(qn("w:p")) if norm(txt(p))]


def rows(tbl):
    out = []
    for tr in tbl.iter(qn("w:tr")):
        out.append([cell_paras(tc) for tc in tr.findall(qn("w:tc"))])
    return out


def slugify(s):
    s = unicodedata.normalize("NFKD", s.replace("œ", "oe").replace("Œ", "Oe"))
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def smart_title(t):
    """'ŒUFS COCOTTE À LA CRÈME' -> 'Œufs cocotte à la crème'"""
    if t.upper() != t:
        return t
    t = t.lower()
    return t[:1].upper() + t[1:]


def parse(path):
    d = docx.Document(path)
    f = {"titre": "", "sousTitre": "", "poste": "", "description": "", "infos": [],
         "denrees": [], "notes": [], "materiel": [], "etapes": [], "etapesFormat": "classique",
         "remarques": []}
    zone = "entete"
    for el in d.element.body.iterchildren():
        if el.tag == qn("w:p"):
            t = norm(txt(el))
            if not t:
                continue
            up = t.upper()
            if up in ("DENRÉES", "DENREES"):
                zone = "denrees"; continue
            if up in ("MATÉRIEL", "MATERIEL"):
                zone = "materiel"; continue
            if up.startswith("TECHNIQUE DE RÉALISATION") or up == "PROGRESSION":
                zone = "etapes"; continue
            if zone == "entete":
                if t.lower().startswith("poste"):
                    f["poste"] = norm(t.split(":", 1)[1]) if ":" in t else t
                elif not f["titre"]:
                    f["titre"] = smart_title(t)
                else:
                    f["sousTitre"] = t
            elif zone == "denrees":
                if not t.startswith("PM :"):
                    f["notes"].append(t)
            elif zone == "materiel":
                if ":" in t and len(t.split(":", 1)[0]) < 25:
                    k, v = t.split(":", 1)
                    f["materiel"].append({"titre": norm(k), "items": [norm(x) for x in v.split(";") if norm(x)]})
                else:
                    if f["materiel"] and f["materiel"][-1]["titre"] == "":
                        f["materiel"][-1]["items"].append(t)
                    else:
                        f["materiel"].append({"titre": "", "items": [t]})
            elif zone == "etapes":
                f["remarques"].append(t)
        elif el.tag == qn("w:tbl"):
            rs = rows(el)
            if not rs:
                continue
            first = rs[0]
            flat0 = [" ".join(c) for c in first]
            # bandeau d'en-tête (logo + texte)
            if zone == "entete" and any("MFR Peyregoux" in x for x in flat0):
                f["_bandeau"] = " ".join(flat0)
                if not f["titre"]:
                    # nouveau modèle : le titre est dans le bandeau
                    for c in first:
                        if len(c) >= 2 and "Fiche technique" in c[0]:
                            f["titre"] = c[1]
                continue
            if flat0 and flat0[0].startswith("Denrées"):
                zone = "denrees"
                section = None
                for r in rs[1:]:
                    vals = [" ".join(c) for c in r]
                    if not any(vals):
                        continue
                    if vals[0].lower().startswith("coût"):
                        continue
                    if len([v for v in vals if v]) == 1 and len(vals) <= 2 or (len(vals) == 1):
                        section = {"titre": vals[0], "items": []}
                        f["denrees"].append(section)
                        continue
                    if section is None:
                        section = {"titre": "", "items": []}
                        f["denrees"].append(section)
                    section["items"].append({"nom": vals[0], "unite": vals[1] if len(vals) > 1 else "",
                                             "qte": vals[2] if len(vals) > 2 else ""})
                continue
            if flat0 and flat0[0] in ("N°", "N° ", "No"):
                zone = "etapes"
                hdr = [x.lower() for x in flat0]
                if len(first) >= 4:
                    f["etapesFormat"] = "progression"
                    for r in rs[1:]:
                        v = [" ".join(c) for c in r]
                        if len(v) < 4 or not any(v):
                            continue
                        f["etapes"].append({"n": v[0], "titre": v[1], "gestes": [v[2]] if v[2] else [],
                                            "vigilance": v[3], "duree": ""})
                else:
                    for r in rs[1:]:
                        if len(r) < 2:
                            continue
                        paras = r[1]
                        f["etapes"].append({"n": " ".join(r[0]), "titre": paras[0] if paras else "",
                                            "gestes": paras[1:], "duree": " ".join(r[2]) if len(r) > 2 else ""})
                continue
            # tableau d'infos (quantités / préparation / cuisson)
            if zone == "entete":
                if len(rs) == 1 and len(first) == 1:
                    f["description"] = " ".join(first[0])
                    continue
                for r in rs:
                    if len(r) >= 4 and all(len(c) <= 2 for c in r):
                        # nouveau modèle : clé, valeur, clé, valeur
                        for i in range(0, len(r) - 1, 2):
                            k, v = " ".join(r[i]), " ".join(r[i + 1])
                            if k:
                                f["infos"].append({"label": k, "valeur": v})
                    else:
                        for c in r:
                            if c:
                                f["infos"].append({"label": c[0], "valeur": " ".join(c[1:])})
                continue
            # encadré "Remarque" ou autre, après les étapes
            for r in rs:
                for c in r:
                    if c:
                        t = " ".join(c)
                        if t.startswith("Remarque"):
                            t = norm(t[len("Remarque"):].lstrip(" :"))
                        f["remarques"].append(t)
    return f


MOIS_NUM = {"janvier": 1, "fevrier": 2, "février": 2, "mars": 3, "avril": 4, "mai": 5, "juin": 6, "juillet": 7,
            "aout": 8, "août": 8, "septembre": 9, "octobre": 10, "novembre": 11, "decembre": 12, "décembre": 12}


def date_tri(folder):
    """'semaine 23 novembre cap 2', 'du 3 au 07 décembre' -> valeur de tri (année scolaire : septembre en premier)."""
    mois_re = "|".join(MOIS_NUM)
    trouves = re.findall(r"(\d{1,2})\s+(?:au\s+\d{1,2}\s+)?(" + mois_re + r")\b", folder.lower())
    if not trouves:
        return 0
    jour, mois = trouves[0]
    return ((MOIS_NUM[mois] - 9) % 12) * 100 + int(jour)


def titre_semaine(folder):
    """'semaine 23 novembre cap 2' -> 'Semaine 23 novembre — CAP 2'"""
    t = re.sub(r"\s+", " ", folder).strip()
    t = re.sub(r"^semain\b", "semaine", t, flags=re.I)  # faute de frappe fréquente
    t = re.sub(r"\b0(\d)\b", r"\1", t)
    t = re.sub(r"\s*\bcap\s*(\d)\b", lambda m: " — CAP " + m.group(1), t, flags=re.I)
    return t[:1].upper() + t[1:]


MOTS_THEMES = [  # testés dans cet ordre ; mots-clés séparés par des virgules
    ("Coquillages et crustacés", "gambas, crevette, moule, huître, huitre, saint-jacques, écrevisse, homard, langoustine, crabe, tourteau"),
    ("Poissons", "poisson, truite, saumon, sole, cabillaud, colin, merlan, lotte, bar , dorade, turbot, fumet, thon"),
    ("Volailles", "poulet, volaille, canard, caneton, pintade, dinde, lapin, lapereau, magret, coq "),
    ("Abats", "foie de veau, rognon, ris de veau, langue de"),
    ("Viandes", "bœuf, boeuf, veau, porc, agneau, steak, entrecôte, entrecote, navarin, blanquette"),
    ("Œufs", "œuf, oeuf, omelette"),
    ("Potages", "potage, soupe, velouté, veloute, consommé, consomme, bisque"),
    ("Desserts", "dessert, bavarois, tarte, gâteau, gateau, crème brûlée, mousse au chocolat, charlotte, entremets, "
                 "sorbet, glace, choux, éclair, eclair, biscuit, génoise, genoise, crêpe, crepe, macaron, tiramisu, "
                 "paris-brest, chantilly, sablé"),
    ("Garnitures d'accompagnement", "pommes de terre, purée, puree, riz , gratin, légumes, legumes, pâtes, pates"),
]


def deviner_theme(fic):
    """Thème d'une nouvelle fiche : d'abord le bandeau (« Fiche technique — Desserts »), sinon des mots-clés."""
    band = fic.get("_bandeau", "")
    for theme in CATS.values():
        if theme.lower() in band.lower():
            return theme
    titre = (fic.get("titre", "") + " " + fic.get("description", "")).lower()
    for theme, mots in MOTS_THEMES:
        if any(m.strip(", ") and m.lstrip() in titre for m in mots.split(",")):
            return theme
    return "Hors-d'œuvre chauds"


def main():
    fiches, used_slugs = [], set()
    schemas_dir = os.path.join(OUT, "schemas")
    media_dir = os.path.join(OUT, "media")
    os.makedirs(schemas_dir, exist_ok=True)
    os.makedirs(media_dir, exist_ok=True)

    def add(path, cat, numero):
        fic = parse(path)
        base = os.path.splitext(os.path.basename(path))[0]
        slug = slugify(fic["titre"] or base)
        while slug in used_slugs:
            slug += "-2"
        used_slugs.add(slug)
        fic.update({"id": slug, "theme": cat, "numero": numero, "fichier": base})
        schema = os.path.join(os.path.dirname(path), base + " - schéma.pdf")
        if os.path.exists(schema):
            shutil.copy(schema, os.path.join(schemas_dir, slug + ".pdf"))
            fic["schema"] = "schemas/" + slug + ".pdf"
        fiches.append(fic)
        return fic

    for folder, cat in CATS.items():
        p = os.path.join(SRC, folder)
        for name in sorted(os.listdir(p)):
            if not name.endswith(".docx"):
                continue
            m = re.match(r"(\d+) - ", name)
            add(os.path.join(p, name), cat, int(m.group(1)) if m else 99)

    # ---------- Fiches des semaines (dossier "fiches techniques données") ----------
    # Chaque sous-dossier = une semaine ou un repas. Une fiche déjà présente dans les thèmes
    # est simplement référencée ; une fiche nouvelle est ajoutée au catalogue.
    by_file = {}
    for f in fiches:
        by_file[f["fichier"]] = f["id"]
        by_file[re.sub(r"_\d+$", "", f["fichier"])] = f["id"]
    semaines = []
    for folder in sorted(os.listdir(DONNEES)):
        sem = os.path.join(DONNEES, folder)
        if not os.path.isdir(sem):
            continue
        ids = []
        names = sorted(os.listdir(sem))
        for name in names:
            base, ext = os.path.splitext(name)
            if ext.lower() != ".docx" or base.lower().startswith("schema"):
                continue
            fid = by_file.get(base) or by_file.get(re.sub(r"_\d+$", "", base))
            if not fid:
                path = os.path.join(sem, name)
                cat = NEW_FORMAT.get(name) or deviner_theme(parse(path))
                fic = add(path, cat, 100)
                fid = by_file[base] = fic["id"]
                pdf = os.path.join(sem, base + ".pdf")
                if os.path.exists(pdf):
                    shutil.copy(pdf, os.path.join(schemas_dir, fid + "-fiche.pdf"))
                    fic["pdf"] = "schemas/" + fid + "-fiche.pdf"
            if fid not in ids:
                ids.append(fid)
        # vidéos : rattachées à la fiche de la semaine dont le titre partage un mot
        for name in names:
            base, ext = os.path.splitext(name)
            if ext.lower() not in (".mp4", ".webm", ".mov"):
                continue
            mots = {m for m in re.split(r"[^a-zà-ÿ]+", base.lower()) if len(m) > 4}
            cible = next((fiche for fiche in fiches if fiche["id"] in ids and
                          any(m.rstrip("s") in fiche["titre"].lower() for m in mots)), None)
            if cible:
                dest = slugify(base) + ext.lower()
                shutil.copy(os.path.join(sem, name), os.path.join(media_dir, dest))
                cible["video"] = {"src": "media/" + dest, "titre": base.replace("_", " ")}
        if ids:
            semaines.append({"titre": titre_semaine(folder), "fiches": ids, "_tri": date_tri(folder)})
    semaines.sort(key=lambda x: x.pop("_tri"), reverse=True)
    for f in fiches:
        f.pop("_bandeau", None)

    data = {"themes": list(CATS.values()), "semaines": semaines, "fiches": fiches}
    with open(os.path.join(OUT, "fiches-data.js"), "w", encoding="utf-8") as fh:
        fh.write("// Fichier généré automatiquement à partir des fiches Word. Ne pas modifier à la main.\n")
        fh.write("window.FICHES_DATA = ")
        json.dump(data, fh, ensure_ascii=False, separators=(",", ":"))
        fh.write(";\n")
    print(len(fiches), "fiches")


main()
