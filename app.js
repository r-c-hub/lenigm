const CATEGORIES = [
  { id: "animal", label: "Animal", icon: "🐾" },
  { id: "objet", label: "Objet", icon: "🧸" },
  { id: "aliment", label: "Fruits & Légumes", icon: "🥗" },
  { id: "personne", label: "Personne", icon: "🧒" },
  { id: "aleatoire", label: "Aléatoire", icon: "🎲" }
];

const MODES = [
  { id: "image", label: "Image", icon: "🖼️" },
  { id: "texte", label: "Texte", icon: "⌨️" }
];

const RECORD_KEY = "lenigm_records";

function loadRecords() {
  try {
    const raw = localStorage.getItem(RECORD_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    return {};
  }
}

function saveRecords(records) {
  try {
    localStorage.setItem(RECORD_KEY, JSON.stringify(records));
  } catch (error) {
    // Ignore storage errors.
  }
}

function getRecord(modeId) {
  const records = loadRecords();
  return records[modeId] || null;
}

function setRecord(modeId, score, name) {
  const records = loadRecords();
  records[modeId] = { score, name };
  saveRecords(records);
}

function isTimedMode() {
  return state.timedMode;
}

const DATA = {
  animal: [
    {
      id: "chien",
      label: "Chien",
      aliases: ["chien", "un chien", "le chien", "des chiens", "chienne"],
      icon: "🐶",
      clues: {
        easy: ["C'est un animal", "Il aime jouer", "Il peut aboyer"],
        medium: ["Il vit souvent avec les humains", "Il garde parfois la maison"],
        hard: ["C'est le meilleur ami de l'homme", "On le promène en laisse"]
      },
      facts: ["Le chien comprend souvent des mots simples.", "Il existe des milliers de races de chiens."]
    },
    {
      id: "chat",
      label: "Chat",
      aliases: ["chat", "un chat", "le chat", "des chats", "chaton"],
      icon: "🐱",
      clues: {
        easy: ["C'est un animal", "Il aime dormir", "Il peut miauler"],
        medium: ["Il aime grimper", "Il chasse parfois les souris"],
        hard: ["Il ronronne quand il est content", "Il a des moustaches"]
      },
      facts: ["Le chat dort plusieurs heures par jour.", "Un bébé chat s'appelle un chaton."]
    },
    {
      id: "lion",
      label: "Lion",
      aliases: ["lion", "un lion", "le lion", "lionne"],
      icon: "🦁",
      clues: {
        easy: ["Il vit dans la savane", "C'est un animal"],
        medium: ["Il est carnivore", "Il est plus grand qu'un chien"],
        hard: ["Il est le roi de la savane", "Simba en est un"]
      },
      facts: ["Le bébé du lion s'appelle un lionceau.", "Le lion vit surtout en Afrique."]
    },
    {
      id: "elephant",
      label: "Éléphant",
      aliases: ["elephant", "éléphant", "un éléphant", "des éléphants"],
      icon: "🐘",
      clues: {
        easy: ["C'est un très grand animal", "Il a de grandes oreilles"],
        medium: ["Il vit en troupeau", "Il aime l'eau"],
        hard: ["Il a une trompe", "Il est herbivore"]
      },
      facts: ["L'éléphant peut utiliser sa trompe pour boire.", "Il vit en Afrique et en Asie."]
    },
    {
      id: "vache",
      label: "Vache",
      aliases: ["vache", "une vache", "la vache", "des vaches"],
      icon: "🐮",
      clues: {
        easy: ["C'est un animal de ferme", "Elle mange de l'herbe"],
        medium: ["Elle donne du lait", "Elle dit meuh"],
        hard: ["On la voit dans les prés", "Elle a des taches"]
      },
      facts: ["Le lait sert à faire du fromage.", "La vache est un animal herbivore."]
    },
    {
      id: "lapin",
      label: "Lapin",
      aliases: ["lapin", "un lapin", "le lapin", "lapine"],
      icon: "🐰",
      clues: {
        easy: ["Il a de grandes oreilles", "Il aime les carottes"],
        medium: ["Il saute très bien", "Il est rapide"],
        hard: ["On le voit souvent dans les histoires", "Il a des moustaches"]
      },
      facts: ["Le lapin est herbivore.", "Il peut creuser des terriers."]
    },
    {
      id: "poisson",
      label: "Poisson",
      aliases: ["poisson", "un poisson", "le poisson", "des poissons"],
      icon: "🐟",
      clues: {
        easy: ["Il vit dans l'eau", "Il a des nageoires"],
        medium: ["Il respire avec des branchies", "Il ne marche pas"],
        hard: ["Il peut être dans un aquarium", "Il aime les bulles"]
      },
      facts: ["Les poissons utilisent leurs nageoires pour nager.", "Ils vivent dans l'eau douce ou salée."]
    },
    {
      id: "tortue",
      label: "Tortue",
      aliases: ["tortue", "une tortue", "la tortue", "tortue marine"],
      icon: "🐢",
      clues: {
        easy: ["Elle a une carapace", "Elle avance lentement"],
        medium: ["Elle peut vivre longtemps", "Elle aime le soleil"],
        hard: ["Elle peut vivre sur terre ou dans l'eau", "Elle rentre sa tête"]
      },
      facts: ["La tortue peut vivre très longtemps.", "Sa carapace la protège."]
    },
    {
      id: "panda",
      label: "Panda",
      aliases: ["panda", "un panda", "le panda"],
      icon: "🐼",
      clues: {
        easy: ["Il est noir et blanc", "Il aime manger"],
        medium: ["Il vit en montagne", "Il adore le bambou"],
        hard: ["Il vient d'Asie", "Il est très mignon"]
      },
      facts: ["Le panda mange surtout du bambou.", "Il vit principalement en Chine."]
    },
    {
      id: "cheval",
      label: "Cheval",
      aliases: ["cheval", "un cheval", "le cheval", "jument"],
      icon: "🐴",
      clues: {
        easy: ["C'est un animal", "Il peut galoper"],
        medium: ["Il porte un cavalier", "Il a une crinière"],
        hard: ["Il vit dans une écurie", "On le selle pour le monter"]
      },
      facts: ["Le cheval peut courir très vite.", "Il a une crinière sur le cou."]
    },
    {
      id: "cochon",
      label: "Cochon",
      aliases: ["cochon", "un cochon", "le cochon", "truie"],
      icon: "🐷",
      clues: {
        easy: ["C'est un animal de ferme", "Il aime la boue"],
        medium: ["Il grogne", "Il a un petit nez rond"],
        hard: ["On le voit avec une queue en tire-bouchon", "Il est rose"]
      },
      facts: ["Le cochon est très intelligent.", "Il vit dans une porcherie."]
    },
    {
      id: "canard",
      label: "Canard",
      aliases: ["canard", "un canard", "le canard"],
      icon: "🦆",
      clues: {
        easy: ["C'est un oiseau", "Il nage sur l'eau"],
        medium: ["Il a un bec plat", "Il fait coin-coin"],
        hard: ["Il marche en se dandinant", "Il a des plumes"]
      },
      facts: ["Le canard aime les étangs.", "Il peut voler sur de longues distances."]
    },
    {
      id: "ours",
      label: "Ours",
      aliases: ["ours", "un ours", "l'ours"],
      icon: "🐻",
      clues: {
        easy: ["C'est un animal", "Il est grand"],
        medium: ["Il aime le miel", "Il vit dans la forêt"],
        hard: ["Il peut hiberner", "Il a de grosses pattes"]
      },
      facts: ["L'ours peut dormir longtemps en hiver.", "Il a un odorat très développé."]
    },
    {
      id: "girafe",
      label: "Girafe",
      aliases: ["girafe", "une girafe", "la girafe"],
      icon: "🦒",
      clues: {
        easy: ["C'est un animal", "Elle est très grande"],
        medium: ["Elle a un long cou", "Elle mange des feuilles"],
        hard: ["Elle vit en Afrique", "Elle a des taches"]
      },
      facts: ["La girafe est l'animal le plus grand du monde.", "Elle utilise sa langue pour attraper des feuilles."]
    },
    {
      id: "dauphin",
      label: "Dauphin",
      aliases: ["dauphin", "un dauphin", "le dauphin"],
      icon: "🐬",
      clues: {
        easy: ["Il vit dans l'eau", "Il est rapide"],
        medium: ["Il saute hors de l'eau", "Il aime jouer"],
        hard: ["Il est très intelligent", "Il vit dans l'océan"]
      },
      facts: ["Le dauphin communique avec des sons.", "Il vit en groupe."]
    },
    {
      id: "pingouin",
      label: "Pingouin",
      aliases: ["pingouin", "un pingouin", "le pingouin"],
      icon: "🐧",
      clues: {
        easy: ["C'est un oiseau", "Il aime le froid"],
        medium: ["Il ne vole pas", "Il nage très bien"],
        hard: ["Il vit près des pôles", "Il est noir et blanc"]
      },
      facts: ["Le pingouin glisse parfois sur la glace.", "Il a un plumage qui le garde au chaud."]
    },
    {
      id: "abeille",
      label: "Abeille",
      aliases: ["abeille", "une abeille", "l'abeille"],
      icon: "🐝",
      clues: {
        easy: ["C'est un insecte", "Elle vole"],
        medium: ["Elle fait du miel", "Elle va sur les fleurs"],
        hard: ["Elle vit dans une ruche", "Elle pique pour se défendre"]
      },
      facts: ["L'abeille aide les fleurs à grandir.", "Elle fabrique le miel dans la ruche."]
    },
    {
      id: "renard",
      label: "Renard",
      aliases: ["renard", "un renard", "le renard"],
      icon: "🦊",
      clues: {
        easy: ["C'est un animal", "Il est roux"],
        medium: ["Il vit dans la forêt", "Il est malin"],
        hard: ["Il a une queue touffue", "Il chasse la nuit"]
      },
      facts: ["Le renard a une excellente ouïe.", "Il vit souvent dans des terriers."]
    },
    {
      id: "singe",
      label: "Singe",
      aliases: ["singe", "un singe", "le singe"],
      icon: "🐵",
      clues: {
        easy: ["C'est un animal", "Il aime grimper"],
        medium: ["Il vit dans la jungle", "Il mange des fruits"],
        hard: ["Il a une longue queue", "Il se balance dans les arbres"]
      },
      facts: ["Le singe est très agile.", "Il aime vivre en groupe."]
    },
    {
      id: "mouton",
      label: "Mouton",
      aliases: ["mouton", "un mouton", "le mouton", "brebis"],
      icon: "🐑",
      clues: {
        easy: ["C'est un animal", "Il est doux"],
        medium: ["Il vit à la ferme", "Il mange de l'herbe"],
        hard: ["Il a de la laine", "On le tond au printemps"]
      },
      facts: ["La laine du mouton sert à faire des vêtements.", "Le mouton vit souvent en troupeau."]
    },
    {
      id: "hibou",
      label: "Hibou",
      aliases: ["hibou", "un hibou", "le hibou"],
      icon: "🦉",
      clues: {
        easy: ["C'est un oiseau", "Il vit la nuit"],
        medium: ["Il a de grands yeux", "Il chasse en silence"],
        hard: ["Il pousse un hululement", "Il aime les forêts"]
      },
      facts: ["Le hibou voit très bien la nuit.", "Il vole sans faire de bruit."]
    },
    {
      id: "serpent",
      label: "Serpent",
      aliases: ["serpent", "un serpent", "le serpent"],
      icon: "🐍",
      clues: {
        easy: ["C'est un animal", "Il rampe"],
        medium: ["Il n'a pas de pattes", "Il se cache dans l'herbe"],
        hard: ["Il peut s'enrouler", "Il sort sa langue"]
      },
      facts: ["Le serpent se déplace en glissant.", "Il peut vivre dans des milieux variés."]
    }
  ],
  objet: [
    {
      id: "pizza",
      label: "Pizza",
      aliases: ["pizza", "une pizza", "la pizza", "des pizzas"],
      icon: "🍕",
      clues: {
        easy: ["C'est une chose à manger", "C'est rond"],
        medium: ["Ceci a été inventé en Italie", "Cela se cuit au four"],
        hard: ["Il y a de la tomate et de la mozzarella", "On la coupe en parts"]
      },
      facts: ["L'Italie est le pays d'origine de la pizza.", "On peut la garnir avec beaucoup d'ingrédients."]
    },
    {
      id: "ballon",
      label: "Ballon",
      aliases: ["ballon", "un ballon", "le ballon", "balle"],
      icon: "⚽",
      clues: {
        easy: ["C'est un objet rond", "On joue avec"],
        medium: ["On peut le lancer", "Il rebondit"],
        hard: ["On l'utilise au football", "Il roule sur le sol"]
      },
      facts: ["Un ballon peut être gonflé avec de l'air.", "Il sert à faire du sport."]
    },
    {
      id: "livre",
      label: "Livre",
      aliases: ["livre", "un livre", "le livre", "des livres"],
      icon: "📘",
      clues: {
        easy: ["C'est un objet", "On l'ouvre"],
        medium: ["Il contient des pages", "On peut le lire"],
        hard: ["Il raconte une histoire", "On le trouve à la bibliothèque"]
      },
      facts: ["La bibliothèque est l'endroit où l'on emprunte des livres.", "Un livre a souvent une couverture."]
    },
    {
      id: "tasse",
      label: "Tasse",
      aliases: ["tasse", "une tasse", "la tasse"],
      icon: "☕",
      clues: {
        easy: ["C'est un objet", "On boit dedans"],
        medium: ["Elle a une anse", "On la met sur la table"],
        hard: ["Elle contient souvent du chocolat chaud", "Elle peut être en porcelaine"]
      },
      facts: ["Une tasse peut être petite ou grande.", "Elle est pratique pour les boissons chaudes."]
    },
    {
      id: "velo",
      label: "Vélo",
      aliases: ["velo", "vélo", "un vélo", "bicyclette"],
      icon: "🚲",
      clues: {
        easy: ["C'est un objet", "Il roule"],
        medium: ["Il a deux roues", "On pédale"],
        hard: ["On le gare avec un antivol", "Il a un guidon"]
      },
      facts: ["Le vélo est bon pour la santé.", "Il faut un casque pour rouler en sécurité."]
    },
    {
      id: "brosse_a_dents",
      label: "Brosse à dents",
      aliases: ["brosse à dents", "brosse a dents", "brosse", "une brosse à dents"],
      icon: "🪥",
      clues: {
        easy: ["C'est un objet", "On l'utilise tous les jours"],
        medium: ["Elle a des poils", "Elle est dans la salle de bain"],
        hard: ["Elle sert à nettoyer les dents", "On met du dentifrice dessus"]
      },
      facts: ["On se brosse les dents au moins deux fois par jour.", "Le dentifrice protège les dents."]
    },
    {
      id: "montre",
      label: "Montre",
      aliases: ["montre", "une montre", "la montre"],
      icon: "⌚",
      clues: {
        easy: ["C'est un objet", "Il donne l'heure"],
        medium: ["On la porte au poignet", "Elle a parfois des aiguilles"],
        hard: ["Elle peut être digitale", "Elle fait tic-tac"]
      },
      facts: ["Une montre aide à savoir l'heure.", "On peut aussi lire l'heure sur un téléphone."]
    },
    {
      id: "parapluie",
      label: "Parapluie",
      aliases: ["parapluie", "un parapluie", "le parapluie"],
      icon: "☂️",
      clues: {
        easy: ["C'est un objet", "Il sert quand il pleut"],
        medium: ["Il s'ouvre", "Il protège la tête"],
        hard: ["Il a une toile et des baleines", "On le tient avec une poignée"]
      },
      facts: ["Le parapluie protège de la pluie.", "Il existe aussi des parapluies pour le soleil."]
    },
    {
      id: "ciseaux",
      label: "Ciseaux",
      aliases: ["ciseaux", "des ciseaux", "une paire de ciseaux"],
      icon: "✂️",
      clues: {
        easy: ["C'est un objet", "On le tient à la main"],
        medium: ["Il coupe du papier", "Il a deux lames"],
        hard: ["Il a des anneaux pour les doigts", "On l'utilise en classe"]
      },
      facts: ["Les ciseaux servent à couper proprement.", "Il faut faire attention en les utilisant."]
    },
    {
      id: "pinceau",
      label: "Pinceau",
      aliases: ["pinceau", "un pinceau", "le pinceau"],
      icon: "🖌️",
      clues: {
        easy: ["C'est un objet", "On l'utilise pour dessiner"],
        medium: ["Il a des poils", "On le trempe dans la peinture"],
        hard: ["Il sert à peindre", "On s'en sert en arts plastiques"]
      },
      facts: ["Un pinceau a des poils souples.", "Il permet de faire de jolis dessins."]
    },
    {
      id: "tabouret",
      label: "Tabouret",
      aliases: ["tabouret", "un tabouret", "le tabouret"],
      icon: "🪑",
      clues: {
        easy: ["C'est un objet", "On s'assoit dessus"],
        medium: ["Il a quatre pieds", "Il n'a pas de dossier"],
        hard: ["Il est souvent plus petit qu'une chaise", "On le déplace facilement"]
      },
      facts: ["Le tabouret est pratique pour les petits espaces.", "On le trouve dans la cuisine ou l'atelier."]
    },
    {
      id: "lampe",
      label: "Lampe",
      aliases: ["lampe", "une lampe", "la lampe"],
      icon: "💡",
      clues: {
        easy: ["C'est un objet", "Elle éclaire"],
        medium: ["On l'allume", "Elle est dans la maison"],
        hard: ["Elle peut être sur une table", "Elle a une ampoule"]
      },
      facts: ["Une lampe sert à éclairer une pièce.", "On peut l'éteindre pour économiser l'énergie."]
    },
    {
      id: "cle",
      label: "Clé",
      aliases: ["cle", "clé", "une clé", "la clé"],
      icon: "🔑",
      clues: {
        easy: ["C'est un objet", "On la tient dans la main"],
        medium: ["Elle ouvre une porte", "On la garde dans la poche"],
        hard: ["Elle tourne dans une serrure", "On l'attache parfois à un porte-clés"]
      },
      facts: ["Une clé permet d'ouvrir ou fermer une porte.", "Il existe des clés de formes différentes."]
    },
    {
      id: "sac_a_dos",
      label: "Sac à dos",
      aliases: ["sac à dos", "sac a dos", "un sac à dos"],
      icon: "🎒",
      clues: {
        easy: ["C'est un objet", "On le porte"],
        medium: ["Il a des bretelles", "On y met ses affaires"],
        hard: ["On l'utilise pour aller à l'école", "Il se porte sur le dos"]
      },
      facts: ["Le sac à dos aide à transporter des affaires.", "Il faut bien le régler sur les épaules."]
    },
    {
      id: "telephone",
      label: "Téléphone",
      aliases: ["telephone", "téléphone", "un téléphone"],
      icon: "📱",
      clues: {
        easy: ["C'est un objet", "On parle avec"],
        medium: ["Il sonne", "Il tient dans la main"],
        hard: ["On peut appeler quelqu'un", "Il a un écran"]
      },
      facts: ["Le téléphone sert à communiquer à distance.", "On peut aussi envoyer des messages."]
    },
    {
      id: "montgolfiere",
      label: "Montgolfière",
      aliases: ["montgolfiere", "montgolfière", "une montgolfière"],
      icon: "🎈",
      clues: {
        easy: ["C'est un objet volant", "Elle est grande"],
        medium: ["Elle est remplie d'air chaud", "Elle monte dans le ciel"],
        hard: ["Elle transporte des personnes", "On la voit dans les fêtes"]
      },
      facts: ["La montgolfière vole grâce à l'air chaud.", "Elle se déplace avec le vent."]
    },
    {
      id: "crayon",
      label: "Crayon",
      aliases: ["crayon", "un crayon", "le crayon"],
      icon: "✏️",
      clues: {
        easy: ["C'est un objet", "On peut dessiner avec"],
        medium: ["Il est en bois", "Il a une mine"],
        hard: ["On le taille", "On l'utilise à l'école"]
      },
      facts: ["Un crayon sert à écrire ou dessiner.", "On peut l'effacer avec une gomme."]
    },
    {
      id: "ordinateur",
      label: "Ordinateur",
      aliases: ["ordinateur", "un ordinateur", "pc"],
      icon: "💻",
      clues: {
        easy: ["C'est un objet", "Il a un écran"],
        medium: ["On peut taper dessus", "Il peut afficher des images"],
        hard: ["On l'utilise pour travailler", "Il peut aller sur Internet"]
      },
      facts: ["Un ordinateur sert à faire beaucoup de choses.", "Il peut jouer de la musique."]
    },
    {
      id: "chaussure",
      label: "Chaussure",
      aliases: ["chaussure", "une chaussure", "les chaussures"],
      icon: "👟",
      clues: {
        easy: ["C'est un objet", "On le porte"],
        medium: ["Il protège les pieds", "Il va par paire"],
        hard: ["On le met pour marcher", "Il peut avoir des lacets"]
      },
      facts: ["Les chaussures protègent les pieds.", "Elles existent en plusieurs tailles."]
    },
    {
      id: "casque",
      label: "Casque",
      aliases: ["casque", "un casque", "le casque"],
      icon: "🪖",
      clues: {
        easy: ["C'est un objet", "On le met sur la tête"],
        medium: ["Il protège", "Il peut être en plastique"],
        hard: ["On le porte pour faire du vélo", "Il aide à la sécurité"]
      },
      facts: ["Le casque protège la tête.", "Il est important pour la sécurité."]
    }
  ],
  aliment: [
    {
      id: "pomme",
      label: "Pomme",
      aliases: ["pomme", "une pomme", "la pomme", "pommes"],
      icon: "🍎",
      clues: {
        easy: ["C'est un fruit", "Il est croquant"],
        medium: ["Il peut être rouge ou vert", "On le met dans un panier"],
        hard: ["Il pousse sur un pommier", "Il peut faire des tartes"]
      },
      facts: ["La pomme pousse sur un pommier.", "On peut la manger crue ou cuite."]
    },
    {
      id: "banane",
      label: "Banane",
      aliases: ["banane", "une banane", "la banane"],
      icon: "🍌",
      clues: {
        easy: ["C'est un fruit", "Il est jaune"],
        medium: ["Il est long", "Il a une peau"],
        hard: ["On l'épluche", "Il pousse dans les pays chauds"]
      },
      facts: ["La banane donne beaucoup d'énergie.", "Elle pousse en grappes."]
    },
    {
      id: "fraise",
      label: "Fraise",
      aliases: ["fraise", "une fraise", "la fraise"],
      icon: "🍓",
      clues: {
        easy: ["C'est un fruit", "Elle est rouge"],
        medium: ["Elle a des petites graines", "Elle est sucrée"],
        hard: ["On la met dans les desserts", "Elle pousse au printemps"]
      },
      facts: ["La fraise est un fruit très parfumé.", "Elle pousse près du sol."]
    },
    {
      id: "orange",
      label: "Orange",
      aliases: ["orange", "une orange", "l'orange", "oranges"],
      icon: "🍊",
      clues: {
        easy: ["C'est un fruit", "Il est rond"],
        medium: ["Il est orange", "Il a une peau épaisse"],
        hard: ["On le presse pour faire du jus", "Il pousse sur un oranger"]
      },
      facts: ["L'orange est riche en vitamine C.", "On la mange en quartiers."]
    },
    {
      id: "raisin",
      label: "Raisin",
      aliases: ["raisin", "du raisin", "les raisins"],
      icon: "🍇",
      clues: {
        easy: ["C'est un fruit", "Il pousse en grappes"],
        medium: ["Il peut être vert ou violet", "Il est petit"],
        hard: ["On en fait du jus", "Il pousse sur une vigne"]
      },
      facts: ["Le raisin pousse sur la vigne.", "Il est souvent utilisé pour faire du jus."]
    },
    {
      id: "poire",
      label: "Poire",
      aliases: ["poire", "une poire", "la poire"],
      icon: "🍐",
      clues: {
        easy: ["C'est un fruit", "Il est doux"],
        medium: ["Il a une forme de goutte", "Il est vert ou jaune"],
        hard: ["Il pousse sur un poirier", "On le mange en dessert"]
      },
      facts: ["La poire est souvent très juteuse.", "On la trouve à la fin de l'été."]
    },
    {
      id: "pasteque",
      label: "Pastèque",
      aliases: ["pasteque", "pastèque", "une pastèque"],
      icon: "🍉",
      clues: {
        easy: ["C'est un fruit", "Il est très gros"],
        medium: ["Il est vert dehors", "Il est rouge dedans"],
        hard: ["Il a beaucoup de pépins", "On le mange en été"]
      },
      facts: ["La pastèque contient beaucoup d'eau.", "Elle est parfaite quand il fait chaud."]
    },
    {
      id: "citron",
      label: "Citron",
      aliases: ["citron", "un citron", "le citron"],
      icon: "🍋",
      clues: {
        easy: ["C'est un fruit", "Il est jaune"],
        medium: ["Il est acide", "Il a une peau épaisse"],
        hard: ["On l'utilise pour faire du jus", "Il pousse sur un citronnier"]
      },
      facts: ["Le citron est très acide.", "Il sert à parfumer de nombreux plats."]
    },
    {
      id: "cerise",
      label: "Cerise",
      aliases: ["cerise", "une cerise", "la cerise"],
      icon: "🍒",
      clues: {
        easy: ["C'est un fruit", "Elle est petite"],
        medium: ["Elle est rouge", "Elle pousse par deux"],
        hard: ["On la met sur les gâteaux", "Elle a un noyau"]
      },
      facts: ["La cerise a un noyau dur.", "On la mange souvent au début de l'été."]
    },
    {
      id: "ananas",
      label: "Ananas",
      aliases: ["ananas", "un ananas", "l'ananas"],
      icon: "🍍",
      clues: {
        easy: ["C'est un fruit", "Il est gros"],
        medium: ["Il a une peau piquante", "Il est jaune dedans"],
        hard: ["Il a une couronne de feuilles", "Il vient des pays chauds"]
      },
      facts: ["L'ananas pousse dans les régions tropicales.", "Il est très sucré."]
    },
    {
      id: "kiwi",
      label: "Kiwi",
      aliases: ["kiwi", "un kiwi", "le kiwi"],
      icon: "🥝",
      clues: {
        easy: ["C'est un fruit", "Il est petit"],
        medium: ["Il a une peau marron", "Il est vert dedans"],
        hard: ["Il a des petites graines noires", "On le mange à la cuillère"]
      },
      facts: ["Le kiwi est riche en vitamine C.", "On peut le couper en deux."]
    },
    {
      id: "mangue",
      label: "Mangue",
      aliases: ["mangue", "une mangue", "la mangue"],
      icon: "🥭",
      clues: {
        easy: ["C'est un fruit", "Il est sucré"],
        medium: ["Il est jaune ou orange", "Il vient des pays chauds"],
        hard: ["Il a un gros noyau", "On le coupe en morceaux"]
      },
      facts: ["La mangue est un fruit tropical.", "Elle est très parfumée."]
    },
    {
      id: "peche",
      label: "Pêche",
      aliases: ["peche", "pêche", "une pêche", "la pêche"],
      icon: "🍑",
      clues: {
        easy: ["C'est un fruit", "Il est doux"],
        medium: ["Il a une peau velue", "Il est rond"],
        hard: ["Il a un noyau", "On le mange en été"]
      },
      facts: ["La pêche est très juteuse.", "Elle pousse sur un pêcher."]
    },
    {
      id: "abricot",
      label: "Abricot",
      aliases: ["abricot", "un abricot", "l'abricot"],
      icon: "🍑",
      clues: {
        easy: ["C'est un fruit", "Il est petit"],
        medium: ["Il est orange", "Il est doux"],
        hard: ["Il a un noyau", "On en fait des confitures"]
      },
      facts: ["L'abricot est un fruit d'été.", "Il est souvent utilisé en compote."]
    }
  ],
  legume: [
    {
      id: "carotte",
      label: "Carotte",
      aliases: ["carotte", "une carotte", "la carotte"],
      icon: "🥕",
      clues: {
        easy: ["C'est un légume", "Il est orange"],
        medium: ["Il pousse dans la terre", "Il est croquant"],
        hard: ["Les lapins l'adorent", "On le met dans les salades"]
      },
      facts: ["La carotte pousse sous la terre.", "Elle est riche en vitamine A."]
    },
    {
      id: "tomate",
      label: "Tomate",
      aliases: ["tomate", "une tomate", "la tomate"],
      icon: "🍅",
      clues: {
        easy: ["C'est un légume", "Elle est rouge"],
        medium: ["Elle est ronde", "Elle est juteuse"],
        hard: ["On la met dans les salades", "Elle pousse en été"]
      },
      facts: ["La tomate est très utilisée en cuisine.", "Elle pousse sur un plant."]
    },
    {
      id: "concombre",
      label: "Concombre",
      aliases: ["concombre", "un concombre", "le concombre"],
      icon: "🥒",
      clues: {
        easy: ["C'est un légume", "Il est vert"],
        medium: ["Il est long", "Il est frais"],
        hard: ["On le met dans les salades", "Il pousse dans le jardin"]
      },
      facts: ["Le concombre est composé d'eau.", "Il est très rafraîchissant."]
    },
    {
      id: "brocoli",
      label: "Brocoli",
      aliases: ["brocoli", "un brocoli", "le brocoli"],
      icon: "🥦",
      clues: {
        easy: ["C'est un légume", "Il est vert"],
        medium: ["Il ressemble à un arbre", "On le mange cuit"],
        hard: ["Il est plein de petites fleurettes", "On le met dans les gratins"]
      },
      facts: ["Le brocoli est riche en vitamines.", "Il fait partie de la famille des choux."]
    },
    {
      id: "salade",
      label: "Salade",
      aliases: ["salade", "une salade", "la salade", "laitue"],
      icon: "🥬",
      clues: {
        easy: ["C'est un légume", "Elle est verte"],
        medium: ["Elle a beaucoup de feuilles", "Elle est croquante"],
        hard: ["On la met dans un saladier", "On la mange souvent crue"]
      },
      facts: ["La salade est très légère.", "Elle pousse en rosettes."]
    },
    {
      id: "poivron",
      label: "Poivron",
      aliases: ["poivron", "un poivron", "le poivron"],
      icon: "🫑",
      clues: {
        easy: ["C'est un légume", "Il est coloré"],
        medium: ["Il peut être rouge ou vert", "Il est creux"],
        hard: ["Il contient des graines", "On le coupe pour le cuisiner"]
      },
      facts: ["Le poivron a un goût doux.", "Il est croquant cru."]
    },
    {
      id: "aubergine",
      label: "Aubergine",
      aliases: ["aubergine", "une aubergine", "l'aubergine"],
      icon: "🍆",
      clues: {
        easy: ["C'est un légume", "Il est violet"],
        medium: ["Il est long", "Il est brillant"],
        hard: ["On le cuisine au four", "Il a une peau lisse"]
      },
      facts: ["L'aubergine se mange cuite.", "Elle est très utilisée en été."]
    },
    {
      id: "courgette",
      label: "Courgette",
      aliases: ["courgette", "une courgette", "la courgette"],
      icon: "🥒",
      clues: {
        easy: ["C'est un légume", "Il est vert"],
        medium: ["Il est long", "Il est doux"],
        hard: ["On le met dans les ratatouilles", "On peut le griller"]
      },
      facts: ["La courgette est un légume d'été.", "On la mange cuite ou crue."]
    },
    {
      id: "pomme_de_terre",
      label: "Pomme de terre",
      aliases: ["pomme de terre", "patate", "une pomme de terre"],
      icon: "🥔",
      clues: {
        easy: ["C'est un légume", "Il pousse dans la terre"],
        medium: ["Il est marron", "On le cuisine"],
        hard: ["On en fait des frites", "On en fait de la purée"]
      },
      facts: ["La pomme de terre est très utilisée en cuisine.", "On la mange en frites ou en purée."]
    },
    {
      id: "mais",
      label: "Maïs",
      aliases: ["mais", "maïs", "un maïs", "épi de maïs"],
      icon: "🌽",
      clues: {
        easy: ["C'est un légume", "Il est jaune"],
        medium: ["Il pousse en épis", "Il a des grains"],
        hard: ["On le mange en pop-corn", "On le fait cuire à l'eau"]
      },
      facts: ["Le maïs pousse en épis.", "On peut le manger en grains ou en pop-corn."]
    },
    {
      id: "petits_pois",
      label: "Petits pois",
      aliases: ["petits pois", "petit pois", "des petits pois"],
      icon: "🟢",
      clues: {
        easy: ["C'est un légume", "Ils sont petits"],
        medium: ["Ils sont verts", "On les mange en grains"],
        hard: ["Ils sortent d'une gousse", "On les met dans les purées"]
      },
      facts: ["Les petits pois poussent dans des gousses.", "Ils sont souvent servis avec des carottes."]
    },
    {
      id: "haricot_vert",
      label: "Haricot vert",
      aliases: ["haricot vert", "haricots verts", "un haricot vert"],
      icon: "🫘",
      clues: {
        easy: ["C'est un légume", "Il est vert"],
        medium: ["Il est long", "On le mange cuit"],
        hard: ["Il pousse dans une gousse", "On le sert souvent en accompagnement"]
      },
      facts: ["Les haricots verts sont riches en fibres.", "Ils poussent au potager."]
    },
    {
      id: "oignon",
      label: "Oignon",
      aliases: ["oignon", "un oignon", "l'oignon"],
      icon: "🧅",
      clues: {
        easy: ["C'est un légume", "Il a des couches"],
        medium: ["Il peut faire pleurer", "Il est rond"],
        hard: ["On le coupe pour cuisiner", "Il a une peau fine"]
      },
      facts: ["L'oignon a plusieurs couches.", "Il parfume beaucoup de plats."]
    }
  ],
  personne: [
    {
      id: "maman",
      label: "Ma maman",
      aliases: ["maman", "ma maman", "maman chérie"],
      icon: "👩",
      clues: {
        easy: ["C'est une personne", "Elle s'occupe de moi"],
        medium: ["Elle me fait des câlins", "Elle veille sur moi"],
        hard: ["Elle est dans ma famille", "Je l'appelle tous les jours"]
      },
      facts: ["La famille prend soin les uns des autres.", "Dire merci fait toujours plaisir."]
    },
    {
      id: "papa",
      label: "Mon papa",
      aliases: ["papa", "mon papa", "papa chéri"],
      icon: "👨",
      clues: {
        easy: ["C'est une personne", "Il s'occupe de moi"],
        medium: ["Il me fait rire", "Il m'apprend des choses"],
        hard: ["Il est dans ma famille", "Je l'appelle souvent"]
      },
      facts: ["Partager un moment avec sa famille est important.", "Les parents aiment aider leurs enfants."]
    },
    {
      id: "soeur",
      label: "Ma soeur",
      aliases: ["soeur", "sœur", "ma soeur", "ma sœur"],
      icon: "👧",
      clues: {
        easy: ["C'est une personne", "Elle est dans ma famille"],
        medium: ["On joue souvent ensemble", "Elle peut être plus grande ou plus petite"],
        hard: ["Elle est ma soeur", "On partage des secrets"]
      },
      facts: ["Avoir une soeur, c'est partager plein de moments.", "On peut se raconter des histoires."]
    },
    {
      id: "frere",
      label: "Mon frère",
      aliases: ["frere", "frère", "mon frere", "mon frère"],
      icon: "👦",
      clues: {
        easy: ["C'est une personne", "Il est dans ma famille"],
        medium: ["On joue souvent ensemble", "Il peut être plus grand ou plus petit"],
        hard: ["Il est mon frère", "On partage des jeux"]
      },
      facts: ["Un frère peut être un super partenaire de jeu.", "On apprend à partager ensemble."]
    },
    {
      id: "grand_mere",
      label: "Ma grand-mère",
      aliases: ["grand-mere", "grand-mère", "mamie", "ma grand-mère"],
      icon: "👵",
      clues: {
        easy: ["C'est une personne", "Elle est dans ma famille"],
        medium: ["Elle raconte des histoires", "Elle est très gentille"],
        hard: ["C'est la maman de papa ou maman", "On l'appelle mamie"]
      },
      facts: ["Les grands-parents aiment transmettre des souvenirs.", "On peut apprendre beaucoup avec eux."]
    },
    {
      id: "grand_pere",
      label: "Mon grand-père",
      aliases: ["grand-pere", "grand-père", "papy", "mon grand-père"],
      icon: "👴",
      clues: {
        easy: ["C'est une personne", "Il est dans ma famille"],
        medium: ["Il raconte des histoires", "Il est très gentil"],
        hard: ["C'est le papa de papa ou maman", "On l'appelle papy"]
      },
      facts: ["Les grands-parents aiment jouer avec leurs petits-enfants.", "Ils ont beaucoup d'histoires à raconter."]
    },
    {
      id: "cousin",
      label: "Mon cousin",
      aliases: ["cousin", "mon cousin"],
      icon: "🧒",
      clues: {
        easy: ["C'est une personne", "Il est dans ma famille"],
        medium: ["On joue pendant les fêtes", "Il est de ma génération"],
        hard: ["C'est le fils d'un oncle ou d'une tante", "On le voit souvent en famille"]
      },
      facts: ["Les cousins sont souvent des amis de famille.", "On partage de bons moments ensemble."]
    },
    {
      id: "cousine",
      label: "Ma cousine",
      aliases: ["cousine", "ma cousine"],
      icon: "👧",
      clues: {
        easy: ["C'est une personne", "Elle est dans ma famille"],
        medium: ["On joue pendant les fêtes", "Elle est de ma génération"],
        hard: ["C'est la fille d'un oncle ou d'une tante", "On la voit souvent en famille"]
      },
      facts: ["Les cousins et cousines font partie de la famille.", "On peut jouer ensemble pendant les vacances."]
    },
    {
      id: "marcus",
      label: "Marcus (Pat' Patrouille)",
      aliases: ["marcus", "Marcus", "pat patrouille", "chiot pompier"],
      icon: "🧑‍🚒",
      clues: {
        easy: ["C'est un personnage", "Il aide les autres"],
        medium: ["Il porte un casque", "Il aime l'aventure"],
        hard: ["C'est un chiot pompier", "Il est dans la Pat' Patrouille"]
      },
      facts: ["La Pat' Patrouille aide toujours les habitants.", "Marcus aime les missions de secours."]
    },
    {
      id: "pinocchio",
      label: "Pinocchio",
      aliases: ["pinocchio", "Pinocchio"],
      icon: "🪆",
      clues: {
        easy: ["C'est un personnage", "Il est en bois"],
        medium: ["Son nez grandit", "Il veut devenir un vrai garçon"],
        hard: ["Il a un père qui s'appelle Gepetto", "Il dit parfois des mensonges"]
      },
      facts: ["Pinocchio est un conte très connu.", "Il apprend à dire la vérité."]
    },
    {
      id: "cendrillon",
      label: "Cendrillon",
      aliases: ["cendrillon", "Cendrillon"],
      icon: "👸",
      clues: {
        easy: ["C'est une princesse", "Elle porte une robe"],
        medium: ["Elle a une marraine fée", "Elle va au bal"],
        hard: ["Elle perd une chaussure", "Elle rentre avant minuit"]
      },
      facts: ["Cendrillon est un conte traditionnel.", "Elle a une chaussure très célèbre."]
    },
    {
      id: "peter_pan",
      label: "Peter Pan",
      aliases: ["peter pan", "Peter Pan"],
      icon: "🧚",
      clues: {
        easy: ["C'est un personnage", "Il vole"],
        medium: ["Il ne veut pas grandir", "Il vit dans un monde imaginaire"],
        hard: ["Il a une amie fée", "Il porte un chapeau vert"]
      },
      facts: ["Peter Pan vit au Pays imaginaire.", "Il adore l'aventure."]
    },
    {
      id: "aladin",
      label: "Aladin",
      aliases: ["aladin", "Aladin"],
      icon: "🧞",
      clues: {
        easy: ["C'est un personnage", "Il a un ami magique"],
        medium: ["Il a une lampe", "Il vit dans une ville chaude"],
        hard: ["Il rencontre un génie", "Il fait des vœux"]
      },
      facts: ["Aladin trouve une lampe magique.", "Le génie l'aide dans ses aventures."]
    },
    {
      id: "petit_prince",
      label: "Le Petit Prince",
      aliases: ["petit prince", "le petit prince"],
      icon: "⭐",
      clues: {
        easy: ["C'est un personnage", "Il vient d'une étoile"],
        medium: ["Il aime une rose", "Il voyage dans l'espace"],
        hard: ["Il rencontre un renard", "Il parle d'amitié"]
      },
      facts: ["Le Petit Prince est un livre célèbre.", "Il parle d'amitié et d'imagination."]
    },
    {
      id: "princesse",
      label: "Princesse",
      aliases: ["princesse", "une princesse", "la princesse"],
      icon: "👑",
      clues: {
        easy: ["C'est un personnage", "Elle porte une couronne"],
        medium: ["Elle vit dans un château", "Elle a une robe"],
        hard: ["Elle est gentille", "On la voit dans les contes"]
      },
      facts: ["Les princesses apparaissent souvent dans les contes.", "Elles vivent dans des châteaux."]
    },
    {
      id: "super_heros",
      label: "Super-héros",
      aliases: ["super hero", "super-héros", "super heros"],
      icon: "🦸",
      clues: {
        easy: ["C'est un personnage", "Il aide les gens"],
        medium: ["Il a des pouvoirs", "Il porte un costume"],
        hard: ["Il protège la ville", "Il est très courageux"]
      },
      facts: ["Les super-héros protègent les personnes.", "Ils aiment la justice."]
    },
    {
      id: "pirate",
      label: "Pirate",
      aliases: ["pirate", "un pirate", "le pirate"],
      icon: "🏴‍☠️",
      clues: {
        easy: ["C'est un personnage", "Il voyage en bateau"],
        medium: ["Il cherche un trésor", "Il porte parfois un chapeau"],
        hard: ["Il a un drapeau", "Il adore l'aventure"]
      },
      facts: ["Les pirates cherchent souvent des trésors.", "Ils naviguent sur la mer."]
    }
  ]
};

const EXTRA_DATA = {
  animal: [
    {
      id: "ecureuil",
      label: "Écureuil",
      aliases: ["ecureuil", "écureuil", "un écureuil"],
      icon: "🐿️",
      clues: {
        easy: ["C'est un animal", "Il est petit"],
        medium: ["Il grimpe aux arbres", "Il mange des noisettes"],
        hard: ["Il a une queue en panache", "Il cache sa nourriture"]
      },
      facts: ["L'écureuil aime les forêts.", "Il saute de branche en branche."]
    },
    {
      id: "zebre",
      label: "Zèbre",
      aliases: ["zebre", "zèbre", "un zèbre"],
      icon: "🦓",
      clues: {
        easy: ["C'est un animal", "Il est noir et blanc"],
        medium: ["Il vit en troupeau", "Il aime courir"],
        hard: ["Il vit dans la savane", "Il ressemble au cheval"]
      },
      facts: ["Le zèbre a des rayures uniques.", "Il vit en Afrique."]
    },
    {
      id: "koala",
      label: "Koala",
      aliases: ["koala", "un koala", "le koala"],
      icon: "🐨",
      clues: {
        easy: ["C'est un animal", "Il est petit"],
        medium: ["Il vit dans les arbres", "Il aime les feuilles"],
        hard: ["Il vient d'Australie", "Il dort beaucoup"]
      },
      facts: ["Le koala vit surtout en Australie.", "Il aime les eucalyptus."]
    },
    {
      id: "tigre",
      label: "Tigre",
      aliases: ["tigre", "un tigre", "le tigre"],
      icon: "🐯",
      clues: {
        easy: ["C'est un animal", "Il a des rayures"],
        medium: ["Il est carnivore", "Il est très fort"],
        hard: ["Il vit en Asie", "Il est un grand félin"]
      },
      facts: ["Le tigre est un grand félin.", "Il aime se cacher dans la jungle."]
    },
    {
      id: "herisson",
      label: "Hérisson",
      aliases: ["herisson", "hérisson", "un hérisson"],
      icon: "🦔",
      clues: {
        easy: ["C'est un animal", "Il est petit"],
        medium: ["Il a des piquants", "Il se roule en boule"],
        hard: ["Il vit dans les jardins", "Il sort surtout la nuit"]
      },
      facts: ["Le hérisson se protège avec ses piquants.", "Il aime les jardins."]
    },
    {
      id: "loutre",
      label: "Loutre",
      aliases: ["loutre", "une loutre", "la loutre"],
      icon: "🦦",
      clues: {
        easy: ["C'est un animal", "Il aime l'eau"],
        medium: ["Il nage très bien", "Il est joueur"],
        hard: ["Il vit près des rivières", "Il a une fourrure douce"]
      },
      facts: ["La loutre est très agile dans l'eau.", "Elle aime jouer."]
    },
    {
      id: "paon",
      label: "Paon",
      aliases: ["paon", "un paon", "le paon"],
      icon: "🦚",
      clues: {
        easy: ["C'est un oiseau", "Il est coloré"],
        medium: ["Il a une grande queue", "Il ouvre ses plumes"],
        hard: ["Il montre sa roue", "Il est très beau"]
      },
      facts: ["Le paon déploie sa queue pour impressionner.", "Il a des plumes colorées."]
    },
    {
      id: "kangourou",
      label: "Kangourou",
      aliases: ["kangourou", "un kangourou", "le kangourou"],
      icon: "🦘",
      clues: {
        easy: ["C'est un animal", "Il saute"],
        medium: ["Il a une poche", "Il vit loin"],
        hard: ["Il vient d'Australie", "Il est très rapide"]
      },
      facts: ["Le kangourou porte son bébé dans une poche.", "Il saute très loin."]
    },
    {
      id: "chevre",
      label: "Chèvre",
      aliases: ["chevre", "chèvre", "une chèvre"],
      icon: "🐐",
      clues: {
        easy: ["C'est un animal", "Il vit à la ferme"],
        medium: ["Il a des cornes", "Il mange de l'herbe"],
        hard: ["Il donne du lait", "Il aime grimper"]
      },
      facts: ["La chèvre peut grimper partout.", "Elle donne du lait."]
    },
    {
      id: "poule",
      label: "Poule",
      aliases: ["poule", "une poule", "la poule"],
      icon: "🐔",
      clues: {
        easy: ["C'est un animal", "Elle vit à la ferme"],
        medium: ["Elle pond des oeufs", "Elle picore"],
        hard: ["Elle a des plumes", "Elle fait cot-cot"]
      },
      facts: ["La poule pond des oeufs.", "Elle vit souvent dans un poulailler."]
    },
    {
      id: "chevreuil",
      label: "Chevreuil",
      aliases: ["chevreuil", "un chevreuil"],
      icon: "🦌",
      clues: {
        easy: ["C'est un animal", "Il vit en forêt"],
        medium: ["Il est timide", "Il court vite"],
        hard: ["Il a des bois", "Il est marron"]
      },
      facts: ["Le chevreuil vit dans les forêts.", "Il est très discret."]
    },
    {
      id: "hippopotame",
      label: "Hippopotame",
      aliases: ["hippopotame", "un hippopotame", "hippo"],
      icon: "🦛",
      clues: {
        easy: ["C'est un animal", "Il est gros"],
        medium: ["Il aime l'eau", "Il est lourd"],
        hard: ["Il vit en Afrique", "Il a une grande bouche"]
      },
      facts: ["L'hippopotame passe beaucoup de temps dans l'eau.", "Il est très fort."]
    },
    {
      id: "loup",
      label: "Loup",
      aliases: ["loup", "un loup", "le loup"],
      icon: "🐺",
      clues: {
        easy: ["C'est un animal", "Il fait hou-hou"],
        medium: ["Il vit en forêt", "Il a des crocs"],
        hard: ["Il vit parfois en meute", "Il ressemble au chien"]
      },
      facts: ["Le loup vit souvent en groupe.", "Il a un très bon odorat."]
    },
    {
      id: "souris",
      label: "Souris",
      aliases: ["souris", "une souris", "la souris"],
      icon: "🐭",
      clues: {
        easy: ["C'est un animal", "Elle est petite"],
        medium: ["Elle aime le fromage", "Elle a une longue queue"],
        hard: ["Elle se cache dans des petits trous", "Elle court très vite"]
      },
      facts: ["La souris est très agile.", "Elle a de petites oreilles rondes."]
    },
    {
      id: "chauve_souris",
      label: "Chauve-souris",
      aliases: ["chauve-souris", "chauve souris", "une chauve-souris"],
      icon: "🦇",
      clues: {
        easy: ["C'est un animal", "Elle vole la nuit"],
        medium: ["Elle vit dans les grottes", "Elle dort la tête en bas"],
        hard: ["Elle utilise l'écho pour se repérer", "Elle a des ailes de peau"]
      },
      facts: ["La chauve-souris est un mammifère.", "Elle chasse souvent la nuit."]
    },
    {
      id: "dromadaire",
      label: "Dromadaire",
      aliases: ["dromadaire", "un dromadaire"],
      icon: "🐪",
      clues: {
        easy: ["C'est un animal", "Il a une bosse"],
        medium: ["Il vit dans le désert", "Il peut marcher longtemps"],
        hard: ["Il garde de l'eau dans son corps", "On le voit dans les dunes"]
      },
      facts: ["Le dromadaire vit dans les zones désertiques.", "Sa bosse l'aide à survivre."]
    },
    {
      id: "flamant_rose",
      label: "Flamant rose",
      aliases: ["flamant rose", "un flamant rose", "flamant"],
      icon: "🦩",
      clues: {
        easy: ["C'est un oiseau", "Il est rose"],
        medium: ["Il a de longues pattes", "Il vit près de l'eau"],
        hard: ["Il se tient parfois sur une patte", "Il a un long cou"]
      },
      facts: ["Le flamant rose aime les lacs.", "Sa couleur vient de sa nourriture."]
    },
    {
      id: "grenouille",
      label: "Grenouille",
      aliases: ["grenouille", "une grenouille", "la grenouille"],
      icon: "🐸",
      clues: {
        easy: ["C'est un animal", "Elle saute"],
        medium: ["Elle vit près de l'eau", "Elle fait croa-croa"],
        hard: ["Elle a une peau lisse", "Elle mange des insectes"]
      },
      facts: ["La grenouille aime les étangs.", "Elle peut sauter très loin."]
    },
    {
      id: "paresseux",
      label: "Paresseux",
      aliases: ["paresseux", "un paresseux"],
      icon: "🦥",
      clues: {
        easy: ["C'est un animal", "Il bouge lentement"],
        medium: ["Il vit dans les arbres", "Il aime dormir"],
        hard: ["Il vient d'Amérique du Sud", "Il a de longues griffes"]
      },
      facts: ["Le paresseux se déplace très lentement.", "Il passe beaucoup de temps dans les arbres."]
    },
    {
      id: "raton_laveur",
      label: "Raton laveur",
      aliases: ["raton laveur", "un raton laveur", "raton"],
      icon: "🦝",
      clues: {
        easy: ["C'est un animal", "Il a un masque"],
        medium: ["Il vit en forêt", "Il est nocturne"],
        hard: ["Il a une queue rayée", "Il est très curieux"]
      },
      facts: ["Le raton laveur est actif la nuit.", "Il fouille avec ses petites pattes."]
    },
    {
      id: "coccinelle",
      label: "Coccinelle",
      aliases: ["coccinelle", "une coccinelle"],
      icon: "🐞",
      clues: {
        easy: ["C'est un insecte", "Elle est petite"],
        medium: ["Elle est rouge", "Elle a des points"],
        hard: ["Elle vole", "On la voit sur les feuilles"]
      },
      facts: ["La coccinelle est souvent rouge.", "Elle aime les jardins."]
    },
    {
      id: "poussin",
      label: "Poussin",
      aliases: ["poussin", "un poussin"],
      icon: "🐥",
      clues: {
        easy: ["C'est un animal", "Il est petit"],
        medium: ["Il sort d'un oeuf", "Il est jaune"],
        hard: ["Il devient une poule", "Il fait piou-piou"]
      },
      facts: ["Le poussin est le bébé de la poule.", "Il aime rester au chaud."]
    },
    {
      id: "hibou2",
      label: "Hibou",
      aliases: ["hibou", "un hibou", "le hibou"],
      icon: "🦉",
      clues: {
        easy: ["C'est un oiseau", "Il vit la nuit"],
        medium: ["Il a de grands yeux", "Il chasse en silence"],
        hard: ["Il pousse un hululement", "Il aime les forêts"]
      },
      facts: ["Le hibou voit très bien la nuit.", "Il vole sans faire de bruit."]
    },
    {
      id: "tortue2",
      label: "Tortue",
      aliases: ["tortue", "une tortue", "la tortue"],
      icon: "🐢",
      clues: {
        easy: ["C'est un animal", "Elle a une carapace"],
        medium: ["Elle avance lentement", "Elle aime le soleil"],
        hard: ["Elle peut vivre longtemps", "Elle rentre sa tête"]
      },
      facts: ["La tortue peut vivre très longtemps.", "Sa carapace la protège."]
    },
    {
      id: "ours2",
      label: "Ours",
      aliases: ["ours", "un ours", "l'ours"],
      icon: "🐻",
      clues: {
        easy: ["C'est un animal", "Il est grand"],
        medium: ["Il vit dans la forêt", "Il aime le miel"],
        hard: ["Il peut hiberner", "Il a de grosses pattes"]
      },
      facts: ["L'ours peut dormir longtemps en hiver.", "Il a un odorat très développé."]
    }
  ],
  objet: [
    {
      id: "trompette",
      label: "Trompette",
      aliases: ["trompette", "une trompette"],
      icon: "🎺",
      clues: {
        easy: ["C'est un objet", "Il fait du bruit"],
        medium: ["On souffle dedans", "Il fait de la musique"],
        hard: ["Il brille", "C'est un instrument"]
      },
      facts: ["La trompette est un instrument de musique.", "Elle est souvent en métal."]
    },
    {
      id: "micro",
      label: "Micro",
      aliases: ["micro", "un micro", "microphone"],
      icon: "🎤",
      clues: {
        easy: ["C'est un objet", "Il est petit"],
        medium: ["On parle dedans", "Il amplifie la voix"],
        hard: ["Il sert à chanter", "On l'utilise sur scène"]
      },
      facts: ["Le micro sert à enregistrer la voix.", "Il aide à se faire entendre."]
    },
    {
      id: "horloge",
      label: "Horloge",
      aliases: ["horloge", "une horloge", "l'horloge"],
      icon: "🕰️",
      clues: {
        easy: ["C'est un objet", "Elle donne l'heure"],
        medium: ["Elle a des aiguilles", "Elle peut être accrochée"],
        hard: ["Elle fait tic-tac", "On la voit au mur"]
      },
      facts: ["Une horloge sert à lire l'heure.", "Elle peut être grande ou petite."]
    },
    {
      id: "gomme",
      label: "Gomme",
      aliases: ["gomme", "une gomme", "la gomme"],
      icon: "🧼",
      clues: {
        easy: ["C'est un objet", "On l'utilise à l'école"],
        medium: ["Elle efface", "Elle est petite"],
        hard: ["On efface le crayon", "Elle peut être blanche"]
      },
      facts: ["La gomme efface les erreurs.", "On l'utilise avec un crayon."]
    },
    {
      id: "bouteille",
      label: "Bouteille",
      aliases: ["bouteille", "une bouteille", "la bouteille"],
      icon: "🧴",
      clues: {
        easy: ["C'est un objet", "On met un liquide dedans"],
        medium: ["Elle peut être en plastique", "On la tient à la main"],
        hard: ["Elle a un bouchon", "On la ferme"]
      },
      facts: ["Une bouteille peut contenir de l'eau.", "Elle se ferme avec un bouchon."]
    },
    {
      id: "chapeau",
      label: "Chapeau",
      aliases: ["chapeau", "un chapeau", "le chapeau"],
      icon: "🎩",
      clues: {
        easy: ["C'est un objet", "On le met sur la tête"],
        medium: ["Il protège du soleil", "Il peut être élégant"],
        hard: ["Il a une forme ronde", "On le porte pour se déguiser"]
      },
      facts: ["Le chapeau se porte sur la tête.", "Il existe plein de styles de chapeaux."]
    },
    {
      id: "cadenas",
      label: "Cadenas",
      aliases: ["cadenas", "un cadenas", "le cadenas"],
      icon: "🔒",
      clues: {
        easy: ["C'est un objet", "Il sert à fermer"],
        medium: ["Il s'ouvre avec une clé", "Il est en métal"],
        hard: ["On le met sur un portail", "Il protège les affaires"]
      },
      facts: ["Le cadenas sert à verrouiller.", "Il existe des cadenas à code."]
    },
    {
      id: "regle",
      label: "Règle",
      aliases: ["regle", "règle", "une règle"],
      icon: "📏",
      clues: {
        easy: ["C'est un objet", "On l'utilise à l'école"],
        medium: ["Elle est longue", "Elle sert à tracer"],
        hard: ["Elle mesure", "Elle est droite"]
      },
      facts: ["La règle sert à mesurer.", "Elle aide à tracer des lignes."]
    },
    {
      id: "gourde",
      label: "Gourde",
      aliases: ["gourde", "une gourde", "la gourde"],
      icon: "🚰",
      clues: {
        easy: ["C'est un objet", "On boit avec"],
        medium: ["Elle contient de l'eau", "Elle se ferme"],
        hard: ["On l'emporte partout", "Elle est pratique"]
      },
      facts: ["La gourde contient de l'eau.", "On peut la remplir facilement."]
    },
    {
      id: "boussole",
      label: "Boussole",
      aliases: ["boussole", "une boussole"],
      icon: "🧭",
      clues: {
        easy: ["C'est un objet", "Elle montre une direction"],
        medium: ["Elle a une aiguille", "Elle aide à se repérer"],
        hard: ["Elle indique le nord", "On l'utilise en aventure"]
      },
      facts: ["La boussole montre le nord.", "Elle aide à s'orienter."]
    },
    {
      id: "panier",
      label: "Panier",
      aliases: ["panier", "un panier", "le panier"],
      icon: "🧺",
      clues: {
        easy: ["C'est un objet", "On met des choses dedans"],
        medium: ["Il a une anse", "On le porte"],
        hard: ["On l'utilise au marché", "Il est en osier"]
      },
      facts: ["Le panier sert à transporter.", "Il peut être léger."]
    },
    {
      id: "telecommande",
      label: "Télécommande",
      aliases: ["telecommande", "télécommande", "une télécommande"],
      icon: "📺",
      clues: {
        easy: ["C'est un objet", "On appuie dessus"],
        medium: ["Elle a des boutons", "Elle contrôle un écran"],
        hard: ["Elle change de chaîne", "Elle sert à la télé"]
      },
      facts: ["La télécommande contrôle la télévision.", "Elle fonctionne avec des piles."]
    },
    {
      id: "lunettes",
      label: "Lunettes",
      aliases: ["lunettes", "des lunettes", "une paire de lunettes"],
      icon: "👓",
      clues: {
        easy: ["C'est un objet", "On le met sur le nez"],
        medium: ["Il aide à mieux voir", "Il a deux verres"],
        hard: ["Il peut protéger du soleil", "Il a des branches"]
      },
      facts: ["Les lunettes aident à bien voir.", "Il existe des lunettes de soleil."]
    },
    {
      id: "guitare",
      label: "Guitare",
      aliases: ["guitare", "une guitare"],
      icon: "🎸",
      clues: {
        easy: ["C'est un objet", "Elle fait de la musique"],
        medium: ["Elle a des cordes", "On la gratte"],
        hard: ["Elle a une caisse", "On la joue avec les doigts"]
      },
      facts: ["La guitare a plusieurs cordes.", "Elle est très utilisée en musique."]
    },
    {
      id: "marteau",
      label: "Marteau",
      aliases: ["marteau", "un marteau"],
      icon: "🔨",
      clues: {
        easy: ["C'est un objet", "On le tient à la main"],
        medium: ["Il sert à taper", "Il est en métal"],
        hard: ["Il enfonce des clous", "Il a un manche"]
      },
      facts: ["Le marteau sert à bricoler.", "Il aide à planter des clous."]
    },
    {
      id: "puzzle",
      label: "Puzzle",
      aliases: ["puzzle", "un puzzle"],
      icon: "🧩",
      clues: {
        easy: ["C'est un objet", "On joue avec"],
        medium: ["Il a des pièces", "On les assemble"],
        hard: ["Il forme une image", "Il demande de la patience"]
      },
      facts: ["Un puzzle a beaucoup de pièces.", "On les assemble pour faire une image."]
    },
    {
      id: "appareil_photo",
      label: "Appareil photo",
      aliases: ["appareil photo", "un appareil photo", "appareil"],
      icon: "📷",
      clues: {
        easy: ["C'est un objet", "Il fait des images"],
        medium: ["Il a un bouton", "Il peut faire un flash"],
        hard: ["Il prend des photos", "Il a un objectif"]
      },
      facts: ["Un appareil photo sert à prendre des images.", "Il peut être numérique."]
    },
    {
      id: "valise",
      label: "Valise",
      aliases: ["valise", "une valise"],
      icon: "🧳",
      clues: {
        easy: ["C'est un objet", "On y met des affaires"],
        medium: ["On l'emporte en voyage", "Elle a une poignée"],
        hard: ["Elle peut avoir des roulettes", "On la ferme avec une fermeture"]
      },
      facts: ["La valise sert à voyager.", "Elle contient des vêtements."]
    },
    {
      id: "cle_usb",
      label: "Clé USB",
      aliases: ["cle usb", "clé usb", "une clé usb"],
      icon: "💾",
      clues: {
        easy: ["C'est un objet", "Il est petit"],
        medium: ["On le branche", "Il garde des fichiers"],
        hard: ["Il va dans un ordinateur", "Il sert à transporter des données"]
      },
      facts: ["Une clé USB stocke des fichiers.", "Elle se branche sur un ordinateur."]
    }
  ],
  aliment: [
    {
      id: "framboise",
      label: "Framboise",
      aliases: ["framboise", "une framboise", "la framboise"],
      icon: "🫐",
      clues: {
        easy: ["C'est un fruit", "Elle est petite"],
        medium: ["Elle est rouge", "Elle est douce"],
        hard: ["On la met dans les desserts", "Elle pousse en été"]
      },
      facts: ["La framboise pousse sur un framboisier.", "Elle est très parfumée."]
    },
    {
      id: "melon",
      label: "Melon",
      aliases: ["melon", "un melon", "le melon"],
      icon: "🍈",
      clues: {
        easy: ["C'est un fruit", "Il est gros"],
        medium: ["Il est rond", "Il est sucré"],
        hard: ["On le mange en été", "Il a des pépins"]
      },
      facts: ["Le melon est rafraîchissant.", "On le mange souvent frais."]
    },
    {
      id: "epinard",
      label: "Épinard",
      aliases: ["epinard", "épinard", "les épinards"],
      icon: "🥬",
      clues: {
        easy: ["C'est un légume", "Il est vert"],
        medium: ["Il a des feuilles", "On le mange cuit"],
        hard: ["Il est bon pour la santé", "On en fait des purées"]
      },
      facts: ["L'épinard est riche en vitamines.", "Il se cuisine facilement."]
    },
    {
      id: "champignon",
      label: "Champignon",
      aliases: ["champignon", "un champignon", "les champignons"],
      icon: "🍄",
      clues: {
        easy: ["C'est un aliment", "Il est petit"],
        medium: ["Il pousse dans la forêt", "Il a un chapeau"],
        hard: ["On le met dans les plats", "Il ne faut pas en manger n'importe lequel"]
      },
      facts: ["Certains champignons sont comestibles.", "Ils poussent souvent après la pluie."]
    },
    {
      id: "poireau",
      label: "Poireau",
      aliases: ["poireau", "un poireau", "le poireau"],
      icon: "🥬",
      clues: {
        easy: ["C'est un légume", "Il est vert"],
        medium: ["Il est long", "On le coupe en rondelles"],
        hard: ["On le met dans les soupes", "Il a un goût doux"]
      },
      facts: ["Le poireau est un légume d'hiver.", "On le met souvent dans les soupes."]
    },
    {
      id: "radis",
      label: "Radis",
      aliases: ["radis", "un radis", "le radis"],
      icon: "🌶️",
      clues: {
        easy: ["C'est un légume", "Il est petit"],
        medium: ["Il est rouge", "Il est croquant"],
        hard: ["On le mange cru", "Il pousse dans la terre"]
      },
      facts: ["Le radis se mange souvent cru.", "Il est croquant et frais."]
    },
    {
      id: "poire",
      label: "Poire",
      aliases: ["poire", "une poire", "la poire"],
      icon: "🍐",
      clues: {
        easy: ["C'est un fruit", "Il est doux"],
        medium: ["Il est vert", "Il a une forme de goutte"],
        hard: ["Il pousse sur un poirier", "On le mange en dessert"]
      },
      facts: ["La poire est souvent très juteuse.", "On la mange fraîche."]
    },
    {
      id: "clementine",
      label: "Clémentine",
      aliases: ["clementine", "clémentine", "une clémentine"],
      icon: "🍊",
      clues: {
        easy: ["C'est un fruit", "Il est orange"],
        medium: ["Il est petit", "On l'épluche"],
        hard: ["Il se sépare en quartiers", "On le mange en hiver"]
      },
      facts: ["La clémentine est douce et facile à éplucher.", "Elle est riche en vitamine C."]
    },
    {
      id: "courge",
      label: "Courge",
      aliases: ["courge", "une courge", "la courge"],
      icon: "🎃",
      clues: {
        easy: ["C'est un légume", "Elle est grosse"],
        medium: ["Elle est orange", "On la cuisine"],
        hard: ["On en fait des soupes", "Elle a une peau dure"]
      },
      facts: ["La courge se cuisine en soupe.", "Elle est typique de l'automne."]
    },
    {
      id: "myrtille",
      label: "Myrtille",
      aliases: ["myrtille", "une myrtille", "la myrtille"],
      icon: "🫐",
      clues: {
        easy: ["C'est un fruit", "Elle est petite"],
        medium: ["Elle est violette", "Elle est sucrée"],
        hard: ["On la met dans les gâteaux", "Elle pousse en été"]
      },
      facts: ["La myrtille est une petite baie.", "Elle est souvent utilisée en dessert."]
    },
    {
      id: "aneth",
      label: "Aneth",
      aliases: ["aneth", "de l'aneth"],
      icon: "🌿",
      clues: {
        easy: ["C'est un aliment", "C'est une herbe"],
        medium: ["Elle sent fort", "On en met un peu"],
        hard: ["Elle parfume les plats", "On la coupe en petits morceaux"]
      },
      facts: ["L'aneth est une herbe aromatique.", "Elle parfume les recettes."]
    },
    {
      id: "poivron_jaune",
      label: "Poivron jaune",
      aliases: ["poivron jaune", "un poivron jaune"],
      icon: "🫑",
      clues: {
        easy: ["C'est un légume", "Il est coloré"],
        medium: ["Il est jaune", "Il est croquant"],
        hard: ["Il a des graines", "On le coupe pour cuisiner"]
      },
      facts: ["Le poivron jaune est doux.", "Il se mange cru ou cuit."]
    },
    {
      id: "poire_asiatique",
      label: "Poire asiatique",
      aliases: ["poire asiatique", "poire nashi", "nashi"],
      icon: "🍐",
      clues: {
        easy: ["C'est un fruit", "Il est rond"],
        medium: ["Il est croquant", "Il est juteux"],
        hard: ["Il vient d'Asie", "On le mange frais"]
      },
      facts: ["La poire asiatique est très croquante.", "Elle est souvent appelée nashi."]
    },
    {
      id: "patisson",
      label: "Pâtisson",
      aliases: ["patisson", "pâtisson", "un pâtisson"],
      icon: "🎃",
      clues: {
        easy: ["C'est un légume", "Il est rond"],
        medium: ["Il est blanc ou vert", "On le cuisine"],
        hard: ["Il ressemble à une courge", "On le met au four"]
      },
      facts: ["Le pâtisson est une courge.", "Il se cuisine facilement."]
    },
    {
      id: "kiwi",
      label: "Kiwi",
      aliases: ["kiwi", "un kiwi", "le kiwi"],
      icon: "🥝",
      clues: {
        easy: ["C'est un fruit", "Il est petit"],
        medium: ["Il est vert dedans", "Il a des graines"],
        hard: ["Il a une peau brune", "On l'épluche"]
      },
      facts: ["Le kiwi est riche en vitamine C.", "Il a un goût acidulé."]
    },
    {
      id: "mangue",
      label: "Mangue",
      aliases: ["mangue", "une mangue", "la mangue"],
      icon: "🥭",
      clues: {
        easy: ["C'est un fruit", "Il est sucré"],
        medium: ["Il est jaune dedans", "Il vient des pays chauds"],
        hard: ["Il a un gros noyau", "On le mange bien mûr"]
      },
      facts: ["La mangue est un fruit tropical.", "Elle est très parfumée."]
    },
    {
      id: "courgette",
      label: "Courgette",
      aliases: ["courgette", "une courgette"],
      icon: "🥒",
      clues: {
        easy: ["C'est un légume", "Elle est verte"],
        medium: ["Elle est longue", "On la cuisine"],
        hard: ["On la met dans des plats", "Elle peut être coupée en rondelles"]
      },
      facts: ["La courgette se cuisine facilement.", "Elle est souvent verte."]
    },
    {
      id: "poivron_rouge",
      label: "Poivron rouge",
      aliases: ["poivron rouge", "un poivron rouge"],
      icon: "🫑",
      clues: {
        easy: ["C'est un légume", "Il est coloré"],
        medium: ["Il est rouge", "Il est croquant"],
        hard: ["Il a des graines", "On le coupe pour cuisiner"]
      },
      facts: ["Le poivron rouge est sucré.", "Il se mange cru ou cuit."]
    },
    {
      id: "pomme_de_terre",
      label: "Pomme de terre",
      aliases: ["pomme de terre", "patate", "une pomme de terre"],
      icon: "🥔",
      clues: {
        easy: ["C'est un aliment", "Il pousse dans la terre"],
        medium: ["On le cuisine", "Il n'est pas sucré"],
        hard: ["On en fait des frites", "Il a une peau"]
      },
      facts: ["La pomme de terre est très utilisée en cuisine.", "Elle pousse sous terre."]
    },
    {
      id: "fromage",
      label: "Fromage",
      aliases: ["fromage", "un fromage"],
      icon: "🧀",
      clues: {
        easy: ["C'est un aliment", "On le mange"],
        medium: ["Il vient du lait", "Il a une odeur"],
        hard: ["Il existe plein de variétés", "On le mange souvent avec du pain"]
      },
      facts: ["Le fromage est fabriqué à partir de lait.", "Il existe beaucoup de types de fromage."]
    },
    {
      id: "pain",
      label: "Pain",
      aliases: ["pain", "un pain", "baguette"],
      icon: "🥖",
      clues: {
        easy: ["C'est un aliment", "On en mange souvent"],
        medium: ["Il est fait avec de la farine", "Il est cuit au four"],
        hard: ["Il peut être en baguette", "Il a une croûte"]
      },
      facts: ["Le pain est très courant.", "On le fait avec de la farine et de l'eau."]
    },
    {
      id: "glace",
      label: "Glace",
      aliases: ["glace", "une glace", "la glace"],
      icon: "🍦",
      clues: {
        easy: ["C'est un aliment", "C'est froid"],
        medium: ["Elle est sucrée", "On la mange en été"],
        hard: ["Elle fond vite", "Elle peut être dans un cornet"]
      },
      facts: ["La glace est une gourmandise.", "Elle se mange froide."]
    }
  ],
  personne: [
    {
      id: "mage",
      label: "Magicien",
      aliases: ["magicien", "un magicien"],
      icon: "🧙",
      clues: {
        easy: ["C'est un personnage", "Il fait des tours"],
        medium: ["Il a une baguette", "Il porte une cape"],
        hard: ["Il connaît des sorts", "Il surprend les gens"]
      },
      facts: ["Les magiciens aiment la magie.", "Ils font des spectacles."]
    },
    {
      id: "astronaute",
      label: "Astronaute",
      aliases: ["astronaute", "un astronaute"],
      icon: "👨‍🚀",
      clues: {
        easy: ["C'est une personne", "Elle voyage dans l'espace"],
        medium: ["Elle porte une combinaison", "Elle va dans une fusée"],
        hard: ["Elle flotte sans gravité", "Elle visite des étoiles"]
      },
      facts: ["Les astronautes s'entraînent longtemps.", "Ils vont dans l'espace."]
    },
    {
      id: "princesse_sirene",
      label: "Princesse sirène",
      aliases: ["sirene", "sirène", "princesse sirène"],
      icon: "🧜‍♀️",
      clues: {
        easy: ["C'est un personnage", "Elle vit dans l'eau"],
        medium: ["Elle a une queue", "Elle nage très bien"],
        hard: ["Elle vit sous la mer", "Elle aime la musique"]
      },
      facts: ["Les sirènes vivent dans les histoires.", "Elles nagent très vite."]
    },
    {
      id: "chevalier",
      label: "Chevalier",
      aliases: ["chevalier", "un chevalier"],
      icon: "🛡️",
      clues: {
        easy: ["C'est un personnage", "Il aide les autres"],
        medium: ["Il porte une armure", "Il protège un château"],
        hard: ["Il a un bouclier", "Il est courageux"]
      },
      facts: ["Les chevaliers protègent les gens.", "Ils vivent dans les châteaux."]
    },
    {
      id: "exploratrice",
      label: "Exploratrice",
      aliases: ["exploratrice", "une exploratrice"],
      icon: "🧭",
      clues: {
        easy: ["C'est une personne", "Elle aime voyager"],
        medium: ["Elle découvre des lieux", "Elle porte un sac"],
        hard: ["Elle utilise une carte", "Elle vit des aventures"]
      },
      facts: ["Les explorateurs découvrent le monde.", "Ils aiment l'aventure."]
    },
    {
      id: "pirate_gentil",
      label: "Pirate gentil",
      aliases: ["pirate gentil", "pirate sympa"],
      icon: "🏴‍☠️",
      clues: {
        easy: ["C'est un personnage", "Il voyage en bateau"],
        medium: ["Il cherche un trésor", "Il est joyeux"],
        hard: ["Il a un chapeau", "Il adore l'aventure"]
      },
      facts: ["Les pirates vivent sur la mer.", "Ils aiment les cartes au trésor."]
    },
    {
      id: "chef",
      label: "Cuisinier",
      aliases: ["cuisinier", "chef", "un cuisinier"],
      icon: "👨‍🍳",
      clues: {
        easy: ["C'est une personne", "Il cuisine"],
        medium: ["Il prépare des plats", "Il porte souvent un chapeau"],
        hard: ["Il travaille dans une cuisine", "Il aime les recettes"]
      },
      facts: ["Le cuisinier prépare des repas.", "Il connaît beaucoup de recettes."]
    },
    {
      id: "musicien",
      label: "Musicien",
      aliases: ["musicien", "un musicien"],
      icon: "🎸",
      clues: {
        easy: ["C'est une personne", "Il fait de la musique"],
        medium: ["Il joue d'un instrument", "Il aime les notes"],
        hard: ["Il répète des morceaux", "Il peut faire un concert"]
      },
      facts: ["Le musicien joue de la musique.", "Il peut jouer en groupe."]
    },
    {
      id: "danseuse",
      label: "Danseuse",
      aliases: ["danseuse", "une danseuse"],
      icon: "💃",
      clues: {
        easy: ["C'est une personne", "Elle danse"],
        medium: ["Elle bouge au rythme", "Elle aime la musique"],
        hard: ["Elle apprend des chorégraphies", "Elle peut monter sur scène"]
      },
      facts: ["La danseuse bouge avec la musique.", "Elle s'entraîne souvent."]
    },
    {
      id: "jardinier",
      label: "Jardinier",
      aliases: ["jardinier", "un jardinier"],
      icon: "👨‍🌾",
      clues: {
        easy: ["C'est une personne", "Il s'occupe des plantes"],
        medium: ["Il arrose", "Il plante des fleurs"],
        hard: ["Il travaille dans un jardin", "Il aime la nature"]
      },
      facts: ["Le jardinier aime les plantes.", "Il entretient le jardin."]
    },
    {
      id: "docteur",
      label: "Docteur",
      aliases: ["docteur", "un docteur", "médecin"],
      icon: "🧑‍⚕️",
      clues: {
        easy: ["C'est une personne", "Il aide les autres"],
        medium: ["Il soigne", "Il travaille à l'hôpital"],
        hard: ["Il porte une blouse", "Il donne des conseils"]
      },
      facts: ["Le docteur soigne les personnes.", "Il aide à rester en bonne santé."]
    },
    {
      id: "pompiere",
      label: "Pompier",
      aliases: ["pompier", "un pompier"],
      icon: "🚒",
      clues: {
        easy: ["C'est une personne", "Il aide les autres"],
        medium: ["Il éteint les feux", "Il porte un casque"],
        hard: ["Il conduit un camion rouge", "Il intervient en urgence"]
      },
      facts: ["Le pompier éteint les incendies.", "Il protège les gens."]
    },
    {
      id: "policier",
      label: "Policier",
      aliases: ["policier", "un policier"],
      icon: "👮‍♂️",
      clues: {
        easy: ["C'est une personne", "Il aide les autres"],
        medium: ["Il porte un uniforme", "Il protège la ville"],
        hard: ["Il dirige parfois la circulation", "Il garde la sécurité"]
      },
      facts: ["Le policier protège les citoyens.", "Il porte un uniforme."]
    },
    {
      id: "boulanger",
      label: "Boulanger",
      aliases: ["boulanger", "un boulanger"],
      icon: "👨‍🍳",
      clues: {
        easy: ["C'est une personne", "Il fait du pain"],
        medium: ["Il travaille tôt", "Il utilise un four"],
        hard: ["Il fait des baguettes", "Il travaille dans une boulangerie"]
      },
      facts: ["Le boulanger prépare le pain.", "Il travaille souvent le matin."]
    },
    {
      id: "coiffeur",
      label: "Coiffeur",
      aliases: ["coiffeur", "un coiffeur", "coiffeuse"],
      icon: "💇‍♂️",
      clues: {
        easy: ["C'est une personne", "Il coupe les cheveux"],
        medium: ["Il utilise des ciseaux", "Il travaille en salon"],
        hard: ["Il fait des coiffures", "Il lave parfois les cheveux"]
      },
      facts: ["Le coiffeur coupe les cheveux.", "Il utilise des ciseaux et un peigne."]
    },
    {
      id: "bibliothecaire",
      label: "Bibliothécaire",
      aliases: ["bibliothecaire", "bibliothécaire", "un bibliothécaire"],
      icon: "🧑‍🏫",
      clues: {
        easy: ["C'est une personne", "Elle aime les livres"],
        medium: ["Elle travaille dans une bibliothèque", "Elle aide à choisir"],
        hard: ["Elle range les livres", "Elle connaît beaucoup d'histoires"]
      },
      facts: ["Le bibliothécaire travaille avec des livres.", "Il aide à trouver des histoires."]
    },
    {
      id: "infirmier",
      label: "Infirmier",
      aliases: ["infirmier", "un infirmier", "infirmière"],
      icon: "🧑‍⚕️",
      clues: {
        easy: ["C'est une personne", "Il aide les malades"],
        medium: ["Il travaille à l'hôpital", "Il soigne"],
        hard: ["Il met des pansements", "Il prend soin des patients"]
      },
      facts: ["L'infirmier aide à soigner.", "Il travaille souvent à l'hôpital."]
    },
    {
      id: "pilote",
      label: "Pilote",
      aliases: ["pilote", "un pilote"],
      icon: "🧑‍✈️",
      clues: {
        easy: ["C'est une personne", "Il voyage"],
        medium: ["Il conduit un avion", "Il porte un uniforme"],
        hard: ["Il travaille dans un cockpit", "Il transporte des passagers"]
      },
      facts: ["Le pilote conduit l'avion.", "Il emmène les gens en voyage."]
    },
    {
      id: "journaliste",
      label: "Journaliste",
      aliases: ["journaliste", "un journaliste"],
      icon: "🧑‍💼",
      clues: {
        easy: ["C'est une personne", "Elle raconte des nouvelles"],
        medium: ["Elle écrit ou parle", "Elle pose des questions"],
        hard: ["Elle fait des reportages", "Elle informe les gens"]
      },
      facts: ["Le journaliste informe le public.", "Il peut écrire des articles."]
    }
  ]
};


const state = {
  category: "animal",
  mode: "image",
  age: 7,
  timer: false,
  sound: true,
  timedMode: false,
  current: null,
  currentCategory: null,
  clues: [],
  clueIndex: 0,
  startTime: 0,
  timerId: null,
  finished: false,
  timedRemaining: 0,
  timedScore: 0,
  timedRounds: 0,
  timedActive: false,
  timedEndAt: 0,
  usedByKey: {}
};

const els = {
  categoryOptions: document.getElementById("categoryOptions"),
  modeOptions: document.getElementById("modeOptions"),
  age: document.getElementById("age"),
  ageValue: document.getElementById("ageValue"),
  start: document.getElementById("start"),
  setup: document.getElementById("setup"),
  game: document.getElementById("game"),
  categoryChip: document.getElementById("categoryChip"),
  modeChip: document.getElementById("modeChip"),
  timerChip: document.getElementById("timerChip"),
  timerValue: document.getElementById("timerValue"),
  scoreChip: document.getElementById("scoreChip"),
  clueText: document.getElementById("clueText"),
  nextClue: document.getElementById("nextClue"),
  clueHistory: document.getElementById("clueHistory"),
  imageMode: document.getElementById("imageMode"),
  imageGrid: document.getElementById("imageGrid"),
  textMode: document.getElementById("textMode"),
  answerInput: document.getElementById("answerInput"),
  submitAnswer: document.getElementById("submitAnswer"),
  result: document.getElementById("result"),
  fact: document.getElementById("fact"),
  playAgain: document.getElementById("playAgain"),
  backToSetup: document.getElementById("backToSetup"),
  sound: document.getElementById("sound"),
  timer: document.getElementById("timer"),
  timedMode: document.getElementById("timedMode"),
  confetti: document.getElementById("confetti")
};

function initOptions() {
  CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "option" + (cat.id === state.category ? " active" : "");
    btn.dataset.id = cat.id;
    const icon = document.createElement("span");
    icon.className = "btn-icon";
    icon.textContent = cat.icon || "✨";
    const label = document.createElement("span");
    label.textContent = cat.label;
    btn.appendChild(icon);
    btn.appendChild(label);
    btn.addEventListener("click", () => {
      state.category = cat.id;
      updateOptionButtons(els.categoryOptions, cat.id);
    });
    els.categoryOptions.appendChild(btn);
  });

  MODES.forEach((mode) => {
    const btn = document.createElement("button");
    btn.className = "option" + (mode.id === state.mode ? " active" : "");
    btn.dataset.id = mode.id;
    const icon = document.createElement("span");
    icon.className = "btn-icon";
    icon.textContent = mode.icon || "✨";
    const label = document.createElement("span");
    label.textContent = mode.label;
    btn.appendChild(icon);
    btn.appendChild(label);
    btn.addEventListener("click", () => {
      state.mode = mode.id;
      updateOptionButtons(els.modeOptions, mode.id);
    });
    els.modeOptions.appendChild(btn);
  });
}

