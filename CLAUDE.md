# Mini-site CAP Cuisine — MFR de Peyregoux

Site statique (HTML/CSS/JS sans dépendance) publié avec GitHub Pages depuis la branche `main`, dossier racine.
Public : apprentis de CAP Cuisine. Langue : français, tutoiement pour les élèves. Le formateur n'est pas développeur :
lui répondre simplement, sans jargon.

## Structure

- `index.html` : accueil + fiches de révision.
- `quiz.html` + `quiz-app.js` : quiz. Questions dans `quizzes-data.js` (un bloc par quiz, `bonne` = index de la bonne réponse).
- `fiches.html` + `fiches.js` : fiches techniques, **protégées par un code d'accès** (code de classe donné par le formateur).
  Tout le contenu des fiches est chiffré dans `protege/` (AES-GCM, clé dérivée du code, voir `outils/chiffrer.py`) ;
  le navigateur déchiffre après saisie du code.
- Fichiers EN CLAIR, jamais commités (`.gitignore`) : `fiches-data.js`, `schemas/`, `media/`, `sources/` (fiches Word).
- `outils/convertir_fiches.py` : convertit `sources/` en `fiches-data.js`, `schemas/` (PDF) et `media/` (vidéos).
- `outils/liens_videos.json` : liens vers des vidéos sur Internet, par fiche (id → liste {titre, source, url}),
  fusionnés par le convertisseur. **Consigne du formateur : toujours lui DEMANDER AVANT d'ajouter des liens vidéo.**
  Lui proposer la liste (titre, chaîne, lien) et n'ajouter que les vidéos qu'il valide. Ne jamais en ajouter de
  sa propre initiative, même lors de la mise à jour hebdomadaire. Sources acceptées : **Afpa** et **Chefs en ligne**
  (chaînes YouTube « Afpa » et « Chefsenligne ») uniquement ; vérifier la chaîne de chaque vidéo avant de la proposer.
- `outils/chiffrer.py` : `publier CODE` chiffre ces fichiers dans `protege/` (dont l'archive `sources.tar.gz.enc`) ;
  `extraire CODE` restaure `sources/` depuis l'archive chiffrée. Chiffrement déterministe : un fichier inchangé
  garde exactement le même `.enc` (pas de gonflement du dépôt).

**Le code d'accès n'est écrit nulle part dans le dépôt : le demander au formateur à chaque session.** Ne jamais
l'inscrire dans un fichier, un commit ou un message de commit.

## Mise à jour hebdomadaire des fiches (demande récurrente)

Chaque semaine environ, le formateur ajoute un dossier de semaine (ex. `semaine 30 novembre cap 1`) contenant les
fiches Word des menus, parfois des PDF et une vidéo. Sur son PC, c'est dans
`OneDrive - MFR\Bureau\cours\Fiches techniques CAP Cuisine\fiches techniques données`, qu'une session cloud ne voit pas.
Il dépose une copie du dossier de la semaine sur son Google Drive, dans le dossier
`Fiches techniques CAP Cuisine/fiches techniques données`.

0. Demander le code d'accès au formateur, puis `python3 -I outils/chiffrer.py extraire CODE` (restaure `sources/`).
1. Trouver le nouveau dossier avec le connecteur Google Drive (`search_files`). Depuis novembre, il est synchronisé
   automatiquement depuis le PC dans « Ordinateurs › Mon ordinateur portable › … › fiches techniques données ».
   Si une fiche de la semaine porte le même nom qu'une fiche du catalogue, inutile de la télécharger : la copier
   depuis `sources/<thème>/` (vérifier que la taille est la même que sur le Drive).
2. Télécharger chaque fichier dans `sources/fiches techniques données/<nom du dossier>/` avec
   `curl -sSL "https://drive.usercontent.google.com/download?id=<ID>&export=download&confirm=t"`
   (marche si le dossier Drive est partagé « Tous les utilisateurs disposant du lien » ; sinon, demander au formateur
   de le faire — ne pas tenter de changer le partage soi-même). Vérifier avec `file` que c'est bien un .docx et pas une page HTML.
3. Régénérer : `python3 -I outils/convertir_fiches.py sources <dossier temporaire>`, puis copier `fiches-data.js`,
   `schemas/` et `media/` à la racine.
   - Fiche déjà présente dans un thème (même nom de fichier) : simplement référencée dans la semaine.
   - Nouvelle fiche : ajoutée au catalogue ; thème deviné (bandeau « Fiche technique — <Thème> », sinon mots-clés
     `MOTS_THEMES`). Si le thème deviné est faux, l'ajouter dans `NEW_FORMAT` (nom de fichier → thème).
   - Les semaines sont triées de la plus récente à la plus ancienne (année scolaire, septembre en premier).
4. Chiffrer : `python3 -I outils/chiffrer.py publier CODE`.
5. Tester avec Playwright (vue téléphone) **via un serveur local** (`python3 -m http.server`, `fetch` ne marche pas en
   `file://`), sur une copie ne contenant que les fichiers suivis par git : saisir le code, la nouvelle semaine
   s'affiche, chaque nouvelle fiche s'ouvre sans erreur JS.
6. Lancer `python3 -I outils/maj_version.py` (numéro de version sur les .css/.js, sinon les téléphones gardent
   l'ancienne version en cache), puis commit et push sur `main` ; GitHub Pages republie en 1 à 2 minutes. Mettre à jour le nombre de fiches dans
   `index.html` si besoin (« 197 fiches »).

## Points d'attention

- Après toute modification du site : `python3 -I outils/maj_version.py` avant le commit (cache des téléphones).
- Commits : utiliser la configuration git du dépôt (adresse anonyme GitHub `users.noreply.github.com`), **jamais** l'adresse Gmail du formateur.
- Le site est masqué des moteurs de recherche (`<meta name="robots" content="noindex, nofollow">` sur chaque page) : le garder sur toute nouvelle page.

- Les fiches sont adaptées d'un livre : elles ne doivent jamais être publiées en clair (seulement dans `protege/`).
  Vérifier avec `git status` qu'aucun fichier de `.gitignore` n'est ajouté par erreur.
- `localStorage` sert seulement au meilleur score des quiz (toujours dans un try/catch).
- Ne jamais inclure d'informations personnelles dans des requêtes vers des services extérieurs.
