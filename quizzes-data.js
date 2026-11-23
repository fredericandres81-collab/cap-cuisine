// ============================================================
// LES QUIZ DU SITE
// Pour ajouter une question : copier un bloc { q: ..., choix: [...], bonne: N, explication: ... }
// "bonne" = numéro de la bonne réponse dans "choix" (0 = la première).
// L'ordre des réponses est mélangé automatiquement à l'affichage.
// ============================================================
window.QUIZZES = [
  {
    id: "bases-cuisine",
    titre: "Les bases en cuisine",
    matiere: "Technologie culinaire",
    questions: [
      { q: "À quelle température doit-on conserver la viande fraîche ?", choix: ["Entre 0 °C et +3 °C", "Entre +6 °C et +8 °C", "−18 °C", "+10 °C"], bonne: 0, explication: "Les produits très périssables se conservent entre 0 °C et +3 °C." },
      { q: "En combien de temps doit-on refroidir un plat de +63 °C à +10 °C ?", choix: ["Moins de 6 h", "Moins de 2 h", "Moins de 4 h", "Une nuit au frigo"], bonne: 1, explication: "Le refroidissement rapide se fait en moins de 2 h, en cellule de refroidissement." },
      { q: "Que signifie la « marche en avant » ?", choix: ["Cuisiner le plus vite possible", "Les produits vont du sale vers le propre sans retour en arrière", "Toujours servir le client de gauche en premier", "Ranger les produits par date"], bonne: 1, explication: "On évite que le propre et le sale se croisent pour éviter les contaminations." },
      { q: "Lequel ne fait PAS partie des 5 M ?", choix: ["Matière", "Milieu", "Menu", "Méthode"], bonne: 2, explication: "Les 5 M : Matière, Main-d'œuvre, Milieu, Matériel, Méthode." },
      { q: "Une brunoise, c'est…", choix: ["Des bâtonnets très fins", "De très petits dés de 1 à 2 mm", "De gros dés irréguliers", "Des lanières de feuilles"], bonne: 1, explication: "Bâtonnets fins = julienne ; gros dés = mirepoix ; lanières de feuilles = chiffonnade." },
      { q: "Quelle est la base d'une sauce béchamel ?", choix: ["Roux brun + fond brun", "Roux blond + fond blanc", "Roux blanc + lait", "Jaunes d'œufs + beurre"], bonne: 2, explication: "Roux blond + fond blanc = velouté ; roux brun + fond brun = espagnole." },
      { q: "Dans un roux, on met le beurre et la farine…", choix: ["À poids égal", "Deux fois plus de farine", "Deux fois plus de beurre", "Sans beurre"], bonne: 0, explication: "Un roux = autant de beurre que de farine, en poids." },
      { q: "La mayonnaise est…", choix: ["Une émulsion chaude", "Une émulsion froide", "Une sauce liée au roux", "Une réduction"], bonne: 1, explication: "La hollandaise est une émulsion chaude ; la mayonnaise une émulsion froide." },
      { q: "Pour la pâte à choux, que fait-on juste après avoir ajouté la farine ?", choix: ["On ajoute tout de suite les œufs", "On dessèche la panade sur le feu", "On met au frais 1 h", "On ajoute de la levure"], bonne: 1, explication: "On dessèche la panade 1 à 2 min sur le feu pour retirer l'humidité, puis on ajoute les œufs." },
      { q: "Un fond brun se distingue d'un fond blanc parce que…", choix: ["On ajoute du chocolat", "Les os et la garniture sont colorés avant le mouillage", "Il cuit moins longtemps", "On n'utilise pas d'os"], bonne: 1, explication: "Pour un fond brun, on fait colorer les os et la garniture aromatique au four." }
    ]
  },

  // ===================== SCIENCES APPLIQUÉES =====================
  {
    id: "micro-organismes",
    titre: "Micro-organismes et risques",
    matiere: "Sciences appliquées",
    questions: [
      { q: "Quelles sont les 4 grandes familles de micro-organismes ?", choix: ["Bactéries, levures, moisissures, virus", "Bactéries, vitamines, levures, enzymes", "Virus, protéines, moisissures, sels minéraux", "Levures, fibres, bactéries, lipides"], bonne: 0, explication: "Bactéries, levures, moisissures et virus, auxquels s'ajoutent les parasites." },
      { q: "Quelle est la zone de danger, où les bactéries se multiplient vite ?", choix: ["De 0 °C à +3 °C", "De +10 °C à +63 °C", "De +63 °C à +100 °C", "En dessous de −18 °C"], bonne: 1, explication: "Entre +10 °C et +63 °C, avec une multiplication maximale autour de 37 °C." },
      { q: "Dans de bonnes conditions, une bactérie se divise environ toutes les…", choix: ["20 à 30 minutes", "6 heures", "24 heures", "Semaines"], bonne: 0, explication: "D'où l'importance de ne jamais laisser un aliment longtemps dans la zone de danger." },
      { q: "Quels aliments sont les plus favorables à la multiplication des bactéries ?", choix: ["Les aliments secs et très salés", "Les aliments riches en protéines et en eau (viande, poisson, œufs, produits laitiers)", "Le sucre en poudre", "Les pâtes sèches"], bonne: 1, explication: "Un aliment sec, très salé ou très sucré s'y prête beaucoup moins." },
      { q: "Qu'est-ce qu'une spore ?", choix: ["Une bactérie morte", "Une forme de résistance de certaines bactéries, qui survit à la chaleur", "Un champignon comestible", "Un produit désinfectant"], bonne: 1, explication: "Clostridium et Bacillus forment des spores qui résistent à la chaleur et au dessèchement." },
      { q: "La contamination croisée, c'est…", choix: ["Les microbes déjà présents sur la matière première", "Le transfert de microbes d'un aliment, d'une surface ou d'une main vers un aliment sain", "La cuisson de deux aliments ensemble", "Le mélange de deux produits d'entretien"], bonne: 1, explication: "Exemple : couper un légume sur la planche qui a servi pour la volaille crue." },
      { q: "On parle de TIAC (toxi-infection alimentaire collective) à partir de…", choix: ["1 seul malade", "2 cas similaires après un même repas", "10 cas", "50 cas"], bonne: 1, explication: "Au moins 2 cas similaires de troubles digestifs après un même repas. La déclaration est obligatoire." },
      { q: "Pourquoi une intoxination peut-elle rendre malade même après cuisson ?", choix: ["Parce que la cuisson ne tue aucune bactérie", "Parce que la toxine produite par la bactérie est déjà dans l'aliment", "Parce que l'aliment a été trop cuit", "Parce que le sel est toxique"], bonne: 1, explication: "Exemple : la toxine du staphylocoque doré reste dangereuse même si la bactérie est détruite." },
      { q: "Clostridium botulinum peut se développer dans une conserve parce qu'elle est…", choix: ["Aérobie : elle a besoin d'oxygène", "Anaérobie : elle se développe sans oxygène", "Sensible au froid", "Morte à 20 °C"], bonne: 1, explication: "Les bactéries anaérobies se développent sans oxygène, comme dans une conserve fermée." },
      { q: "Laquelle de ces bactéries est UTILE ?", choix: ["Salmonella", "Listeria", "Les bactéries des yaourts et des fromages", "Staphylococcus aureus"], bonne: 2, explication: "Certaines bactéries servent à la fermentation : yaourts, fromages, pain au levain." }
    ]
  },
  {
    id: "hygiene-haccp",
    titre: "Hygiène, HACCP et températures",
    matiere: "Sciences appliquées",
    questions: [
      { q: "À quelle température doit-on recevoir des produits surgelés ?", choix: ["−18 °C ou moins", "0 °C", "+3 °C", "−5 °C"], bonne: 0, explication: "Surgelés et congelés : −18 °C ou moins, à la réception comme au stockage." },
      { q: "À quelle température minimum doit-on maintenir un plat en liaison chaude ?", choix: ["+45 °C", "+55 °C", "+63 °C", "+100 °C"], bonne: 2, explication: "Liaison chaude : +63 °C minimum jusqu'au service." },
      { q: "Combien de principes compte la méthode HACCP ?", choix: ["3", "5", "7", "10"], bonne: 2, explication: "Dangers, CCP, limites critiques, surveillance, actions correctives, vérification, documentation." },
      { q: "Que veut dire « CCP » en HACCP ?", choix: ["Contrôle des cuissons professionnelles", "Point critique pour la maîtrise des dangers", "Carte de contrôle du personnel", "Chambre froide positive"], bonne: 1, explication: "CCP = Critical Control Point, une étape où l'on doit absolument maîtriser un danger (par exemple une température)." },
      { q: "Le PMS (plan de maîtrise sanitaire) regroupe…", choix: ["Les bonnes pratiques d'hygiène, l'HACCP et la traçabilité", "Les menus de la semaine", "Les fiches de paie", "Le plan de la cuisine"], bonne: 0, explication: "Il est obligatoire dans tout établissement de restauration." },
      { q: "Dans quel ordre se fait un nettoyage-désinfection ?", choix: ["Désinfection, lavage, séchage", "Pré-lavage, lavage, rinçage, désinfection, rinçage final, séchage", "Rinçage, séchage, lavage", "Lavage seulement"], bonne: 1, explication: "On retire d'abord les salissures (détergent), puis on détruit les microbes (désinfectant)." },
      { q: "Un détergent sert à…", choix: ["Détruire les micro-organismes", "Éliminer les salissures", "Parfumer la cuisine", "Conserver les aliments"], bonne: 1, explication: "Le désinfectant détruit les microbes. On ne mélange jamais les produits entre eux." },
      { q: "Tu t'es coupé au doigt. Que fais-tu avant de reprendre le travail ?", choix: ["Rien, ce n'est pas grave", "Un pansement et un doigtier de couleur vive", "Je mets du sel dessus", "Je travaille avec un gant de toilette"], bonne: 1, explication: "La couleur vive permet de retrouver le doigtier s'il tombe dans une préparation." },
      { q: "Que signifie DLC ?", choix: ["Date limite de consommation", "Date de livraison client", "Durée de la cuisson", "Date de lavage des cuisines"], bonne: 0, explication: "À ne pas confondre avec la DDM (date de durabilité minimale)." },
      { q: "La pasteurisation…", choix: ["Détruit tous les microbes : conservation longue à température ambiante", "Détruit une partie des microbes : conservation courte au froid", "Utilise le froid", "Consiste à fumer le produit"], bonne: 1, explication: "La stérilisation et l'appertisation détruisent tout : conservation longue à température ambiante." }
    ]
  },
  {
    id: "nutrition",
    titre: "Nutrition et allergènes",
    matiere: "Sciences appliquées",
    questions: [
      { q: "Quel est le rôle principal des protides (protéines) ?", choix: ["Énergétique rapide", "Plastique : construire et réparer le corps", "Transit intestinal", "Donner du goût"], bonne: 1, explication: "On les trouve dans les viandes, poissons, œufs, légumineuses et produits laitiers." },
      { q: "Les glucides ont un rôle…", choix: ["Énergétique (rapide)", "Plastique", "Protecteur uniquement", "Aucun rôle"], bonne: 0, explication: "Sources : céréales, pain, pâtes, féculents, sucres." },
      { q: "Combien y a-t-il d'allergènes à déclaration obligatoire ?", choix: ["5", "10", "14", "20"], bonne: 2, explication: "Gluten, crustacés, œufs, poissons, arachides, soja, lait, fruits à coque, céleri, moutarde, sésame, sulfites, lupin, mollusques." },
      { q: "Lequel de ces aliments fait partie des 14 allergènes ?", choix: ["La pomme de terre", "La moutarde", "Le riz", "La carotte"], bonne: 1, explication: "La moutarde, le céleri et le sésame en font partie, ce qu'on oublie souvent." },
      { q: "Quelle est la différence entre une allergie et une intolérance ?", choix: ["Aucune différence", "L'allergie fait réagir le système immunitaire et peut être grave ; l'intolérance est une difficulté à digérer", "L'intolérance est toujours plus grave", "L'allergie ne concerne que les enfants"], bonne: 1, explication: "Exemple d'intolérance : le lactose." },
      { q: "Combien de fruits et légumes par jour le PNNS recommande-t-il au minimum ?", choix: ["2", "3", "5", "10"], bonne: 2, explication: "PNNS = Programme national nutrition santé." },
      { q: "Le GEMRCN, ce sont des recommandations pour…", choix: ["La restauration collective (grammages, fréquences des plats)", "Les restaurants étoilés", "Le nettoyage des locaux", "Les contrats de travail"], bonne: 0, explication: "Il s'applique par exemple aux cantines scolaires et aux hôpitaux." },
      { q: "Où se fait l'absorption des nutriments dans le sang ?", choix: ["Dans la bouche", "Dans l'estomac", "Dans l'intestin grêle", "Dans le gros intestin"], bonne: 2, explication: "Le gros intestin absorbe surtout l'eau et élimine les déchets." },
      { q: "Quelle vitamine est fragile et diminue avec la chaleur et l'eau de cuisson ?", choix: ["La vitamine C", "La vitamine D", "Le calcium", "Le fer"], bonne: 0, explication: "Les vitamines du groupe B sont aussi fragiles : on évite les cuissons trop longues." },
      { q: "À quoi servent les fibres ?", choix: ["À donner de l'énergie rapide", "Au transit intestinal", "À construire les muscles", "À colorer les plats"], bonne: 1, explication: "On les trouve dans les légumes, les fruits et les céréales complètes." }
    ]
  },
  {
    id: "transformations-materiel",
    titre: "Transformations, matériel et environnement",
    matiere: "Sciences appliquées",
    questions: [
      { q: "La réaction de Maillard, c'est…", choix: ["Sucres + protéines + chaleur sèche → brunissement et arômes", "Sucres seuls + chaleur", "Le durcissement du blanc d'œuf", "La prise d'une gelée"], bonne: 0, explication: "Elle se produit au-delà de 140 °C environ : croûte du pain, viande grillée." },
      { q: "La caramélisation concerne…", choix: ["Les protéines seules", "Les sucres seuls chauffés", "L'amidon dans l'eau", "Les matières grasses"], bonne: 1, explication: "Elle commence vers 150-160 °C." },
      { q: "Quand un œuf durcit à la cuisson, il s'agit de…", choix: ["La gélatinisation", "La coagulation des protéines (irréversible)", "La fermentation", "L'émulsion"], bonne: 1, explication: "La coagulation concerne aussi la viande et le poisson. On ne peut pas revenir en arrière." },
      { q: "Pourquoi une sauce liée à la farine épaissit-elle ?", choix: ["Gélatinisation de l'amidon : il absorbe l'eau et gonfle", "Réaction de Maillard", "Caramélisation", "Fermentation"], bonne: 0, explication: "L'amidon gonfle à la chaleur et épaissit les sauces et les liaisons." },
      { q: "Dans la mayonnaise, quel élément permet de garder l'émulsion stable ?", choix: ["Le sel", "Le jaune d'œuf (lécithine) et la moutarde", "Le vinaigre seul", "L'eau"], bonne: 1, explication: "L'émulsifiant permet de disperser l'huile dans la partie aqueuse." },
      { q: "Quel est le matériau de référence en cuisine professionnelle ?", choix: ["Le bois", "L'acier inoxydable (inox)", "L'aluminium", "Le cuivre non étamé"], bonne: 1, explication: "Il est résistant, inerte et facile à nettoyer." },
      { q: "Pourquoi l'aluminium demande-t-il des précautions ?", choix: ["Il est trop lourd", "Il réagit avec les aliments acides", "Il ne conduit pas la chaleur", "Il est interdit"], bonne: 1, explication: "Le cuivre, lui, s'oxyde et doit être étamé." },
      { q: "Pour cuire à l'induction, il faut…", choix: ["N'importe quelle casserole", "Un récipient ferromagnétique (attiré par un aimant)", "Une casserole en verre", "Une flamme"], bonne: 1, explication: "Le champ magnétique chauffe directement le fond du récipient : c'est rapide et économe." },
      { q: "Que peut-on faire des biodéchets (déchets alimentaires) ?", choix: ["Les jeter avec le verre", "Les valoriser par compostage ou méthanisation", "Les mettre dans l'évier", "Les brûler en cuisine"], bonne: 1, explication: "Le tri sélectif sépare verre, carton, emballages, biodéchets et déchets ménagers." },
      { q: "Que veut dire PRAP ?", choix: ["Prévention des risques liés à l'activité physique", "Plan de restauration à prix", "Protocole de rangement des aliments périssables", "Prime de rendement"], bonne: 0, explication: "Bonnes postures, organisation du poste, aides à la manutention, pour éviter les TMS." }
    ]
  },

  // ===================== TECHNOLOGIE CULINAIRE =====================
  {
    id: "brigade-organisation",
    titre: "Brigade, organisation et matériel",
    matiere: "Technologie culinaire",
    questions: [
      { q: "Qui est directement sous les ordres du chef de cuisine ?", choix: ["Le commis", "Le second de cuisine", "L'apprenti", "Le plongeur"], bonne: 1, explication: "Chef → second → chefs de partie → commis → apprenti." },
      { q: "Quel chef de partie s'occupe des sauces ?", choix: ["Le garde-manger", "Le saucier", "L'entremétier", "Le pâtissier"], bonne: 1, explication: "Le garde-manger s'occupe des préparations froides ; l'entremétier des légumes, potages et œufs." },
      { q: "Le chef de partie qui remplace les autres pendant leurs repos s'appelle…", choix: ["Le tournant", "Le poissonnier", "Le second", "Le commis"], bonne: 0, explication: "Le tournant connaît plusieurs postes." },
      { q: "Qu'est-ce que l'ordonnancement ?", choix: ["Ranger la chambre froide", "Planifier les tâches dans le temps pour être prêt à l'heure du service", "Commander chez le fournisseur", "Nettoyer le poste"], bonne: 1, explication: "On part de l'heure de service et on remonte le temps : c'est le rétro-planning." },
      { q: "Quel document liste les ingrédients, les quantités, le coût matière et la technique d'une recette ?", choix: ["Le bon de livraison", "La fiche technique de fabrication", "La facture", "Le planning"], bonne: 1, explication: "La fiche de production organise, elle, les tâches dans l'ordre chronologique." },
      { q: "Quel est l'ordre des zones selon la marche en avant ?", choix: ["Plonge → stockage → réception", "Réception → stockage → légumerie → préparations → plonge → expédition", "Expédition → préparations → réception", "L'ordre n'a pas d'importance"], bonne: 1, explication: "Les produits avancent sans croiser le circuit sale." },
      { q: "Quel matériel utilise-t-on pour gratiner ?", choix: ["La friteuse", "La salamandre", "La marmite", "Le batteur"], bonne: 1, explication: "La salamandre sert aux gratins, aux cuissons grillées et aux finitions." },
      { q: "La sauteuse (le grand matériel) sert surtout à…", choix: ["Faire des braisages et des cuissons mijotées en grande quantité", "Faire des glaces", "Monter des blancs", "Gratiner"], bonne: 0, explication: "À ne pas confondre avec la petite sauteuse, une casserole évasée." },
      { q: "Quel couteau sert à lever des filets de poisson ?", choix: ["Le couteau d'office", "Le couteau filet de sole", "Le couteau à pain", "Le fendoir"], bonne: 1, explication: "Il est fin et souple. Le désosseur sert pour la viande." },
      { q: "Pourquoi entretenir régulièrement le matériel ?", choix: ["Uniquement pour qu'il brille", "Pour la sécurité, l'hygiène et pour qu'il dure plus longtemps", "Ce n'est pas obligatoire", "Pour changer de couleur"], bonne: 1, explication: "Nettoyage, détartrage, vérification des branchements et des joints." }
    ]
  },
  {
    id: "cuissons-fonds",
    titre: "Les cuissons et les fonds",
    matiere: "Technologie culinaire",
    questions: [
      { q: "Laquelle est une cuisson SANS brunissement ?", choix: ["Sauter", "Rôtir", "Pocher", "Griller"], bonne: 2, explication: "Sans brunissement : pocher, vapeur, à l'anglaise." },
      { q: "Cuire « à l'anglaise », c'est cuire…", choix: ["Dans de l'eau bouillante salée", "Au four très chaud", "Dans l'huile", "À la poêle avec du beurre"], bonne: 0, explication: "Elle préserve la couleur des légumes verts." },
      { q: "Laquelle est une cuisson AVEC brunissement ?", choix: ["La vapeur", "Le pochage", "Le rôtissage", "La cuisson à l'anglaise"], bonne: 2, explication: "Avec brunissement : sauter, griller, rôtir, frire." },
      { q: "Pourquoi une viande sautée prend-elle de la couleur et du goût ?", choix: ["À cause du sel", "Grâce à la réaction de Maillard", "Grâce à l'eau", "À cause du froid"], bonne: 1, explication: "La haute température provoque le brunissement et développe les arômes en surface." },
      { q: "Braiser, poêler et cuire en ragoût sont des cuissons…", choix: ["Sans brunissement", "Combinées", "Uniquement au four à micro-ondes", "Crues"], bonne: 1, explication: "Une coloration d'abord, puis une cuisson longue et lente dans un liquide." },
      { q: "Pour quels produits utilise-t-on les cuissons combinées ?", choix: ["Les produits fragiles comme le poisson", "Les produits fermes, qu'on veut attendrir", "Les fruits rouges", "Les œufs"], bonne: 1, explication: "Exemples : estouffade de bœuf, navarin, osso-buco." },
      { q: "Avec quoi réalise-t-on un fumet ?", choix: ["Des os de veau rôtis", "Des arêtes et parures de poisson", "Des légumes seuls", "Du lait"], bonne: 1, explication: "Le fond brun se fait avec des os et des parures rôtis." },
      { q: "Un fond blanc est…", choix: ["Un fond non coloré", "Un fond avec du lait", "Un fond de poisson", "Un fond sucré"], bonne: 0, explication: "Pour le fond brun, os et garniture sont colorés avant le mouillage." },
      { q: "À quoi sert un court-bouillon ?", choix: ["À pocher des poissons, des légumes ou des viandes", "À faire une pâte", "À monter une chantilly", "À frire"], bonne: 0, explication: "C'est un liquide aromatique de cuisson." },
      { q: "Une julienne de légumes, c'est…", choix: ["De petits dés", "Des bâtonnets très fins", "Des rondelles", "Une purée"], bonne: 1, explication: "Chaque taille a son usage : garniture, potage, sauce." }
    ]
  },
  {
    id: "sauces-pates",
    titre: "Sauces, liaisons et pâtes de base",
    matiere: "Technologie culinaire",
    questions: [
      { q: "Combien y a-t-il de sauces mères ?", choix: ["3", "5", "7", "10"], bonne: 1, explication: "Béchamel, velouté, espagnole, tomate et hollandaise." },
      { q: "Le velouté se fait avec…", choix: ["Du lait et un roux blanc", "Un fond blanc et un roux blond", "Un fond brun et un roux brun", "Des jaunes d'œufs et du beurre clarifié"], bonne: 1, explication: "Ses dérivées : suprême, aurore, poulette." },
      { q: "La sauce Mornay est une dérivée de la…", choix: ["Béchamel", "Hollandaise", "Sauce tomate", "Espagnole"], bonne: 0, explication: "La soubise est aussi une dérivée de la béchamel." },
      { q: "La béarnaise est une dérivée de la…", choix: ["Béchamel", "Hollandaise", "Velouté", "Sauce tomate"], bonne: 1, explication: "La mousseline aussi. La base : jaunes d'œufs et beurre clarifié." },
      { q: "Les sauces bordelaise, chasseur et madère dérivent de la…", choix: ["Sauce espagnole / demi-glace", "Béchamel", "Hollandaise", "Mayonnaise"], bonne: 0, explication: "Base : fond brun et roux brun." },
      { q: "Le beurre manié, c'est…", choix: ["Du beurre clarifié", "Du beurre et de la farine crus, pour rectifier une liaison en fin de cuisson", "Du beurre fondu avec du sucre", "Du beurre noisette"], bonne: 1, explication: "Le roux, lui, est cuit." },
      { q: "Comment utilise-t-on la fécule (Maïzena) pour lier ?", choix: ["Délayée à froid, puis incorporée en fin de cuisson", "Jetée directement dans le liquide bouillant", "Cuite avec le beurre comme un roux", "Mélangée aux œufs crus"], bonne: 0, explication: "Si on la verse directement à chaud, elle fait des grumeaux." },
      { q: "La chantilly est une préparation…", choix: ["Émulsionnée", "Foisonnée (on incorpore de l'air)", "Gélifiée", "Liée au roux"], bonne: 1, explication: "Mousses, appareils à soufflé et blancs en neige sont aussi foisonnés." },
      { q: "Avec quoi obtient-on une préparation gélifiée ?", choix: ["De la gélatine ou de l'agar-agar", "De la levure", "Du beurre manié", "Du sel"], bonne: 0, explication: "Exemples : gelées, aspics, bavarois." },
      { q: "Qu'est-ce qu'une duxelles ?", choix: ["Une farce de viande", "Des champignons hachés et suées à sec", "Une sauce au vin", "Une pâte levée"], bonne: 1, explication: "On l'utilise en garniture ou en farce." }
    ]
  },
  {
    id: "produits-menus",
    titre: "Produits, qualité et menus",
    matiere: "Technologie culinaire",
    questions: [
      { q: "Que signifie AOP ?", choix: ["Appellation d'origine protégée", "Aliment ordinaire préparé", "Agriculture organique pure", "Achat obligatoire du producteur"], bonne: 0, explication: "Elle indique un lien fort avec un terroir." },
      { q: "Lequel est un signe officiel de qualité supérieure ?", choix: ["Le Label Rouge", "Le « fait maison » écrit à la main", "Une belle photo sur la carte", "Le prix élevé"], bonne: 0, explication: "Signes officiels : AOC/AOP, IGP, Label Rouge, Agriculture biologique." },
      { q: "Que veut dire IGP ?", choix: ["Indication géographique protégée", "Ingrédient garanti pur", "Inspection générale des produits", "Indice de gras du produit"], bonne: 0, explication: "Comme l'AOP, c'est un signe lié à une origine géographique." },
      { q: "En cuisine, l'œuf peut jouer le rôle de…", choix: ["Liant, foisonnant et émulsifiant", "Conservateur uniquement", "Colorant uniquement", "Aucun rôle"], bonne: 0, explication: "Blanc = protéines ; jaune = lipides et lécithine (émulsifiant)." },
      { q: "Pourquoi travailler avec des produits de saison ?", choix: ["Meilleure qualité, coût maîtrisé et démarche durable", "Parce que c'est obligatoire par la loi", "Pour avoir moins de choix", "Pour que les plats soient toujours identiques"], bonne: 0, explication: "C'est aussi un argument de vente pour les clients." },
      { q: "Comment s'organise un menu classique ?", choix: ["Dessert, plat, entrée", "Entrée, plat principal (avec garniture), fromage et/ou dessert", "Trois plats principaux", "Uniquement des entrées"], bonne: 1, explication: "On veille à varier les textures, les couleurs, les saveurs et les modes de cuisson." },
      { q: "Quel plat est emblématique du Sud-Ouest ?", choix: ["La choucroute", "Le cassoulet", "La bouillabaisse", "La quiche lorraine"], bonne: 1, explication: "La bouillabaisse est provençale ; la choucroute est alsacienne." },
      { q: "Quel chef a codifié les sauces mères et la brigade de cuisine ?", choix: ["Auguste Escoffier", "Paul Bocuse", "Louis XIV", "Gustave Eiffel"], bonne: 0, explication: "Ensuite sont venues la nouvelle cuisine, puis la cuisine contemporaine." },
      { q: "Pour lutter contre le gaspillage alimentaire en cuisine, on peut…", choix: ["Produire beaucoup plus que nécessaire", "Adapter les grammages et valoriser fanes, parures et bas morceaux", "Jeter les épluchures sans trier", "Ne jamais vérifier les dates"], bonne: 1, explication: "On applique aussi le FIFO dans les stocks." },
      { q: "Après le CAP Cuisine, quelle poursuite d'études est possible ?", choix: ["Aucune", "Une mention complémentaire ou un Bac Pro", "Seulement le BTS directement", "Il faut obligatoirement arrêter la cuisine"], bonne: 1, explication: "On peut aussi entrer directement dans le métier, en restauration commerciale ou collective." }
    ]
  },

  // ===================== GESTION APPLIQUÉE =====================
  {
    id: "achats-stocks-calculs",
    titre: "Achats, stocks et calculs",
    matiere: "Gestion appliquée",
    questions: [
      { q: "À la livraison, on compare le bon de livraison avec…", choix: ["La carte du restaurant", "Le bon de commande", "La fiche de paie", "Le menu du jour"], bonne: 1, explication: "On fait un contrôle quantitatif (quantités) et qualitatif (état, température, dates)." },
      { q: "La méthode FIFO (ou PEPS) consiste à…", choix: ["Utiliser d'abord les produits entrés en dernier", "Utiliser d'abord les produits entrés en premier", "Ranger les produits par couleur", "Commander tous les jours"], bonne: 1, explication: "Premier entré, premier sorti : on limite les pertes liées aux dates." },
      { q: "Le stock d'alerte, qui déclenche la commande, est égal à…", choix: ["Stock de sécurité + stock minimum", "Stock minimum − stock de sécurité", "Le stock réel", "Zéro"], bonne: 0, explication: "Exemple : stock minimum 20 + stock de sécurité 8 = stock d'alerte de 28." },
      { q: "L'inventaire physique (comptage) donne…", choix: ["Le stock théorique", "Le stock réel", "Le prix de vente", "La TVA"], bonne: 1, explication: "Le logiciel donne le stock théorique. L'écart révèle les pertes, vols, casses ou erreurs." },
      { q: "Quel est le taux de TVA pour un repas servi au restaurant ?", choix: ["2,1 %", "5,5 %", "10 %", "20 %"], bonne: 2, explication: "Les boissons alcoolisées sont à 20 %." },
      { q: "Un plat coûte 20 € HT. Avec une TVA à 10 %, quel est son prix TTC ?", choix: ["20,10 €", "22 €", "30 €", "18 €"], bonne: 1, explication: "Prix TTC = Prix HT × 1,10 = 20 × 1,10 = 22 €." },
      { q: "Un plat a un coût matière de 3 € et se vend 10 € HT. Quel est son ratio matière ?", choix: ["3 %", "30 %", "33 %", "70 %"], bonne: 1, explication: "(3 ÷ 10) × 100 = 30 %. L'objectif se situe entre 28 et 35 %." },
      { q: "Un plat se vend 15 € HT pour un coût matière de 4,50 €. Quelle est la marge ?", choix: ["4,50 €", "10,50 €", "19,50 €", "15 €"], bonne: 1, explication: "Marge = prix de vente HT − coût matière = 15 − 4,50 = 10,50 €." },
      { q: "Quel document liste les prix d'achat des matières premières ?", choix: ["La mercuriale", "Le CV", "L'organigramme", "Le bon de commande"], bonne: 0, explication: "Elle doit être mise à jour régulièrement pour valoriser les fiches techniques." },
      { q: "Le coût de revient d'un plat est égal à…", choix: ["Coût matière seulement", "Charges directes + charges indirectes", "Prix de vente × 2", "La TVA"], bonne: 1, explication: "Directes : matière et personnel de cuisine. Indirectes : personnel de salle, loyer, matériel…" }
    ]
  },
  {
    id: "entreprise-travail",
    titre: "Entreprise, communication et droit du travail",
    matiere: "Gestion appliquée",
    questions: [
      { q: "Une cantine scolaire fait partie de la restauration…", choix: ["Commerciale", "Collective", "Rapide", "Gastronomique"], bonne: 1, explication: "Collective : scolaire, entreprise, santé (hôpitaux, maisons de retraite)." },
      { q: "Qu'est-ce qu'une « dark kitchen » ?", choix: ["Un restaurant sans lumière", "Une cuisine qui ne produit que pour la livraison, sans salle", "Une cuisine de nuit", "Un restaurant gastronomique"], bonne: 1, explication: "C'est l'une des nouvelles tendances, avec les food courts et la digitalisation." },
      { q: "Lequel est un affichage obligatoire dans un restaurant ?", choix: ["La photo du chef", "L'origine des viandes", "Le salaire des employés", "Le chiffre d'affaires"], bonne: 1, explication: "Il faut aussi afficher les prix, les allergènes, la licence et l'interdiction de fumer." },
      { q: "Dans une société (SARL, SAS…), la responsabilité des associés est…", choix: ["Illimitée", "Limitée à leurs apports", "Inexistante", "Partagée avec les clients"], bonne: 1, explication: "La part du bénéfice versée aux associés s'appelle le dividende." },
      { q: "Le commis obéit au chef de partie : c'est un lien…", choix: ["Hiérarchique", "Fonctionnel", "Commercial", "Familial"], bonne: 0, explication: "Le lien fonctionnel est lié aux compétences, sans relation d'autorité." },
      { q: "Un salarié qui fait remonter une information à son chef pratique une communication…", choix: ["Horizontale", "Verticale ascendante", "Verticale descendante", "Externe"], bonne: 1, explication: "Descendante : du chef vers le salarié. Horizontale : entre collègues." },
      { q: "Quelle est la forme de contrat de référence (la règle) ?", choix: ["Le CDD", "Le CDI", "L'intérim", "Le stage"], bonne: 1, explication: "Le CDD et l'intérim répondent à des besoins temporaires." },
      { q: "Quelle est la durée légale du travail par semaine ?", choix: ["30 heures", "35 heures", "39 heures", "48 heures"], bonne: 1, explication: "Au-delà, ce sont des heures supplémentaires majorées. 48 h est la durée maximale." },
      { q: "Combien de jours de congés payés acquiert-on par mois de travail ?", choix: ["1 jour", "2 jours", "2,5 jours ouvrables", "5 jours"], bonne: 2, explication: "Soit 30 jours ouvrables (5 semaines) par an pour un temps plein." },
      { q: "Le salaire net, c'est…", choix: ["Le salaire avant les cotisations", "La somme réellement perçue après les cotisations sociales", "Le salaire du patron", "Le salaire avec les pourboires"], bonne: 1, explication: "Le salaire brut est la rémunération avant déduction des cotisations." }
    ]
  },

  // ===================== CONNAISSANCE DES PRODUITS =====================
  {
    id: "viandes-boucherie",
    titre: "Viandes de boucherie",
    matiere: "Connaissance des produits",
    questions: [
      { q: "Quel est le morceau de bœuf le plus tendre ?", choix: ["Le jarret", "Le filet", "Le paleron", "La macreuse"], bonne: 1, explication: "Le filet est un morceau de 1re catégorie, pour les cuissons rapides (rôtir, sauter, griller)." },
      { q: "Le paleron, la macreuse et le jarret de bœuf se cuisent plutôt…", choix: ["Rapidement, à la poêle", "Longuement : braisés, bouillis ou en ragoût", "Crus en tartare", "Grillés au barbecue"], bonne: 1, explication: "Ce sont des morceaux riches en tissu conjonctif : une cuisson longue les attendrit (pot-au-feu, bourguignon)." },
      { q: "Quel morceau de veau utilise-t-on souvent pour la blanquette ?", choix: ["La noix", "Le filet mignon", "Le tendron et l'épaule", "La côte première"], bonne: 2, explication: "La blanquette demande des morceaux moelleux qui supportent une cuisson longue : tendron, épaule, flanchet." },
      { q: "Le gigot provient…", choix: ["De la cuisse de l'agneau ou du mouton", "De l'épaule du porc", "Du dos du veau", "De la poitrine du bœuf"], bonne: 0, explication: "Le gigot, c'est la cuisse de l'agneau ou du mouton." },
      { q: "Les escalopes de veau sont taillées dans…", choix: ["La noix (cuisse)", "Le jarret", "Le collier", "La poitrine"], bonne: 0, explication: "La noix et la sous-noix, dans la cuisse, donnent des escalopes tendres." },
      { q: "Le carré d'agneau est formé…", choix: ["De l'épaule désossée", "Des côtes", "Du gigot roulé", "De la selle hachée"], bonne: 1, explication: "On distingue les côtes premières, secondes et découvertes." },
      { q: "Qu'appelle-t-on le « persillé » d'une viande ?", choix: ["Le persil ajouté à la cuisson", "Les fines traces de graisse dans le muscle", "Une viande avariée", "La peau de la viande"], bonne: 1, explication: "Le persillé (ou marbré) rend la viande plus moelleuse et goûteuse." },
      { q: "À quoi sert la maturation de la viande de bœuf ?", choix: ["À la colorer", "À la rendre plus tendre et plus goûteuse", "À la saler", "À la congeler plus vite"], bonne: 1, explication: "On la laisse reposer en chambre froide quelques jours à plusieurs semaines." },
      { q: "Le contre-filet et le faux-filet se situent…", choix: ["Dans l'aloyau, le long du dos", "Dans la cuisse", "Dans l'épaule", "Dans le cou"], bonne: 0, explication: "L'aloyau regroupe le filet, le contre-filet et le rumsteck : des morceaux de 1re catégorie." },
      { q: "Quelle est la couleur normale d'une viande de veau de qualité ?", choix: ["Rouge foncé", "Blanc rosé", "Grise", "Verte"], bonne: 1, explication: "Le bœuf est rouge vif ; le veau, plus jeune, a une chair blanc rosé." }
    ]
  },
  {
    id: "volailles",
    titre: "Volailles",
    matiere: "Connaissance des produits",
    questions: [
      { q: "Qu'est-ce qu'un chapon ?", choix: ["Une jeune poule", "Un coq castré et engraissé", "Un canard sauvage", "Une dinde"], bonne: 1, explication: "Sa chair est fondante et persillée. C'est une volaille de fête." },
      { q: "Une poularde, c'est…", choix: ["Une vieille poule pondeuse", "Une jeune poule engraissée qui n'a pas pondu", "Un poulet de 6 semaines", "Une pintade"], bonne: 1, explication: "La poularde a une chair tendre et grasse, idéale pochée ou rôtie." },
      { q: "Quelle volaille française a une AOP ?", choix: ["Le poulet de Bresse", "Le poulet de batterie", "La dinde de Noël", "Le canard de Barbarie"], bonne: 0, explication: "La volaille de Bresse est protégée par une appellation d'origine (AOC/AOP)." },
      { q: "Un poulet Label Rouge est élevé au minimum…", choix: ["21 jours", "40 jours", "81 jours", "1 an"], bonne: 2, explication: "Au moins 81 jours, contre environ 40 jours pour un poulet standard : sa chair est plus ferme et plus goûteuse." },
      { q: "Pourquoi « flambe »-t-on une volaille avant de la préparer ?", choix: ["Pour la cuire", "Pour brûler les derniers duvets et plumes", "Pour la parfumer", "Pour la désinfecter à l'alcool"], bonne: 1, explication: "On la passe rapidement sur une flamme, puis on l'essuie." },
      { q: "Brider une volaille, c'est…", choix: ["La ficeler pour qu'elle garde sa forme à la cuisson", "La découper en 8", "La farcir", "La faire mariner"], bonne: 0, explication: "Une volaille bridée cuit de façon régulière et se présente bien." },
      { q: "Le « suprême » de volaille, c'est…", choix: ["La cuisse", "Le blanc avec le haut de l'aile", "Le foie", "La carcasse"], bonne: 1, explication: "C'est le filet (blanc), souvent présenté avec l'os du manchon." },
      { q: "Pourquoi ne faut-il pas laver une volaille crue sous le robinet ?", choix: ["Ça la fait durcir", "Les éclaboussures répandent les bactéries (salmonelles, Campylobacter)", "Ça lui enlève son goût", "C'est interdit par la loi"], bonne: 1, explication: "C'est la cuisson à cœur qui détruit les bactéries. Le lavage contamine le plan de travail." },
      { q: "En cuisine, le lapin est classé avec…", choix: ["Les viandes de boucherie", "Les volailles", "Le gibier à plumes", "Les abats"], bonne: 1, explication: "On parle de « volailles et lapins »." },
      { q: "Un caneton, c'est…", choix: ["Un jeune canard", "Un pigeon", "Une oie", "Une caille"], bonne: 0, explication: "La canette est la jeune cane. Le magret provient d'un canard gavé." }
    ]
  },
  {
    id: "produits-mer",
    titre: "Produits de la mer",
    matiere: "Connaissance des produits",
    questions: [
      { q: "Lequel est un poisson plat ?", choix: ["Le cabillaud", "La sole", "Le saumon", "Le maquereau"], bonne: 1, explication: "Poissons plats : sole, turbot, barbue, limande, carrelet…" },
      { q: "Lequel est un poisson gras ?", choix: ["Le colin", "La sole", "Le maquereau", "Le merlan"], bonne: 2, explication: "Poissons gras : saumon, maquereau, sardine, hareng, thon." },
      { q: "Quel signe montre qu'un poisson est frais ?", choix: ["Œil creux et terne", "Ouïes brunes", "Œil bombé et brillant, ouïes rouge vif", "Chair molle"], bonne: 2, explication: "Un poisson frais a aussi une chair ferme, des écailles bien attachées et une odeur marine." },
      { q: "Combien de filets lève-t-on sur un poisson plat ?", choix: ["1", "2", "4", "6"], bonne: 2, explication: "Un poisson plat donne 4 filets ; un poisson rond, 2 filets." },
      { q: "« Habiller » un poisson, c'est…", choix: ["Le dresser sur l'assiette", "Ébarber, écailler, vider, laver", "Le cuire en papillote", "Le paner"], bonne: 1, explication: "C'est la préparation de base avant cuisson ou levée des filets." },
      { q: "Une darne est…", choix: ["Un filet sans arête", "Une tranche épaisse d'un gros poisson rond, avec l'arête", "Un poisson entier", "Une sauce au poisson"], bonne: 1, explication: "Par exemple, une darne de saumon ou de colin. Sur un gros poisson plat, on parle de tronçon." },
      { q: "Lequel est un mollusque ?", choix: ["Le homard", "L'huître", "La langoustine", "La crevette"], bonne: 1, explication: "Mollusques : huîtres, moules, Saint-Jacques. Crustacés : homard, langoustine, crevette, crabe." },
      { q: "Une moule crue reste ouverte même quand on tape dessus. Que fais-tu ?", choix: ["Je la cuis quand même", "Je la jette", "Je la mets au congélateur", "Je la rince plus longtemps"], bonne: 1, explication: "Une moule ouverte qui ne se referme pas est morte : elle peut être dangereuse." },
      { q: "Le calamar, la seiche et le poulpe sont des…", choix: ["Crustacés", "Céphalopodes", "Poissons plats", "Coquillages"], bonne: 1, explication: "Ce sont des mollusques sans coquille extérieure, avec des tentacules." },
      { q: "Dans une coquille Saint-Jacques, on consomme…", choix: ["La noix et le corail", "La coquille", "Uniquement les barbes", "Les branchies"], bonne: 0, explication: "La noix est le muscle blanc ; le corail, la partie orangée." }
    ]
  },
  {
    id: "oeufs-produit",
    titre: "Les œufs",
    matiere: "Connaissance des produits",
    questions: [
      { q: "Sur la coquille, le premier chiffre du code est 0. Ça signifie…", choix: ["Œuf de poule élevée en cage", "Œuf bio", "Œuf de poule élevée au sol", "Œuf périmé"], bonne: 1, explication: "0 = bio, 1 = plein air, 2 = au sol, 3 = en cage." },
      { q: "Jusqu'à combien de jours après la ponte un œuf peut-il être vendu « extra-frais » ?", choix: ["3 jours", "9 jours", "28 jours", "2 mois"], bonne: 1, explication: "Au-delà de 9 jours, il est simplement « frais » (catégorie A)." },
      { q: "Un œuf de calibre M pèse…", choix: ["Moins de 53 g", "De 53 à 63 g", "De 63 à 73 g", "Plus de 73 g"], bonne: 1, explication: "S : moins de 53 g ; M : 53-63 g ; L : 63-73 g ; XL : 73 g et plus." },
      { q: "Tu plonges un œuf dans l'eau : il flotte. Que peux-tu en déduire ?", choix: ["Il est très frais", "Il est vieux : sa chambre à air s'est agrandie", "Il est cuit", "Il est bio"], bonne: 1, explication: "Un œuf très frais coule et reste couché au fond." },
      { q: "Quel composant du jaune d'œuf permet de faire une mayonnaise ?", choix: ["Le sucre", "La lécithine (émulsifiant)", "Le sel", "L'eau"], bonne: 1, explication: "La lécithine permet de mélanger durablement l'huile et l'eau." },
      { q: "À la cuisson, quelle partie de l'œuf coagule en premier ?", choix: ["Le jaune", "Le blanc", "Les deux en même temps", "Aucune des deux"], bonne: 1, explication: "Le blanc coagule vers 62-65 °C, le jaune un peu plus tard, vers 65-70 °C." },
      { q: "Combien de temps cuit un œuf mollet dans l'eau bouillante ?", choix: ["1 minute", "Environ 5 à 6 minutes", "Environ 10 minutes", "20 minutes"], bonne: 1, explication: "Œuf à la coque : 3 min ; mollet : 5-6 min ; dur : 9-10 min." },
      { q: "Faut-il laver les œufs avant de les stocker ?", choix: ["Oui, toujours", "Non : le lavage abîme la protection naturelle de la coquille", "Oui, à l'eau chaude", "Seulement les œufs bio"], bonne: 1, explication: "On casse les œufs à part, dans un ramequin, et on se lave les mains après." },
      { q: "Une mayonnaise maison aux œufs crus doit être…", choix: ["Gardée à température ambiante", "Conservée au froid et consommée rapidement, dans la journée", "Congelée", "Gardée une semaine"], bonne: 1, explication: "Les préparations aux œufs crus sont très sensibles aux salmonelles." },
      { q: "Pourquoi la restauration collective utilise-t-elle souvent des ovoproduits (œufs liquides pasteurisés) ?", choix: ["Pour le goût", "Pour la sécurité sanitaire et le gain de temps", "Parce qu'ils sont plus jolis", "Parce que c'est obligatoire partout"], bonne: 1, explication: "La pasteurisation limite le risque de salmonelles." }
    ]
  },
  {
    id: "fruits-legumes",
    titre: "Fruits et légumes",
    matiere: "Connaissance des produits",
    questions: [
      { q: "Des carottes déjà épluchées, lavées et râpées, vendues en sachet, sont des légumes de…", choix: ["1re gamme", "3e gamme", "4e gamme", "5e gamme"], bonne: 2, explication: "1re : frais ; 2e : conserve ; 3e : surgelé ; 4e : cru prêt à l'emploi ; 5e : cuit, sous vide." },
      { q: "Les légumes surgelés appartiennent à la…", choix: ["1re gamme", "2e gamme", "3e gamme", "5e gamme"], bonne: 2, explication: "Les conserves forment la 2e gamme." },
      { q: "La pomme de terre est…", choix: ["Une racine", "Un tubercule", "Un fruit", "Une feuille"], bonne: 1, explication: "La carotte et le navet sont des racines." },
      { q: "Lequel continue à mûrir après la cueillette ?", choix: ["La fraise", "Le raisin", "La banane", "L'orange"], bonne: 2, explication: "La banane, la tomate, la pomme ou la poire sont des fruits climactériques. La fraise, le raisin et les agrumes ne mûrissent plus." },
      { q: "Lequel est un légume d'hiver ?", choix: ["La tomate", "La courgette", "Le poireau", "Le poivron"], bonne: 2, explication: "En hiver : poireau, chou, céleri-rave, endive. Tomate, courgette et poivron sont des légumes d'été." },
      { q: "Pourquoi retirer les parties vertes d'une pomme de terre ?", choix: ["Elles sont dures", "Elles contiennent de la solanine, toxique", "Elles noircissent", "Elles sont trop sucrées"], bonne: 1, explication: "On retire aussi les germes." },
      { q: "Monder une tomate, c'est…", choix: ["La couper en dés", "Retirer sa peau après un passage rapide dans l'eau bouillante puis glacée", "La faire sécher", "La vider de ses graines"], bonne: 1, explication: "Ensuite, on peut l'épépiner et la concasser." },
      { q: "Pourquoi frotte-t-on un artichaut ou une pomme coupée avec du citron ?", choix: ["Pour la saler", "Pour éviter qu'elle noircisse (oxydation)", "Pour la cuire", "Pour la sucrer"], bonne: 1, explication: "L'acidité du citron ralentit le brunissement." },
      { q: "Lentilles, pois cassés et haricots secs sont des…", choix: ["Légumes-feuilles", "Légumes secs (légumineuses)", "Fruits secs", "Céréales"], bonne: 1, explication: "Certains se font tremper avant la cuisson. On les cuit en départ eau froide, salés en fin de cuisson." },
      { q: "En restauration, pourquoi lave-t-on soigneusement les légumes servis crus ?", choix: ["Pour les rendre plus brillants", "Pour éliminer la terre, les bactéries et les parasites", "Pour les ramollir", "Ce n'est pas utile"], bonne: 1, explication: "On lave, on désinfecte selon le protocole de l'établissement, puis on rince." }
    ]
  },
  {
    id: "epices-herbes",
    titre: "Épices, herbes et condiments",
    matiere: "Connaissance des produits",
    questions: [
      { q: "Que contient un bouquet garni classique ?", choix: ["Thym, laurier, queues de persil", "Basilic, menthe, coriandre", "Ail, oignon, échalote", "Poivre, sel, muscade"], bonne: 0, explication: "On l'enveloppe souvent dans du vert de poireau et on le ficelle." },
      { q: "Quelles sont les « fines herbes » ?", choix: ["Thym, romarin, laurier", "Persil, cerfeuil, ciboulette, estragon", "Basilic, origan, sarriette", "Menthe, aneth, coriandre"], bonne: 1, explication: "On les utilise par exemple dans l'omelette aux fines herbes." },
      { q: "Le safran, c'est…", choix: ["Une racine séchée", "Les pistils séchés d'une fleur de crocus", "Une graine", "Une écorce"], bonne: 1, explication: "C'est l'épice la plus chère au monde : il faut des milliers de fleurs pour en faire un peu." },
      { q: "Quelle différence entre le poivre noir et le poivre blanc ?", choix: ["Ce sont deux plantes différentes", "C'est la même baie ; le blanc est débarrassé de son enveloppe", "Le blanc est artificiel", "Le noir est brûlé"], bonne: 1, explication: "On utilise le poivre blanc pour ne pas tacher les sauces blanches." },
      { q: "Les câpres sont…", choix: ["Des petites olives", "Des boutons de fleurs du câprier, confits dans le vinaigre", "Des grains de poivre vert", "Des cornichons"], bonne: 1, explication: "On les utilise dans la sauce grenobloise et la sauce tartare." },
      { q: "Le piment d'Espelette bénéficie d'une AOP. Il vient…", choix: ["De Provence", "Du Pays basque", "De Bretagne", "D'Alsace"], bonne: 1, explication: "C'est une épice douce et parfumée." },
      { q: "Un oignon « clouté » est piqué avec…", choix: ["Des clous de girofle", "Des grains de poivre", "Des graines de moutarde", "De l'ail"], bonne: 0, explication: "On l'ajoute dans les fonds blancs, les bouillons et la béchamel parfumée." },
      { q: "La fleur de sel est…", choix: ["Du sel parfumé aux fleurs", "Une fine couche de sel récoltée à la main à la surface des marais salants", "Du sel fin industriel", "Du sel de mine"], bonne: 1, explication: "On l'utilise plutôt en finition, pour son croquant." },
      { q: "Quand ajouter des herbes fragiles comme le cerfeuil ou le basilic ?", choix: ["Au début d'une cuisson longue", "En fin de cuisson ou au dressage", "Jamais fraîches", "La veille"], bonne: 1, explication: "La chaleur leur fait perdre leur couleur et leur parfum." },
      { q: "On râpe un peu de noix de muscade dans…", choix: ["La béchamel et la purée", "La crème anglaise", "La vinaigrette", "Le fumet de poisson"], bonne: 0, explication: "Elle relève aussi la sauce Mornay et les gratins." }
    ]
  },
  {
    id: "produits-laitiers",
    titre: "Produits laitiers",
    matiere: "Connaissance des produits",
    questions: [
      { q: "Le lait UHT…", choix: ["N'a pas été chauffé", "A été chauffé très fort quelques secondes et se garde plusieurs mois fermé, à température ambiante", "Doit être bu en 24 h", "Est toujours écrémé"], bonne: 1, explication: "Une fois ouvert, il se conserve au froid et se consomme en quelques jours." },
      { q: "En France, le bouchon bleu correspond au lait…", choix: ["Entier", "Demi-écrémé", "Écrémé", "Cru"], bonne: 1, explication: "Rouge : entier ; bleu : demi-écrémé ; vert : écrémé." },
      { q: "Le lait cru, c'est un lait…", choix: ["Chauffé à 100 °C", "Qui n'a pas été chauffé au-delà de 40 °C", "En poudre", "Sans matière grasse"], bonne: 1, explication: "Il est déconseillé aux femmes enceintes, aux jeunes enfants et aux personnes fragiles." },
      { q: "Pour réussir une chantilly, il faut une crème…", choix: ["Liquide, entière et bien froide (au moins 30 % de matière grasse)", "Allégée à 15 %", "Épaisse et tiède", "En spray"], bonne: 0, explication: "Le froid et la matière grasse permettent d'emprisonner l'air." },
      { q: "Quelle différence entre la crème fraîche épaisse et la crème liquide ?", choix: ["La crème épaisse contient de la farine", "La crème épaisse a été ensemencée de ferments lactiques", "La crème liquide est toujours UHT", "Aucune"], bonne: 1, explication: "Les ferments la font épaissir et lui donnent un léger goût acidulé." },
      { q: "Le beurre contient au moins…", choix: ["50 % de matière grasse", "82 % de matière grasse", "100 % de matière grasse", "20 % de matière grasse"], bonne: 1, explication: "Le reste est surtout de l'eau." },
      { q: "Pourquoi clarifie-t-on le beurre ?", choix: ["Pour le saler", "Pour retirer le petit-lait : il supporte alors une cuisson plus chaude sans brûler", "Pour le colorer", "Pour le rendre allégé"], bonne: 1, explication: "On l'utilise pour la sauce hollandaise ou pour saisir." },
      { q: "Le yaourt est un lait fermenté par…", choix: ["De la levure de boulanger", "Deux bactéries lactiques spécifiques", "De la présure", "Du vinaigre"], bonne: 1, explication: "Lactobacillus bulgaricus et Streptococcus thermophilus." },
      { q: "Lequel de ces produits laitiers a une AOP ?", choix: ["La crème d'Isigny", "La crème allégée", "Le lait en poudre", "La crème en bombe"], bonne: 0, explication: "Le beurre et la crème d'Isigny (Normandie) sont protégés par une AOP." },
      { q: "Où stocke-t-on les produits laitiers frais ?", choix: ["À température ambiante", "Au froid, entre 0 et +4 °C", "Au congélateur", "Près du four"], bonne: 1, explication: "On respecte aussi les DLC et la règle du premier entré, premier sorti." }
    ]
  },
  {
    id: "fromages",
    titre: "Fromages",
    matiere: "Connaissance des produits",
    questions: [
      { q: "Le camembert est un fromage à…", choix: ["Pâte pressée cuite", "Pâte molle à croûte fleurie", "Pâte persillée", "Pâte molle à croûte lavée"], bonne: 1, explication: "Le brie est lui aussi une pâte molle à croûte fleurie." },
      { q: "Le comté est un fromage à…", choix: ["Pâte pressée cuite", "Pâte molle", "Pâte persillée", "Pâte fraîche"], bonne: 0, explication: "Le beaufort et l'emmental sont aussi des pâtes pressées cuites." },
      { q: "Le roquefort est fabriqué avec du lait de…", choix: ["Vache", "Chèvre", "Brebis", "Bufflonne"], bonne: 2, explication: "C'est un fromage à pâte persillée, protégé par une AOP." },
      { q: "Le munster et le maroilles sont des fromages à…", choix: ["Croûte fleurie", "Croûte lavée", "Pâte pressée cuite", "Pâte fraîche"], bonne: 1, explication: "Leur croûte est lavée pendant l'affinage : elle est orangée et dégage une odeur forte." },
      { q: "Le reblochon vient de…", choix: ["Savoie", "Normandie", "Bretagne", "Provence"], bonne: 0, explication: "C'est une pâte pressée non cuite, l'ingrédient de la tartiflette." },
      { q: "Le crottin de Chavignol est un fromage de…", choix: ["Vache", "Chèvre", "Brebis", "Mélange vache et brebis"], bonne: 1, explication: "C'est un petit fromage de chèvre du Centre-Val de Loire." },
      { q: "Pendant la fabrication, quelle étape transforme le lait en caillé ?", choix: ["L'affinage", "Le caillage (avec la présure ou des ferments)", "Le salage", "Le moulage"], bonne: 1, explication: "Les étapes : caillage, égouttage, moulage, salage, affinage." },
      { q: "Le saint-nectaire, le cantal et la tomme de Savoie sont des pâtes…", choix: ["Pressées non cuites", "Pressées cuites", "Molles à croûte fleurie", "Persillées"], bonne: 0, explication: "Le caillé est pressé mais pas chauffé." },
      { q: "Comment sert-on un plateau de fromages ?", choix: ["Sortis du froid au dernier moment", "À température ambiante : on les sort environ 1 h avant", "Chauds", "Congelés"], bonne: 1, explication: "C'est à température ambiante que le fromage révèle ses arômes." },
      { q: "Dans quel ordre fait-on goûter les fromages ?", choix: ["Du plus fort au plus doux", "Du plus doux au plus fort", "Au hasard", "Les bleus en premier"], bonne: 1, explication: "On finit par les plus forts (persillés, croûtes lavées) pour ne pas écraser les goûts délicats." }
    ]

  }
];
