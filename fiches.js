// Affichage des fiches techniques.
// Les données sont chiffrées (protege/*.enc) : elles ne sont lisibles qu'avec le code d'accès de la classe.
(function () {
  // ---------- Déchiffrement (même format que outils/chiffrer.py) ----------
  const b64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
  let CLE = null;

  async function deriverCle(code, meta) {
    const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(code), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey({ name: "PBKDF2", salt: b64(meta.sel), iterations: meta.iter, hash: "SHA-256" },
      base, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
  }
  const dechiffrer = (cle, buf) => crypto.subtle.decrypt({ name: "AES-GCM", iv: buf.slice(0, 12) }, cle, buf.slice(12));
  async function lireChiffre(url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error("Fichier introuvable : " + url);
    return dechiffrer(CLE, new Uint8Array(await r.arrayBuffer()));
  }
  async function blobChiffre(url, type) {
    return URL.createObjectURL(new Blob([await lireChiffre("protege/" + url + ".enc")], { type }));
  }
  // Déchiffre un PDF et le donne au téléphone (téléchargement, puis ouverture avec son lecteur PDF)
  async function ouvrirPdf(url, nom, bouton) {
    const texte = bouton.textContent;
    bouton.disabled = true; bouton.textContent = "⏳ Préparation…";
    try {
      const u = await blobChiffre(url, "application/pdf");
      const a = document.createElement("a");
      a.href = u; a.download = nom.replace(/[\\/:*?"<>|]/g, "-") + ".pdf";
      document.body.append(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(u), 60000);
    } catch (e) { alert("Impossible d'ouvrir le PDF."); }
    bouton.disabled = false; bouton.textContent = texte;
  }

  const memo = {
    lire() { try { return localStorage.getItem("code-fiches"); } catch (e) { return null; } },
    garder(c) { try { localStorage.setItem("code-fiches", c); } catch (e) { /* stockage indisponible */ } },
    oublier() { try { localStorage.removeItem("code-fiches"); } catch (e) { /* */ } }
  };

  async function essayerCode(code) {
    const meta = await (await fetch("protege/cle.json", { cache: "no-store" })).json();
    const cle = await deriverCle(code.trim().toLowerCase(), meta);
    await dechiffrer(cle, b64(meta.verif)); // lève une erreur si le code est faux
    CLE = cle;
    const json = new TextDecoder().decode(await lireChiffre("protege/fiches-data.enc"));
    return JSON.parse(json);
  }

  const verrou = document.getElementById("verrou");
  const formCode = document.getElementById("form-code");
  const msgCode = document.getElementById("msg-code");

  async function ouvrir(code, depuisMemoire) {
    msgCode.textContent = "Vérification…";
    try {
      const data = await essayerCode(code);
      memo.garder(code.trim().toLowerCase());
      verrou.hidden = true;
      demarrer(data);
    } catch (e) {
      if (depuisMemoire) { memo.oublier(); msgCode.textContent = ""; }
      else msgCode.textContent = "Code incorrect. Demande-le à ton formateur.";
      verrou.hidden = false;
      document.getElementById("code").focus();
    }
  }
  formCode.addEventListener("submit", e => { e.preventDefault(); ouvrir(document.getElementById("code").value, false); });
  const enMemoire = memo.lire();
  if (enMemoire) ouvrir(enMemoire, true); else verrou.hidden = false;

  function demarrer(DATA) {
  const byId = Object.fromEntries(DATA.fiches.map(f => [f.id, f]));
  const $ = sel => document.querySelector(sel);
  const liste = $("#liste"), vue = $("#fiche");
  let themeActif = "Tous";

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

  const sansAccents = s => (s || "").normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/œ/gi, "oe").toLowerCase();

  // Texte cherchable : titre, thème, description, denrées
  const index = DATA.fiches.map(f => ({
    f,
    titre: sansAccents(f.titre + " " + f.sousTitre),
    tout: sansAccents([f.titre, f.sousTitre, f.theme, f.description,
      ...f.denrees.flatMap(s => [s.titre, ...s.items.map(i => i.nom)])].join(" "))
  }));

  // ---------- Liste ----------
  function construireFiltres() {
    const box = $("#themes");
    ["Tous", ...DATA.themes].forEach(t => {
      const n = t === "Tous" ? DATA.fiches.length : DATA.fiches.filter(f => f.theme === t).length;
      const b = el("button", { type: "button", class: "chip", "aria-pressed": String(t === themeActif) },
        t, el("span", { class: "chip-n", text: String(n) }));
      b.addEventListener("click", () => {
        themeActif = t;
        box.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", String(c === b)));
        afficherListe();
      });
      box.append(b);
    });

    const sem = $("#semaines");
    DATA.semaines.filter(s => s.fiches.length).forEach(s => {
      const card = el("div", { class: "card semaine" }, el("h2", { class: "h-small", text: "📌 " + s.titre }));
      const ul = el("ul", { class: "liens" });
      s.fiches.forEach(id => ul.append(el("li", {}, el("a", { href: "#" + id, text: byId[id].titre }))));
      card.append(ul);
      sem.append(card);
    });
  }

  function carteFiche(f) {
    const quand = f.infos.find(i => /^pr[ée]paration|mise en place/i.test(i.label));
    return el("a", { class: "fiche-item", href: "#" + f.id },
      el("span", { class: "fiche-item-titre", text: f.titre }),
      el("span", { class: "fiche-item-meta", text: [f.sousTitre || f.theme, quand && quand.valeur].filter(Boolean).join(" · ") })
    );
  }

  function afficherListe() {
    const q = sansAccents($("#q").value.trim());
    const mots = q.split(/\s+/).filter(Boolean);
    const dansTheme = index.filter(x => themeActif === "Tous" || x.f.theme === themeActif);
    // D'abord l'expression exacte ("beurre blanc"), sinon tous les mots séparément
    let res = mots.length > 1 ? dansTheme.filter(x => x.tout.includes(q)) : [];
    if (!res.length) res = dansTheme.filter(x => mots.every(m => x.tout.includes(m)));
    if (mots.length) {
      // les titres qui correspondent passent devant
      res.sort((a, b) => (mots.every(m => b.titre.includes(m)) - mots.every(m => a.titre.includes(m))));
    }
    $("#semaines").hidden = !!mots.length || themeActif !== "Tous";
    $("#compte").textContent = res.length + (res.length > 1 ? " fiches" : " fiche");
    const out = $("#resultats");
    out.innerHTML = "";
    if (mots.length) {
      const g = el("div", { class: "grille" });
      res.forEach(x => g.append(carteFiche(x.f)));
      out.append(g);
      return;
    }
    const themes = themeActif === "Tous" ? DATA.themes : [themeActif];
    themes.forEach(t => {
      const items = res.filter(x => x.f.theme === t);
      if (!items.length) return;
      out.append(el("h2", { class: "theme-titre", text: t }));
      const g = el("div", { class: "grille" });
      items.forEach(x => g.append(carteFiche(x.f)));
      out.append(g);
    });
  }

  // ---------- Quantités ----------
  const FRACTIONS = { "¼": 0.25, "½": 0.5, "¾": 0.75, "⅓": 1 / 3, "⅔": 2 / 3 };
  function lireNombre(q) {
    const s = (q || "").trim();
    if (FRACTIONS[s] != null) return { v: FRACTIONS[s], dec: 2, fraction: true };
    let m = s.match(/^(\d+)\/(\d+)$/);
    if (m) return { v: +m[1] / +m[2], dec: 2, fraction: true };
    m = s.match(/^\d+(?:[.,](\d+))?$/);
    if (m) return { v: parseFloat(s.replace(",", ".")), dec: m[1] ? m[1].length : 0 };
    return null;
  }
  function ecrireNombre(v, dec, entier) {
    if (entier) {
      const r = Math.round(v * 2) / 2; // pièces : à la demi-unité près
      return String(r).replace(".", ",");
    }
    return v.toFixed(Math.max(dec, v < 0.01 ? 3 : dec)).replace(".", ",");
  }
  function adapter(qte, unite, ratio) {
    if (ratio === 1) return qte;
    const n = lireNombre(qte);
    if (!n) return qte;
    // Nombre entier (œufs, pièces…) : arrondi à la demi-unité ; kg et litres : décimales
    const entier = !n.fraction && n.dec === 0 && !/kg|^l$|litre/i.test(unite || "");
    return ecrireNombre(n.v * ratio, n.dec, entier);
  }

  // ---------- Détail ----------
  function section(titre, ...contenu) {
    return el("section", { class: "fiche-section" }, el("h2", { class: "h-section", text: titre }), ...contenu);
  }

  function afficherFiche(f) {
    // Base de calcul : "8 couverts", "8 parts", "60 tuiles environ"… (8 couverts par défaut)
    let base = 8, unite = "couverts";
    const mCouv = f.infos.map(i => i.valeur).join(" ").match(/(\d+)\s*(couverts|parts|personnes)/i);
    const qInfo = f.infos.find(i => /^quantit/i.test(i.label));
    const mQte = qInfo && qInfo.valeur.match(/^(\d+)\s+([^\s,]+)/);
    if (mCouv) { base = +mCouv[1]; unite = mCouv[2].toLowerCase(); }
    else if (mQte) { base = +mQte[1]; unite = mQte[2]; }
    vue.innerHTML = "";

    const retour = el("a", { href: "#", class: "retour", text: "← Toutes les fiches" });
    const head = el("header", { class: "fiche-entete" },
      el("p", { class: "eyebrow-dark", text: f.theme + (f.sousTitre ? " · " + f.sousTitre : "") }),
      el("h1", { class: "fiche-titre", text: f.titre }),
      f.poste ? el("p", { class: "poste", text: "Poste : " + f.poste }) : null,
      f.description ? el("p", { class: "description", text: f.description }) : null
    );

    const infos = el("div", { class: "infos" });
    f.infos.forEach(i => infos.append(el("div", { class: "info" },
      el("span", { class: "info-label", text: i.label }), el("span", { class: "info-val", text: i.valeur }))));

    const actions = el("div", { class: "actions" });
    const btnPrint = el("button", { type: "button", class: "btn", text: "🖨️ Imprimer" });
    btnPrint.addEventListener("click", () => window.print());
    actions.append(btnPrint);
    for (const [cle, label] of [["schema", "📄 Schéma (PDF)"], ["pdf", "📄 Fiche (PDF)"]]) {
      if (!f[cle]) continue;
      const b = el("button", { type: "button", class: "btn btn-light", text: label });
      b.addEventListener("click", () => ouvrirPdf(f[cle], f.titre + (cle === "schema" ? " - schéma" : ""), b));
      actions.append(b);
    }

    vue.append(retour, head, infos, actions);

    if (f.video) {
      const video = el("video", { controls: "", preload: "metadata", playsinline: "", class: "video" });
      blobChiffre(f.video.src, "video/mp4").then(u => { video.src = u; }).catch(() => {});
      vue.append(section("Vidéo", el("p", { class: "muted", text: f.video.titre }), video));
    }

    // Denrées + calcul des quantités
    const couverts = el("input", { type: "number", min: "1", max: "200", value: String(base), id: "couverts", inputmode: "numeric" });
    const tbody = el("tbody");
    const table = el("table", { class: "denrees" },
      el("thead", {}, el("tr", {}, el("th", { text: "Denrées" }), el("th", { text: "Unité" }), el("th", { class: "num", text: "Quantité" }))),
      tbody);
    function remplir() {
      const n = Math.max(1, parseInt(couverts.value, 10) || base);
      const ratio = n / base;
      tbody.innerHTML = "";
      f.denrees.forEach(s => {
        if (s.titre) tbody.append(el("tr", { class: "sous-titre" }, el("td", { colspan: "3", text: s.titre })));
        s.items.forEach(i => tbody.append(el("tr", {},
          el("td", { text: i.nom }), el("td", { text: i.unite }),
          el("td", { class: "num" + (ratio !== 1 && lireNombre(i.qte) ? " change" : ""), text: adapter(i.qte, i.unite, ratio) }))));
      });
    }
    couverts.addEventListener("input", remplir);
    remplir();
    const reglage = el("div", { class: "couverts" },
      el("label", { for: "couverts", text: "Nombre de " + unite }), couverts,
      el("span", { class: "muted small", text: "Fiche d'origine : " + base + " " + unite }));
    const notes = f.notes.map(n => el("p", { class: "note", text: n }));
    vue.append(section("Denrées", reglage, el("div", { class: "table-scroll" }, table), ...notes,
      el("p", { class: "note", text: "PM : pour mémoire (quantité à doser selon le besoin)." })));

    if (f.materiel.length) {
      const g = el("div", { class: "materiel" });
      f.materiel.forEach(m => {
        const ul = el("ul");
        m.items.forEach(x => ul.append(el("li", { text: x })));
        g.append(el("div", { class: "card mat" }, m.titre ? el("h3", { text: m.titre }) : null, ul));
      });
      vue.append(section("Matériel", g));
    }

    if (f.etapes.length) {
      const ol = el("ol", { class: "etapes" });
      f.etapes.forEach(e => {
        const li = el("li", { class: "etape" },
          el("div", { class: "etape-n", text: e.n }),
          el("div", { class: "etape-corps" },
            el("div", { class: "etape-tete" }, el("h3", { text: e.titre }), e.duree ? el("span", { class: "duree", text: "⏱ " + e.duree }) : null),
            e.gestes.length ? el("ul", {}, ...e.gestes.map(g => el("li", { text: g }))) : null,
            e.vigilance ? el("p", { class: "vigilance", text: "⚠️ " + e.vigilance }) : null));
        ol.append(li);
      });
      vue.append(section(f.etapesFormat === "progression" ? "Progression" : "Technique de réalisation", ol));
    }

    if (f.remarques.length) {
      vue.append(section("Remarques", ...f.remarques.map(r => el("p", { class: "card remarque", text: r }))));
    }

    vue.append(el("p", { class: "muted small source", text: "Fiche n° " + (f.numero < 100 ? f.numero : "—") + " · " + f.theme }));
  }

  // ---------- Navigation ----------
  function router() {
    const id = decodeURIComponent(location.hash.slice(1));
    const f = byId[id];
    liste.hidden = !!f;
    vue.hidden = !f;
    document.body.classList.toggle("vue-fiche", !!f);
    if (f) {
      afficherFiche(f);
      document.title = f.titre + " – Fiche technique CAP Cuisine";
      window.scrollTo(0, 0);
    } else {
      document.title = "Fiches techniques – CAP Cuisine";
    }
  }

  construireFiltres();
  afficherListe();
  $("#q").addEventListener("input", afficherListe);
  window.addEventListener("hashchange", router);
  router();
  }
})();
