# Mini-site CAP Cuisine — MFR de Peyregoux

Site statique (HTML/CSS/JS sans dépendance) publié avec GitHub Pages depuis la branche `main`, dossier racine.
Public : apprentis de CAP Cuisine. Langue : français, tutoiement pour les élèves. Le formateur n'est pas développeur :
lui répondre simplement, sans jargon.

## Structure

- `index.html` : accueil + fiches de révision.
- `quiz.html` + `quiz-app.js` : quiz. Questions dans `quizzes-data.js` (un bloc par quiz, `bonne` = index de la bonne réponse).
- `fiches.html` + `fiches.js` : fiches techniques. Données dans `fiches-data.js` — **fichier généré, ne pas modifier à la main**.
- `sources/` : fiches Word d'origine (catalogue par thème + `fiches techniques données/<semaine>/`).
- `outils/convertir_fiches.py` : convertit `sources/` en `fiches-data.js`, `schemas/` (PDF) et `media/` (vidéos).

## Mise à jour hebdomadaire des fiches (demande récurrente)

Chaque semaine environ, le formateur ajoute un dossier de semaine (ex. `semaine 30 novembre cap 1`) contenant les
fiches Word des menus, parfois des PDF et une vidéo. Sur son PC, c'est dans
`OneDrive - MFR\Bureau\cours\Fiches techniques CAP Cuisine\fiches techniques données`, qu'une session cloud ne voit pas.
Il dépose une copie du dossier de la semaine sur son Google Drive, dans le dossier
`Fiches techniques CAP Cuisine/fiches techniques données`.

1. Trouver le nouveau dossier avec le connecteur Google Drive (`search_files`).
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
4. Tester avec Playwright (vue téléphone) : la nouvelle semaine s'affiche, chaque nouvelle fiche s'ouvre sans erreur JS.
5. Commit puis push sur `main` ; GitHub Pages republie en 1 à 2 minutes. Mettre à jour le nombre de fiches dans
   `index.html` si besoin (« 197 fiches »).

## Points d'attention

- Les fiches sont adaptées d'un livre ; le formateur a choisi de les publier en public, en connaissance de cause.
- `localStorage` sert seulement au meilleur score des quiz (toujours dans un try/catch).
- Ne jamais inclure d'informations personnelles dans des requêtes vers des services extérieurs.
