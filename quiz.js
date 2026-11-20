// ============================================================
// QUESTIONS DU QUIZ
// Pour ajouter une question, copie un bloc { ... } et modifie-le.
// "bonne" = numéro de la bonne réponse (0 = la première).
// ============================================================
const QUESTIONS = [
  {
    question: "À quelle température doit-on conserver la viande fraîche ?",
    choix: ["Entre 0 °C et +3 °C", "Entre +6 °C et +8 °C", "−18 °C", "+10 °C"],
    bonne: 0,
    explication: "Les produits très périssables se conservent entre 0 °C et +3 °C."
  },
  {
    question: "En combien de temps doit-on refroidir un plat de +63 °C à +10 °C ?",
    choix: ["Moins de 6 h", "Moins de 2 h", "Moins de 4 h", "Une nuit au frigo"],
    bonne: 1,
    explication: "Le refroidissement rapide se fait en moins de 2 h, en cellule de refroidissement."
  },
  {
    question: "Que signifie la « marche en avant » ?",
    choix: [
      "Cuisiner le plus vite possible",
      "Les produits vont du sale vers le propre sans retour en arrière",
      "Toujours servir le client de gauche en premier",
      "Ranger les produits par date"
    ],
    bonne: 1,
    explication: "On évite que le propre et le sale se croisent pour éviter les contaminations."
  },
  {
    question: "Lequel ne fait PAS partie des 5 M ?",
    choix: ["Matière", "Milieu", "Menu", "Méthode"],
    bonne: 2,
    explication: "Les 5 M : Matière, Main-d'œuvre, Milieu, Matériel, Méthode."
  },
  {
    question: "Une brunoise, c'est…",
    choix: ["Des bâtonnets très fins", "De très petits dés de 1 à 2 mm", "De gros dés irréguliers", "Des lanières de feuilles"],
    bonne: 1,
    explication: "Bâtonnets fins = julienne ; gros dés = mirepoix ; lanières de feuilles = chiffonnade."
  },
  {
    question: "Quelle est la base d'une sauce béchamel ?",
    choix: ["Roux brun + fond brun", "Roux blond + fond blanc", "Roux blanc + lait", "Jaunes d'œufs + beurre"],
    bonne: 2,
    explication: "Roux blond + fond blanc = velouté ; roux brun + fond brun = espagnole."
  },
  {
    question: "Dans un roux, on met le beurre et la farine…",
    choix: ["À poids égal", "Deux fois plus de farine", "Deux fois plus de beurre", "Sans beurre"],
    bonne: 0,
    explication: "Un roux = autant de beurre que de farine, en poids."
  },
  {
    question: "La mayonnaise est…",
    choix: ["Une émulsion chaude", "Une émulsion froide", "Une sauce liée au roux", "Une réduction"],
    bonne: 1,
    explication: "La hollandaise est une émulsion chaude ; la mayonnaise une émulsion froide."
  },
  {
    question: "Pour la pâte à choux, que fait-on juste après avoir ajouté la farine ?",
    choix: ["On ajoute tout de suite les œufs", "On dessèche la panade sur le feu", "On met au frais 1 h", "On ajoute de la levure"],
    bonne: 1,
    explication: "On dessèche la panade 1 à 2 min sur le feu pour retirer l'humidité, puis on ajoute les œufs."
  },
  {
    question: "Un fond brun se distingue d'un fond blanc parce que…",
    choix: [
      "On ajoute du chocolat",
      "Les os et la garniture sont colorés avant le mouillage",
      "Il cuit moins longtemps",
      "On n'utilise pas d'os"
    ],
    bonne: 1,
    explication: "Pour un fond brun, on fait colorer les os et la garniture aromatique au four."
  }
];

// ============================================================
// Fonctionnement du quiz (pas besoin de modifier en dessous)
// ============================================================
const box = document.getElementById("quiz-box");
const scoreEl = document.getElementById("score");
let score = 0, repondues = 0;

function afficherQuiz() {
  score = 0; repondues = 0;
  box.innerHTML = "";
  scoreEl.textContent = `Score : 0 / ${QUESTIONS.length}`;

  QUESTIONS.forEach((q, i) => {
    const card = document.createElement("div");
    card.className = "card question";

    const titre = document.createElement("p");
    titre.textContent = `${i + 1}. ${q.question}`;
    card.appendChild(titre);

    const choices = document.createElement("div");
    choices.className = "choices";

    q.choix.forEach((texte, j) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = texte;
      btn.addEventListener("click", () => {
        const boutons = choices.querySelectorAll("button");
        boutons.forEach(b => (b.disabled = true));
        boutons[q.bonne].classList.add("ok");
        if (j === q.bonne) score++;
        else btn.classList.add("ko");
        repondues++;

        const exp = document.createElement("p");
        exp.className = "explain";
        exp.textContent = (j === q.bonne ? "✔ Bonne réponse. " : "✘ Raté. ") + q.explication;
        card.appendChild(exp);

        scoreEl.textContent = repondues === QUESTIONS.length
          ? `Terminé ! Score : ${score} / ${QUESTIONS.length}`
          : `Score : ${score} / ${QUESTIONS.length}`;
      });
      choices.appendChild(btn);
    });

    card.appendChild(choices);
    box.appendChild(card);
  });
}

document.getElementById("restart").addEventListener("click", () => {
  afficherQuiz();
  document.getElementById("quiz").scrollIntoView();
});

afficherQuiz();
