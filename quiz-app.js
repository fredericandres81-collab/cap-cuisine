// Fonctionnement des quiz (les questions sont dans quizzes-data.js)
(function () {
  const QUIZZES = window.QUIZZES;
  const liste = document.getElementById("liste-quiz");
  const jeu = document.getElementById("jeu");

  const el = (tag, attrs = {}, ...children) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") e.className = v;
      else if (k === "text") e.textContent = v;
      else e.setAttribute(k, v);
    }
    for (const c of children) if (c != null) e.append(c);
    return e;
  };

  // Meilleurs scores, gardés sur l'appareil de l'élève (facultatif)
  const lireScores = () => { try { return JSON.parse(localStorage.getItem("quiz-scores") || "{}"); } catch (e) { return {}; } };
  const garderScore = (id, s) => {
    try { const all = lireScores(); if (!(id in all) || s > all[id]) { all[id] = s; localStorage.setItem("quiz-scores", JSON.stringify(all)); } } catch (e) { /* stockage indisponible */ }
  };

  const melanger = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // ---------- Liste des quiz ----------
  function afficherListe() {
    const scores = lireScores();
    liste.innerHTML = "";
    const matieres = [...new Set(QUIZZES.map(q => q.matiere))];
    matieres.forEach(m => {
      liste.append(el("h2", { class: "theme-titre", text: m }));
      const g = el("div", { class: "grille" });
      QUIZZES.filter(q => q.matiere === m).forEach(q => {
        const best = scores[q.id];
        g.append(el("a", { class: "fiche-item quiz-item", href: "#" + q.id },
          el("span", { class: "fiche-item-titre", text: q.titre }),
          el("span", { class: "fiche-item-meta", text: q.questions.length + " questions" + (best != null ? " · meilleur score : " + best + "/" + q.questions.length : "") })));
      });
      liste.append(g);
    });
  }

  // ---------- Déroulement d'un quiz ----------
  function lancer(quiz) {
    const questions = melanger(quiz.questions).map(q => {
      const ordre = melanger(q.choix.map((c, i) => i));
      return { ...q, ordre };
    });
    let i = 0, score = 0;
    const erreurs = [];

    function question() {
      const q = questions[i];
      jeu.innerHTML = "";
      const barre = el("div", { class: "progression", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": String(questions.length), "aria-valuenow": String(i) },
        el("span", { style: "width:" + (i / questions.length * 100) + "%" }));
      const tete = el("div", { class: "quiz-tete" },
        el("a", { href: "#", class: "retour", text: "← Tous les quiz" }),
        el("span", { class: "muted", text: "Question " + (i + 1) + " / " + questions.length + " · Score : " + score }));
      const carte = el("div", { class: "card question" }, el("p", { class: "eyebrow-dark", text: quiz.titre }), el("p", { class: "q-texte", text: q.q }));
      const choix = el("div", { class: "choices" });
      const suivant = el("button", { type: "button", class: "btn suivant", hidden: "" }, i + 1 < questions.length ? "Question suivante →" : "Voir mon résultat");
      q.ordre.forEach(idx => {
        const b = el("button", { type: "button", text: q.choix[idx] });
        b.addEventListener("click", () => {
          const boutons = choix.querySelectorAll("button");
          boutons.forEach(x => (x.disabled = true));
          boutons[q.ordre.indexOf(q.bonne)].classList.add("ok");
          const juste = idx === q.bonne;
          if (juste) score++; else { b.classList.add("ko"); erreurs.push(q); }
          carte.append(el("p", { class: "explain " + (juste ? "explain-ok" : "explain-ko"), text: (juste ? "✔ Bonne réponse. " : "✘ Raté. ") + q.explication }));
          suivant.hidden = false;
          suivant.focus();
        });
        choix.append(b);
      });
      suivant.addEventListener("click", () => { i++; i < questions.length ? question() : resultat(); });
      carte.append(choix);
      jeu.append(tete, barre, carte, suivant);
      window.scrollTo(0, 0);
    }

    function resultat() {
      garderScore(quiz.id, score);
      const n = questions.length;
      const msg = score === n ? "Parfait, bravo !" : score >= n * 0.8 ? "Très bien !" : score >= n * 0.5 ? "Pas mal, encore un effort." : "À retravailler : relis ta fiche de révision.";
      jeu.innerHTML = "";
      const rejouer = el("button", { type: "button", class: "btn", text: "Recommencer" });
      rejouer.addEventListener("click", () => lancer(quiz));
      jeu.append(
        el("a", { href: "#", class: "retour", text: "← Tous les quiz" }),
        el("div", { class: "card resultat" },
          el("p", { class: "eyebrow-dark", text: quiz.titre }),
          el("p", { class: "score-final", text: score + " / " + n }),
          el("p", { class: "lead-dark", text: msg }),
          el("div", { class: "actions" }, rejouer, el("a", { class: "btn btn-light", href: "#", text: "Choisir un autre quiz" }))));
      if (erreurs.length) {
        jeu.append(el("h2", { class: "theme-titre", text: "À revoir" }));
        erreurs.forEach(q => jeu.append(el("div", { class: "card" },
          el("p", { class: "q-texte", text: q.q }),
          el("p", { class: "bonne-rep", text: "Bonne réponse : " + q.choix[q.bonne] }),
          el("p", { class: "explain", text: q.explication }))));
      }
      window.scrollTo(0, 0);
    }

    question();
  }

  function router() {
    const quiz = QUIZZES.find(q => q.id === decodeURIComponent(location.hash.slice(1)));
    liste.hidden = !!quiz;
    jeu.hidden = !quiz;
    document.body.classList.toggle("vue-fiche", !!quiz);
    if (quiz) { document.title = quiz.titre + " – Quiz CAP Cuisine"; lancer(quiz); }
    else { document.title = "Quiz – CAP Cuisine"; afficherListe(); }
  }

  window.addEventListener("hashchange", router);
  router();
})();
