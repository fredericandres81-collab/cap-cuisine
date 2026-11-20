# Mini-site CAP Cuisine – MFR de Peyregoux

Fiches de révision, quiz interactif et fiches techniques pour les apprentis.

## Modifier le contenu

- **Fiches de révision** : dans `index.html` (chaque fiche est un bloc `<details>`).
- **Fiches techniques** (197) : page `fiches.html`. Les données sont dans `fiches-data.js`, générées automatiquement depuis les fiches Word avec `outils/convertir_fiches.py` (schémas PDF dans `schemas/`). Pour mettre à jour : demander à Claude de relancer la conversion avec le nouveau dossier.
- **Questions du quiz** : dans `quiz.js`, tableau `QUESTIONS` en haut du fichier. `bonne` = numéro de la bonne réponse (0 = la première).
- **Couleurs** : dans `style.css`, variables en haut du fichier (`--accent` = couleur principale).

## Mise en ligne

Le site est publié avec GitHub Pages (Settings → Pages → branche `main`, dossier `/root`).
