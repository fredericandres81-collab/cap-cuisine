"""Chiffrement des fiches techniques (protégées par le code d'accès de la classe).

Usage :
  python3 -I outils/chiffrer.py publier  CODE   # chiffre fiches-data.js, schemas/, media/ et archive sources/
  python3 -I outils/chiffrer.py extraire CODE   # déchiffre l'archive des fiches Word dans sources/

Les fichiers en clair (fiches-data.js, schemas/*.pdf, media/*, sources/) ne doivent JAMAIS être commités :
ils sont listés dans .gitignore. Seuls les fichiers .enc et protege/cle.json sont publiés.

Format : clé = PBKDF2-SHA256(code, sel, ITER) ; chaque fichier .enc = IV (12 octets) + AES-256-GCM(données).
Le navigateur (fiches.js) refait le même calcul avec WebCrypto.
"""
import base64, io, json, os, sys, tarfile, glob, shutil
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROT = os.path.join(RACINE, "protege")
CLE = os.path.join(PROT, "cle.json")
ITER = 600_000
VERIF = b"capcuisine-ok"


def cle(code, sel):
    return PBKDF2HMAC(algorithm=hashes.SHA256(), length=32, salt=sel, iterations=ITER).derive(code.encode("utf-8"))


def chiffrer(k, data):
    iv = os.urandom(12)
    return iv + AESGCM(k).encrypt(iv, data, None)


def dechiffrer(k, blob):
    return AESGCM(k).decrypt(blob[:12], blob[12:], None)


def charger_cle(code, creer=False):
    if os.path.exists(CLE):
        meta = json.load(open(CLE))
        sel = base64.b64decode(meta["sel"])
        k = cle(code, sel)
        try:
            dechiffrer(k, base64.b64decode(meta["verif"]))
        except Exception:
            if not creer:
                sys.exit("Code incorrect.")
            meta = None
        else:
            return k
    if not creer:
        sys.exit("Aucune clé : lancer d'abord 'publier'.")
    # nouveau code (ou premier lancement) : nouveau sel
    os.makedirs(PROT, exist_ok=True)
    sel = os.urandom(16)
    k = cle(code, sel)
    json.dump({"sel": base64.b64encode(sel).decode(), "iter": ITER,
               "verif": base64.b64encode(chiffrer(k, VERIF)).decode()}, open(CLE, "w"))
    return k


def publier(code):
    k = charger_cle(code, creer=True)
    # 1. données des fiches
    src = os.path.join(RACINE, "fiches-data.js")
    txt = open(src, encoding="utf-8").read()
    json_txt = txt[txt.index("=") + 1:].strip().rstrip(";")
    json.loads(json_txt)  # vérification
    open(os.path.join(PROT, "fiches-data.enc"), "wb").write(chiffrer(k, json_txt.encode("utf-8")))
    # 2. schémas PDF et vidéos
    for dossier in ("schemas", "media"):
        dst = os.path.join(PROT, dossier)
        shutil.rmtree(dst, ignore_errors=True)
        os.makedirs(dst)
        for f in sorted(glob.glob(os.path.join(RACINE, dossier, "*"))):
            open(os.path.join(dst, os.path.basename(f) + ".enc"), "wb").write(chiffrer(k, open(f, "rb").read()))
    # 3. archive des fiches Word d'origine
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        tar.add(os.path.join(RACINE, "sources"), arcname="sources")
    open(os.path.join(PROT, "sources.tar.gz.enc"), "wb").write(chiffrer(k, buf.getvalue()))
    n = len(glob.glob(os.path.join(PROT, "*", "*.enc")))
    print(f"chiffré : fiches-data.enc, {n} schémas/vidéos, sources.tar.gz.enc")


def extraire(code):
    k = charger_cle(code)
    data = dechiffrer(k, open(os.path.join(PROT, "sources.tar.gz.enc"), "rb").read())
    with tarfile.open(fileobj=io.BytesIO(data), mode="r:gz") as tar:
        tar.extractall(RACINE, filter="data")
    print("fiches Word extraites dans sources/")


if __name__ == "__main__":
    if len(sys.argv) != 3 or sys.argv[1] not in ("publier", "extraire"):
        sys.exit(__doc__)
    {"publier": publier, "extraire": extraire}[sys.argv[1]](sys.argv[2])
