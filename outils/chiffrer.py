"""Chiffrement des fiches techniques (protégées par le code d'accès de la classe).

Usage :
  python3 -I outils/chiffrer.py publier  CODE   # chiffre fiches-data.js, schemas/, media/ et archive sources/
  python3 -I outils/chiffrer.py extraire CODE   # déchiffre l'archive des fiches Word dans sources/

Les fichiers en clair (fiches-data.js, schemas/*.pdf, media/*, sources/) ne doivent JAMAIS être commités :
ils sont listés dans .gitignore. Seuls les fichiers .enc et protege/cle.json sont publiés.

Format : clé = PBKDF2-SHA256(code, sel, ITER) ; chaque fichier .enc = IV (12 octets) + AES-256-GCM(données).
Le navigateur (fiches.js) refait le même calcul avec WebCrypto.
"""
import base64, gzip, hashlib, hmac, io, json, os, sys, tarfile, glob, shutil
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
    # IV déterministe (dérivé du contenu) : un fichier inchangé donne exactement le même .enc,
    # donc git ne le renvoie pas à chaque publication. Seuls des contenus identiques partagent un IV.
    iv = hmac.new(k, data, hashlib.sha256).digest()[:12]
    return iv + AESGCM(k).encrypt(iv, data, None)


def ecrire_si_change(chemin, contenu):
    if os.path.exists(chemin) and open(chemin, "rb").read() == contenu:
        return
    open(chemin, "wb").write(contenu)


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
    ecrire_si_change(os.path.join(PROT, "fiches-data.enc"), chiffrer(k, json_txt.encode("utf-8")))
    # 2. schémas PDF et vidéos
    for dossier in ("schemas", "media"):
        dst = os.path.join(PROT, dossier)
        os.makedirs(dst, exist_ok=True)
        attendus = set()
        for f in sorted(glob.glob(os.path.join(RACINE, dossier, "*"))):
            nom = os.path.basename(f) + ".enc"
            attendus.add(nom)
            ecrire_si_change(os.path.join(dst, nom), chiffrer(k, open(f, "rb").read()))
        for vieux in set(os.listdir(dst)) - attendus:
            os.remove(os.path.join(dst, vieux))
    # 3. archive des fiches Word d'origine
    # archive reproductible (ordre trié, dates et propriétaires neutres) : identique si rien n'a changé
    buf = io.BytesIO()
    with gzip.GzipFile(fileobj=buf, mode="wb", mtime=0) as gz, tarfile.open(fileobj=gz, mode="w") as tar:
        base = os.path.join(RACINE, "sources")
        for dossier, sous, fichiers in os.walk(base):
            sous.sort()
            for nom in sorted(fichiers):
                chemin = os.path.join(dossier, nom)
                info = tar.gettarinfo(chemin, arcname=os.path.relpath(chemin, RACINE))
                info.mtime, info.uid, info.gid, info.uname, info.gname, info.mode = 0, 0, 0, "", "", 0o644
                with open(chemin, "rb") as fh:
                    tar.addfile(info, fh)
    ecrire_si_change(os.path.join(PROT, "sources.tar.gz.enc"), chiffrer(k, buf.getvalue()))
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