function updateOptionButtons(container, id) {
  Array.from(container.children).forEach((child) => {
    child.classList.toggle("active", child.dataset.id === id);
  });
}

function updateTimedToggleUI() {
  const timed = !!els.timedMode?.checked;
  const timerLabel = els.timer ? els.timer.closest("label") : null;
  if (els.timer) {
    els.timer.disabled = timed;
    if (timed) els.timer.checked = false;
  }
  if (timerLabel) timerLabel.classList.toggle("disabled", timed);
}

function getLabel(id) {
  const cat = CATEGORIES.find((c) => c.id === id);
  if (cat) return cat.label;
  const mode = MODES.find((m) => m.id === id);
  return mode ? mode.label : id;
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function getSessionKey(category) {
  const modeKey = isTimedMode() ? "timed" : "normal";
  return `${modeKey}:${state.mode}:${category}`;
}

function pickNonRepeating(items, category) {
  const key = getSessionKey(category);
  if (!state.usedByKey[key]) state.usedByKey[key] = new Set();
  const used = state.usedByKey[key];
  let available = items.filter((item) => !used.has(item.id));
  if (available.length === 0) {
    used.clear();
    available = items;
  }
  const choice = pickRandom(available);
  used.add(choice.id);
  return choice;
}

function getCategoryItems(category) {
  if (category === "aleatoire") {
    const keys = ["animal", "objet", "aliment", "personne"];
    return getCategoryItems(keys[Math.floor(Math.random() * keys.length)]);
  }
  if (category === "aliment") {
    const fruits = DATA.aliment || [];
    const legumes = DATA.legume || [];
    const extra = EXTRA_DATA.aliment || [];
    return [...fruits, ...legumes, ...extra];
  }
  const base = DATA[category] || [];
  const extra = EXTRA_DATA[category] || [];
  return [...base, ...extra];
}

const GENERIC_CLUES = {
  animal: [
    "Il peut se déplacer",
    "Il a un corps vivant",
    "Il peut manger et boire",
    "Il peut faire des bruits",
    "On peut le voir dans la nature",
    "Il a une tête et des pattes",
    "Il peut dormir la nuit",
    "Il peut être petit ou grand",
    "Il a des yeux",
    "Il respire"
  ],
  objet: [
    "On peut le toucher",
    "Il a une utilité",
    "On peut le trouver à la maison",
    "Il ne mange pas",
    "On peut l'utiliser tous les jours",
    "Il peut être petit ou grand",
    "On peut le tenir dans la main",
    "Il ne parle pas",
    "Il peut être posé sur une table",
    "Il sert à quelque chose"
  ],
  aliment: [
    "On peut le manger",
    "On peut le goûter",
    "Il peut être cru ou cuit",
    "Il vient d'une plante",
    "On le trouve au marché",
    "Il peut être sucré ou salé",
    "On peut le mettre dans une recette",
    "Il peut être coupé",
    "On peut le laver",
    "On le garde dans la cuisine"
  ],
  personne: [
    "Elle peut parler",
    "Elle peut marcher",
    "Elle a un prénom",
    "Elle peut rire",
    "Elle peut apprendre",
    "Elle a des vêtements",
    "Elle peut aider",
    "Elle peut aimer jouer",
    "Elle peut être gentille",
    "Elle peut avoir une famille"
  ]
};

const CATEGORY_MARKERS = {
  animal: ["c'est un animal"],
  objet: ["c'est un objet"],
  aliment: ["c'est un fruit", "c'est un légume", "c'est un aliment"],
  personne: ["c'est une personne", "c'est un personnage"]
};

function getCluesForAge(item, age, category, isRandom) {
  const clues = [];
  const easy = item.clues.easy || [];
  const medium = item.clues.medium || [];
  const hard = item.clues.hard || [];

  if (age <= 6) {
    clues.push(...easy, ...medium);
  } else {
    clues.push(...easy, ...medium, ...hard);
  }

  const markers = CATEGORY_MARKERS[category] || [];
  const isCategoryHint = (text) => {
    const key = normalize(text).replace(/'/g, " ");
    return markers.some((m) => key === normalize(m).replace(/'/g, " "));
  };
  const filtered = isRandom ? clues : clues.filter((c) => !isCategoryHint(c));

  const minClues = 10;
  const generic = GENERIC_CLUES[category] || [];
  let i = 0;
  while (filtered.length < minClues && i < generic.length) {
    if (!filtered.includes(generic[i])) filtered.push(generic[i]);
    i += 1;
  }

  return filtered;
}

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stripArticles(text) {
  return text
    .replace(/^l'\s*/i, "")
    .replace(/^d'\s*/i, "")
    .replace(/^(un|une|le|la|les|des|de)\s+/i, "")
    .trim();
}

function normalizeAnswer(text) {
  let t = normalize(text);
  t = stripArticles(t);
  if (t.endsWith("s") && t.length > 3) t = t.slice(0, -1);
  return t;
}

function levenshtein(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  return matrix[a.length][b.length];
}

function checkAnswer(input, item) {
  const normalizedInput = normalizeAnswer(input);
  const normalizedLabel = normalizeAnswer(item.label);
  const aliases = item.aliases.map((a) => normalizeAnswer(a));
  const all = [normalizedLabel, ...aliases];

  if (all.includes(normalizedInput)) {
    return { ok: true, corrected: normalizedInput !== normalizedLabel ? item.label : null };
  }

  let best = { dist: Infinity, value: normalizedLabel };
  all.forEach((value) => {
    const dist = levenshtein(normalizedInput, value);
    if (dist < best.dist) best = { dist, value };
  });

  const threshold = normalizedLabel.length <= 4 ? 1 : 2;
  if (best.dist <= threshold) {
    return { ok: true, corrected: item.label };
  }

  return { ok: false, corrected: item.label };
}

function emojiToDataUri(emoji) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120">
    <rect width="100%" height="100%" rx="16" ry="16" fill="#fff7e9" />
    <text x="50%" y="58%" font-size="64" text-anchor="middle" dominant-baseline="middle">${emoji}</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg.trim());
}

function buildChoices(answer, category) {
  const pool = [...getCategoryItems(category)];
  const others = pool.filter((item) => item.id !== answer.id);
  const picks = shuffle(others).slice(0, Math.min(11, others.length));
  return shuffle([answer, ...picks]);
}

function createRiddle() {
  let activeCategory = state.category;
  if (state.category === "aleatoire") {
    const keys = ["animal", "objet", "aliment", "personne"];
    activeCategory = pickRandom(keys);
  }
  const items = getCategoryItems(activeCategory);
  const answer = pickNonRepeating(items, activeCategory);
  const clues = getCluesForAge(answer, state.age, activeCategory, state.category === "aleatoire");
  return { answer, clues, category: activeCategory };
}

function showClue() {
  if (state.clueIndex >= state.clues.length) {
    els.clueText.textContent = "Plus d'indice disponible.";
  } else {
    els.clueText.textContent = state.clues[state.clueIndex];
  }
  renderHistory();
  updateClueControls();
}

function setTimerLabel(text) {
  const nodes = Array.from(els.timerChip.childNodes);
  const labelNode = nodes.find((node) => node.nodeType === Node.TEXT_NODE);
  if (labelNode) labelNode.textContent = text;
}

function startTimer() {
  state.startTime = performance.now();
  if (isTimedMode()) {
    state.timedActive = true;
    state.timedEndAt = state.startTime + 60000;
    state.timedRemaining = 60;
    setTimerLabel("Temps restant: ");
    els.timerChip.classList.remove("hidden");
    els.timerValue.textContent = state.timedRemaining.toFixed(1);
    updateScoreChip();
    state.timerId = setInterval(() => {
      const remaining = Math.max(0, (state.timedEndAt - performance.now()) / 1000);
      state.timedRemaining = remaining;
      els.timerValue.textContent = remaining.toFixed(1);
      if (remaining <= 0) endTimedSession();
    }, 100);
    return;
  }

  if (state.timer) {
    setTimerLabel("Temps: ");
    els.timerChip.classList.remove("hidden");
    state.timerId = setInterval(() => {
      const elapsed = (performance.now() - state.startTime) / 1000;
      els.timerValue.textContent = elapsed.toFixed(1);
    }, 100);
  } else {
    els.timerChip.classList.add("hidden");
  }
}

function stopTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
  state.timedActive = false;
}

function resetResult() {
  state.finished = false;
  els.result.textContent = "";
  els.fact.textContent = "";
  els.confetti.innerHTML = "";
  els.nextClue.classList.remove("hidden");
  els.nextClue.disabled = false;
  renderHistory();
}

function resetTimedState() {
  state.timedRemaining = 60;
  state.timedScore = 0;
  state.timedRounds = 0;
  updateScoreChip();
}

function showResult(ok, message) {
  els.result.textContent = message;
  if (ok) {
    els.result.style.color = "#2d6a4f";
    if (!isTimedMode()) launchConfetti();
    playSound("success");
  } else {
    els.result.style.color = "#b7094c";
    playSound("fail");
  }
}

function updateClueControls() {
  const noMore = state.clueIndex >= state.clues.length;
  if (state.finished) {
    els.nextClue.classList.add("hidden");
    els.nextClue.disabled = true;
    return;
  }
  if (noMore) {
    els.nextClue.disabled = true;
    els.nextClue.textContent = "Plus d'indice";
  } else {
    els.nextClue.disabled = false;
    els.nextClue.innerHTML = '<span class="btn-icon">🧩</span>Nouvel indice';
  }
}

function renderHistory() {
  els.clueHistory.innerHTML = "";
  const title = document.createElement("div");
  title.className = "history-title";
  title.textContent = "Historique des indices";
  els.clueHistory.appendChild(title);
  const shown = Math.min(state.clueIndex + 1, state.clues.length);
  for (let i = 0; i < shown; i++) {
    const row = document.createElement("div");
    row.className = "item";
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = `#${i + 1}`;
    const text = document.createElement("span");
    text.textContent = state.clues[i];
    row.appendChild(badge);
    row.appendChild(text);
    els.clueHistory.appendChild(row);
  }
  if (shown === 0) {
    const empty = document.createElement("div");
    empty.textContent = "Aucun indice pour l'instant.";
    els.clueHistory.appendChild(empty);
  }
}

function showFact(item) {
  if (isTimedMode()) return;
  const fact = pickRandom(item.facts || []);
  if (fact) {
    els.fact.textContent = "Anecdote: " + fact;
  }
}

function updateActionLabels() {
  if (isTimedMode()) {
    if (state.finished) {
      els.playAgain.innerHTML = '<span class="btn-icon">🎲</span>Rejouer';
    } else {
      els.playAgain.innerHTML = '<span class="btn-icon">⏭️</span>Passer';
    }
  } else {
    els.playAgain.innerHTML = '<span class="btn-icon">🎲</span>Nouvelle énigme';
  }
}

function endTimedSession() {
  if (!isTimedMode() || state.finished) return;
  state.finished = true;
  stopTimer();
  updateActionLabels();
  updateClueControls();
  if (els.answerInput) els.answerInput.disabled = true;
  if (els.submitAnswer) els.submitAnswer.disabled = true;
  els.nextClue.disabled = true;

  const score = state.timedScore;
  const summary = `Temps écoulé ! Score: ${score} bonne${score > 1 ? "s" : ""} réponse${score > 1 ? "s" : ""}.`;
  showResult(true, summary);

  const recordId = `timed-${state.mode}`;
  const record = getRecord(recordId);
  if (!record || score > record.score) {
    const name = (prompt("Nouveau record ! Ton nom ?") || "Anonyme").trim() || "Anonyme";
    setRecord(recordId, score, name);
    els.fact.textContent = `Nouveau record (${getLabel(state.mode)}): ${score} par ${name}.`;
  } else {
    els.fact.textContent = `Record actuel (${getLabel(state.mode)}): ${record.score} par ${record.name || "Anonyme"}.`;
  }
}

function launchConfetti() {
  const colors = ["#ff6f59", "#2ec4b6", "#7b5cff", "#f4d35e"];
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement("div");
    piece.className = "piece";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.background = pickRandom(colors);
    piece.style.animationDelay = (Math.random() * 0.4) + "s";
    els.confetti.appendChild(piece);
  }
}

let audioCtx;
function playSound(type) {
  if (!state.sound) return;
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const now = audioCtx.currentTime;
  const output = audioCtx.createGain();
  output.gain.setValueAtTime(0.0001, now);
  output.gain.exponentialRampToValueAtTime(0.12, now + 0.02);
  output.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
  output.connect(audioCtx.destination);

  const base = type === "success" ? 660 : type === "fail" ? 220 : 480;
  const osc1 = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  osc1.type = "sine";
  osc2.type = "triangle";
  osc1.frequency.setValueAtTime(base, now);
  osc2.frequency.setValueAtTime(base * 1.5, now);
  osc2.detune.setValueAtTime(6, now);

  const vibrato = audioCtx.createOscillator();
  const vibratoGain = audioCtx.createGain();
  vibrato.frequency.setValueAtTime(6, now);
  vibratoGain.gain.setValueAtTime(8, now);
  vibrato.connect(vibratoGain);
  vibratoGain.connect(osc1.frequency);

  osc1.connect(output);
  osc2.connect(output);
  osc1.start(now);
  osc2.start(now);
  vibrato.start(now);
  osc1.stop(now + 0.35);
  osc2.stop(now + 0.35);
  vibrato.stop(now + 0.35);
}

function startRound() {
  const riddle = createRiddle();
  state.current = riddle.answer;
  state.currentCategory = riddle.category;
  state.clues = riddle.clues;
  state.clueIndex = 0;

  resetResult();
  showClue();

  if (state.mode === "image") {
    els.imageMode.classList.remove("hidden");
    els.textMode.classList.add("hidden");
    els.textMode.hidden = true;
    els.textMode.setAttribute("aria-hidden", "true");
    els.textMode.style.display = "none";
    renderImageChoices();
  } else {
    els.textMode.classList.remove("hidden");
    els.imageMode.classList.add("hidden");
    els.textMode.hidden = false;
    els.textMode.removeAttribute("aria-hidden");
    els.textMode.style.display = "";
    if (els.answerInput) {
      els.answerInput.disabled = false;
      els.answerInput.value = "";
      els.answerInput.focus();
    }
    if (els.submitAnswer) els.submitAnswer.disabled = false;
  }
}

function startGame() {
  state.age = Number(els.age.value);
  state.timedMode = !!els.timedMode?.checked;
  state.timer = isTimedMode() ? false : els.timer.checked;
  state.sound = els.sound.checked;
  state.usedByKey = {};
  if (isTimedMode()) resetTimedState();
  updateActionLabels();
  startRound();
  updateChips();
  startTimer();
  els.answerInput.value = "";

  els.setup.classList.add("hidden");
  els.game.classList.remove("hidden");
  playSound("start");
}

function updateChips() {
  const catLabel = state.category === "aleatoire" ? "Aléatoire" : getLabel(state.category);
  els.categoryChip.textContent = "Type: " + catLabel;
  els.modeChip.textContent = "Mode: " + getLabel(state.mode);
  updateScoreChip();
}

function updateScoreChip() {
  if (!els.scoreChip) return;
  if (isTimedMode()) {
    els.scoreChip.textContent = "Score: " + state.timedScore;
    els.scoreChip.classList.remove("hidden");
  } else {
    els.scoreChip.classList.add("hidden");
  }
}

function renderImageChoices() {
  const activeCategory = state.category === "aleatoire" ? (state.currentCategory || detectCategory(state.current)) : state.category;
  const choices = buildChoices(state.current, activeCategory);
  els.imageGrid.innerHTML = "";
  choices.forEach((item) => {
    const card = document.createElement("button");
    card.className = "image-card";
    const img = document.createElement("img");
    img.alt = item.label;
    img.src = emojiToDataUri(item.icon);
    const span = document.createElement("span");
    span.textContent = item.label;
    card.appendChild(img);
    card.appendChild(span);
    card.addEventListener("click", () => handleAnswer(item));
    els.imageGrid.appendChild(card);
  });
}

function detectCategory(item) {
  for (const [key, list] of Object.entries(DATA)) {
    if (list.find((i) => i.id === item.id)) {
      return key === "legume" ? "aliment" : key;
    }
  }
  for (const [key, list] of Object.entries(EXTRA_DATA)) {
    if (list.find((i) => i.id === item.id)) {
      return key === "legume" ? "aliment" : key;
    }
  }
  return "animal";
}

function handleAnswer(choice) {
  if (state.finished) return;
  const ok = choice.id === state.current.id;
  endRound(ok, ok ? null : choice.label);
}

function submitText() {
  if (state.finished) return;
  const input = els.answerInput.value;
  const result = checkAnswer(input, state.current);
  endRound(result.ok, result.corrected);
}

function endRound(ok, corrected) {
  if (isTimedMode()) {
    if (ok) {
      state.timedScore += 1;
      state.timedRounds += 1;
      updateScoreChip();
      showResult(true, "Bonne réponse !");
      setTimeout(() => {
        if (state.finished || !state.timedActive) return;
        startRound();
      }, 250);
    } else {
      showResult(false, "Pas encore ! Essaie encore.");
    }
    return;
  }

  state.finished = true;
  stopTimer();
  const answer = state.current.label;

  if (ok) {
    const correctText = corrected ? `Bonne réponse! On écrit: ${answer}.` : "Bravo! Bonne réponse!";
    showResult(true, correctText);
  } else {
    showResult(false, `Perdu! La bonne réponse était: ${answer}.`);
  }
  showFact(state.current);
  updateClueControls();
}

els.nextClue.addEventListener("click", () => {
  if (state.finished) return;
  if (state.clueIndex < state.clues.length - 1) {
    state.clueIndex += 1;
  } else {
    state.clueIndex = state.clues.length;
  }
  showClue();
  playSound("click");
});

els.submitAnswer.addEventListener("click", () => submitText());

els.answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") submitText();
});

els.playAgain.addEventListener("click", () => {
  if (isTimedMode() && state.timedActive && !state.finished) {
    startRound();
    return;
  }
  startGame();
});
els.backToSetup.addEventListener("click", () => {
  stopTimer();
  els.game.classList.add("hidden");
  els.setup.classList.remove("hidden");
});

els.start.addEventListener("click", () => startGame());
els.age.addEventListener("input", () => {
  els.ageValue.textContent = els.age.value;
});

if (els.timedMode) {
  els.timedMode.addEventListener("change", updateTimedToggleUI);
}

function setup() {
  initOptions();
  updateTimedToggleUI();
}

setup();
