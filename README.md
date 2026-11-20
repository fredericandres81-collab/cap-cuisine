# Mini-site CAP Cuisine – MFR de Peyregoux

Fiches de révision, quiz interactif et fiches techniques pour les apprentis.

## Modifier le contenu

- **Fiches de révision** : dans `index.html` (chaque fiche est un bloc `<details>`).
- **Fiches techniques** (197) : page `fiches.html`, protégée par un code d'accès. Le contenu est chiffré dans `protege/` ; il est généré depuis les fiches Word avec `outils/convertir_fiches.py` puis `outils/chiffrer.py`. Pour mettre à jour : demander à Claude, en lui donnant le code.
- **Quiz** (page `quiz.html`) : questions dans `quizzes-data.js`, un bloc par quiz. `bonne` = numéro de la bonne réponse (0 = la première) ; l'ordre des réponses est mélangé à l'affichage.
- **Couleurs** : dans `style.css`, variables en haut du fichier (`--accent` = couleur principale).

## Mise en ligne

Le site est publié avec GitHub Pages (Settings → Pages → branche `main`, dossier `/root`).

Les fiches Word d'origine sont dans une archive chiffrée (`protege/sources.tar.gz.enc`). La procédure de mise à jour hebdomadaire est décrite dans `CLAUDE.md`.
