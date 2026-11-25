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
      { q: "À quelle température doit-on conserver la viande fraîche ?", choix: ["Entre 0 °C et +3 °C","Entre +6 °C et +8 °C","−18 °C","+10 °C"], bonne: 0, explication: "Les produits très périssables se conservent entre 0 °C et +3 °C." },
      { q: "En combien de temps doit-on refroidir un plat de +63 °C à +10 °C ?", choix: ["Moins de 6 h","Moins de 2 h","Moins de 4 h","Une nuit au frigo"], bonne: 1, explication: "Le refroidissement rapide se fait en moins de 2 h, en cellule de refroidissement." },
      { q: "Les locaux ne permettent pas de séparer physiquement le propre et le sale. Comment respecte-t-on quand même la marche en avant ?", choix: ["En séparant les tâches dans le temps, avec un nettoyage-désinfection entre deux","En travaillant plus vite pour limiter les croisements","En portant des gants pour toutes les tâches","En gardant les déchets en cuisine jusqu'à la fin du service"], bonne: 0, explication: "On fait d'abord les tâches sales (épluchage), on nettoie et on désinfecte, puis on passe aux préparations propres." },
      { q: "Un cuisinier revient des toilettes et reprend son poste sans se laver les mains. Quel « M » est en cause ?", choix: ["Matière","Milieu","Main-d'œuvre","Méthode"], bonne: 2, explication: "La main-d'œuvre, c'est le personnel : sa tenue, son hygiène, son état de santé." },
      { q: "Des légumes taillés en dés réguliers de 1 à 2 mm forment…", choix: ["Une macédoine","Une brunoise","Une mirepoix","Une paysanne"], bonne: 1, explication: "Macédoine : dés de 4-5 mm. Mirepoix : gros dés irréguliers. Paysanne : fines tranches d'environ 1 cm." },
      { q: "Quelle est la base d'une sauce béchamel ?", choix: ["Roux brun + fond brun","Roux blond + fond blanc","Roux blanc + lait","Jaunes d'œufs + beurre"], bonne: 2, explication: "Roux blond + fond blanc = velouté ; roux brun + fond brun = espagnole." },
      { q: "Pour 1 litre de béchamel bien nappante, quelles quantités de roux utilise-t-on environ ?", choix: ["60 g de beurre et 60 g de farine","60 g de beurre et 120 g de farine","120 g de beurre et 60 g de farine","20 g de beurre et 20 g de farine"], bonne: 0, explication: "Le roux se fait à poids égal de beurre et de farine. Moins de roux donne une sauce trop liquide." },
      { q: "La mayonnaise est…", choix: ["Une émulsion chaude","Une émulsion froide","Une sauce liée au roux","Une réduction"], bonne: 1, explication: "La hollandaise est une émulsion chaude ; la mayonnaise une émulsion froide." },
      { q: "Pour la pâte à choux, que fait-on juste après avoir ajouté la farine ?", choix: ["On ajoute tout de suite les œufs","On dessèche la panade sur le feu","On met au frais 1 h","On ajoute de la levure"], bonne: 1, explication: "On dessèche la panade 1 à 2 min sur le feu pour retirer l'humidité, puis on ajoute les œufs." },
      { q: "Qu'est-ce qui distingue un fond brun d'un fond blanc ?", choix: ["Il est lié au roux brun dès le départ","Les os et la garniture aromatique sont colorés au four avant le mouillage","Il est mouillé uniquement au vin rouge","Il cuit moins longtemps que le fond blanc"], bonne: 1, explication: "La coloration au four donne la couleur et le goût. Le fond n'est pas lié au départ." }
    ]
  },
  {
    id: "micro-organismes",
    titre: "Micro-organismes et risques",
    matiere: "Sciences appliquées",
    questions: [
      { q: "Quelles sont les 4 grandes familles de micro-organismes ?", choix: ["Bactéries, levures, moisissures, virus","Bactéries, levures, moisissures, enzymes","Bactéries, virus, toxines, levures","Moisissures, ferments, toxines, virus"], bonne: 0, explication: "Les toxines et les enzymes sont des substances, pas des êtres vivants. On ajoute aussi les parasites." },
      { q: "Quelle est la zone de danger, où les bactéries se multiplient vite ?", choix: ["De 0 °C à +3 °C","De +10 °C à +63 °C","De +63 °C à +100 °C","En dessous de −18 °C"], bonne: 1, explication: "Entre +10 °C et +63 °C, avec une multiplication maximale autour de 37 °C." },
      { q: "Dans de bonnes conditions, une bactérie se divise en deux environ toutes les…", choix: ["20 à 30 minutes","2 heures","6 heures","24 heures"], bonne: 0, explication: "En 5 heures, une bactérie peut donc en donner plus de 1 000." },
      { q: "Lequel de ces aliments est le plus favorable à la multiplication des bactéries ?", choix: ["Le riz cru","La confiture","La crème pâtissière","Les biscuits secs"], bonne: 2, explication: "Elle est humide, riche en protéines (lait, œufs) et en sucre. Confiture et biscuits secs manquent d'eau disponible." },
      { q: "Qu'est-ce qu'une spore ?", choix: ["Une bactérie morte, inoffensive","Une forme de résistance de certaines bactéries, qui survit à la cuisson","Une toxine produite par la bactérie","Une moisissure visible sur l'aliment"], bonne: 1, explication: "Les spores de Clostridium ou de Bacillus cereus survivent à la cuisson et se réveillent si le plat refroidit lentement." },
      { q: "La contamination croisée, c'est…", choix: ["Les microbes déjà présents sur la matière première","Le transfert de microbes d'un aliment, d'une surface ou d'une main vers un aliment sain","La cuisson de deux aliments ensemble","Le mélange de deux produits d'entretien"], bonne: 1, explication: "Exemple : couper un légume sur la planche qui a servi pour la volaille crue." },
      { q: "Après un repas, combien de personnes doivent présenter les mêmes troubles digestifs pour parler de TIAC ?", choix: ["1","Au moins 2","Au moins 5","Au moins 10"], bonne: 1, explication: "Au moins 2 cas similaires liés à un même repas. La TIAC doit être déclarée à l'ARS." },
      { q: "Pourquoi une intoxination peut-elle rendre malade même après une cuisson correcte ?", choix: ["Parce que la cuisson ne tue aucune bactérie","Parce que la toxine déjà produite dans l'aliment résiste à la chaleur","Parce que les spores se réveillent dans l'estomac","Parce que la cuisson fabrique la toxine"], bonne: 1, explication: "Exemple : la toxine du staphylocoque doré, produite avant la cuisson." },
      { q: "Clostridium botulinum peut se développer dans une conserve fermée parce qu'elle est…", choix: ["Aérobie : elle a besoin d'oxygène","Anaérobie : elle se développe sans oxygène","Résistante au sel uniquement","Capable de pousser seulement au-dessus de +63 °C"], bonne: 1, explication: "Une boîte bombée est un signe d'alerte : on la jette sans l'ouvrir." },
      { q: "Laquelle de ces bactéries est UTILE ?", choix: ["Salmonella","Listeria","Les bactéries des yaourts et des fromages","Staphylococcus aureus"], bonne: 2, explication: "Certaines bactéries servent à la fermentation : yaourts, fromages, pain au levain." }
    ]
  },
  {
    id: "hygiene-haccp",
    titre: "Hygiène, HACCP et températures",
    matiere: "Sciences appliquées",
    questions: [
      { q: "À quelle température doit-on réceptionner des produits surgelés ?", choix: ["−18 °C ou moins","−12 °C ou moins","−5 °C ou moins","0 °C ou moins"], bonne: 0, explication: "Un produit surgelé livré au-dessus de −18 °C est refusé ou fait l'objet de réserves." },
      { q: "À quelle température minimum doit-on maintenir un plat en liaison chaude ?", choix: ["+45 °C","+55 °C","+63 °C","+100 °C"], bonne: 2, explication: "Liaison chaude : +63 °C minimum jusqu'au service." },
      { q: "Combien de principes compte la méthode HACCP ?", choix: ["3","5","7","10"], bonne: 2, explication: "Dangers, CCP, limites critiques, surveillance, actions correctives, vérification, documentation." },
      { q: "En HACCP, un « CCP » est…", choix: ["Un contrôle des cuissons et des préparations","Un point critique où l'on doit maîtriser un danger","Une chambre froide positive","Un contrôle de conformité des produits livrés"], bonne: 1, explication: "Exemple : la cuisson, le refroidissement, le maintien au chaud, avec une limite à surveiller." },
      { q: "Le PMS (plan de maîtrise sanitaire) regroupe…", choix: ["Les bonnes pratiques d'hygiène, le plan HACCP et la traçabilité","Le plan HACCP, le plan de nettoyage et les fiches techniques","Les bonnes pratiques d'hygiène et la formation du personnel seulement","La traçabilité et le contrôle des fournisseurs seulement"], bonne: 0, explication: "Il est obligatoire dans tout établissement de restauration." },
      { q: "Dans quel ordre se fait un nettoyage-désinfection ?", choix: ["Pré-lavage, désinfection, lavage, rinçage, séchage","Pré-lavage, lavage, rinçage, désinfection, rinçage final, séchage","Lavage, séchage, désinfection, rinçage","Désinfection, lavage, rinçage, séchage"], bonne: 1, explication: "On retire d'abord les salissures : un désinfectant agit mal sur une surface sale." },
      { q: "Quel est le rôle d'un détergent ?", choix: ["Détruire les micro-organismes","Éliminer les salissures (graisses, restes)","Détartrer les surfaces","Remplacer le rinçage"], bonne: 1, explication: "C'est le désinfectant qui détruit les micro-organismes." },
      { q: "Tu t'es coupé au doigt. Que fais-tu avant de reprendre le travail ?", choix: ["Je mets seulement un gant jetable","Un pansement étanche et un doigtier ou un gant de couleur vive","Un pansement simple, et je me lave souvent les mains","Je préviens le chef en fin de service"], bonne: 1, explication: "Une plaie est une source de staphylocoques. La couleur vive permet de retrouver le doigtier s'il tombe." },
      { q: "Un yaourt porte la mention « À consommer jusqu'au 12/03 ». Il s'agit…", choix: ["D'une DLC : la date est impérative, on jette après","D'une DDM : on peut encore le servir après","D'une date de fabrication","D'une date limite de vente"], bonne: 0, explication: "« À consommer de préférence avant » indique une DDM, qui n'est qu'indicative." },
      { q: "La pasteurisation…", choix: ["Détruit tous les microbes : conservation longue à température ambiante","Détruit une partie des microbes : conservation courte au froid","Détruit tous les microbes : conservation au congélateur","Ralentit seulement les microbes, sans en détruire"], bonne: 1, explication: "La stérilisation et l'appertisation détruisent tout : conservation longue à température ambiante." }
    ]
  },
  {
    id: "nutrition",
    titre: "Nutrition et allergènes",
    matiere: "Sciences appliquées",
    questions: [
      { q: "Quel est le rôle principal des protides (protéines) ?", choix: ["Énergétique rapide","Plastique : construire et réparer le corps","Fonctionnel : protéger l'organisme","Réserve d'énergie"], bonne: 1, explication: "On les trouve dans les viandes, poissons, œufs, laitages et légumineuses." },
      { q: "Quel est le rôle principal des glucides ?", choix: ["Énergétique","Plastique : construire les muscles","Fonctionnel : protéger l'organisme","Réguler le transit"], bonne: 0, explication: "Glucides complexes (féculents) : énergie durable. Sucres simples : énergie rapide, à limiter." },
      { q: "Combien y a-t-il d'allergènes à déclaration obligatoire ?", choix: ["5","10","14","20"], bonne: 2, explication: "Gluten, crustacés, œufs, poissons, arachides, soja, lait, fruits à coque, céleri, moutarde, sésame, sulfites, lupin, mollusques." },
      { q: "Lequel de ces aliments ne fait PAS partie des 14 allergènes à déclaration obligatoire ?", choix: ["Le céleri","Le sésame","La tomate","Le lupin"], bonne: 2, explication: "Le céleri, le sésame, le lupin et la moutarde font partie de la liste, et on les oublie souvent." },
      { q: "Quelle est la différence entre une allergie et une intolérance alimentaire ?", choix: ["L'intolérance déclenche une réaction immunitaire, l'allergie non","L'allergie fait réagir le système immunitaire et peut être grave ; l'intolérance est une difficulté à digérer","Les deux sont des réactions immunitaires de même gravité","L'allergie ne concerne que le gluten et le lait"], bonne: 1, explication: "Une simple trace peut déclencher une allergie grave. Exemple d'intolérance : le lactose." },
      { q: "Combien de fruits et légumes par jour le PNNS recommande-t-il au minimum ?", choix: ["2","3","5","10"], bonne: 2, explication: "PNNS = Programme national nutrition santé." },
      { q: "Le GEMRCN donne des recommandations sur…", choix: ["Les grammages et la fréquence des plats en restauration collective","Les températures de stockage en restauration","L'étiquetage des allergènes","Les prix des menus en restauration commerciale"], bonne: 0, explication: "Il vise l'équilibre des repas, par exemple dans les cantines et les hôpitaux." },
      { q: "Où se fait l'absorption des nutriments dans le sang ?", choix: ["Dans la bouche","Dans l'estomac","Dans l'intestin grêle","Dans le gros intestin"], bonne: 2, explication: "Le gros intestin absorbe surtout l'eau et élimine les déchets." },
      { q: "Quelle vitamine est la plus fragile à la chaleur et à l'eau de cuisson ?", choix: ["La vitamine C","La vitamine D","La vitamine A","La vitamine E"], bonne: 0, explication: "Les vitamines du groupe B sont aussi fragiles : on préfère les cuissons courtes, à la vapeur." },
      { q: "À quoi servent les fibres ?", choix: ["À apporter de l'énergie rapide","À faciliter le transit et à donner la sensation de satiété","À construire les muscles","À fixer le calcium dans les os"], bonne: 1, explication: "On les trouve dans les légumes, les fruits, les céréales complètes et les légumineuses." }
    ]
  },
  {
    id: "transformations-materiel",
    titre: "Transformations, matériel et environnement",
    matiere: "Sciences appliquées",
    questions: [
      { q: "La réaction de Maillard, c'est…", choix: ["Sucres + protéines + chaleur sèche → brunissement et arômes","Sucres seuls + chaleur","Le durcissement du blanc d'œuf","La prise d'une gelée"], bonne: 0, explication: "Elle se produit au-delà de 140 °C environ : croûte du pain, viande grillée." },
      { q: "La caramélisation concerne…", choix: ["Les protéines seules","Les sucres seuls chauffés","L'amidon dans l'eau","Les matières grasses"], bonne: 1, explication: "Elle commence vers 150-160 °C." },
      { q: "Quand un œuf durcit à la cuisson, il s'agit de…", choix: ["La gélatinisation","La coagulation des protéines (irréversible)","La fermentation","L'émulsion"], bonne: 1, explication: "La coagulation concerne aussi la viande et le poisson. On ne peut pas revenir en arrière." },
      { q: "Pourquoi une sauce liée à la farine épaissit-elle ?", choix: ["Gélatinisation de l'amidon : il absorbe l'eau et gonfle","Réaction de Maillard","Caramélisation","Fermentation"], bonne: 0, explication: "L'amidon gonfle à la chaleur et épaissit les sauces et les liaisons." },
      { q: "Dans la mayonnaise, qu'est-ce qui permet de garder l'émulsion stable ?", choix: ["L'acidité du vinaigre","La lécithine du jaune d'œuf (aidée par la moutarde)","Le sel, qui fixe l'huile","La chaleur de l'huile"], bonne: 1, explication: "La lécithine est un émulsifiant : elle permet de disperser l'huile dans la partie aqueuse." },
      { q: "Quel est le matériau de référence en cuisine professionnelle ?", choix: ["Le bois","L'acier inoxydable (inox)","L'aluminium","Le cuivre non étamé"], bonne: 1, explication: "Il est résistant, inerte et facile à nettoyer." },
      { q: "Pourquoi l'aluminium demande-t-il des précautions en cuisine ?", choix: ["Il conduit mal la chaleur","Il réagit avec les aliments acides","Il rouille au contact de l'eau","Il ne supporte pas le four"], bonne: 1, explication: "Tomate, citron ou vin dans un récipient en aluminium : goût métallique et usure du métal." },
      { q: "Pour cuire sur une plaque à induction, il faut un récipient…", choix: ["À fond plat, quel que soit le métal","Ferromagnétique (un aimant colle dessous)","En cuivre ou en aluminium, très bons conducteurs","En verre résistant à la chaleur"], bonne: 1, explication: "Le champ magnétique chauffe directement le fond du récipient." },
      { q: "Que fait-on des biodéchets en cuisine professionnelle ?", choix: ["On les jette avec les ordures ménagères","On les trie pour le compostage ou la méthanisation","On les met avec les emballages recyclables","On les verse dans le bac à graisses"], bonne: 1, explication: "Le tri des biodéchets est obligatoire pour les professionnels." },
      { q: "Que veut dire PRAP ?", choix: ["Prévention des risques liés à l'activité physique","Plan de restauration à prix","Protocole de rangement des aliments périssables","Prime de rendement"], bonne: 0, explication: "Bonnes postures, organisation du poste, aides à la manutention, pour éviter les TMS." }
    ]
  },
  {
    id: "brigade-organisation",
    titre: "Brigade, organisation et matériel",
    matiere: "Technologie culinaire",
    questions: [
      { q: "Qui est directement sous les ordres du chef de cuisine ?", choix: ["Le commis","Le second de cuisine","L'apprenti","Le plongeur"], bonne: 1, explication: "Chef → second → chefs de partie → commis → apprenti." },
      { q: "Quel chef de partie s'occupe des sauces ?", choix: ["Le garde-manger","Le saucier","L'entremétier","Le pâtissier"], bonne: 1, explication: "Le garde-manger s'occupe des préparations froides ; l'entremétier des légumes, potages et œufs." },
      { q: "Le chef de partie qui remplace les autres pendant leurs repos s'appelle…", choix: ["Le tournant","Le poissonnier","Le second","Le commis"], bonne: 0, explication: "Le tournant connaît plusieurs postes." },
      { q: "Qu'est-ce que l'ordonnancement ?", choix: ["Ranger la chambre froide","Planifier les tâches dans le temps pour être prêt à l'heure du service","Commander chez le fournisseur","Nettoyer le poste"], bonne: 1, explication: "On part de l'heure de service et on remonte le temps : c'est le rétro-planning." },
      { q: "Quel document liste les ingrédients, les quantités, le coût matière et la technique d'une recette ?", choix: ["Le bon de livraison","La fiche technique de fabrication","La facture","Le planning"], bonne: 1, explication: "La fiche de production organise, elle, les tâches dans l'ordre chronologique." },
      { q: "Quel est l'ordre des zones selon la marche en avant ?", choix: ["Réception → stockage → légumerie → préparations → dressage et envoi","Réception → légumerie → stockage → préparations → envoi","Réception → préparations → stockage → envoi","Stockage → réception → préparations → légumerie"], bonne: 0, explication: "Les produits avancent vers le propre, sans croiser le circuit sale (déchets, plonge)." },
      { q: "Quel matériel utilise-t-on pour gratiner ?", choix: ["La friteuse","La salamandre","La marmite","Le batteur"], bonne: 1, explication: "La salamandre sert aux gratins, aux cuissons grillées et aux finitions." },
      { q: "La sauteuse multifonction (grand matériel) sert surtout à…", choix: ["Braiser et mijoter en grande quantité","Frire en grande quantité","Gratiner et glacer","Cuire à la vapeur sous pression"], bonne: 0, explication: "Pour gratiner : la salamandre. Pour la vapeur : le four mixte." },
      { q: "Quel couteau utilise-t-on pour lever les filets d'une sole ?", choix: ["Le couteau d'office","Le couteau filet de sole","Le désosseur","L'éminceur"], bonne: 1, explication: "Sa lame fine et souple suit l'arête. Le désosseur, rigide, sert pour la viande." },
      { q: "Le joint de porte d'une chambre froide est abîmé. Quelle est la conséquence ?", choix: ["Le froid s'échappe : la température devient instable et la consommation d'énergie augmente","Aucune, le compresseur compense","Seule la lumière intérieure est touchée","Les produits finissent par congeler"], bonne: 0, explication: "C'est pourquoi on vérifie régulièrement les joints, en plus du nettoyage." }
    ]
  },
  {
    id: "cuissons-fonds",
    titre: "Les cuissons et les fonds",
    matiere: "Technologie culinaire",
    questions: [
      { q: "Laquelle est une cuisson SANS brunissement ?", choix: ["Sauter","Rôtir","Pocher","Griller"], bonne: 2, explication: "Sans brunissement : pocher, vapeur, à l'anglaise." },
      { q: "Après une cuisson à l'anglaise, pourquoi plonge-t-on les haricots verts dans l'eau glacée ?", choix: ["Pour stopper la cuisson et fixer la couleur verte","Pour les saler","Pour les rendre plus tendres","Pour retirer l'amidon"], bonne: 0, explication: "On les égoutte ensuite aussitôt pour qu'ils ne se gorgent pas d'eau." },
      { q: "Laquelle est une cuisson AVEC brunissement ?", choix: ["La vapeur","Le pochage","Le rôtissage","La cuisson à l'anglaise"], bonne: 2, explication: "Avec brunissement : sauter, griller, rôtir, frire." },
      { q: "Pourquoi une viande sautée à feu vif prend-elle de la couleur et du goût ?", choix: ["Par caramélisation des sucres seuls","Par la réaction de Maillard (sucres + protéines + chaleur vive)","Par coagulation des protéines","Par gélatinisation de l'amidon"], bonne: 1, explication: "La coagulation durcit la viande mais ne la colore pas." },
      { q: "Braiser, poêler et cuire en ragoût sont des cuissons…", choix: ["Sans brunissement","Combinées","Avec brunissement uniquement","Par immersion dans la matière grasse"], bonne: 1, explication: "On colore d'abord, puis on cuit longuement dans un liquide, à couvert." },
      { q: "Pour quels morceaux choisit-on une cuisson combinée ?", choix: ["Les poissons fragiles","Les morceaux fermes, riches en collagène","Les légumes verts","Les viandes tendres de 1re catégorie"], bonne: 1, explication: "Paleron, joue ou épaule deviennent fondants après une cuisson longue et humide." },
      { q: "Pourquoi un fumet de poisson ne cuit-il qu'une vingtaine de minutes ?", choix: ["Au-delà, les arêtes donnent de l'amertume","Pour garder une couleur bien blanche","Parce que les arêtes se dissolvent","Parce qu'on le termine ensuite au four"], bonne: 0, explication: "Un fond de veau cuit plusieurs heures ; un fumet, environ 20 minutes." },
      { q: "Pour un velouté de volaille, quel fond utilise-t-on ?", choix: ["Un fond blanc de volaille","Un fond brun de veau","Un fumet de poisson","Un court-bouillon au vinaigre"], bonne: 0, explication: "Fond blanc + roux blond = velouté." },
      { q: "Pour pocher une truite entière, on la plonge dans un court-bouillon…", choix: ["Froid, puis on porte doucement à frémissement","Bouillant, à gros bouillons","Tiède, additionné de lait","Glacé, sans le chauffer"], bonne: 0, explication: "Le départ à froid évite que la peau éclate et que la chair se rétracte." },
      { q: "Une julienne de légumes, c'est…", choix: ["De petits dés de 1-2 mm","Des bâtonnets très fins de 1-2 mm","Des bâtonnets de 4-5 mm","De fines tranches d'environ 1 cm"], bonne: 1, explication: "Petits dés : brunoise. Bâtonnets de 4-5 mm : jardinière. Tranches d'1 cm : paysanne." }
    ]
  },
  {
    id: "sauces-pates",
    titre: "Sauces, liaisons et pâtes de base",
    matiere: "Technologie culinaire",
    questions: [
      { q: "Combien y a-t-il de sauces mères ?", choix: ["3","5","7","10"], bonne: 1, explication: "Béchamel, velouté, espagnole, tomate et hollandaise." },
      { q: "Le velouté se fait avec…", choix: ["Du lait et un roux blanc","Un fond blanc et un roux blond","Un fond brun et un roux brun","Des jaunes d'œufs et du beurre clarifié"], bonne: 1, explication: "Ses dérivées : suprême, aurore, poulette." },
      { q: "La sauce Mornay est une dérivée de la…", choix: ["Béchamel","Hollandaise","Sauce tomate","Espagnole"], bonne: 0, explication: "La soubise est aussi une dérivée de la béchamel." },
      { q: "La béarnaise est une dérivée de la…", choix: ["Béchamel","Hollandaise","Velouté","Sauce tomate"], bonne: 1, explication: "La mousseline aussi. La base : jaunes d'œufs et beurre clarifié." },
      { q: "Les sauces bordelaise, chasseur et madère dérivent de la…", choix: ["Sauce espagnole / demi-glace","Béchamel","Hollandaise","Mayonnaise"], bonne: 0, explication: "Base : fond brun et roux brun." },
      { q: "Le beurre manié, c'est…", choix: ["Du beurre clarifié","Du beurre et de la farine crus, pour rectifier une liaison en fin de cuisson","Du beurre fondu avec du sucre","Du beurre noisette"], bonne: 1, explication: "Le roux, lui, est cuit." },
      { q: "Comment utilise-t-on la fécule (Maïzena) pour lier ?", choix: ["Délayée à froid, puis incorporée en fin de cuisson","Jetée directement dans le liquide bouillant","Cuite avec le beurre comme un roux","Mélangée aux œufs crus"], bonne: 0, explication: "Si on la verse directement à chaud, elle fait des grumeaux." },
      { q: "La chantilly est une préparation…", choix: ["Émulsionnée","Foisonnée (on incorpore de l'air)","Gélifiée","Liée au roux"], bonne: 1, explication: "Mousses, appareils à soufflé et blancs en neige sont aussi foisonnés." },
      { q: "Comment utilise-t-on la gélatine en feuilles ?", choix: ["Ramollie dans l'eau froide, essorée, puis fondue dans une préparation chaude","Dissoute directement dans l'eau bouillante","Ajoutée sèche dans une préparation froide","Fondue dans du beurre"], bonne: 0, explication: "L'agar-agar, lui, doit bouillir pour agir." },
      { q: "Qu'est-ce qu'une duxelles ?", choix: ["Une farce fine de volaille","Des champignons hachés et suées à sec avec des échalotes","Une purée de champignons à la crème","Une sauce brune aux champignons"], bonne: 1, explication: "On la cuit jusqu'à évaporation complète de l'eau. Elle sert de farce ou de garniture." }
    ]
  },
  {
    id: "produits-menus",
    titre: "Produits, qualité et menus",
    matiere: "Technologie culinaire",
    questions: [
      { q: "Quel signe garantit qu'un produit est élaboré entièrement dans sa zone d'origine, selon un savoir-faire reconnu ?", choix: ["L'AOP","L'IGP","Le Label Rouge","L'Agriculture biologique"], bonne: 0, explication: "Pour l'IGP, une seule étape dans la zone suffit." },
      { q: "Lequel est un signe officiel de qualité supérieure ?", choix: ["Le Label Rouge","L'IGP","La mention « fait maison »","La STG"], bonne: 0, explication: "L'IGP garantit une origine, la STG une recette traditionnelle. « Fait maison » est une mention, pas un label." },
      { q: "Le jambon de Bayonne porte une IGP. Cela signifie…", choix: ["Qu'au moins une étape de sa production a lieu dans la zone","Que toutes les étapes ont lieu dans la zone, comme pour une AOP","Qu'il a une qualité gustative supérieure","Que le porc est élevé en agriculture biologique"], bonne: 0, explication: "C'est un signe d'origine moins strict que l'AOP." },
      { q: "Dans une génoise, quelle propriété de l'œuf est surtout utilisée ?", choix: ["Émulsifiante","Foisonnante","Gélifiante","Colorante"], bonne: 1, explication: "Les œufs battus avec le sucre emprisonnent de l'air : la génoise gonfle à la cuisson." },
      { q: "Quel est l'intérêt principal de cuisiner des produits de saison ?", choix: ["Meilleure qualité, prix plus bas et démarche durable","C'est une obligation légale sur la carte","Ils se conservent obligatoirement plus longtemps","Le GEMRCN l'impose aux restaurants commerciaux"], bonne: 0, explication: "C'est aussi un argument de vente pour la salle." },
      { q: "Quel menu respecte le mieux les règles d'équilibre et de variété ?", choix: ["Crème Dubarry / blanquette de veau / crème brûlée","Crudités / poulet rôti et haricots verts / tarte aux pommes","Feuilleté au fromage / cassoulet / profiteroles","Salade de tomates / tomates farcies / tarte à la tomate"], bonne: 1, explication: "Les autres menus répètent la crème, sont trop lourds ou reprennent trois fois le même produit." },
      { q: "Quel plat est emblématique du Sud-Ouest ?", choix: ["La choucroute","Le cassoulet","La bouillabaisse","La quiche lorraine"], bonne: 1, explication: "La bouillabaisse est provençale ; la choucroute est alsacienne." },
      { q: "Quel chef a codifié les sauces mères et organisé la brigade de cuisine ?", choix: ["Auguste Escoffier","Paul Bocuse","Fernand Point","Joël Robuchon"], bonne: 0, explication: "Paul Bocuse est associé à la nouvelle cuisine, dans les années 1970." },
      { q: "Quelle action réduit vraiment le gaspillage alimentaire ?", choix: ["Produire 20 % de plus pour ne jamais manquer","Ajuster les commandes et les grammages, et valoriser les parures","Jeter systématiquement les restes de la veille, même autorisés","Acheter en très grandes quantités pour payer moins cher"], bonne: 1, explication: "Moins de gaspillage, c'est aussi un meilleur ratio matière." },
      { q: "Après le CAP Cuisine, quelle poursuite d'études est possible ?", choix: ["Une mention complémentaire ou un Bac Pro","Un BTS directement, sans autre diplôme","Seulement un autre CAP","Aucune poursuite en restauration"], bonne: 0, explication: "Le BTS se prépare après un bac. On peut aussi entrer directement dans la vie active." }
    ]
  },
  {
    id: "achats-stocks-calculs",
    titre: "Achats, stocks et calculs",
    matiere: "Gestion appliquée",
    questions: [
      { q: "À la livraison, avec quel document compare-t-on le bon de livraison ?", choix: ["La facture","Le bon de commande","La mercuriale","La fiche technique"], bonne: 1, explication: "La facture arrive après : on la vérifiera elle aussi avec les deux bons." },
      { q: "Tu reçois des yaourts avec une DLC au 20/03. En chambre froide, il reste des yaourts DLC 15/03. Où places-tu les nouveaux ?", choix: ["Devant, pour les utiliser en premier","Derrière les anciens","Mélangés aux anciens","Au congélateur"], bonne: 1, explication: "C'est la méthode FIFO (PEPS) : premier entré, premier sorti." },
      { q: "Stock minimum : 20 kg. Stock de sécurité : 8 kg. Quel est le stock d'alerte ?", choix: ["12 kg","28 kg","20 kg","160 kg"], bonne: 1, explication: "Stock d'alerte = stock minimum + stock de sécurité = 20 + 8 = 28 kg." },
      { q: "Le comptage des produits lors de l'inventaire donne…", choix: ["Le stock théorique","Le stock réel","Le stock d'alerte","Le stock moyen"], bonne: 1, explication: "On le compare au stock théorique pour repérer les pertes ou les erreurs." },
      { q: "Quel est le taux de TVA pour un repas servi au restaurant ?", choix: ["2,1 %","5,5 %","10 %","20 %"], bonne: 2, explication: "Les boissons alcoolisées sont à 20 %." },
      { q: "Un plat coûte 20 € HT. Avec une TVA à 10 %, quel est son prix TTC ?", choix: ["20,10 €","22 €","30 €","18 €"], bonne: 1, explication: "Prix TTC = Prix HT × 1,10 = 20 × 1,10 = 22 €." },
      { q: "Un plat a un coût matière de 3 € et se vend 10 € HT. Quel est son ratio matière ?", choix: ["3 %","30 %","33 %","70 %"], bonne: 1, explication: "(3 ÷ 10) × 100 = 30 %. L'objectif se situe entre 28 et 35 %." },
      { q: "Un plat se vend 15 € HT pour un coût matière de 4,50 €. Quelle est la marge ?", choix: ["4,50 €","10,50 €","19,50 €","15 €"], bonne: 1, explication: "Marge = prix de vente HT − coût matière = 15 − 4,50 = 10,50 €." },
      { q: "Quel document donne les prix d'achat des matières premières pour valoriser une fiche technique ?", choix: ["La mercuriale","Le bon de commande","La fiche de stock","La facture du mois précédent"], bonne: 0, explication: "Elle doit être mise à jour régulièrement, car les prix changent." },
      { q: "Le coût de revient d'un plat est égal à…", choix: ["Coût matière + personnel de cuisine seulement","Charges directes + charges indirectes","Prix de vente − marge brute","Coût matière × coefficient"], bonne: 1, explication: "Coût matière × coefficient donne le prix de vente, pas le coût de revient." }
    ]
  },
  {
    id: "entreprise-travail",
    titre: "Entreprise, communication et droit du travail",
    matiere: "Gestion appliquée",
    questions: [
      { q: "Une cantine scolaire fait partie de la restauration…", choix: ["Commerciale","Collective","Rapide","Gastronomique"], bonne: 1, explication: "Collective : scolaire, entreprise, santé (hôpitaux, maisons de retraite)." },
      { q: "Qu'est-ce qu'une « dark kitchen » ?", choix: ["Un restaurant ouvert seulement la nuit","Une cuisine sans salle, qui produit uniquement pour la livraison","Un espace commun avec plusieurs comptoirs de restauration","Un restaurant à thème où l'on dîne dans le noir"], bonne: 1, explication: "Un espace avec plusieurs comptoirs, c'est un food court." },
      { q: "Lequel est un affichage obligatoire dans un restaurant ?", choix: ["Le nom des fournisseurs","L'origine des viandes","Le chiffre d'affaires du mois","Les fiches techniques"], bonne: 1, explication: "Il faut aussi afficher les prix, l'information sur les allergènes, la licence et l'interdiction de fumer." },
      { q: "Dans une société (SARL, SAS…), la responsabilité des associés est…", choix: ["Illimitée, sur tous leurs biens personnels","Limitée à leurs apports","Limitée au chiffre d'affaires annuel","Engagée seulement en cas de faute du gérant"], bonne: 1, explication: "La part des bénéfices versée aux associés s'appelle le dividende." },
      { q: "Le commis exécute les ordres du chef de partie. C'est un lien…", choix: ["Hiérarchique","Fonctionnel","Transversal","Commercial"], bonne: 0, explication: "Le lien fonctionnel repose sur la compétence, sans autorité." },
      { q: "Un salarié qui fait remonter une information à son chef pratique une communication…", choix: ["Horizontale","Verticale ascendante","Verticale descendante","Externe"], bonne: 1, explication: "Descendante : du chef vers le salarié. Horizontale : entre collègues." },
      { q: "Quelle est la forme de contrat de référence (la règle) ?", choix: ["Le CDD","Le CDI","L'intérim","Le stage"], bonne: 1, explication: "Le CDD et l'intérim répondent à des besoins temporaires." },
      { q: "Quelle est la durée légale du travail par semaine ?", choix: ["30 heures","35 heures","39 heures","48 heures"], bonne: 1, explication: "Au-delà, ce sont des heures supplémentaires majorées. 48 h est la durée maximale." },
      { q: "Combien de jours de congés payés acquiert-on par mois de travail ?", choix: ["1 jour","2 jours","2,5 jours ouvrables","5 jours"], bonne: 2, explication: "Soit 30 jours ouvrables (5 semaines) par an pour un temps plein." },
      { q: "Le salaire net, c'est…", choix: ["Le salaire brut + les primes","Le salaire brut − les cotisations sociales salariales","Le salaire brut − l'impôt sur le revenu seulement","Le salaire brut + les heures supplémentaires"], bonne: 1, explication: "C'est la somme versée sur le compte du salarié." }
    ]
  },
  {
    id: "viandes-boucherie",
    titre: "Viandes de boucherie",
    matiere: "Connaissance des produits",
    questions: [
      { q: "Quel est le morceau de bœuf le plus tendre ?", choix: ["Le jarret","Le filet","Le paleron","La macreuse"], bonne: 1, explication: "Le filet est un morceau de 1re catégorie, pour les cuissons rapides (rôtir, sauter, griller)." },
      { q: "Le paleron, la macreuse et le jarret de bœuf se cuisent plutôt…", choix: ["Rapidement, à la poêle","Longuement : braisés, bouillis ou en ragoût","Crus en tartare","Grillés au barbecue"], bonne: 1, explication: "Ce sont des morceaux riches en tissu conjonctif : une cuisson longue les attendrit (pot-au-feu, bourguignon)." },
      { q: "Quel morceau de veau utilise-t-on souvent pour la blanquette ?", choix: ["La noix","Le filet mignon","Le tendron et l'épaule","La côte première"], bonne: 2, explication: "La blanquette demande des morceaux moelleux qui supportent une cuisson longue : tendron, épaule, flanchet." },
      { q: "Le gigot provient…", choix: ["De la cuisse de l'agneau ou du mouton","De l'épaule du porc","Du dos du veau","De la poitrine du bœuf"], bonne: 0, explication: "Le gigot, c'est la cuisse de l'agneau ou du mouton." },
      { q: "Les escalopes de veau sont taillées dans…", choix: ["La noix (cuisse)","Le jarret","Le collier","La poitrine"], bonne: 0, explication: "La noix et la sous-noix, dans la cuisse, donnent des escalopes tendres." },
      { q: "Le carré d'agneau est formé…", choix: ["De l'épaule désossée","Des côtes","Du gigot roulé","De la selle hachée"], bonne: 1, explication: "On distingue les côtes premières, secondes et découvertes." },
      { q: "Qu'appelle-t-on le « persillé » d'une viande ?", choix: ["Le persil haché ajouté à la cuisson","Les fines veines de graisse à l'intérieur du muscle","Les nerfs blancs du morceau","La couche de gras autour du morceau"], bonne: 1, explication: "Il fond à la cuisson et rend la viande plus moelleuse." },
      { q: "À quoi sert la maturation de la viande de bœuf ?", choix: ["À la colorer","À la rendre plus tendre et plus goûteuse","À la saler","À la congeler plus vite"], bonne: 1, explication: "On la laisse reposer en chambre froide quelques jours à plusieurs semaines." },
      { q: "Le contre-filet et le faux-filet se situent…", choix: ["Dans l'aloyau, le long du dos","Dans la cuisse","Dans l'épaule","Dans le cou"], bonne: 0, explication: "L'aloyau regroupe le filet, le contre-filet et le rumsteck : des morceaux de 1re catégorie." },
      { q: "Quelle est la couleur normale d'une viande de veau de qualité ?", choix: ["Rouge vif","Blanc rosé","Rouge sombre","Rose vif avec un gras jaune"], bonne: 1, explication: "Le bœuf est rouge vif ; le veau, plus jeune, a une chair blanc rosé." }
    ]
  },
  {
    id: "volailles",
    titre: "Volailles",
    matiere: "Connaissance des produits",
    questions: [
      { q: "Qu'est-ce qu'un chapon ?", choix: ["Une jeune poule","Un coq castré et engraissé","Un canard sauvage","Une dinde"], bonne: 1, explication: "Sa chair est fondante et persillée. C'est une volaille de fête." },
      { q: "Une poularde, c'est…", choix: ["Une vieille poule pondeuse","Une jeune poule engraissée qui n'a pas pondu","Un poulet de 6 semaines","Une pintade"], bonne: 1, explication: "La poularde a une chair tendre et grasse, idéale pochée ou rôtie." },
      { q: "Quelle volaille française a une AOP ?", choix: ["Le poulet de Bresse","Le poulet de batterie","La dinde de Noël","Le canard de Barbarie"], bonne: 0, explication: "La volaille de Bresse est protégée par une appellation d'origine (AOC/AOP)." },
      { q: "Un poulet Label Rouge est élevé au minimum…", choix: ["21 jours","40 jours","81 jours","1 an"], bonne: 2, explication: "Au moins 81 jours, contre environ 40 jours pour un poulet standard : sa chair est plus ferme et plus goûteuse." },
      { q: "Pourquoi « flambe »-t-on une volaille avant de la préparer ?", choix: ["Pour la cuire","Pour brûler les derniers duvets et plumes","Pour la parfumer","Pour la désinfecter à l'alcool"], bonne: 1, explication: "On la passe rapidement sur une flamme, puis on l'essuie." },
      { q: "Brider une volaille, c'est…", choix: ["La ficeler pour qu'elle garde sa forme à la cuisson","La découper en 8","La farcir","La faire mariner"], bonne: 0, explication: "Une volaille bridée cuit de façon régulière et se présente bien." },
      { q: "Le « suprême » de volaille, c'est…", choix: ["La cuisse","Le blanc avec le haut de l'aile","Le foie","La carcasse"], bonne: 1, explication: "C'est le filet (blanc), souvent présenté avec l'os du manchon." },
      { q: "Pourquoi ne faut-il pas laver une volaille crue sous le robinet ?", choix: ["Ça durcit la chair","Les éclaboussures répandent les bactéries (salmonelles, Campylobacter)","Ça lui enlève son goût","La peau ne dore plus à la cuisson"], bonne: 1, explication: "C'est la cuisson à cœur qui détruit les bactéries." },
      { q: "En cuisine, le lapin est classé avec…", choix: ["Les viandes de boucherie","Les volailles","Le gibier à plumes","Les abats"], bonne: 1, explication: "On parle de « volailles et lapins »." },
      { q: "Un caneton, c'est…", choix: ["Un jeune canard","Un canard gavé","Une jeune oie","Un canard sauvage"], bonne: 0, explication: "Le magret provient d'un canard gavé, élevé pour le foie gras." }
    ]
  },
  {
    id: "produits-mer",
    titre: "Produits de la mer",
    matiere: "Connaissance des produits",
    questions: [
      { q: "Lequel est un poisson plat ?", choix: ["Le cabillaud","La sole","Le saumon","Le maquereau"], bonne: 1, explication: "Poissons plats : sole, turbot, barbue, limande, carrelet…" },
      { q: "Lequel est un poisson gras ?", choix: ["Le colin","La sole","Le maquereau","Le merlan"], bonne: 2, explication: "Poissons gras : saumon, maquereau, sardine, hareng, thon." },
      { q: "Quel signe montre qu'un poisson est frais ?", choix: ["Œil creux et terne","Ouïes brunes","Œil bombé et brillant, ouïes rouge vif","Chair molle"], bonne: 2, explication: "Un poisson frais a aussi une chair ferme, des écailles bien attachées et une odeur marine." },
      { q: "Combien de filets lève-t-on sur un poisson plat ?", choix: ["1","2","4","6"], bonne: 2, explication: "Un poisson plat donne 4 filets ; un poisson rond, 2 filets." },
      { q: "« Habiller » un poisson, c'est…", choix: ["Le dresser sur l'assiette","Ébarber, écailler, vider, laver","Le cuire en papillote","Le paner"], bonne: 1, explication: "C'est la préparation de base avant cuisson ou levée des filets." },
      { q: "Une darne est…", choix: ["Un filet sans arête","Une tranche épaisse d'un gros poisson rond, avec l'arête","Une tranche d'un gros poisson plat","Un morceau épais taillé dans un filet"], bonne: 1, explication: "Sur un gros poisson plat, on parle de tronçon. Un morceau épais de filet est un pavé." },
      { q: "Lequel est un mollusque ?", choix: ["Le homard","L'huître","La langoustine","La crevette"], bonne: 1, explication: "Mollusques : huîtres, moules, Saint-Jacques. Crustacés : homard, langoustine, crevette, crabe." },
      { q: "Une moule crue reste ouverte même quand on tape dessus. Que fais-tu ?", choix: ["Je la cuis quand même","Je la jette","Je la mets au congélateur","Je la rince plus longtemps"], bonne: 1, explication: "Une moule ouverte qui ne se referme pas est morte : elle peut être dangereuse." },
      { q: "Le calamar, la seiche et le poulpe sont des…", choix: ["Crustacés","Céphalopodes","Poissons plats","Coquillages"], bonne: 1, explication: "Ce sont des mollusques sans coquille extérieure, avec des tentacules." },
      { q: "Dans une coquille Saint-Jacques, que garde-t-on ?", choix: ["La noix et le corail","La noix seulement, le corail est toxique","La noix et les barbes","Le corail seulement"], bonne: 0, explication: "Le corail se mange. On retire les barbes et la poche noire." }
    ]
  },
  {
    id: "oeufs-produit",
    titre: "Les œufs",
    matiere: "Connaissance des produits",
    questions: [
      { q: "Sur la coquille, le code commence par 0. Il s'agit d'un œuf…", choix: ["De poule élevée en cage","Bio","De poule élevée au sol","De poule élevée en plein air"], bonne: 1, explication: "0 = bio, 1 = plein air, 2 = au sol, 3 = en cage." },
      { q: "Jusqu'à combien de jours après la ponte un œuf peut-il être vendu « extra-frais » ?", choix: ["3 jours","9 jours","28 jours","2 mois"], bonne: 1, explication: "Au-delà de 9 jours, il est simplement « frais » (catégorie A)." },
      { q: "Un œuf de calibre M pèse…", choix: ["Moins de 53 g","De 53 à 63 g","De 63 à 73 g","Plus de 73 g"], bonne: 1, explication: "S : moins de 53 g ; M : 53-63 g ; L : 63-73 g ; XL : 73 g et plus." },
      { q: "Tu plonges un œuf dans l'eau : il flotte. Que peux-tu en déduire ?", choix: ["Il est très frais","Il est vieux : sa chambre à air s'est agrandie","Il est fécondé","Il contient deux jaunes"], bonne: 1, explication: "Un œuf très frais coule et reste couché au fond." },
      { q: "Quel composant du jaune d'œuf permet de réaliser une mayonnaise ?", choix: ["L'albumine","La lécithine","La caséine","Le gluten"], bonne: 1, explication: "La lécithine est un émulsifiant. L'albumine est une protéine du blanc ; la caséine, une protéine du lait." },
      { q: "À la cuisson, quelle partie de l'œuf coagule en premier ?", choix: ["Le jaune","Le blanc","Les deux en même temps","Ça dépend de la fraîcheur de l'œuf"], bonne: 1, explication: "Le blanc coagule vers 62-65 °C, le jaune vers 65-70 °C." },
      { q: "Combien de temps cuit un œuf mollet dans l'eau bouillante ?", choix: ["1 minute","Environ 5 à 6 minutes","Environ 10 minutes","20 minutes"], bonne: 1, explication: "Œuf à la coque : 3 min ; mollet : 5-6 min ; dur : 9-10 min." },
      { q: "Faut-il laver les œufs avant de les stocker ?", choix: ["Oui, toujours","Non : le lavage abîme la protection naturelle de la coquille","Oui, à l'eau chaude","Seulement les œufs bio"], bonne: 1, explication: "On casse les œufs à part, dans un ramequin, et on se lave les mains après." },
      { q: "Une mayonnaise maison aux œufs crus doit être…", choix: ["Gardée à température ambiante","Conservée au froid et consommée rapidement, dans la journée","Congelée","Gardée une semaine"], bonne: 1, explication: "Les préparations aux œufs crus sont très sensibles aux salmonelles." },
      { q: "Pourquoi la restauration collective utilise-t-elle souvent des ovoproduits ?", choix: ["Pour leur meilleur goût","Pour la sécurité sanitaire et le gain de temps","Parce qu'ils sont obligatoires en restauration collective","Parce qu'ils coûtent toujours moins cher que les œufs frais"], bonne: 1, explication: "La pasteurisation limite le risque de salmonelles." }
    ]
  },
  {
    id: "fruits-legumes",
    titre: "Fruits et légumes",
    matiere: "Connaissance des produits",
    questions: [
      { q: "Des carottes déjà épluchées, lavées et râpées, vendues en sachet, sont des légumes de…", choix: ["1re gamme","3e gamme","4e gamme","5e gamme"], bonne: 2, explication: "1re : frais ; 2e : conserve ; 3e : surgelé ; 4e : cru prêt à l'emploi ; 5e : cuit, sous vide." },
      { q: "Les légumes surgelés appartiennent à la…", choix: ["1re gamme","2e gamme","3e gamme","5e gamme"], bonne: 2, explication: "Les conserves forment la 2e gamme." },
      { q: "La pomme de terre est…", choix: ["Une racine","Un tubercule","Un bulbe","Un rhizome"], bonne: 1, explication: "Carotte : racine. Oignon : bulbe. Gingembre : rhizome." },
      { q: "Lequel continue à mûrir après la cueillette ?", choix: ["La fraise","Le raisin","La banane","L'orange"], bonne: 2, explication: "La banane, la tomate, la pomme ou la poire sont des fruits climactériques. La fraise, le raisin et les agrumes ne mûrissent plus." },
      { q: "Lequel est un légume d'hiver ?", choix: ["La tomate","La courgette","Le poireau","Le poivron"], bonne: 2, explication: "En hiver : poireau, chou, céleri-rave, endive. Tomate, courgette et poivron sont des légumes d'été." },
      { q: "Pourquoi retirer les parties vertes d'une pomme de terre ?", choix: ["Elles sont dures","Elles contiennent de la solanine, toxique","Elles noircissent","Elles sont trop sucrées"], bonne: 1, explication: "On retire aussi les germes." },
      { q: "Monder une tomate, c'est…", choix: ["La couper en dés","Retirer sa peau après un passage rapide dans l'eau bouillante puis glacée","La faire sécher","La vider de ses graines"], bonne: 1, explication: "Ensuite, on peut l'épépiner et la concasser." },
      { q: "Pourquoi citronne-t-on un artichaut ou une pomme coupée ?", choix: ["Pour l'assaisonner","Pour éviter qu'elle noircisse (oxydation)","Pour ramollir les fibres","Pour éliminer les microbes"], bonne: 1, explication: "L'acidité du citron ralentit le brunissement." },
      { q: "Lentilles, pois cassés et haricots secs sont des…", choix: ["Légumes-feuilles","Légumes secs (légumineuses)","Fruits secs","Céréales"], bonne: 1, explication: "Certains se font tremper avant la cuisson. On les cuit en départ eau froide, salés en fin de cuisson." },
      { q: "Dans quel ordre traite-t-on des légumes servis crus ?", choix: ["Parer, laver, désinfecter, rincer","Désinfecter, parer, rincer","Laver, couper, désinfecter, servir sans rincer","Rincer, désinfecter, parer"], bonne: 0, explication: "On retire d'abord la terre et les parties abîmées : le désinfectant agit mal sur des légumes sales." }
    ]
  },
  {
    id: "epices-herbes",
    titre: "Épices, herbes et condiments",
    matiere: "Connaissance des produits",
    questions: [
      { q: "Que contient un bouquet garni classique ?", choix: ["Thym, laurier, queues de persil","Basilic, menthe, coriandre","Ail, oignon, échalote","Poivre, sel, muscade"], bonne: 0, explication: "On l'enveloppe souvent dans du vert de poireau et on le ficelle." },
      { q: "Quelles sont les « fines herbes » ?", choix: ["Thym, romarin, laurier","Persil, cerfeuil, ciboulette, estragon","Basilic, origan, sarriette","Menthe, aneth, coriandre"], bonne: 1, explication: "On les utilise par exemple dans l'omelette aux fines herbes." },
      { q: "Le safran, c'est…", choix: ["Une racine séchée","Les pistils séchés d'une fleur de crocus","Une graine","Une écorce"], bonne: 1, explication: "C'est l'épice la plus chère au monde : il faut des milliers de fleurs pour en faire un peu." },
      { q: "Quelle différence entre le poivre noir et le poivre blanc ?", choix: ["Ce sont deux plantes différentes","C'est la même baie ; le blanc est débarrassé de son enveloppe","Le blanc est une baie verte séchée","Le noir est une baie mûre grillée"], bonne: 1, explication: "On utilise le poivre blanc pour ne pas tacher les sauces blanches." },
      { q: "Les câpres sont…", choix: ["Des petites olives","Des boutons de fleurs du câprier, confits dans le vinaigre","Des grains de poivre vert","Des cornichons"], bonne: 1, explication: "On les utilise dans la sauce grenobloise et la sauce tartare." },
      { q: "Le piment d'Espelette bénéficie d'une AOP. Il vient…", choix: ["De Provence","Du Pays basque","De Bretagne","D'Alsace"], bonne: 1, explication: "C'est une épice douce et parfumée." },
      { q: "Un oignon « clouté » est piqué avec…", choix: ["Des clous de girofle","Des grains de poivre","Des graines de moutarde","De l'ail"], bonne: 0, explication: "On l'ajoute dans les fonds blancs, les bouillons et la béchamel parfumée." },
      { q: "La fleur de sel est…", choix: ["Du sel parfumé aux fleurs","Une fine couche de sel récoltée à la main à la surface des marais salants","Du sel fin industriel","Du sel de mine"], bonne: 1, explication: "On l'utilise plutôt en finition, pour son croquant." },
      { q: "Quand ajoute-t-on des herbes fragiles comme le cerfeuil ou le basilic ?", choix: ["Au début d'une cuisson longue","En fin de cuisson ou au dressage","Après une nuit de marinade","Toujours séchées, jamais fraîches"], bonne: 1, explication: "La chaleur leur fait perdre leur couleur et leur parfum." },
      { q: "On râpe un peu de noix de muscade dans…", choix: ["La béchamel et la purée","La crème anglaise","La vinaigrette","Le fumet de poisson"], bonne: 0, explication: "Elle relève aussi la sauce Mornay et les gratins." }
    ]
  },
  {
    id: "produits-laitiers",
    titre: "Produits laitiers",
    matiere: "Connaissance des produits",
    questions: [
      { q: "Le lait UHT…", choix: ["Est chauffé à 72 °C et se garde quelques jours au froid","Est chauffé à 140-150 °C quelques secondes et se garde plusieurs mois fermé, à température ambiante","N'est pas chauffé, seulement filtré","Est stérilisé 20 minutes en bouteille"], bonne: 1, explication: "Le chauffage à 72 °C, c'est la pasteurisation." },
      { q: "En France, le bouchon bleu correspond au lait…", choix: ["Entier","Demi-écrémé","Écrémé","Cru"], bonne: 1, explication: "Rouge : entier ; bleu : demi-écrémé ; vert : écrémé." },
      { q: "Le lait cru, c'est un lait…", choix: ["Pasteurisé à basse température","Qui n'a pas été chauffé au-delà de 40 °C","Microfiltré puis pasteurisé","Écrémé sans être chauffé"], bonne: 1, explication: "Il est déconseillé aux femmes enceintes, aux jeunes enfants et aux personnes fragiles." },
      { q: "Pour réussir une chantilly, il faut une crème…", choix: ["Liquide, entière et bien froide (au moins 30 % de matière grasse)","Liquide légère (15 %), bien froide","Épaisse à 30 %, tiède","Liquide entière, à température ambiante"], bonne: 0, explication: "Le froid et la matière grasse permettent d'emprisonner l'air." },
      { q: "Quelle différence entre la crème fraîche épaisse et la crème liquide ?", choix: ["La crème épaisse contient de l'amidon","La crème épaisse a été ensemencée de ferments lactiques","La crème liquide contient plus de matière grasse","La crème épaisse est toujours UHT"], bonne: 1, explication: "Les ferments la font épaissir et lui donnent un goût légèrement acidulé." },
      { q: "Le beurre contient au moins…", choix: ["50 % de matière grasse","82 % de matière grasse","100 % de matière grasse","20 % de matière grasse"], bonne: 1, explication: "Le reste est surtout de l'eau." },
      { q: "Pourquoi clarifie-t-on le beurre ?", choix: ["Pour le saler","Pour retirer le petit-lait : il supporte alors une cuisson plus chaude sans brûler","Pour le colorer","Pour le rendre allégé"], bonne: 1, explication: "On l'utilise pour la sauce hollandaise ou pour saisir." },
      { q: "Le yaourt est un lait fermenté par…", choix: ["De la levure de boulanger","Deux bactéries lactiques spécifiques","De la présure","Du vinaigre"], bonne: 1, explication: "Lactobacillus bulgaricus et Streptococcus thermophilus." },
      { q: "Lequel de ces produits laitiers bénéficie d'une AOP ?", choix: ["La crème d'Isigny","La crème fraîche fermière","Le beurre doux tendre","La crème légère"], bonne: 0, explication: "Le beurre et la crème d'Isigny (Normandie) sont protégés par une AOP." },
      { q: "À quelle température stocke-t-on les produits laitiers frais ?", choix: ["À température ambiante","Entre 0 et +4 °C","Entre +6 et +8 °C","Au congélateur"], bonne: 1, explication: "On respecte aussi les DLC et la règle du premier entré, premier sorti." }
    ]
  },
  {
    id: "abats",
    titre: "Les abats",
    matiere: "Connaissance des produits",
    questions: [
      { q: "Lequel de ces abats est un abat ROUGE ?", choix: ["Le ris de veau","La tête de veau","Le foie","Les tripes"], bonne: 2, explication: "Abats rouges : foie, cœur, rognons, langue, joues. Abats blancs : ris, cervelle, tête, pieds, tripes." },
      { q: "Lequel de ces abats est un abat BLANC ?", choix: ["Le cœur","Les rognons","Le ris de veau","La langue"], bonne: 2, explication: "Les abats blancs sont généralement blanchis avant d'être cuisinés." },
      { q: "Le ris de veau, c'est…", choix: ["Le foie du veau","Le thymus, une glande du jeune animal","Le rein","La cervelle"], bonne: 1, explication: "Il n'existe que chez le jeune animal (veau, agneau) : il disparaît à l'âge adulte." },
      { q: "« Dégorger » un ris ou une cervelle, c'est…", choix: ["Le faire tremper dans l'eau froide pour éliminer le sang","Le blanchir en partant d'une eau froide","Le saler pour faire sortir l'eau","Le faire tremper dans du lait chaud"], bonne: 0, explication: "On change l'eau plusieurs fois. Le blanchiment vient ensuite." },
      { q: "Après avoir blanchi des ris de veau, on les…", choix: ["Rafraîchit, épluche, puis met sous presse","Braise aussitôt, sans les éplucher","Fait dégorger dans de l'eau chaude","Pane et fait frire directement"], bonne: 0, explication: "La presse leur donne une forme régulière avant la cuisson finale." },
      { q: "Comment prépare-t-on une langue de bœuf ?", choix: ["Grillée crue, en tranches fines","Pochée longuement, puis on retire la peau","Rôtie avec sa peau","Sautée crue en tranches"], bonne: 1, explication: "Une fois pochée, la peau épaisse se retire facilement." },
      { q: "Comment cuit-on habituellement le foie de veau ?", choix: ["Sauté rapidement et gardé rosé","Braisé pendant 2 heures","Poché dans un court-bouillon","Rôti et servi bien cuit"], bonne: 0, explication: "Trop cuit, il devient dur et granuleux." },
      { q: "Les tripes à la mode de Caen sont préparées avec…", choix: ["L'estomac (panse) du bœuf","Le foie de porc","La langue de veau","Le cœur d'agneau"], bonne: 0, explication: "Elles cuisent très longuement. L'andouillette, elle, est faite avec des tripes de porc." },
      { q: "Pourquoi la cervelle des bovins adultes est-elle interdite à la vente ?", choix: ["À cause de son goût trop fort","À cause du risque de maladie de la vache folle (ESB)","Parce que toutes les cervelles sont interdites","Parce qu'elle est trop périssable"], bonne: 1, explication: "On utilise la cervelle d'agneau, de porc ou de veau, selon la réglementation." },
      { q: "Comment conserve-t-on les abats ?", choix: ["À température ambiante, dans la journée","Entre 0 et +3 °C, et on les consomme très rapidement","Entre +6 et +8 °C, une semaine maximum","Toujours au congélateur"], bonne: 1, explication: "Les abats sont encore plus périssables que la viande." }
    ]
  },
  {
    id: "fromages",
    titre: "Fromages",
    matiere: "Connaissance des produits",
    questions: [
      { q: "Le camembert est un fromage à…", choix: ["Pâte pressée cuite","Pâte molle à croûte fleurie","Pâte persillée","Pâte molle à croûte lavée"], bonne: 1, explication: "Le brie est lui aussi une pâte molle à croûte fleurie." },
      { q: "Le comté est un fromage à…", choix: ["Pâte pressée cuite","Pâte molle","Pâte persillée","Pâte fraîche"], bonne: 0, explication: "Le beaufort et l'emmental sont aussi des pâtes pressées cuites." },
      { q: "Le roquefort est fabriqué avec du lait de…", choix: ["Vache","Chèvre","Brebis","Bufflonne"], bonne: 2, explication: "C'est un fromage à pâte persillée, protégé par une AOP." },
      { q: "Le munster et le maroilles sont des fromages à…", choix: ["Croûte fleurie","Croûte lavée","Pâte pressée cuite","Pâte fraîche"], bonne: 1, explication: "Leur croûte est lavée pendant l'affinage : elle est orangée et dégage une odeur forte." },
      { q: "Le reblochon vient de…", choix: ["Savoie","Normandie","Bretagne","Provence"], bonne: 0, explication: "C'est une pâte pressée non cuite, l'ingrédient de la tartiflette." },
      { q: "Le crottin de Chavignol est un fromage de…", choix: ["Vache","Chèvre","Brebis","Mélange vache et brebis"], bonne: 1, explication: "C'est un petit fromage de chèvre du Centre-Val de Loire." },
      { q: "Pendant la fabrication, quelle étape transforme le lait en caillé ?", choix: ["L'affinage","Le caillage (avec la présure ou des ferments)","Le salage","Le moulage"], bonne: 1, explication: "Les étapes : caillage, égouttage, moulage, salage, affinage." },
      { q: "Le saint-nectaire, le cantal et la tomme de Savoie sont des pâtes…", choix: ["Pressées non cuites","Pressées cuites","Molles à croûte fleurie","Persillées"], bonne: 0, explication: "Le caillé est pressé mais pas chauffé." },
      { q: "Comment présente-t-on un plateau de fromages ?", choix: ["Sortis du froid au dernier moment","Sortis 30 min à 1 h avant, à température ambiante","Sortis la veille, à l'air libre","Légèrement tiédis au four"], bonne: 1, explication: "C'est à température ambiante que le fromage révèle ses arômes." },
      { q: "Dans quel ordre fait-on goûter les fromages ?", choix: ["Du plus fort au plus doux","Du plus doux au plus fort","Par type de lait : vache, chèvre, puis brebis","Les persillés en premier"], bonne: 1, explication: "On finit par les plus forts pour ne pas écraser les goûts délicats." }
    ]
  },
  {
    id: "cshcr-service-salle",
    titre: "Le service en salle",
    matiere: "CAP CSHCR",
    questions: [
      { q: "Qui est responsable d'un groupe de tables, appelé un « rang » ?", choix: ["Le commis de salle","Le chef de rang","Le maître d'hôtel","Le sommelier"], bonne: 1, explication: "Le commis l'assiste. Le maître d'hôtel organise l'ensemble de la salle." },
      { q: "Un restaurant veut un service rapide et régulier, avec la présentation voulue par le chef. Quel service choisit-il ?", choix: ["À l'assiette","À la française","À l'anglaise","Au guéridon"], bonne: 0, explication: "L'assiette est dressée en cuisine puis posée devant le client." },
      { q: "Dans le service à la française…", choix: ["Le serveur sert le client à la pince","Le serveur présente le plat par la gauche et le client se sert lui-même","Le serveur présente le plat par la droite et le client se sert lui-même","Le plat est posé au centre et chacun se sert"], bonne: 1, explication: "À l'anglaise, c'est le serveur qui sert le client." },
      { q: "Dans le service à l'anglaise…", choix: ["Le serveur sert le client à la pince, depuis le plat, par la gauche","Le serveur sert le client à la pince, par la droite","Le client se sert au plat présenté par le serveur","Le serveur dresse l'assiette sur un guéridon"], bonne: 0, explication: "Le serveur tient le plat de la main gauche et la pince de la main droite." },
      { q: "Un canard découpé et des crêpes flambées devant le client relèvent du service…", choix: ["À l'anglaise","Au guéridon","À la française","À l'assiette"], bonne: 1, explication: "Le serveur travaille sur une petite table roulante, devant le client." },
      { q: "Tu poses une assiette dressée, puis tu sers l'eau. Par quel côté fais-tu chacun de ces gestes ?", choix: ["L'assiette par la gauche, l'eau par la droite","Les deux par la droite","Les deux par la gauche","L'assiette par la droite, l'eau par la gauche"], bonne: 1, explication: "Assiettes dressées et boissons par la droite ; seuls les plats se présentent par la gauche." },
      { q: "Table de quatre : un homme a invité trois personnes, dont deux femmes. À qui sers-tu en dernier ?", choix: ["Au plus âgé des invités","À la femme la plus jeune","À l'homme qui invite (l'hôte)","À l'autre homme invité"], bonne: 2, explication: "On sert d'abord les dames, puis les messieurs, et l'hôte en dernier." },
      { q: "Quand débarrasse-t-on les assiettes d'une table ?", choix: ["Dès qu'un client a fini","Quand tous les convives ont terminé","Pendant que les clients mangent","Au moment de l'addition"], bonne: 1, explication: "Débarrasser une personne seule pousse les autres à se dépêcher." },
      { q: "Que retire-t-on de la table avant de servir le dessert ?", choix: ["Les verres à eau","Le pain, le beurre, la salière et la poivrière","Les serviettes","Les verres à vin et la carafe d'eau"], bonne: 1, explication: "On rapproche ensuite les couverts à dessert placés en haut de l'assiette." },
      { q: "Un client pose ses couverts côte à côte, en biais dans l'assiette. Ça signifie…", choix: ["Qu'il fait une pause","Qu'il a terminé","Qu'il veut l'addition","Qu'il n'a pas aimé"], bonne: 1, explication: "Couverts croisés ou écartés : il n'a pas fini." }
    ]
  },
  {
    id: "cshcr-accueil-vente",
    titre: "Accueil et vente",
    matiere: "CAP CSHCR",
    questions: [
      { q: "Un client entre pendant que tu prends une commande à une autre table. Que fais-tu ?", choix: ["Tu l'ignores jusqu'à la fin de la commande","Tu lui adresses un signe de tête et un sourire, puis tu viens dès que possible","Tu abandonnes la commande en cours pour l'accueillir","Tu lui indiques de loin une table libre"], bonne: 1, explication: "Le client se sent vu tout de suite, et la commande en cours n'est pas interrompue." },
      { q: "Proposer un apéritif, un dessert ou un café en plus de la commande s'appelle…", choix: ["La vente à emporter","La vente additionnelle","La vente forcée","La fidélisation"], bonne: 1, explication: "Bien faite, elle rend service au client et augmente le ticket moyen." },
      { q: "Un service rapporte 1 800 € pour 72 couverts. Quel est le ticket moyen ?", choix: ["25 €","22 €","30 €","72 €"], bonne: 0, explication: "Ticket moyen = chiffre d'affaires ÷ nombre de couverts = 1 800 ÷ 72 = 25 €." },
      { q: "Dans la méthode d'argumentation CAP, que signifie le A ?", choix: ["Accueil","Avantage pour le client","Addition","Apéritif"], bonne: 1, explication: "C = caractéristique, A = avantage, P = preuve." },
      { q: "Quel argument est une « preuve » pour vendre un plat ?", choix: ["« C'est bon »","« Le poisson vient du port de Sète ce matin »","« Prenez-le, vous verrez »","« Tout le monde le prend »"], bonne: 1, explication: "Une preuve est un fait vérifiable : origine, label, fait maison." },
      { q: "Un client se plaint que son plat est arrivé froid. Que fais-tu ?", choix: ["Tu expliques que ce n'est pas de ta faute","Tu l'écoutes, tu t'excuses et tu proposes de refaire le plat","Tu lui offres tout de suite le repas entier","Tu repars en cuisine sans lui répondre"], bonne: 1, explication: "Écouter, reconnaître, proposer une solution adaptée, puis vérifier qu'il est satisfait." },
      { q: "Quand apporte-t-on l'addition ?", choix: ["Avec le dessert","Quand le client la demande","Dès la commande","Avant le café, pour libérer la table"], bonne: 1, explication: "Apporter l'addition sans demande donne l'impression qu'on pousse le client dehors." },
      { q: "En France, les prix affichés sur la carte sont…", choix: ["Hors taxes","TTC, service compris","TTC, service en plus","Hors taxes, service compris"], bonne: 1, explication: "Le service est inclus dans le prix ; le pourboire reste libre." },
      { q: "L'addition est de 47,30 €. Le client te donne un billet de 50 €. Combien lui rends-tu ?", choix: ["3,70 €","2,70 €","2,30 €","3,30 €"], bonne: 1, explication: "50 − 47,30 = 2,70 €. On annonce la somme reçue, puis on compte la monnaie devant le client." },
      { q: "Un client demande si un plat contient des fruits à coque. Tu…", choix: ["Réponds « je ne pense pas »","Vérifies auprès de la cuisine ou sur la fiche des allergènes","Lui conseilles de goûter","Changes de sujet"], bonne: 1, explication: "L'information sur les 14 allergènes est obligatoire. On ne répond jamais au hasard." }
    ]
  },
  {
    id: "cshcr-boissons-vins",
    titre: "Boissons et vins",
    matiere: "CAP CSHCR",
    questions: [
      { q: "Laquelle de ces boissons est une eau-de-vie ?", choix: ["Le porto","L'armagnac","Le pineau des Charentes","Le vermouth"], bonne: 1, explication: "Porto et pineau sont des vins mutés, le vermouth un vin aromatisé. L'armagnac est distillé." },
      { q: "Laquelle de ces boissons est fermentée, sans être distillée ?", choix: ["Le calvados","Le poiré","Le rhum","Le whisky"], bonne: 1, explication: "Le calvados est l'eau-de-vie du cidre ; le poiré est fermenté, comme le cidre." },
      { q: "À quelle température sert-on un champagne ?", choix: ["4 °C","6 à 8 °C","10 à 12 °C","14 °C"], bonne: 1, explication: "Trop froid, il perd ses arômes ; trop chaud, il mousse et paraît lourd." },
      { q: "À quelle température sert-on un vin rouge corsé, comme un bordeaux ?", choix: ["8 °C","12 °C","16 à 18 °C","22 à 24 °C"], bonne: 2, explication: "Rouge léger (gamay, pinot noir) : 12 à 14 °C." },
      { q: "Un vin blanc sec se sert à…", choix: ["4 °C","8 à 10 °C","16 °C","Température ambiante"], bonne: 1, explication: "Le rosé se sert à la même température." },
      { q: "Quelle est la première étape du service d'une bouteille de vin ?", choix: ["La déboucher en cuisine","Présenter la bouteille à l'hôte, étiquette tournée vers lui","Servir les dames","Remplir les verres"], bonne: 1, explication: "Puis : ouvrir devant lui, faire goûter, servir." },
      { q: "Qui goûte le vin en premier ?", choix: ["Le sommelier","L'hôte, la personne qui a commandé ou qui invite","La dame invitée d'honneur","Le convive le plus âgé"], bonne: 1, explication: "Il vérifie que le vin n'a pas de défaut (goût de bouchon)." },
      { q: "Quelle est la différence entre carafer et décanter ?", choix: ["Carafer sépare le dépôt ; décanter aère le vin","Carafer aère un vin jeune ; décanter sépare un vin vieux de son dépôt","Les deux servent à rafraîchir le vin","Carafer, c'est servir le vin au verre"], bonne: 1, explication: "Pour décanter, on verse doucement devant une bougie pour voir arriver le dépôt." },
      { q: "Avec une licence restaurant, on peut servir de l'alcool…", choix: ["À toute heure, même sans repas","Seulement à l'occasion des repas","Seulement de la bière et du cidre","Seulement au bar, aux clients debout"], bonne: 1, explication: "Pour servir de l'alcool sans repas, il faut une licence de débit de boissons (III ou IV)." },
      { q: "Quel vin accompagne classiquement un plateau d'huîtres ?", choix: ["Un rouge corsé de Bordeaux","Un blanc sec et vif (muscadet, picpoul-de-pinet)","Un vin doux naturel","Un rouge léger servi frais"], bonne: 1, explication: "L'acidité et la fraîcheur d'un blanc sec accompagnent l'iode des huîtres." }
    ]
  },
  {
    id: "cshcr-arts-table",
    titre: "Arts de la table et hébergement",
    matiere: "CAP CSHCR",
    questions: [
      { q: "À quoi sert le molleton posé sous la nappe ?", choix: ["À décorer la table","À étouffer le bruit et protéger la table","À absorber les taches de vin","À remplacer le napperon"], bonne: 1, explication: "Il rend aussi la nappe plus agréable au toucher." },
      { q: "Le napperon (ou surnappe) se pose…", choix: ["Sous le molleton","Par-dessus la nappe","Sous la nappe","Sous l'assiette de présentation"], bonne: 1, explication: "On le change sans refaire toute la nappe." },
      { q: "Où place-t-on le couteau ?", choix: ["À droite, tranchant tourné vers l'extérieur","À droite, tranchant tourné vers l'assiette","À gauche, avec la fourchette","En haut de l'assiette"], bonne: 1, explication: "La fourchette est à gauche, la cuillère à soupe à droite du couteau." },
      { q: "Où se placent les couverts à dessert ?", choix: ["À gauche des fourchettes","En haut de l'assiette","Sur l'assiette à pain","On les apporte toujours avec le dessert"], bonne: 1, explication: "Quand ils sont mis en place dès le départ, ils sont en haut de l'assiette." },
      { q: "Comment tient-on un verre pour le mettre en place ?", choix: ["Par le buvant","Par le pied","Par la paraison (le corps du verre)","Du bout des doigts, par le haut"], bonne: 1, explication: "On ne touche jamais le buvant, la partie où l'on boit, ni le corps du verre, qui garderait les traces de doigts." },
      { q: "Une nappe bien posée…", choix: ["Tombe plus d'un côté que de l'autre","Tombe de la même longueur de chaque côté, pli central dans l'axe de la table","Tombe jusqu'au sol","Tombe plus longue du côté des clients"], bonne: 1, explication: "La régularité de la mise en place donne une image soignée de la salle." },
      { q: "Qui dirige le service des étages dans un hôtel ?", choix: ["Le concierge","La gouvernante","Le chef de rang","Le bagagiste"], bonne: 1, explication: "Elle encadre les femmes et valets de chambre et la lingerie." },
      { q: "Une « recouche », c'est…", choix: ["La chambre d'un client qui reste : on la refait","La chambre d'un client parti : on change tout","Une chambre bloquée pour travaux","Une chambre préparée pour l'arrivée d'un client important"], bonne: 0, explication: "La chambre d'un client parti est une chambre « à blanc »." },
      { q: "Dans quel ordre nettoie-t-on une chambre ?", choix: ["Le sol, puis le lit","Aérer, débarrasser, faire le lit, dépoussiérer du haut vers le bas, salle de bains, sol en dernier","La salle de bains, le sol, puis le lit","Le lit, le sol, la salle de bains, puis aérer"], bonne: 1, explication: "On nettoie du haut vers le bas et du propre vers le sale." },
      { q: "Dans une chambre « à blanc »…", choix: ["On change seulement les serviettes","On change tout le linge et on nettoie à fond","On refait le lit sans changer les draps","On nettoie seulement la salle de bains"], bonne: 1, explication: "Elle doit être parfaite pour le prochain client." }
    ]
  },
  {
    id: "cshcr-fromages",
    titre: "Le service des fromages",
    matiere: "CAP CSHCR",
    questions: [
      { q: "Comment compose-t-on un plateau de fromages ?", choix: ["Un seul grand fromage","3 à 5 fromages de familles différentes","8 à 10 fromages, tous au lait de vache","Trois pâtes molles"], bonne: 1, explication: "Un plateau varié permet de goûter plusieurs familles et plusieurs laits." },
      { q: "Combien de temps avant le service sort-on les fromages du froid ?", choix: ["Au dernier moment","30 min à 1 h avant","La veille","3 heures avant"], bonne: 1, explication: "Trop froid, un fromage ne développe pas ses arômes." },
      { q: "Dans quel ordre dispose-t-on les fromages sur le plateau et dans l'assiette ?", choix: ["Du plus fort au plus doux","Du plus doux au plus fort","Par taille","Par prix"], bonne: 1, explication: "On finit par les plus forts (croûtes lavées, persillés) pour ne pas écraser les goûts délicats." },
      { q: "Pourquoi prévoit-on un couteau par famille de fromages ?", choix: ["Pour la présentation","Pour ne pas mélanger les goûts et les moisissures","Pour que chaque client ait son couteau","Pour aller plus vite"], bonne: 1, explication: "Un couteau passé dans un bleu donnerait son goût au chèvre." },
      { q: "Comment découpe-t-on un camembert ?", choix: ["En tranches parallèles","En parts depuis le centre, comme un gâteau","En dés","En deux, puis en lamelles"], bonne: 1, explication: "Chaque part a ainsi du cœur et de la croûte." },
      { q: "Comment découpe-t-on un roquefort ?", choix: ["En biais, pour que chaque part ait du cœur et de la croûte","En rondelles","En carrés","En retirant le bleu"], bonne: 0, explication: "Le cœur d'une pâte persillée est plus doux que le bord : la découpe en biais est plus juste pour chaque convive." },
      { q: "Comment découpe-t-on une bûche de chèvre ?", choix: ["En rondelles","En parts depuis le centre","En biais","En lamelles dans la longueur"], bonne: 0, explication: "Les crottins se coupent aussi en rondelles ou en deux." },
      { q: "Quel accord vin-fromage est un classique ?", choix: ["Roquefort et sauternes","Roquefort et rouge léger de Loire","Comté et champagne rosé","Chèvre frais et porto"], bonne: 0, explication: "Le liquoreux équilibre le sel et la force du bleu. Autres classiques : chèvre et sancerre, comté et vin jaune." },
      { q: "Quelle confiture accompagne traditionnellement l'ossau-iraty ?", choix: ["Confiture de fraises","Confiture de cerises noires","Confiture d'oranges amères","Confiture de lait"], bonne: 1, explication: "C'est un fromage de brebis du Pays basque, servi avec la confiture de cerises noires d'Itxassou." },
      { q: "Après le service, que fait-on des fromages restants ?", choix: ["On les laisse sur le plateau en salle","On les filme à la coupe et on les range au froid, à part","On les jette tous","On les congèle"], bonne: 1, explication: "On les isole des autres produits pour éviter que les odeurs se transmettent." }
    ]
  },
  {
    id: "cshcr-posture",
    titre: "La posture professionnelle face au client",
    matiere: "CAP CSHCR",
    questions: [
      { q: "Avant le service, quelle tenue est correcte en salle ?", choix: ["Tenue propre et repassée, cheveux attachés, ongles courts, bijoux absents ou très discrets, pas de parfum fort","Tenue propre, avec un parfum marqué pour couvrir les odeurs de cuisine","Tenue propre, bagues et bracelets autorisés s'ils sont discrets, cheveux libres s'ils sont propres","Tenue de ville soignée, la tenue professionnelle n'étant obligatoire qu'en cuisine"], bonne: 0, explication: "Un parfum fort gêne la dégustation ; les bijoux aux mains posent un problème d'hygiène." },
      { q: "Pendant un moment calme du service, quelle attitude adoptes-tu en salle ?", choix: ["Debout, droit, mains libres, en observant discrètement les tables","Debout, bras croisés, pour paraître sérieux","Appuyé au comptoir, pour rester disponible","Assis près de l'office, pour être reposé au moment du coup de feu"], bonne: 0, explication: "Observer les tables permet d'anticiper : un verre vide, un client qui cherche un serveur." },
      { q: "Un serveur écoute un client les bras croisés. Quel message envoie-t-il, sans le vouloir ?", choix: ["De l'assurance et de l'autorité","De la fermeture, une attitude défensive","Une écoute attentive","De la politesse"], bonne: 1, explication: "Le langage du corps parle avant les mots." },
      { q: "Quelle phrase est la plus professionnelle quand un client demande une carafe d'eau ?", choix: ["« Pas de souci, je vous ramène ça. »","« Avec plaisir, je vous l'apporte tout de suite. »","« OK, ça marche ! »","« C'est noté, chef ! »"], bonne: 1, explication: "« Pas de souci » laisse entendre que la demande aurait pu être un problème." },
      { q: "Un client te pose une question sur un vin, et tu ne connais pas la réponse. Que dis-tu ?", choix: ["« Je ne sais pas. »","« Je me renseigne et je reviens vers vous tout de suite. »","« Je crois que oui. »","« Il faudra demander au sommelier. »"], bonne: 1, explication: "On ne laisse jamais le client sans réponse, et on n'invente pas." },
      { q: "Un client passe une commande compliquée. Quelle technique d'écoute active utilises-tu ?", choix: ["Tu reformules sa demande pour vérifier que tu as bien compris","Tu réponds avant la fin de sa phrase pour gagner du temps","Tu notes sans le regarder pour aller plus vite","Tu hoches la tête sans rien dire"], bonne: 0, explication: "Exemple : « Donc une entrecôte saignante, sans sauce, avec des haricots verts à la place des frites ? »" },
      { q: "Entre collègues, en salle, peut-on parler des clients ?", choix: ["Oui, à voix basse","Non : on reste discret, jamais de commentaire visible ou audible par les clients","Oui, si on parle d'eux en anglais","Oui, seulement des habitués"], bonne: 1, explication: "Un client qui surprend un commentaire sur lui ne revient pas." },
      { q: "Un client mécontent se met à crier dans la salle. Quelle est la bonne réaction ?", choix: ["Hausser le ton pour te faire respecter","Rester calme, parler posément, lui proposer de poursuivre la discussion à l'écart et prévenir ton responsable","Lui expliquer point par point qu'il a tort","Partir sans rien dire pour éviter le conflit"], bonne: 1, explication: "Le calme fait baisser la tension ; l'isoler protège les autres clients." },
      { q: "Un client visiblement ivre commande une nouvelle bouteille de vin. Que fais-tu ?", choix: ["Tu le sers, puisqu'il paie","Tu refuses poliment de le servir, tu proposes une boisson sans alcool ou un café et tu préviens ton responsable","Tu lui sers un demi-verre seulement","Tu le sers si la personne qui l'accompagne est d'accord"], bonne: 1, explication: "Servir de l'alcool à une personne manifestement ivre est interdit." },
      { q: "Un client en fauteuil roulant dîne avec un ami. À qui t'adresses-tu pour prendre sa commande ?", choix: ["Directement au client concerné","À l'ami qui l'accompagne","Aux deux, en regardant surtout l'accompagnant","À personne : tu attends qu'il te fasse signe"], bonne: 0, explication: "On s'adresse toujours à la personne elle-même, à sa hauteur si possible." }
    ]
  },
  {
    id: "cshcrp-vins",
    titre: "Les vins",
    matiere: "CAP CSHCR — Produits",
    questions: [
      { q: "Avec quel cépage fait-on le beaujolais ?", choix: ["Le pinot noir","Le gamay","Le merlot","La syrah"], bonne: 1, explication: "Le pinot noir est le cépage des bourgognes rouges." },
      { q: "Un bourgogne rouge est élaboré avec…", choix: ["Du pinot noir","Du cabernet sauvignon","Du grenache","Du gamay uniquement"], bonne: 0, explication: "En Bourgogne, les rouges sont presque tous issus du pinot noir." },
      { q: "Le chablis est…", choix: ["Un blanc sec de Bourgogne, à base de chardonnay","Un rouge léger du Beaujolais","Un blanc de Loire, à base de sauvignon","Un rosé de Provence"], bonne: 0, explication: "Chablis se situe au nord de la Bourgogne : vin blanc sec, vif et minéral." },
      { q: "Avec quel cépage fait-on le sancerre blanc ?", choix: ["Le chardonnay","Le sauvignon","Le riesling","Le chenin"], bonne: 1, explication: "Le chenin est le cépage du vouvray et du savennières, en Anjou-Touraine." },
      { q: "Comment obtient-on un vin rosé en France ?", choix: ["En mélangeant du vin blanc et du vin rouge","Avec des raisins noirs et une macération courte","Avec des variétés de raisins roses spéciales","En ajoutant du cassis à un vin blanc"], bonne: 1, explication: "Le mélange de blanc et de rouge est interdit, sauf pour le champagne rosé." },
      { q: "Sur une étiquette, le millésime indique…", choix: ["L'année de mise en bouteille","L'année de récolte du raisin","L'âge minimum du vin","Le nom du domaine"], bonne: 1, explication: "Un vin millésimé 2022 est fait avec des raisins récoltés en 2022." },
      { q: "Pourquoi un sauternes est-il un vin liquoreux, très sucré ?", choix: ["On ajoute du sucre avant la fermentation","La pourriture noble concentre le sucre dans les raisins","On ajoute de l'alcool pendant la fermentation (mutage)","Les raisins sont vendangés gelés"], bonne: 1, explication: "Le mutage concerne les vins doux naturels et le porto ; les raisins gelés donnent les vins de glace." },
      { q: "Dans la méthode traditionnelle (celle du champagne), d'où viennent les bulles ?", choix: ["D'une seconde fermentation en bouteille","D'un ajout de gaz carbonique","D'une seconde fermentation en grande cuve fermée","D'un mélange avec de l'eau gazeuse"], bonne: 0, explication: "La fermentation en cuve close est une autre méthode, utilisée pour beaucoup de mousseux." },
      { q: "Lequel de ces champagnes est le plus sucré ?", choix: ["Brut","Extra-brut","Demi-sec","Brut nature"], bonne: 2, explication: "Du moins sucré au plus sucré : brut nature, extra-brut, brut, extra-dry, sec, demi-sec, doux." },
      { q: "Sur la rive droite de Bordeaux (Saint-Émilion, Pomerol), quel cépage domine ?", choix: ["Le cabernet sauvignon","Le merlot","Le pinot noir","La syrah"], bonne: 1, explication: "Le cabernet sauvignon domine sur la rive gauche (Médoc, Graves)." }
    ]
  },
  {
    id: "cshcrp-fromages",
    titre: "Les fromages de nos régions",
    matiere: "CAP CSHCR — Produits",
    questions: [
      { q: "De quelle région vient le brie de Meaux (AOP) ?", choix: ["Normandie","Île-de-France","Bourgogne","Champagne"], bonne: 1, explication: "Meaux est en Seine-et-Marne. Le camembert, lui, est normand." },
      { q: "L'époisses est…", choix: ["Un fromage de Bourgogne à croûte lavée au marc de Bourgogne","Un fromage du Jura à pâte pressée cuite","Un fromage d'Alsace à croûte fleurie","Un chèvre de Normandie"], bonne: 0, explication: "Sa croûte orangée est lavée à l'eau-de-vie de marc pendant l'affinage." },
      { q: "L'ossau-iraty est un fromage…", choix: ["Au lait de vache, de Savoie","Au lait de brebis, des Pyrénées","Au lait de chèvre, du Poitou","Au lait de vache, d'Auvergne"], bonne: 1, explication: "Il vient du Béarn et du Pays basque." },
      { q: "Le mont-d'or (vacherin du Haut-Doubs) se reconnaît…", choix: ["À sa sangle d'épicéa et à sa pâte très crémeuse, souvent servie chaude au four","À sa croûte grise cendrée","À ses veines bleues","À sa forme de pyramide"], bonne: 0, explication: "On le trouve surtout en saison froide, de l'automne au printemps." },
      { q: "La fourme d'Ambert est…", choix: ["Une pâte persillée au lait de vache, d'Auvergne","Une pâte pressée cuite du Jura","Un chèvre de la Loire","Un fromage de brebis corse"], bonne: 0, explication: "Le roquefort, autre pâte persillée, est au lait de brebis." },
      { q: "Quel chèvre AOP se reconnaît à la paille de seigle qui le traverse en son centre ?", choix: ["Le sainte-maure-de-touraine","Le crottin de Chavignol","Le banon","Le valençay"], bonne: 0, explication: "La paille maintient la bûche, fragile, et porte l'identification de l'AOP." },
      { q: "Le banon (AOP, Provence) est un fromage de chèvre enveloppé…", choix: ["De feuilles de châtaignier","De cendre de bois","D'une sangle d'épicéa","D'une feuille de vigne"], bonne: 0, explication: "Les feuilles, nouées avec du raphia, protègent le fromage pendant l'affinage." },
      { q: "D'où vient la couleur orange de la mimolette ?", choix: ["Du rocou, un colorant naturel","De la carotte","Du safran","Du paprika"], bonne: 0, explication: "Le rocou est une graine d'Amérique du Sud, aussi utilisée pour le cheddar orange." },
      { q: "Lequel de ces fromages n'est pas affiné ?", choix: ["La faisselle","Le comté","Le camembert","Le roquefort"], bonne: 0, explication: "Les fromages frais se consomment juste après l'égouttage." },
      { q: "Que signifie la mention « fromage fermier » ?", choix: ["Fabriqué à la ferme, avec le lait de l'exploitation","Fabriqué en laiterie avec du lait de plusieurs fermes","Fabriqué avec du lait bio","Vendu uniquement sur les marchés"], bonne: 0, explication: "Un fromage « laitier » est fabriqué en laiterie avec le lait de plusieurs producteurs." }
    ]
  },
  {
    id: "cshcrp-alcools",
    titre: "Les alcools et apéritifs",
    matiere: "CAP CSHCR — Produits",
    questions: [
      { q: "Le cognac est obtenu par distillation…", choix: ["De vin blanc","De cidre","De céréales maltées","De jus de canne à sucre"], bonne: 0, explication: "Cidre : calvados. Céréales : whisky. Canne : rhum." },
      { q: "Que signifie la mention XO sur un cognac ?", choix: ["C'est la qualité la plus jeune","C'est un cognac plus longuement vieilli que les VS et VSOP","C'est un cognac aromatisé","C'est un cognac de moins de 2 ans"], bonne: 1, explication: "Du plus jeune au plus vieux : VS (ou trois étoiles), VSOP, XO." },
      { q: "Le calvados est une eau-de-vie de…", choix: ["Vin blanc","Cidre (pommes, parfois poires)","Prune","Grain"], bonne: 1, explication: "Le calvados est normand. L'eau-de-vie de prune est la mirabelle ou la quetsche." },
      { q: "Le rhum agricole est fabriqué à partir…", choix: ["Du pur jus de canne à sucre","De la mélasse, un résidu de sucrerie","De betterave","De riz fermenté"], bonne: 0, explication: "Le rhum traditionnel, ou de sucrerie, est fait à partir de mélasse." },
      { q: "Le porto, le pineau des Charentes et le banyuls sont des…", choix: ["Eaux-de-vie","Vins mutés : on ajoute de l'alcool pendant la fermentation","Liqueurs de fruits","Vins effervescents"], bonne: 1, explication: "Le mutage arrête la fermentation : le vin garde son sucre." },
      { q: "Qu'est-ce qu'un kir royal ?", choix: ["Du vin blanc et de la crème de cassis","Du champagne et de la crème de cassis","Du crémant et de la crème de pêche","Du champagne et de la crème de mûre"], bonne: 1, explication: "Le kir classique se fait avec du vin blanc (traditionnellement un bourgogne aligoté)." },
      { q: "Une bière blanche est brassée en partie avec…", choix: ["Du froment (blé)","Du riz","Du maïs uniquement","Du lait"], bonne: 0, explication: "Elle est trouble et souvent servie avec une tranche de citron." },
      { q: "Sur une bouteille de whisky, la mention « 40 % vol. » signifie…", choix: ["40 % du volume est de l'alcool pur","La bouteille contient 40 g de sucre","Le whisky a 40 ans","40 % de la bouteille est de l'eau"], bonne: 0, explication: "C'est le titre alcoométrique volumique (TAV)." },
      { q: "Comment sert-on un pastis ?", choix: ["Pur, sans eau","Avec de l'eau fraîche ajoutée devant le client, environ 5 volumes d'eau pour 1 de pastis","Chaud, avec du sucre","Avec du jus d'orange"], bonne: 1, explication: "Ajoutée au pastis, l'eau le rend trouble : c'est normal." },
      { q: "Un jeune client semble avoir moins de 18 ans et commande une bière. Que fais-tu ?", choix: ["Tu le sers, la bière est peu alcoolisée","Tu lui demandes une pièce d'identité et tu refuses s'il est mineur","Tu lui sers une demi-bière","Tu le sers s'il est accompagné d'amis majeurs"], bonne: 1, explication: "La vente et l'offre d'alcool sont interdites aux mineurs, quelle que soit la boisson." }
    ]
  },
  {
    id: "cshcrp-softs",
    titre: "Soft drinks et jus",
    matiere: "CAP CSHCR — Produits",
    questions: [
      { q: "Quel ingrédient donne son amertume au tonic ?", choix: ["La quinine","La caféine","Le gingembre","Le citron vert"], bonne: 0, explication: "Le gingembre est la base du ginger ale et du ginger beer." },
      { q: "Quelle est la différence entre un jus de fruits et un nectar ?", choix: ["Aucune","Le jus est 100 % fruit ; le nectar contient de l'eau et souvent du sucre ajouté","Le nectar est toujours plus riche en fruits","Le jus contient du sucre ajouté, pas le nectar"], bonne: 1, explication: "Un nectar contient généralement de 25 à 50 % de fruit, selon le fruit." },
      { q: "Un « pur jus » d'orange est…", choix: ["Obtenu par simple pression des fruits, sans concentration","Fabriqué à partir de jus concentré auquel on a ajouté de l'eau","Un jus avec du sucre ajouté","Un nectar d'orange"], bonne: 0, explication: "« À base de concentré » : le jus a été concentré pour le transport, puis réhydraté." },
      { q: "Un diabolo menthe, c'est…", choix: ["De la limonade et du sirop de menthe","De l'eau plate et du sirop de menthe","De l'eau gazeuse et du sirop de menthe","Du tonic et de la menthe fraîche"], bonne: 0, explication: "Le sirop avec de l'eau plate s'appelle simplement un « menthe à l'eau »." },
      { q: "Quelle est la différence entre une citronnade et une limonade ?", choix: ["Aucune","La citronnade est faite de jus de citron, d'eau et de sucre, sans gaz ; la limonade est gazeuse","La limonade contient de l'alcool","La citronnade est toujours servie chaude"], bonne: 1, explication: "La limonade industrielle est une eau gazéifiée, sucrée et aromatisée au citron." },
      { q: "Qu'est-ce qu'une boisson « zéro » ou « light » ?", choix: ["Une boisson sans eau","Une boisson dont le sucre est remplacé par des édulcorants","Une boisson sans gaz","Une boisson sans caféine"], bonne: 1, explication: "Elle apporte très peu de calories, mais garde un goût sucré." },
      { q: "Un cocktail sans alcool s'appelle aussi un…", choix: ["Mocktail","Smoothie","Punch","Shrub"], bonne: 0, explication: "Le smoothie est un mixé de fruits ; le punch contient traditionnellement du rhum." },
      { q: "Un smoothie, c'est…", choix: ["Un jus pressé filtré","Une boisson de fruits mixés entiers, épaisse, parfois avec du yaourt ou du lait","Un soda aux fruits","Un sirop de fruits dilué"], bonne: 1, explication: "Il garde les fibres des fruits, d'où sa texture épaisse." },
      { q: "Pourquoi les boissons énergisantes sont-elles déconseillées aux enfants et aux adolescents ?", choix: ["Elles contiennent de l'alcool","Elles sont très riches en caféine et en sucre","Elles sont trop gazeuses","Elles contiennent du gluten"], bonne: 1, explication: "Elles contiennent aussi souvent de la taurine." },
      { q: "À quelle température sert-on un soda ou un jus de fruits ?", choix: ["À température ambiante","Bien frais, autour de 6 à 8 °C","Glacé à 0 °C, sans exception","Tiède"], bonne: 1, explication: "Les glaçons se proposent en plus, selon le goût du client." }
    ]
  },
  {
    id: "cshcrp-boissons-chaudes",
    titre: "Les boissons chaudes",
    matiere: "CAP CSHCR — Produits",
    questions: [
      { q: "Quelle quantité de café moulu utilise-t-on pour un expresso ?", choix: ["Environ 2 g","Environ 7 g","Environ 15 g","Environ 25 g"], bonne: 1, explication: "Pour un double expresso, on double la dose (environ 14 g)." },
      { q: "Quelle est la différence entre l'arabica et le robusta ?", choix: ["Aucune","L'arabica est plus doux et aromatique ; le robusta est plus corsé et plus riche en caféine","Le robusta est plus doux et moins caféiné","L'arabica est un café soluble"], bonne: 1, explication: "Les mélanges associent souvent les deux." },
      { q: "Un ristretto, c'est…", choix: ["Un expresso allongé avec de l'eau chaude","Un expresso serré, plus court et plus concentré","Un expresso avec du lait","Un café filtre"], bonne: 1, explication: "L'expresso allongé est le lungo ; avec de l'eau chaude ajoutée, c'est un café américain." },
      { q: "Un café noisette, c'est…", choix: ["Un expresso parfumé à la noisette","Un expresso avec une touche de lait ou de mousse de lait","Un café au lait servi en bol","Un expresso avec de la crème fouettée"], bonne: 1, explication: "Le nom vient de la couleur noisette obtenue." },
      { q: "Quelle est la différence entre un thé vert et un thé noir ?", choix: ["Ce sont deux plantes différentes","Le thé vert n'est pas oxydé ; le thé noir est complètement oxydé","Le thé noir contient du café","Le thé vert est toujours parfumé à la menthe"], bonne: 1, explication: "Le thé oolong, ou thé bleu-vert, est semi-oxydé." },
      { q: "À quelle température fait-on infuser un thé vert ?", choix: ["Eau bouillante à 100 °C","Environ 70 à 80 °C","Environ 40 °C","Eau froide"], bonne: 1, explication: "Trop chaude, l'eau rend le thé vert amer ; le thé noir supporte 90-95 °C." },
      { q: "Une infusion (verveine, tilleul, camomille) se distingue du thé parce que…", choix: ["Elle est faite de plantes autres que le théier, sans théine","Elle contient plus de caféine que le thé","Elle est toujours servie froide","Elle se fait avec du café"], bonne: 0, explication: "On la propose souvent le soir, car elle ne contient pas d'excitant." },
      { q: "Pourquoi préchauffe-t-on la tasse d'un expresso ?", choix: ["Pour la désinfecter","Pour que le café ne refroidisse pas trop vite et garde sa crème","Pour faire fondre le sucre","Pour qu'elle brille"], bonne: 1, explication: "Les machines ont souvent un chauffe-tasses sur le dessus." },
      { q: "Un chocolat chaud « à l'ancienne » se prépare…", choix: ["Avec du chocolat fondu dans du lait chaud","Avec de l'eau chaude et du cacao en poudre sucré","Avec du café et du sucre","Avec du lait froid"], bonne: 0, explication: "Il est plus épais et plus riche qu'un chocolat préparé avec une poudre." },
      { q: "Que signifie un expresso sans crème, avec un goût très amer et brûlé ?", choix: ["Il est parfait","L'extraction est mauvaise : café trop fin, trop tassé, ou eau trop chaude","Il faut ajouter du lait","C'est un ristretto"], bonne: 1, explication: "Un café trop pâle et aqueux est au contraire sous-extrait (mouture trop grosse)." }
    ]
  },
  {
    id: "cshcrp-eaux",
    titre: "Eaux minérales et de source",
    matiere: "CAP CSHCR — Produits",
    questions: [
      { q: "Quelle est la différence entre une eau minérale naturelle et une eau de source ?", choix: ["Aucune","L'eau minérale a une composition en minéraux stable et peut avoir des effets reconnus sur la santé ; l'eau de source doit seulement être potable","L'eau de source est traitée chimiquement","L'eau minérale est toujours gazeuse"], bonne: 1, explication: "Les deux sont d'origine souterraine et embouteillées à la source." },
      { q: "Une eau « gazéifiée » est une eau…", choix: ["Naturellement gazeuse à la source","À laquelle on a ajouté du gaz carbonique","Qui a perdu ses bulles","Riche en sodium"], bonne: 1, explication: "Une eau « naturellement gazeuse » contient du gaz dès la source." },
      { q: "Sur une étiquette d'eau, le « résidu sec » indique…", choix: ["La quantité totale de minéraux, en mg par litre","La quantité de gaz","La date d'embouteillage","Le degré d'acidité"], bonne: 0, explication: "On l'obtient en faisant évaporer l'eau et en pesant ce qui reste." },
      { q: "Quelle eau convient pour préparer le biberon d'un nourrisson ?", choix: ["Une eau riche en minéraux et en sodium","Une eau faiblement minéralisée portant la mention « convient pour l'alimentation des nourrissons »","N'importe quelle eau gazeuse","L'eau la plus froide possible"], bonne: 1, explication: "Les reins des bébés supportent mal les minéraux en excès." },
      { q: "Un client commande une carafe d'eau avec son repas. Combien la factures-tu ?", choix: ["Le prix d'une petite bouteille","Rien : l'eau du robinet en carafe servie avec un repas est gratuite","1 € par personne","Le prix au litre de l'eau minérale"], bonne: 1, explication: "Les bouteilles d'eau minérale ou de source, elles, sont payantes." },
      { q: "Comment présente-t-on une bouteille d'eau minérale à table ?", choix: ["On l'ouvre en cuisine et on l'apporte sans bouchon","On l'ouvre devant le client, puis on le sert par la droite","On la pose fermée et le client l'ouvre lui-même","On la verse dans une carafe en cuisine"], bonne: 1, explication: "L'ouverture devant le client prouve que la bouteille est neuve." },
      { q: "À quelle température sert-on une eau minérale ?", choix: ["Glacée, à 0 °C","Fraîche, autour de 8 à 12 °C","À température ambiante, autour de 20 °C","Tiède"], bonne: 1, explication: "Trop glacée, l'eau masque les saveurs du repas." },
      { q: "Comment stocke-t-on les bouteilles d'eau en réserve ?", choix: ["Au soleil, sur le quai de livraison","À l'abri de la lumière, de la chaleur et des odeurs","À côté des produits d'entretien","Peu importe, l'eau ne s'abîme pas"], bonne: 1, explication: "Les bouteilles en plastique peuvent prendre le goût des produits voisins." },
      { q: "Une eau riche en sodium (salée) est déconseillée…", choix: ["Aux sportifs","Aux personnes qui suivent un régime pauvre en sel","À tout le monde après 18 h","Aux enfants de plus de 10 ans"], bonne: 1, explication: "Le sodium est indiqué sur l'étiquette, avec les autres minéraux." },
      { q: "Pour limiter les déchets, quelle solution un restaurant peut-il mettre en avant ?", choix: ["Ne servir que des petites bouteilles en plastique","Proposer l'eau du robinet filtrée en carafe, et des bouteilles en verre consignées","Supprimer l'eau de la carte","Servir l'eau dans des gobelets jetables"], bonne: 1, explication: "Le verre consigné est lavé et réutilisé." }
    ]
  },
  {
    id: "cshcrp-labels",
    titre: "Les labels et signes de qualité",
    matiere: "CAP CSHCR — Produits",
    questions: [
      { q: "Quelle est la différence entre l'AOC et l'AOP ?", choix: ["L'AOC est française ; l'AOP est son équivalent européen","L'AOP est réservée aux vins","L'AOC garantit l'agriculture biologique","Il n'existe que l'AOP"], bonne: 0, explication: "La plupart des produits AOC français portent aujourd'hui le logo européen AOP (sauf les vins, qui peuvent garder AOC)." },
      { q: "Pour porter le logo AB (agriculture biologique), un plat préparé doit contenir…", choix: ["Au moins 50 % d'ingrédients agricoles bio","Au moins 95 % d'ingrédients agricoles bio","100 % d'ingrédients bio, eau et sel compris","Un seul ingrédient bio"], bonne: 1, explication: "Le logo européen (la feuille étoilée) est obligatoire ; le logo AB français est facultatif." },
      { q: "Que garantit le Label Rouge ?", choix: ["Une origine géographique précise","Une qualité supérieure, contrôlée, par rapport aux produits courants","Un mode de production biologique","Un produit fabriqué en France uniquement"], bonne: 1, explication: "Ses produits passent des tests de dégustation réguliers." },
      { q: "Les moules de bouchot portent la mention STG. Que signifie-t-elle ?", choix: ["Spécialité traditionnelle garantie : une recette ou un mode de production traditionnel","Sans traitement garanti","Signe de terroir géographique","Standard de taille garanti"], bonne: 0, explication: "La STG protège un savoir-faire, pas une origine." },
      { q: "Les anciens « vins de pays » s'appellent aujourd'hui…", choix: ["Des vins AOP","Des vins IGP","Des vins Label Rouge","Des vins de France sans mention"], bonne: 1, explication: "Exemple : IGP Pays d'Oc, IGP Côtes de Gascogne." },
      { q: "Le logo « fait maison » (une casserole surmontée d'un toit) sur une carte signifie…", choix: ["Que le plat est cuisiné sur place à partir de produits bruts","Que le plat vient d'un traiteur local","Que le plat est bio","Que le chef est maître restaurateur"], bonne: 0, explication: "Quelques produits transformés sont tolérés (fromage, pâtes sèches, charcuterie…)." },
      { q: "Le titre de « maître restaurateur » est…", choix: ["Un diplôme de cuisine","Un titre délivré par l'État après un audit (cuisine faite maison, produits frais, accueil)","Une étoile d'un guide gastronomique","Un label d'agriculture bio"], bonne: 1, explication: "Il est attribué pour 4 ans après une visite de contrôle." },
      { q: "Lequel n'est PAS un signe officiel de qualité et d'origine ?", choix: ["L'AOP","Le Label Rouge","L'agriculture biologique","L'étoile du Guide Michelin"], bonne: 3, explication: "Le Guide Michelin est un guide privé : ses étoiles récompensent un restaurant, pas un produit." },
      { q: "Que garantit le label MSC sur un poisson sauvage ?", choix: ["Une pêche durable, qui préserve les stocks de poissons","Un poisson d'élevage bio","Un poisson pêché en France","Un poisson sans arêtes"], bonne: 0, explication: "Pour les poissons d'élevage, le label équivalent est ASC." },
      { q: "Quel label environnemental peut obtenir un hôtel ou un restaurant ?", choix: ["La Clef Verte (ou l'Écolabel européen)","Le Label Rouge","L'AOP","La STG"], bonne: 0, explication: "Les signes AOP, Label Rouge et STG concernent des produits alimentaires." }
    ]
  },
  {
    id: "cshcrp-eco",
    titre: "La démarche éco-responsable",
    matiere: "CAP CSHCR — Produits",
    questions: [
      { q: "Un client demande à emporter les restes de son plat. Que fait le restaurant ?", choix: ["Il refuse, c'est interdit","Il doit lui fournir un contenant (« doggy bag »), réutilisable ou recyclable, s'il le demande","Il facture le reste du plat","Il le fait seulement pour les desserts"], bonne: 1, explication: "C'est une obligation pour les restaurants depuis 2021." },
      { q: "Depuis 2021, quels objets en plastique à usage unique sont interdits en restauration ?", choix: ["Les pailles, les couverts et les touillettes en plastique jetable","Les bouteilles en verre","Les nappes en tissu","Les plateaux en inox"], bonne: 0, explication: "Il faut les remplacer par du réutilisable, ou par du bois ou du carton." },
      { q: "Dans un fast-food, depuis 2023, comment doivent être servis les repas consommés sur place ?", choix: ["Dans des emballages jetables","Dans de la vaisselle réutilisable (verres, assiettes, couverts lavables)","Sans couverts","Uniquement en barquettes en carton"], bonne: 1, explication: "Le jetable reste autorisé pour la vente à emporter." },
      { q: "Depuis 2024, que doivent faire tous les professionnels de la restauration avec leurs déchets alimentaires ?", choix: ["Les jeter avec les ordures ménagères","Les trier à part (biodéchets) pour qu'ils soient valorisés","Les donner aux clients","Les verser dans l'évier"], bonne: 1, explication: "Ils servent ensuite au compostage ou à la méthanisation." },
      { q: "Un produit en « circuit court » est vendu…", choix: ["Avec au maximum un intermédiaire entre le producteur et le restaurant","Seulement par un producteur à moins de 10 km","Uniquement en agriculture biologique","Par une centrale d'achat nationale"], bonne: 0, explication: "Un circuit court n'est pas forcément local, mais il l'est souvent." },
      { q: "Servir des tomates fraîches en décembre pose quel problème environnemental ?", choix: ["Aucun","Elles viennent de serres chauffées ou de pays lointains : forte consommation d'énergie et de transport","Elles sont interdites à la vente","Elles contiennent plus de vitamines"], bonne: 1, explication: "Elles ont aussi moins de goût que les tomates d'été." },
      { q: "À l'hôtel, quel geste éco-responsable peut-on proposer aux clients ?", choix: ["Changer toutes les serviettes chaque jour, même propres","Réutiliser leurs serviettes en les laissant suspendues","Laisser la climatisation allumée fenêtres ouvertes","Distribuer des petites bouteilles en plastique de gel douche"], bonne: 1, explication: "On ne change alors que les serviettes posées au sol ou dans la baignoire." },
      { q: "Que peut faire un restaurant des repas préparés et non servis, encore consommables ?", choix: ["Les jeter systématiquement","Les donner à une association d'aide alimentaire, en respectant les règles d'hygiène","Les resservir le lendemain sans contrôle","Les vendre en cachette au personnel"], bonne: 1, explication: "Le don doit respecter la chaîne du froid et la traçabilité." },
      { q: "Quel équipement permet d'économiser l'eau en salle et à la plonge ?", choix: ["Des robinets à fort débit","Des mousseurs et des robinets temporisés","Le lavage des verres à l'eau courante","Un rinçage abondant de chaque assiette"], bonne: 1, explication: "Le mousseur mélange de l'air à l'eau : même confort, moins d'eau." },
      { q: "Selon la loi EGalim, quelle part de produits durables et de qualité la restauration collective doit-elle servir ?", choix: ["10 %","Au moins 50 %, dont au moins 20 % de produits bio","100 % bio","Aucune obligation"], bonne: 1, explication: "Les produits « durables » comprennent notamment les labels de qualité (Label Rouge, AOP, IGP…)." }
    ]
  },
  {
    id: "cshcrp-petit-dejeuner",
    titre: "Le petit déjeuner",
    matiere: "CAP CSHCR — Produits",
    questions: [
      { q: "Que trouve-t-on dans un petit déjeuner continental ?", choix: ["Boisson chaude, jus de fruits, pain, viennoiseries, beurre et confiture","Œufs au bacon, saucisses et haricots à la tomate","Soupe miso, riz et poisson grillé","Uniquement un café et un croissant"], bonne: 0, explication: "Les œufs, le bacon et les saucisses caractérisent le petit déjeuner anglais." },
      { q: "Laquelle de ces viennoiseries n'est PAS en pâte levée feuilletée ?", choix: ["Le croissant","Le pain au chocolat","La brioche","Le pain aux raisins"], bonne: 2, explication: "La brioche est une pâte levée, mais elle n'est pas feuilletée : on n'y incorpore pas de couches de beurre." },
      { q: "Que contiennent les œufs Bénédicte ?", choix: ["Un muffin anglais, du jambon ou du bacon, un œuf poché et une sauce hollandaise","Des œufs brouillés et du saumon fumé","Une omelette au fromage","Des œufs durs et de la mayonnaise"], bonne: 0, explication: "Avec du saumon fumé à la place du jambon, on les appelle souvent œufs « royale »." },
      { q: "Comment le client commande-t-il un petit déjeuner servi en chambre ?", choix: ["Il appelle la cuisine à 3 h du matin","Avec une carte accroche-porte remplie la veille, ou par téléphone","En descendant au restaurant","Le petit déjeuner en chambre est toujours le même pour tous"], bonne: 1, explication: "La carte indique l'heure de service souhaitée et les choix du client." },
      { q: "Sur un buffet de petit déjeuner, à quelle température présente-t-on les yaourts, le beurre et la charcuterie ?", choix: ["À température ambiante pendant tout le service","Au froid, entre 0 et +3 °C (vitrine ou bacs réfrigérés)","À +10 °C","Au chaud"], bonne: 1, explication: "Les plats chauds (œufs, bacon) restent à +63 °C minimum." },
      { q: "Pourquoi presse-t-on le jus d'orange à la demande plutôt qu'à l'avance ?", choix: ["Pour garder son goût et sa vitamine C, qui s'abîme à l'air","Parce que c'est plus rapide","Parce que le jus pressé à l'avance devient alcoolisé","Pour économiser des oranges"], bonne: 0, explication: "Pressé et laissé à l'air, le jus perd sa vitamine C et s'oxyde." },
      { q: "Qu'est-ce qu'un brunch ?", choix: ["Un petit déjeuner très tôt","Un repas de fin de matinée qui associe petit déjeuner et déjeuner, sucré et salé","Un goûter","Un dîner léger"], bonne: 1, explication: "Le mot vient de l'anglais « breakfast » + « lunch »." },
      { q: "Une chambre réservée « en demi-pension » comprend…", choix: ["La nuit seulement","La nuit, le petit déjeuner et un repas (déjeuner ou dîner)","La nuit et les trois repas","Le petit déjeuner seulement"], bonne: 1, explication: "La nuit avec petit déjeuner seulement, c'est la formule « chambre et petit déjeuner »." },
      { q: "Comment présente-t-on le beurre et la confiture au petit déjeuner, pour limiter les déchets ?", choix: ["En portions individuelles en plastique, toujours","En pots ou en coupelles rechargeables, avec une cuillère de service","Directement sur l'assiette du client","On ne les propose plus"], bonne: 1, explication: "Les portions individuelles produisent beaucoup d'emballages." },
      { q: "Un client allergique au gluten demande ce qu'il peut manger au buffet. Que fais-tu ?", choix: ["Tu lui dis d'éviter seulement le pain","Tu consultes la liste des allergènes de chaque produit et tu lui proposes les produits sans gluten adaptés","Tu lui conseilles de goûter avant","Tu lui réponds que tout contient du gluten"], bonne: 1, explication: "Le gluten se cache aussi dans les céréales, les viennoiseries, certaines charcuteries et sauces." }
    ]
  },
  {
    id: "cshcrp-hebergement",
    titre: "L'hébergement",
    matiere: "CAP CSHCR — Produits",
    questions: [
      { q: "Qui attribue les étoiles d'un hôtel en France ?", choix: ["Le Guide Michelin","Atout France, après une visite d'inspection, pour 5 ans","La mairie, chaque année","Les clients, par leurs avis en ligne"], bonne: 1, explication: "Le classement va de 1 à 5 étoiles, avec la distinction « Palace » au-dessus." },
      { q: "Une chambre « twin », c'est…", choix: ["Une chambre avec un grand lit double","Une chambre avec deux lits séparés","Une chambre pour une seule personne","Une suite avec salon"], bonne: 1, explication: "Une chambre double a un grand lit pour deux personnes." },
      { q: "À quoi sert l'alèse ?", choix: ["À décorer le lit","À protéger le matelas","À remplacer le drap housse","À couvrir l'oreiller"], bonne: 1, explication: "Elle se place sur le matelas, sous le drap housse." },
      { q: "Les « produits d'accueil » d'une chambre, ce sont…", choix: ["Les meubles de la chambre","Les produits d'hygiène mis à disposition (gel douche, shampooing, savon…)","Les boissons du minibar","Les documents de bienvenue seulement"], bonne: 1, explication: "On les appelle aussi « amenities »." },
      { q: "Que doit remplir un client étranger à son arrivée à l'hôtel ?", choix: ["Une fiche individuelle de police","Un bon de commande","Une déclaration de revenus","Rien de particulier"], bonne: 0, explication: "L'hôtelier la conserve et la tient à disposition des autorités." },
      { q: "Qui paie la taxe de séjour ?", choix: ["L'hôtel, sur ses bénéfices","Le client, par nuit et par personne ; l'hôtel la reverse à la commune","Les employés de l'hôtel","L'État, chaque année"], bonne: 1, explication: "Son montant dépend du classement de l'hébergement et de la commune." },
      { q: "Comment s'appelle une chambre qu'on ne peut pas louer à cause de travaux ou d'une panne ?", choix: ["Une chambre en recouche","Une chambre hors service","Une chambre à blanc","Une chambre libre propre"], bonne: 1, explication: "Le service des étages informe la réception de l'état de chaque chambre." },
      { q: "Que fait-on du linge sale en retirant les draps d'une chambre ?", choix: ["On le pose sur le sol du couloir","On le met directement dans le sac ou le chariot prévu, sans le poser au sol ni le secouer","On le plie et on le remet dans l'armoire","On le laisse sur le lit pour la lingerie"], bonne: 1, explication: "Le secouer disperse la poussière et les microbes." },
      { q: "Quelle est la différence entre un lit « à la française » et un lit « à la scandinave » ?", choix: ["Aucune","À la française : drap et couverture bordés ; à la scandinave : une couette dans sa housse","À la française : sans oreiller","À la scandinave : sans drap housse"], bonne: 1, explication: "La couette est plus rapide à faire, d'où son succès dans les hôtels." },
      { q: "Pourquoi certaines chambres sont-elles dites « PMR » ?", choix: ["Parce qu'elles sont plus petites","Parce qu'elles sont adaptées aux personnes à mobilité réduite (accès, salle de bains, équipements)","Parce qu'elles sont réservées au personnel","Parce qu'elles sont moins chères"], bonne: 1, explication: "Un hôtel est un ERP : il doit respecter les règles d'accessibilité." }
    ]
  },
  {
    id: "psr-production",
    titre: "La production collective",
    matiere: "CAP PSR",
    questions: [
      { q: "Une cuisine centrale…", choix: ["Sert uniquement les repas sur place","Produit les repas pour plusieurs restaurants satellites","Remet en température les plats reçus d'ailleurs","Est la cuisine d'un restaurant gastronomique"], bonne: 1, explication: "Ce sont les satellites qui remettent en température et servent." },
      { q: "En liaison chaude, le plat doit rester à…", choix: ["+55 °C minimum","+60 °C minimum","+63 °C minimum","+50 °C minimum"], bonne: 2, explication: "De la fin de cuisson jusqu'à la consommation." },
      { q: "En liaison froide, le refroidissement rapide doit amener le plat…", choix: ["De +63 °C à +10 °C en moins de 2 h","De +63 °C à +3 °C en moins d'1 h","De +63 °C à +10 °C en moins de 4 h","De +90 °C à +20 °C en moins de 2 h"], bonne: 0, explication: "On utilise une cellule de refroidissement rapide." },
      { q: "En liaison froide, les plats sont stockés…", choix: ["Entre 0 et +3 °C","Entre +8 et +10 °C","À −18 °C","À température ambiante"], bonne: 0, explication: "Puis on les remet en température à +63 °C en moins d'1 h." },
      { q: "La remise en température d'un plat en liaison froide doit atteindre +63 °C en…", choix: ["Moins d'1 heure","Moins de 2 heures","Moins de 3 heures","Moins de 30 minutes"], bonne: 0, explication: "Plus la remontée est lente, plus le plat reste longtemps dans la zone de danger." },
      { q: "Combien de temps garde-t-on un plat témoin ?", choix: ["24 heures","3 jours","5 jours au froid (0 à +3 °C)","1 mois au congélateur"], bonne: 2, explication: "En cas d'intoxication, il permet d'analyser le plat." },
      { q: "« Assembler » un plat, c'est…", choix: ["Le cuire longuement","Le réaliser avec des produits déjà préparés","Le portionner en barquettes","Le refroidir en cellule"], bonne: 1, explication: "Par exemple, une salade composée avec des légumes de 4e gamme et une sauce prête." },
      { q: "Des carottes épluchées et râpées, prêtes à l'emploi, vendues en sachet, sont des légumes de…", choix: ["1re gamme","3e gamme","4e gamme","5e gamme"], bonne: 2, explication: "La 5e gamme regroupe les produits cuits et conditionnés sous vide." },
      { q: "Que doit indiquer l'étiquette d'une préparation conditionnée ?", choix: ["Le nom du cuisinier et la date","Le nom du produit, la date de fabrication et la DLC","Le prix et le grammage","Le nom du produit et les allergènes seulement"], bonne: 1, explication: "C'est indispensable pour la traçabilité et le respect des dates." },
      { q: "Le GEMRCN fixe, pour la restauration collective…", choix: ["Les salaires du personnel","Les grammages et la fréquence de service des plats","Les températures de stockage","Le prix des repas"], bonne: 1, explication: "Il vise l'équilibre nutritionnel des repas." }
    ]
  },
  {
    id: "psr-distribution-self",
    titre: "Distribution et self",
    matiere: "CAP PSR",
    questions: [
      { q: "Dans quel ordre trouve-t-on habituellement les produits sur une ligne de self ?", choix: ["Desserts, plats chauds, entrées","Plateaux et couverts, entrées, plats chauds, fromages, desserts","Plats chauds en premier, plateaux à la fin","Boissons, desserts, entrées, plats chauds"], bonne: 1, explication: "On suit l'ordre du repas, dans le sens du passage du convive." },
      { q: "À quelle température présente-t-on les entrées froides ?", choix: ["Entre 0 et +3 °C, en vitrine réfrigérée","Entre +4 et +8 °C","À +10 °C","À température ambiante, sous cloche"], bonne: 0, explication: "La vitrine réfrigérée maintient la chaîne du froid pendant le service." },
      { q: "Les plats chauds sur la ligne de self doivent rester à…", choix: ["+50 °C minimum","+55 °C minimum","+63 °C minimum","+45 °C minimum"], bonne: 2, explication: "On les garde au bain-marie ou sur une plaque chauffante." },
      { q: "À quoi sert le pare-haleine ?", choix: ["À éclairer les plats","À protéger les produits des postillons des convives","À garder la chaleur","À afficher les prix"], bonne: 1, explication: "C'est la vitre placée au-dessus des produits exposés." },
      { q: "Comment fait-on le réassort sur la ligne ?", choix: ["En mélangeant le bac neuf avec le reste","Souvent, en petites quantités, sans mélanger un bac neuf avec un reste","Une seule fois, au début du service","Quand le bac est vide depuis 10 minutes"], bonne: 1, explication: "Mélanger mettrait en contact un produit qui a attendu avec un produit frais." },
      { q: "Un plat a été présenté sur la ligne et n'a pas été pris. À la fin du service…", choix: ["On le resservira demain","On ne le resert pas","On le congèle","On le remet dans le bac neuf"], bonne: 1, explication: "Les produits présentés au convive et non consommés ne sont pas réutilisés." },
      { q: "Pourquoi utilise-t-on une louche ou une cuillère de portion calibrée ?", choix: ["Pour aller plus vite seulement","Pour servir des portions régulières (grammages)","Pour éviter de toucher les aliments","Pour réduire la vaisselle"], bonne: 1, explication: "Des portions régulières respectent les grammages et maîtrisent les coûts." },
      { q: "Les plateaux sortent du lave-vaisselle encore humides. Que fais-tu ?", choix: ["Je les mets en place, ils sécheront","Je les laisse sécher avant de les empiler et de les mettre en place","Je les essuie au torchon","Je les empile tout de suite pour gagner de la place"], bonne: 1, explication: "Empilés humides, ils favorisent les microbes. Le torchon transporte les microbes." },
      { q: "Que doit-on afficher pour informer les convives ?", choix: ["Les recettes complètes","Le menu et l'information sur les allergènes","Le grammage de chaque plat","Le nom des fournisseurs"], bonne: 1, explication: "L'information sur les allergènes est obligatoire en restauration." },
      { q: "Un bac de purée est resté 2 heures à +45 °C sur la ligne. Tu…", choix: ["Le resserts","Le jettes : il est resté dans la zone de danger","Le remets à chauffer et le resserts","Le mets au froid pour demain"], bonne: 1, explication: "Entre +10 et +63 °C, les bactéries se multiplient vite." }
    ]
  },
  {
    id: "psr-entretien",
    titre: "Entretien des locaux",
    matiere: "CAP PSR",
    questions: [
      { q: "Dans quel ordre nettoie-t-on un local ?", choix: ["Du bas vers le haut","Du haut vers le bas, du propre vers le sale, le sol en dernier","Du sale vers le propre","Le sol, puis les plans de travail"], bonne: 1, explication: "Sinon, la saleté retombe sur ce qui vient d'être nettoyé." },
      { q: "Pourquoi n'utilise-t-on pas de balai sec en zone alimentaire ?", choix: ["Il s'use trop vite","Il soulève la poussière et les microbes","Il raye le sol","Il est trop lent"], bonne: 1, explication: "On utilise un balai humide, une raclette ou un aspirateur adapté." },
      { q: "À quoi sert le code couleur des lavettes ?", choix: ["À repérer à qui appartient la lavette","À ne pas transporter les microbes d'une zone à l'autre","À distinguer le détergent du désinfectant","À indiquer quand la lavette est usée"], bonne: 1, explication: "Par exemple, une couleur pour les sanitaires, jamais utilisée en cuisine." },
      { q: "Le plan de nettoyage indique…", choix: ["Le menu de la semaine","Quoi nettoyer, qui le fait, quand, comment et avec quel produit","Les horaires d'ouverture","Les prix des produits"], bonne: 1, explication: "Chaque nettoyage effectué est noté pour assurer la traçabilité." },
      { q: "Peut-on mélanger de l'eau de Javel et un détartrant (acide) ?", choix: ["Oui, ça nettoie mieux","Non, ça dégage un gaz toxique","Oui, si l'eau est froide","Oui, si on aère la pièce"], bonne: 1, explication: "On ne mélange jamais deux produits d'entretien." },
      { q: "Pour qu'un désinfectant soit efficace, il faut…", choix: ["L'utiliser le plus concentré possible","Respecter le dosage et le temps de contact indiqués","Le rincer immédiatement","L'utiliser dans une eau très chaude"], bonne: 1, explication: "Trop dilué ou rincé trop tôt, il ne détruit pas les microbes." },
      { q: "Où trouve-t-on les risques d'un produit d'entretien et les protections à porter ?", choix: ["Sur la fiche technique","Sur l'étiquette (pictogrammes) et dans la fiche de données de sécurité (FDS)","Dans le plan de nettoyage","Sur le bon de livraison"], bonne: 1, explication: "La FDS précise aussi quoi faire en cas d'accident." },
      { q: "En lave-vaisselle, le rinçage se fait vers…", choix: ["20 °C","40 °C","80-85 °C","100 °C"], bonne: 2, explication: "Le lavage se fait vers 55-65 °C ; le rinçage très chaud désinfecte et aide au séchage." },
      { q: "Comment sèche-t-on la vaisselle après la plonge ?", choix: ["Avec un torchon propre","À l'air libre, sans torchon","Avec du papier absorbant, pièce par pièce","On la range encore humide"], bonne: 1, explication: "Le torchon transporte les microbes d'un objet à l'autre." },
      { q: "Où jette-t-on les huiles de friture usagées ?", choix: ["Dans l'évier, avec beaucoup d'eau chaude","Dans un bidon, pour une collecte spécifique","Dans la poubelle des biodéchets","Dans le bac à graisses"], bonne: 1, explication: "Elles bouchent les canalisations et polluent l'eau." }
    ]
  },
  {
    id: "psr-accueil-encaissement",
    titre: "Accueil et encaissement",
    matiere: "CAP PSR",
    questions: [
      { q: "En plein rush, un convive te pose une question sur un plat. Que fais-tu ?", choix: ["Tu réponds sans le regarder, en continuant de servir","Tu le regardes et tu réponds poliment, brièvement","Tu lui dis de demander au chef","Tu lui demandes de revenir plus tard"], bonne: 1, explication: "L'accueil compte autant que la rapidité." },
      { q: "Un convive demande si un plat contient du gluten. Que fais-tu ?", choix: ["Tu réponds « normalement non »","Tu consultes la fiche du plat ou l'étiquette","Tu lui conseilles d'éviter les sauces","Tu demandes au premier collègue venu"], bonne: 1, explication: "Une erreur sur un allergène peut provoquer une réaction grave." },
      { q: "Face à une réclamation, que fais-tu ?", choix: ["Tu te défends","Tu écoutes, tu reformules, puis tu proposes une solution","Tu proposes tout de suite un avoir","Tu appelles le responsable sans écouter"], bonne: 1, explication: "Reformuler montre au client qu'il a été compris." },
      { q: "Le fond de caisse, c'est…", choix: ["La recette de la journée","La monnaie placée dans la caisse au début du service, pour rendre la monnaie","Les pourboires","La somme à déposer en banque"], bonne: 1, explication: "On le compte à l'ouverture et on le retire du total à la fermeture." },
      { q: "Un convive paie 6,40 € avec un billet de 10 €. Combien lui rends-tu ?", choix: ["3,60 €","4,60 €","3,40 €","4,40 €"], bonne: 0, explication: "10 − 6,40 = 3,60 €. On annonce la somme reçue, puis on compte la monnaie à voix haute." },
      { q: "En fin de service, avec quoi compare-t-on le contenu de la caisse ?", choix: ["Avec le menu du jour","Avec le ticket Z, le total des ventes","Avec la caisse de la veille","Avec les bons de commande"], bonne: 1, explication: "Un écart peut venir d'une erreur de rendu de monnaie ou de saisie." },
      { q: "Quel est le taux de TVA pour un sandwich à emporter, mangé tout de suite ?", choix: ["2,1 %","5,5 %","10 %","20 %"], bonne: 2, explication: "10 % pour la consommation immédiate, sur place ou à emporter. 5,5 % pour un produit alimentaire à consommer plus tard." },
      { q: "Une canette de soda vendue en restauration rapide pour être bue tout de suite est taxée à…", choix: ["5,5 %","10 %","20 %","0 %"], bonne: 1, explication: "Les boissons sans alcool à consommation immédiate suivent le taux de la restauration, 10 %. Les boissons alcoolisées sont à 20 %." },
      { q: "Un client paie un menu à 8,50 € avec un billet de 20 €. Combien lui rends-tu ?", choix: ["10,50 €","11,50 €","12,50 €","11 €"], bonne: 1, explication: "20 − 8,50 = 11,50 €. On compte en partant du prix : 8,50 + 0,50 = 9 ; + 1 = 10 ; + 10 = 20." },
      { q: "En restauration collective, comment les convives paient-ils souvent ?", choix: ["En chèque","Avec un badge ou une carte rechargeable","En espèces uniquement","Par facture mensuelle"], bonne: 1, explication: "Le badge est débité à la caisse, en sortie de ligne." }
    ]
  }
];
