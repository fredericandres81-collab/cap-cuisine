"""Ajoute un numéro de version aux fichiers .css et .js dans les pages HTML (ex. style.css?v=202611201310).
À lancer avant chaque publication : les téléphones téléchargent alors la nouvelle version au lieu de garder l'ancienne."""
import re, time, glob, os
v = time.strftime("%Y%m%d%H%M")
racine = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
for page in glob.glob(os.path.join(racine, "*.html")):
    s = open(page, encoding="utf-8").read()
    s2 = re.sub(r'((?:href|src)="(?!https?:)[^"?]+\.(?:css|js))(?:\?v=\d+)?"', r'\1?v=' + v + '"', s)
    if s2 != s:
        open(page, "w", encoding="utf-8").write(s2)
        print("version", v, "→", os.path.basename(page))
