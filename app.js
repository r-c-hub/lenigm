const CATEGORIES = [
  { id: "animal", label: "Animal", icon: "Ã°Å¸ÂÂ¾" },
  { id: "objet", label: "Objet", icon: "Ã°Å¸Â§Â¸" },
  { id: "aliment", label: "Fruits & LÃƒÂ©gumes", icon: "Ã°Å¸Â¥â€”" },
  { id: "personne", label: "Personne", icon: "Ã°Å¸Â§â€™" },
  { id: "aleatoire", label: "AlÃƒÂ©atoire", icon: "Ã°Å¸Å½Â²" }
];

const MODES = [
  { id: "image", label: "Image", icon: "Ã°Å¸â€“Â¼Ã¯Â¸Â" },
  { id: "texte", label: "Texte", icon: "Ã¢Å’Â¨Ã¯Â¸Â" }
];

const RECORD_KEY = "lenigm_records";

const ICON_FALLBACK = {
  animal: "Ã°Å¸ÂÂ¾",
  objet: "Ã°Å¸Â§Â¸",
  aliment: "Ã°Å¸Â¥â€”",
  personne: "Ã°Å¸Â§â€™",
  aleatoire: "Ã°Å¸Å½Â²",
  image: "Ã°Å¸â€“Â¼Ã¯Â¸Â",
  texte: "Ã¢Å’Â¨Ã¯Â¸Â",
  banane: "Ã°Å¸ÂÅ’",
  fraise: "Ã°Å¸Ââ€œ",
  raisin: "Ã°Å¸Ââ€¡",
  carotte: "Ã°Å¸Â¥â€¢",
  tomate: "Ã°Å¸Ââ€¦",
  concombre: "Ã°Å¸Â¥â€™",
  yaourt: "Ã°Å¸Â¥â€º",
  balle_tennis: "Ã°Å¸Å½Â¾",
  pistolet_eau: "Ã°Å¸â€Â«",
  bonnet: "Ã°Å¸Â§Â¢",
  perceuse: "Ã°Å¸Âªâ€º",
  cle_usb: "Ã°Å¸â€Å’",
  gourde: "Ã°Å¸Â§Â´",
  telecommande: "Ã°Å¸Å½â€ºÃ¯Â¸Â",
  montgolfiere: "Ã°Å¸Å½Ë†Ã°Å¸â€Â¥",
  cahier: "Ã°Å¸â€œâ€œ",
  brosse_a_cheveux: "Ã°Å¸ÂªÂ®",
  facteur: "Ã°Å¸â€œÂ®",
  vendeur: "Ã°Å¸Â§â€˜Ã¢â‚¬ÂÃ°Å¸â€™Â¼",
  footballeur: "Ã¢Å¡Â½",
  pompier: "Ã°Å¸Å¡â€™",
  professeur: "Ã°Å¸Â§â€˜Ã¢â‚¬ÂÃ°Å¸ÂÂ«",
  cuisiniere: "Ã°Å¸â€˜Â©Ã¢â‚¬ÂÃ°Å¸ÂÂ³"
};

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
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â¶",
      clues: {
        easy: ["C'est un animal", "Il aime jouer", "Il peut aboyer"],
        medium: ["Il vit souvent avec les humains", "Il garde parfois la maison"],
        hard: ["C'est le meilleur ami de l'homme", "On le promÃƒÂ¨ne en laisse"]
      },
      facts: ["Le chien comprend souvent des mots simples.", "Il existe des milliers de races de chiens."]
    },
    {
      id: "chat",
      label: "Chat",
      aliases: ["chat", "un chat", "le chat", "des chats", "chaton"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â±",
      clues: {
        easy: ["C'est un animal", "Il aime dormir", "Il peut miauler"],
        medium: ["Il aime grimper", "Il chasse parfois les souris"],
        hard: ["Il ronronne quand il est content", "Il a des moustaches"]
      },
      facts: ["Le chat dort plusieurs heures par jour.", "Un bÃƒÂ©bÃƒÂ© chat s'appelle un chaton."]
    },
    {
      id: "lion",
      label: "Lion",
      aliases: ["lion", "un lion", "le lion", "lionne"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¦Ã‚Â",
      clues: {
        easy: ["Il vit dans la savane", "C'est un animal"],
        medium: ["Il est carnivore", "Il est plus grand qu'un chien"],
        hard: ["Il est le roi de la savane", "Simba en est un"]
      },
      facts: ["Le bÃƒÂ©bÃƒÂ© du lion s'appelle un lionceau.", "Le lion vit surtout en Afrique."]
    },
    {
      id: "elephant",
      label: "Ãƒâ€°lÃƒÂ©phant",
      aliases: ["elephant", "ÃƒÂ©lÃƒÂ©phant", "un ÃƒÂ©lÃƒÂ©phant", "des ÃƒÂ©lÃƒÂ©phants"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‹Å“",
      clues: {
        easy: ["C'est un trÃƒÂ¨s grand animal", "Il a de grandes oreilles"],
        medium: ["Il vit en troupeau", "Il aime l'eau"],
        hard: ["Il a une trompe", "Il est herbivore"]
      },
      facts: ["L'ÃƒÂ©lÃƒÂ©phant peut utiliser sa trompe pour boire.", "Il vit en Afrique et en Asie."]
    },
    {
      id: "vache",
      label: "Vache",
      aliases: ["vache", "une vache", "la vache", "des vaches"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â®",
      clues: {
        easy: ["C'est un animal de ferme", "Elle mange de l'herbe"],
        medium: ["Elle donne du lait", "Elle dit meuh"],
        hard: ["On la voit dans les prÃƒÂ©s", "Elle a des taches"]
      },
      facts: ["Le lait sert ÃƒÂ  faire du fromage.", "La vache est un animal herbivore."]
    },
    {
      id: "lapin",
      label: "Lapin",
      aliases: ["lapin", "un lapin", "le lapin", "lapine"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â°",
      clues: {
        easy: ["Il a de grandes oreilles", "Il aime les carottes"],
        medium: ["Il saute trÃƒÂ¨s bien", "Il est rapide"],
        hard: ["On le voit souvent dans les histoires", "Il a des moustaches"]
      },
      facts: ["Le lapin est herbivore.", "Il peut creuser des terriers."]
    },
    {
      id: "poisson",
      label: "Poisson",
      aliases: ["poisson", "un poisson", "le poisson", "des poissons"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ…Â¸",
      clues: {
        easy: ["Il vit dans l'eau", "Il a des nageoires"],
        medium: ["Il respire avec des branchies", "Il ne marche pas"],
        hard: ["Il peut ÃƒÂªtre dans un aquarium", "Il aime les bulles"]
      },
      facts: ["Les poissons utilisent leurs nageoires pour nager.", "Ils vivent dans l'eau douce ou salÃƒÂ©e."]
    },
    {
      id: "tortue",
      label: "Tortue",
      aliases: ["tortue", "une tortue", "la tortue", "tortue marine"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â¢",
      clues: {
        easy: ["Elle a une carapace", "Elle avance lentement"],
        medium: ["Elle peut vivre longtemps", "Elle aime le soleil"],
        hard: ["Elle peut vivre sur terre ou dans l'eau", "Elle rentre sa tÃƒÂªte"]
      },
      facts: ["La tortue peut vivre trÃƒÂ¨s longtemps.", "Sa carapace la protÃƒÂ¨ge."]
    },
    {
      id: "panda",
      label: "Panda",
      aliases: ["panda", "un panda", "le panda"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â¼",
      clues: {
        easy: ["Il est noir et blanc", "Il aime manger"],
        medium: ["Il vit en montagne", "Il adore le bambou"],
        hard: ["Il vient d'Asie", "Il est trÃƒÂ¨s mignon"]
      },
      facts: ["Le panda mange surtout du bambou.", "Il vit principalement en Chine."]
    },
    {
      id: "cheval",
      label: "Cheval",
      aliases: ["cheval", "un cheval", "le cheval", "jument"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â´",
      clues: {
        easy: ["C'est un animal", "Il peut galoper"],
        medium: ["Il porte un cavalier", "Il a une criniÃƒÂ¨re"],
        hard: ["Il vit dans une ÃƒÂ©curie", "On le selle pour le monter"]
      },
      facts: ["Le cheval peut courir trÃƒÂ¨s vite.", "Il a une criniÃƒÂ¨re sur le cou."]
    },
    {
      id: "cochon",
      label: "Cochon",
      aliases: ["cochon", "un cochon", "le cochon", "truie"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â·",
      clues: {
        easy: ["C'est un animal de ferme", "Il aime la boue"],
        medium: ["Il grogne", "Il a un petit nez rond"],
        hard: ["On le voit avec une queue en tire-bouchon", "Il est rose"]
      },
      facts: ["Le cochon est trÃƒÂ¨s intelligent.", "Il vit dans une porcherie."]
    },
    {
      id: "canard",
      label: "Canard",
      aliases: ["canard", "un canard", "le canard"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¦Ã¢â‚¬Â ",
      clues: {
        easy: ["C'est un oiseau", "Il nage sur l'eau"],
        medium: ["Il a un bec plat", "Il fait coin-coin"],
        hard: ["Il marche en se dandinant", "Il a des plumes"]
      },
      facts: ["Le canard aime les ÃƒÂ©tangs.", "Il peut voler sur de longues distances."]
    },
    {
      id: "ours",
      label: "Ours",
      aliases: ["ours", "un ours", "l'ours"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â»",
      clues: {
        easy: ["C'est un animal", "Il a de grosses pattes"],
        medium: ["Il aime le miel", "Il vit dans la forÃƒÂªt"],
        hard: ["Il peut hiberner", "Il a de grosses pattes"]
      },
      facts: ["L'ours peut dormir longtemps en hiver.", "Il a un odorat trÃƒÂ¨s dÃƒÂ©veloppÃƒÂ©."]
    },
    {
      id: "girafe",
      label: "Girafe",
      aliases: ["girafe", "une girafe", "la girafe"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¦Ã¢â‚¬â„¢",
      clues: {
        easy: ["C'est un animal", "Elle est trÃƒÂ¨s grande"],
        medium: ["Elle a un long cou", "Elle mange des feuilles"],
        hard: ["Elle vit en Afrique", "Elle a des taches"]
      },
      facts: ["La girafe est l'animal le plus grand du monde.", "Elle utilise sa langue pour attraper des feuilles."]
    },
    {
      id: "dauphin",
      label: "Dauphin",
      aliases: ["dauphin", "un dauphin", "le dauphin"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â¬",
      clues: {
        easy: ["Il vit dans l'eau", "Il est rapide"],
        medium: ["Il saute hors de l'eau", "Il aime jouer"],
        hard: ["Il est trÃƒÂ¨s intelligent", "Il vit dans l'ocÃƒÂ©an"]
      },
      facts: ["Le dauphin communique avec des sons.", "Il vit en groupe."]
    },
    {
      id: "pingouin",
      label: "Pingouin",
      aliases: ["pingouin", "un pingouin", "le pingouin"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â§",
      clues: {
        easy: ["C'est un oiseau", "Il aime le froid"],
        medium: ["Il ne vole pas", "Il nage trÃƒÂ¨s bien"],
        hard: ["Il vit prÃƒÂ¨s des pÃƒÂ´les", "Il est noir et blanc"]
      },
      facts: ["Le pingouin glisse parfois sur la glace.", "Il a un plumage qui le garde au chaud."]
    },
    {
      id: "abeille",
      label: "Abeille",
      aliases: ["abeille", "une abeille", "l'abeille"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â",
      clues: {
        easy: ["C'est un insecte", "Elle vole"],
        medium: ["Elle fait du miel", "Elle va sur les fleurs"],
        hard: ["Elle vit dans une ruche", "Elle pique pour se dÃƒÂ©fendre"]
      },
      facts: ["L'abeille aide les fleurs ÃƒÂ  grandir.", "Elle fabrique le miel dans la ruche."]
    },
    {
      id: "renard",
      label: "Renard",
      aliases: ["renard", "un renard", "le renard"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¦Ã…Â ",
      clues: {
        easy: ["C'est un animal", "Il est roux"],
        medium: ["Il vit dans la forÃƒÂªt", "Il est malin"],
        hard: ["Il a une queue touffue", "Il chasse la nuit"]
      },
      facts: ["Le renard a une excellente ouÃƒÂ¯e.", "Il vit souvent dans des terriers."]
    },
    {
      id: "singe",
      label: "Singe",
      aliases: ["singe", "un singe", "le singe"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Âµ",
      clues: {
        easy: ["C'est un animal", "Il aime grimper"],
        medium: ["Il vit dans la jungle", "Il mange des fruits"],
        hard: ["Il a une longue queue", "Il se balance dans les arbres"]
      },
      facts: ["Le singe est trÃƒÂ¨s agile.", "Il aime vivre en groupe."]
    },
    {
      id: "mouton",
      label: "Mouton",
      aliases: ["mouton", "un mouton", "le mouton", "brebis"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ¢â‚¬Ëœ",
      clues: {
        easy: ["C'est un animal", "Il est doux"],
        medium: ["Il vit ÃƒÂ  la ferme", "Il mange de l'herbe"],
        hard: ["Il a de la laine", "On le tond au printemps"]
      },
      facts: ["La laine du mouton sert ÃƒÂ  faire des vÃƒÂªtements.", "Le mouton vit souvent en troupeau."]
    },
    {
      id: "hibou",
      label: "Hibou",
      aliases: ["hibou", "un hibou", "le hibou"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¦Ã¢â‚¬Â°",
      clues: {
        easy: ["C'est un oiseau", "Il vit la nuit"],
        medium: ["Il a de grands yeux", "Il chasse en silence"],
        hard: ["Il pousse un hululement", "Il aime les forÃƒÂªts"]
      },
      facts: ["Le hibou voit trÃƒÂ¨s bien la nuit.", "Il vole sans faire de bruit."]
    },
    {
      id: "serpent",
      label: "Serpent",
      aliases: ["serpent", "un serpent", "le serpent"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â",
      clues: {
        easy: ["C'est un animal", "Il rampe"],
        medium: ["Il n'a pas de pattes", "Il se cache dans l'herbe"],
        hard: ["Il peut s'enrouler", "Il sort sa langue"]
      },
      facts: ["Le serpent se dÃƒÂ©place en glissant.", "Il peut vivre dans des milieux variÃƒÂ©s."]
    }
  ],
  objet: [
    {
      id: "pizza",
      label: "Pizza",
      aliases: ["pizza", "une pizza", "la pizza", "des pizzas"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ¢â‚¬Â¢",
      clues: {
        easy: ["C'est une chose ÃƒÂ  manger", "C'est rond"],
        medium: ["Ceci a ÃƒÂ©tÃƒÂ© inventÃƒÂ© en Italie", "Cela se cuit au four"],
        hard: ["Il y a de la tomate et de la mozzarella", "On la coupe en parts"]
      },
      facts: ["L'Italie est le pays d'origine de la pizza.", "On peut la garnir avec beaucoup d'ingrÃƒÂ©dients."]
    },
    {
      id: "ballon",
      label: "Ballon",
      aliases: ["ballon", "un ballon", "le ballon", "balle"],
      icon: "ÃƒÂ¢Ã…Â¡Ã‚Â½",
      clues: {
        easy: ["C'est un objet rond", "On joue avec"],
        medium: ["On peut le lancer", "Il rebondit"],
        hard: ["On l'utilise au football", "Il roule sur le sol"]
      },
      facts: ["Un ballon peut ÃƒÂªtre gonflÃƒÂ© avec de l'air.", "Il sert ÃƒÂ  faire du sport."]
    },
    {
      id: "livre",
      label: "Livre",
      aliases: ["livre", "un livre", "le livre", "des livres"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬Å“Ã‹Å“",
      clues: {
        easy: ["C'est un objet", "On l'ouvre"],
        medium: ["Il contient des pages", "On peut le lire"],
        hard: ["Il raconte une histoire", "On le trouve ÃƒÂ  la bibliothÃƒÂ¨que"]
      },
      facts: ["La bibliothÃƒÂ¨que est l'endroit oÃƒÂ¹ l'on emprunte des livres.", "Un livre a souvent une couverture."]
    },
    {
      id: "tasse",
      label: "Tasse",
      aliases: ["tasse", "une tasse", "la tasse"],
      icon: "ÃƒÂ¢Ã‹Å“Ã¢â‚¬Â¢",
      clues: {
        easy: ["C'est un objet", "On boit dedans"],
        medium: ["Elle a une anse", "On la met sur la table"],
        hard: ["Elle contient souvent du chocolat chaud", "Elle peut ÃƒÂªtre en porcelaine"]
      },
      facts: ["Une tasse peut ÃƒÂªtre petite ou grande.", "Elle est pratique pour les boissons chaudes."]
    },
    {
      id: "velo",
      label: "VÃƒÂ©lo",
      aliases: ["velo", "vÃƒÂ©lo", "un vÃƒÂ©lo", "bicyclette"],
      icon: "ÃƒÂ°Ã…Â¸Ã…Â¡Ã‚Â²",
      clues: {
        easy: ["C'est un objet", "Il roule"],
        medium: ["Il a deux roues", "On pÃƒÂ©dale"],
        hard: ["On le gare avec un antivol", "Il a un guidon"]
      },
      facts: ["Le vÃƒÂ©lo est bon pour la santÃƒÂ©.", "Il faut un casque pour rouler en sÃƒÂ©curitÃƒÂ©."]
    },
    {
      id: "brosse_a_dents",
      label: "Brosse ÃƒÂ  dents",
      aliases: ["brosse ÃƒÂ  dents", "brosse a dents", "brosse", "une brosse ÃƒÂ  dents"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂªÃ‚Â¥",
      clues: {
        easy: ["C'est un objet", "On l'utilise tous les jours"],
        medium: ["Elle a des poils", "Elle est dans la salle de bain"],
        hard: ["Elle sert ÃƒÂ  nettoyer les dents", "On met du dentifrice dessus"]
      },
      facts: ["On se brosse les dents au moins deux fois par jour.", "Le dentifrice protÃƒÂ¨ge les dents."]
    },
    {
      id: "montre",
      label: "Montre",
      aliases: ["montre", "une montre", "la montre"],
      icon: "ÃƒÂ¢Ã…â€™Ã…Â¡",
      clues: {
        easy: ["C'est un objet", "Il donne l'heure"],
        medium: ["On la porte au poignet", "Elle a parfois des aiguilles"],
        hard: ["Elle peut ÃƒÂªtre digitale", "Elle fait tic-tac"]
      },
      facts: ["Une montre aide ÃƒÂ  savoir l'heure.", "On peut aussi lire l'heure sur un tÃƒÂ©lÃƒÂ©phone."]
    },
    {
      id: "parapluie",
      label: "Parapluie",
      aliases: ["parapluie", "un parapluie", "le parapluie"],
      icon: "ÃƒÂ¢Ã‹Å“Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¸Ã‚Â",
      clues: {
        easy: ["C'est un objet", "Il sert quand il pleut"],
        medium: ["Il s'ouvre", "Il protÃƒÂ¨ge la tÃƒÂªte"],
        hard: ["Il a une toile et des baleines", "On le tient avec une poignÃƒÂ©e"]
      },
      facts: ["Le parapluie protÃƒÂ¨ge de la pluie.", "Il existe aussi des parapluies pour le soleil."]
    },
    {
      id: "ciseaux",
      label: "Ciseaux",
      aliases: ["ciseaux", "des ciseaux", "une paire de ciseaux"],
      icon: "ÃƒÂ¢Ã…â€œÃ¢â‚¬Å¡ÃƒÂ¯Ã‚Â¸Ã‚Â",
      clues: {
        easy: ["C'est un objet", "On le tient ÃƒÂ  la main"],
        medium: ["Il coupe du papier", "Il a deux lames"],
        hard: ["Il a des anneaux pour les doigts", "On l'utilise en classe"]
      },
      facts: ["Les ciseaux servent ÃƒÂ  couper proprement.", "Il faut faire attention en les utilisant."]
    },
    {
      id: "pinceau",
      label: "Pinceau",
      aliases: ["pinceau", "un pinceau", "le pinceau"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬â€œÃ…â€™ÃƒÂ¯Ã‚Â¸Ã‚Â",
      clues: {
        easy: ["C'est un objet", "On l'utilise pour dessiner"],
        medium: ["Il a des poils", "On le trempe dans la peinture"],
        hard: ["Il sert ÃƒÂ  peindre", "On s'en sert en arts plastiques"]
      },
      facts: ["Un pinceau a des poils souples.", "Il permet de faire de jolis dessins."]
    },
    {
      id: "tabouret",
      label: "Tabouret",
      aliases: ["tabouret", "un tabouret", "le tabouret"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂªÃ¢â‚¬Ëœ",
      clues: {
        easy: ["C'est un objet", "On s'assoit dessus"],
        medium: ["Il a quatre pieds", "Il n'a pas de dossier"],
        hard: ["Il est souvent plus petit qu'une chaise", "On le dÃƒÂ©place facilement"]
      },
      facts: ["Le tabouret est pratique pour les petits espaces.", "On le trouve dans la cuisine ou l'atelier."]
    },
    {
      id: "lampe",
      label: "Lampe",
      aliases: ["lampe", "une lampe", "la lampe"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬â„¢Ã‚Â¡",
      clues: {
        easy: ["C'est un objet", "Elle ÃƒÂ©claire"],
        medium: ["On l'allume", "Elle est dans la maison"],
        hard: ["Elle peut ÃƒÂªtre sur une table", "Elle a une ampoule"]
      },
      facts: ["Une lampe sert ÃƒÂ  ÃƒÂ©clairer une piÃƒÂ¨ce.", "On peut l'ÃƒÂ©teindre pour ÃƒÂ©conomiser l'ÃƒÂ©nergie."]
    },
    {
      id: "cle",
      label: "ClÃƒÂ©",
      aliases: ["cle", "clÃƒÂ©", "une clÃƒÂ©", "la clÃƒÂ©"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂÃ¢â‚¬Ëœ",
      clues: {
        easy: ["C'est un objet", "On la tient dans la main"],
        medium: ["Elle ouvre une porte", "On la garde dans la poche"],
        hard: ["Elle tourne dans une serrure", "On l'attache parfois ÃƒÂ  un porte-clÃƒÂ©s"]
      },
      facts: ["Une clÃƒÂ© permet d'ouvrir ou fermer une porte.", "Il existe des clÃƒÂ©s de formes diffÃƒÂ©rentes."]
    },
    {
      id: "sac_a_dos",
      label: "Sac ÃƒÂ  dos",
      aliases: ["sac ÃƒÂ  dos", "sac a dos", "un sac ÃƒÂ  dos"],
      icon: "ÃƒÂ°Ã…Â¸Ã…Â½Ã¢â‚¬â„¢",
      clues: {
        easy: ["C'est un objet", "On le porte"],
        medium: ["Il a des bretelles", "On y met ses affaires"],
        hard: ["On l'utilise pour aller ÃƒÂ  l'ÃƒÂ©cole", "Il se porte sur le dos"]
      },
      facts: ["Le sac ÃƒÂ  dos aide ÃƒÂ  transporter des affaires.", "Il faut bien le rÃƒÂ©gler sur les ÃƒÂ©paules."]
    },
    {
      id: "telephone",
      label: "TÃƒÂ©lÃƒÂ©phone",
      aliases: ["telephone", "tÃƒÂ©lÃƒÂ©phone", "un tÃƒÂ©lÃƒÂ©phone"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬Å“Ã‚Â±",
      clues: {
        easy: ["C'est un objet", "On parle avec"],
        medium: ["Il sonne", "Il tient dans la main"],
        hard: ["On peut appeler quelqu'un", "Il a un ÃƒÂ©cran"]
      },
      facts: ["Le tÃƒÂ©lÃƒÂ©phone sert ÃƒÂ  communiquer ÃƒÂ  distance.", "On peut aussi envoyer des messages."]
    },
    {
      id: "montgolfiere",
      label: "MontgolfiÃƒÂ¨re",
      aliases: ["montgolfiere", "montgolfiÃƒÂ¨re", "une montgolfiÃƒÂ¨re"],
      icon: "Ã°Å¸Å½Ë†Ã°Å¸â€Â¥",
      clues: {
        easy: ["C'est un objet volant", "Elle est grande"],
        medium: ["Elle est remplie d'air chaud", "Elle monte dans le ciel"],
        hard: ["Elle transporte des personnes", "On la voit dans les fÃƒÂªtes"]
      },
      facts: ["La montgolfiÃƒÂ¨re vole grÃƒÂ¢ce ÃƒÂ  l'air chaud.", "Elle se dÃƒÂ©place avec le vent."]
    },
    {
      id: "crayon",
      label: "Crayon",
      aliases: ["crayon", "un crayon", "le crayon"],
      icon: "ÃƒÂ¢Ã…â€œÃ‚ÂÃƒÂ¯Ã‚Â¸Ã‚Â",
      clues: {
        easy: ["C'est un objet", "On peut dessiner avec"],
        medium: ["Il est en bois", "Il a une mine"],
        hard: ["On le taille", "On l'utilise ÃƒÂ  l'ÃƒÂ©cole"]
      },
      facts: ["Un crayon sert ÃƒÂ  ÃƒÂ©crire ou dessiner.", "On peut l'effacer avec une gomme."]
    },
    {
      id: "ordinateur",
      label: "Ordinateur",
      aliases: ["ordinateur", "un ordinateur", "pc"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬â„¢Ã‚Â»",
      clues: {
        easy: ["C'est un objet", "Il a un ÃƒÂ©cran"],
        medium: ["On peut taper dessus", "Il peut afficher des images"],
        hard: ["On l'utilise pour travailler", "Il peut aller sur Internet"]
      },
      facts: ["Un ordinateur sert ÃƒÂ  faire beaucoup de choses.", "Il peut jouer de la musique."]
    },
    {
      id: "chaussure",
      label: "Chaussure",
      aliases: ["chaussure", "une chaussure", "les chaussures"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ…Â¸",
      clues: {
        easy: ["C'est un objet", "On le porte"],
        medium: ["Il protÃƒÂ¨ge les pieds", "Il va par paire"],
        hard: ["On le met pour marcher", "Il peut avoir des lacets"]
      },
      facts: ["Les chaussures protÃƒÂ¨gent les pieds.", "Elles existent en plusieurs tailles."]
    },
    {
      id: "casque",
      label: "Casque",
      aliases: ["casque", "un casque", "le casque"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂªÃ¢â‚¬â€œ",
      clues: {
        easy: ["C'est un objet", "On le met sur la tÃƒÂªte"],
        medium: ["Il protÃƒÂ¨ge", "Il peut ÃƒÂªtre en plastique"],
        hard: ["On le porte pour faire du vÃƒÂ©lo", "Il aide ÃƒÂ  la sÃƒÂ©curitÃƒÂ©"]
      },
      facts: ["Le casque protÃƒÂ¨ge la tÃƒÂªte.", "Il est important pour la sÃƒÂ©curitÃƒÂ©."]
    }
  ],
  aliment: [
    {
      id: "pomme",
      label: "Pomme",
      aliases: ["pomme", "une pomme", "la pomme", "pommes"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ…Â½",
      clues: {
        easy: ["C'est un fruit", "Il est croquant"],
        medium: ["Il peut ÃƒÂªtre rouge ou vert", "On le met dans un panier"],
        hard: ["Il pousse sur un pommier", "Il peut faire des tartes"]
      },
      facts: ["La pomme pousse sur un pommier.", "On peut la manger crue ou cuite."]
    },
    {
      id: "banane",
      label: "Banane",
      aliases: ["banane", "une banane", "la banane"],
      icon: "Ã°Å¸ÂÅ’",
      clues: {
        easy: ["C'est un fruit", "Il est jaune"],
        medium: ["Il est long", "Il a une peau"],
        hard: ["On l'ÃƒÂ©pluche", "Il pousse dans les pays chauds"]
      },
      facts: ["La banane donne beaucoup d'ÃƒÂ©nergie.", "Elle pousse en grappes."]
    },
    {
      id: "fraise",
      label: "Fraise",
      aliases: ["fraise", "une fraise", "la fraise"],
      icon: "Ã°Å¸Ââ€œ",
      clues: {
        easy: ["C'est un fruit", "Elle est rouge"],
        medium: ["Elle a des petites graines", "Elle est sucrÃƒÂ©e"],
        hard: ["On la met dans les desserts", "Elle pousse au printemps"]
      },
      facts: ["La fraise est un fruit trÃƒÂ¨s parfumÃƒÂ©.", "Elle pousse prÃƒÂ¨s du sol."]
    },
    {
      id: "orange",
      label: "Orange",
      aliases: ["orange", "une orange", "l'orange", "oranges"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ…Â ",
      clues: {
        easy: ["C'est un fruit", "Il est rond"],
        medium: ["Il est orange", "Il a une peau ÃƒÂ©paisse"],
        hard: ["On le presse pour faire du jus", "Il pousse sur un oranger"]
      },
      facts: ["L'orange est riche en vitamine C.", "On la mange en quartiers."]
    },
    {
      id: "raisin",
      label: "Raisin",
      aliases: ["raisin", "du raisin", "les raisins"],
      icon: "Ã°Å¸Ââ€¡",
      clues: {
        easy: ["C'est un fruit", "Il pousse en grappes"],
        medium: ["Il peut ÃƒÂªtre vert ou violet", "Il est petit"],
        hard: ["On en fait du jus", "Il pousse sur une vigne"]
      },
      facts: ["Le raisin pousse sur la vigne.", "Il est souvent utilisÃƒÂ© pour faire du jus."]
    },
    {
      id: "pasteque",
      label: "PastÃƒÂ¨que",
      aliases: ["pasteque", "pastÃƒÂ¨que", "une pastÃƒÂ¨que"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ¢â‚¬Â°",
      clues: {
        easy: ["C'est un fruit", "Il est trÃƒÂ¨s gros"],
        medium: ["Il est vert dehors", "Il est rouge dedans"],
        hard: ["Il a beaucoup de pÃƒÂ©pins", "On le mange en ÃƒÂ©tÃƒÂ©"]
      },
      facts: ["La pastÃƒÂ¨que contient beaucoup d'eau.", "Elle est parfaite quand il fait chaud."]
    },
    {
      id: "citron",
      label: "Citron",
      aliases: ["citron", "un citron", "le citron"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ¢â‚¬Â¹",
      clues: {
        easy: ["C'est un fruit", "Il est jaune"],
        medium: ["Il est acide", "Il a une peau ÃƒÂ©paisse"],
        hard: ["On l'utilise pour faire du jus", "Il pousse sur un citronnier"]
      },
      facts: ["Le citron est trÃƒÂ¨s acide.", "Il sert ÃƒÂ  parfumer de nombreux plats."]
    },
    {
      id: "cerise",
      label: "Cerise",
      aliases: ["cerise", "une cerise", "la cerise"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ¢â‚¬â„¢",
      clues: {
        easy: ["C'est un fruit", "Elle est petite"],
        medium: ["Elle est rouge", "Elle pousse par deux"],
        hard: ["On la met sur les gÃƒÂ¢teaux", "Elle a un noyau"]
      },
      facts: ["La cerise a un noyau dur.", "On la mange souvent au dÃƒÂ©but de l'ÃƒÂ©tÃƒÂ©."]
    },
    {
      id: "ananas",
      label: "Ananas",
      aliases: ["ananas", "un ananas", "l'ananas"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â",
      clues: {
        easy: ["C'est un fruit", "Il est gros"],
        medium: ["Il a une peau piquante", "Il est jaune dedans"],
        hard: ["Il a une couronne de feuilles", "Il vient des pays chauds"]
      },
      facts: ["L'ananas pousse dans les rÃƒÂ©gions tropicales.", "Il est trÃƒÂ¨s sucrÃƒÂ©."]
    },
    {
      id: "peche",
      label: "PÃƒÂªche",
      aliases: ["peche", "pÃƒÂªche", "une pÃƒÂªche", "la pÃƒÂªche"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ¢â‚¬Ëœ",
      clues: {
        easy: ["C'est un fruit", "Il est doux"],
        medium: ["Il a une peau velue", "Il est rond"],
        hard: ["Il a un noyau", "On le mange en ÃƒÂ©tÃƒÂ©"]
      },
      facts: ["La pÃƒÂªche est trÃƒÂ¨s juteuse.", "Elle pousse sur un pÃƒÂªcher."]
    },
    {
      id: "abricot",
      label: "Abricot",
      aliases: ["abricot", "un abricot", "l'abricot"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ¢â‚¬Ëœ",
      clues: {
        easy: ["C'est un fruit", "Il est petit"],
        medium: ["Il est orange", "Il est doux"],
        hard: ["Il a un noyau", "On en fait des confitures"]
      },
      facts: ["L'abricot est un fruit d'ÃƒÂ©tÃƒÂ©.", "Il est souvent utilisÃƒÂ© en compote."]
    }
  ],
  legume: [
    {
      id: "carotte",
      label: "Carotte",
      aliases: ["carotte", "une carotte", "la carotte"],
      icon: "Ã°Å¸Â¥â€¢",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Il est orange"],
        medium: ["Il pousse dans la terre", "Il est croquant"],
        hard: ["Les lapins l'adorent", "On le met dans les salades"]
      },
      facts: ["La carotte pousse sous la terre.", "Elle est riche en vitamine A."]
    },
    {
      id: "tomate",
      label: "Tomate",
      aliases: ["tomate", "une tomate", "la tomate"],
      icon: "Ã°Å¸Ââ€¦",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Elle est rouge"],
        medium: ["Elle est ronde", "Elle est juteuse"],
        hard: ["On la met dans les salades", "Elle pousse en ÃƒÂ©tÃƒÂ©"]
      },
      facts: ["La tomate est trÃƒÂ¨s utilisÃƒÂ©e en cuisine.", "Elle pousse sur un plant."]
    },
    {
      id: "concombre",
      label: "Concombre",
      aliases: ["concombre", "un concombre", "le concombre"],
      icon: "Ã°Å¸Â¥â€™",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Il est vert"],
        medium: ["Il est long", "Il est frais"],
        hard: ["On le met dans les salades", "Il pousse dans le jardin"]
      },
      facts: ["Le concombre est composÃƒÂ© d'eau.", "Il est trÃƒÂ¨s rafraÃƒÂ®chissant."]
    },
    {
      id: "brocoli",
      label: "Brocoli",
      aliases: ["brocoli", "un brocoli", "le brocoli"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¥Ã‚Â¦",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Il est vert"],
        medium: ["Il ressemble ÃƒÂ  un arbre", "On le mange cuit"],
        hard: ["Il est plein de petites fleurettes", "On le met dans les gratins"]
      },
      facts: ["Le brocoli est riche en vitamines.", "Il fait partie de la famille des choux."]
    },
    {
      id: "salade",
      label: "Salade",
      aliases: ["salade", "une salade", "la salade", "laitue"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¥Ã‚Â¬",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Elle est verte"],
        medium: ["Elle a beaucoup de feuilles", "Elle est croquante"],
        hard: ["On la met dans un saladier", "On la mange souvent crue"]
      },
      facts: ["La salade est trÃƒÂ¨s lÃƒÂ©gÃƒÂ¨re.", "Elle pousse en rosettes."]
    },
    {
      id: "poivron",
      label: "Poivron",
      aliases: ["poivron", "un poivron", "le poivron"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â«Ã¢â‚¬Ëœ",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Il est colorÃƒÂ©"],
        medium: ["Il peut ÃƒÂªtre rouge ou vert", "Il est creux"],
        hard: ["Il contient des graines", "On le coupe pour le cuisiner"]
      },
      facts: ["Le poivron a un goÃƒÂ»t doux.", "Il est croquant cru."]
    },
    {
      id: "aubergine",
      label: "Aubergine",
      aliases: ["aubergine", "une aubergine", "l'aubergine"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ¢â‚¬Â ",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Il est violet"],
        medium: ["Il est long", "Il est brillant"],
        hard: ["On le cuisine au four", "Il a une peau lisse"]
      },
      facts: ["L'aubergine se mange cuite.", "Elle est trÃƒÂ¨s utilisÃƒÂ©e en ÃƒÂ©tÃƒÂ©."]
    },
    {
      id: "mais",
      label: "MaÃƒÂ¯s",
      aliases: ["mais", "maÃƒÂ¯s", "un maÃƒÂ¯s", "ÃƒÂ©pi de maÃƒÂ¯s"],
      icon: "ÃƒÂ°Ã…Â¸Ã…â€™Ã‚Â½",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Il est jaune"],
        medium: ["Il pousse en ÃƒÂ©pis", "Il a des grains"],
        hard: ["On le mange en pop-corn", "On le fait cuire ÃƒÂ  l'eau"]
      },
      facts: ["Le maÃƒÂ¯s pousse en ÃƒÂ©pis.", "On peut le manger en grains ou en pop-corn."]
    },
    {
      id: "petits_pois",
      label: "Petits pois",
      aliases: ["petits pois", "petit pois", "des petits pois"],
      icon: "ÃƒÂ°Ã…Â¸Ã…Â¸Ã‚Â¢",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Ils sont petits"],
        medium: ["Ils sont verts", "On les mange en grains"],
        hard: ["Ils sortent d'une gousse", "On les met dans les purÃƒÂ©es"]
      },
      facts: ["Les petits pois poussent dans des gousses.", "Ils sont souvent servis avec des carottes."]
    },
    {
      id: "haricot_vert",
      label: "Haricot vert",
      aliases: ["haricot vert", "haricots verts", "un haricot vert"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â«Ã‹Å“",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Il est vert"],
        medium: ["Il est long", "On le mange cuit"],
        hard: ["Il pousse dans une gousse", "On le sert souvent en accompagnement"]
      },
      facts: ["Les haricots verts sont riches en fibres.", "Ils poussent au potager."]
    },
    {
      id: "oignon",
      label: "Oignon",
      aliases: ["oignon", "un oignon", "l'oignon"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã¢â‚¬Â¦",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Il a des couches"],
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
      aliases: ["maman", "ma maman", "maman chÃƒÂ©rie"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ‚Â©",
      clues: {
        easy: ["C'est une personne", "Elle s'occupe de moi"],
        medium: ["Elle me fait des cÃƒÂ¢lins", "Elle veille sur moi"],
        hard: ["Elle est dans ma famille", "Je l'appelle tous les jours"]
      },
      facts: ["La famille prend soin les uns des autres.", "Dire merci fait toujours plaisir."]
    },
    {
      id: "papa",
      label: "Mon papa",
      aliases: ["papa", "mon papa", "papa chÃƒÂ©ri"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ‚Â¨",
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
      aliases: ["soeur", "sÃƒâ€¦Ã¢â‚¬Å“ur", "ma soeur", "ma sÃƒâ€¦Ã¢â‚¬Å“ur"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ‚Â§",
      clues: {
        easy: ["C'est une personne", "Elle est dans ma famille"],
        medium: ["On joue souvent ensemble", "Elle peut ÃƒÂªtre plus grande ou plus petite"],
        hard: ["Elle est ma soeur", "On partage des secrets"]
      },
      facts: ["Avoir une soeur, c'est partager plein de moments.", "On peut se raconter des histoires."]
    },
    {
      id: "frere",
      label: "Mon frÃƒÂ¨re",
      aliases: ["frere", "frÃƒÂ¨re", "mon frere", "mon frÃƒÂ¨re"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ‚Â¦",
      clues: {
        easy: ["C'est une personne", "Il est dans ma famille"],
        medium: ["On joue souvent ensemble", "Il peut ÃƒÂªtre plus grand ou plus petit"],
        hard: ["Il est mon frÃƒÂ¨re", "On partage des jeux"]
      },
      facts: ["Un frÃƒÂ¨re peut ÃƒÂªtre un super partenaire de jeu.", "On apprend ÃƒÂ  partager ensemble."]
    },
    {
      id: "grand_mere",
      label: "Ma grand-mÃƒÂ¨re",
      aliases: ["grand-mere", "grand-mÃƒÂ¨re", "mamie", "ma grand-mÃƒÂ¨re"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ‚Âµ",
      clues: {
        easy: ["C'est une personne", "Elle est dans ma famille"],
        medium: ["Elle raconte des histoires", "Elle est trÃƒÂ¨s gentille"],
        hard: ["C'est la maman de papa ou maman", "On l'appelle mamie"]
      },
      facts: ["Les grands-parents aiment transmettre des souvenirs.", "On peut apprendre beaucoup avec eux."]
    },
    {
      id: "grand_pere",
      label: "Mon grand-pÃƒÂ¨re",
      aliases: ["grand-pere", "grand-pÃƒÂ¨re", "papy", "mon grand-pÃƒÂ¨re"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ‚Â´",
      clues: {
        easy: ["C'est une personne", "Il est dans ma famille"],
        medium: ["Il raconte des histoires", "Il est trÃƒÂ¨s gentil"],
        hard: ["C'est le papa de papa ou maman", "On l'appelle papy"]
      },
      facts: ["Les grands-parents aiment jouer avec leurs petits-enfants.", "Ils ont beaucoup d'histoires ÃƒÂ  raconter."]
    },
    {
      id: "cousin",
      label: "Mon cousin",
      aliases: ["cousin", "mon cousin"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã¢â‚¬â„¢",
      clues: {
        easy: ["C'est une personne", "Il est dans ma famille"],
        medium: ["On joue pendant les fÃƒÂªtes", "Il est de ma gÃƒÂ©nÃƒÂ©ration"],
        hard: ["C'est le fils d'un oncle ou d'une tante", "On le voit souvent en famille"]
      },
      facts: ["Les cousins sont souvent des amis de famille.", "On partage de bons moments ensemble."]
    },
    {
      id: "cousine",
      label: "Ma cousine",
      aliases: ["cousine", "ma cousine"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ‚Â§",
      clues: {
        easy: ["C'est une personne", "Elle est dans ma famille"],
        medium: ["On joue pendant les fÃƒÂªtes", "Elle est de ma gÃƒÂ©nÃƒÂ©ration"],
        hard: ["C'est la fille d'un oncle ou d'une tante", "On la voit souvent en famille"]
      },
      facts: ["Les cousins et cousines font partie de la famille.", "On peut jouer ensemble pendant les vacances."]
    },
    {
      id: "marcus",
      label: "Marcus (Pat' Patrouille)",
      aliases: ["marcus", "Marcus", "pat patrouille", "chiot pompier"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã¢â‚¬ËœÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â‚¬â„¢",
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
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂªÃ¢â‚¬Â ",
      clues: {
        easy: ["C'est un personnage", "Il est en bois"],
        medium: ["Son nez grandit", "Il veut devenir un vrai garÃƒÂ§on"],
        hard: ["Il a un pÃƒÂ¨re qui s'appelle Gepetto", "Il dit parfois des mensonges"]
      },
      facts: ["Pinocchio est un conte trÃƒÂ¨s connu.", "Il apprend ÃƒÂ  dire la vÃƒÂ©ritÃƒÂ©."]
    },
    {
      id: "cendrillon",
      label: "Cendrillon",
      aliases: ["cendrillon", "Cendrillon"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ‚Â¸",
      clues: {
        easy: ["C'est une princesse", "Elle porte une robe"],
        medium: ["Elle a une marraine fÃƒÂ©e", "Elle va au bal"],
        hard: ["Elle perd une chaussure", "Elle rentre avant minuit"]
      },
      facts: ["Cendrillon est un conte traditionnel.", "Elle a une chaussure trÃƒÂ¨s cÃƒÂ©lÃƒÂ¨bre."]
    },
    {
      id: "peter_pan",
      label: "Peter Pan",
      aliases: ["peter pan", "Peter Pan"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã…Â¡",
      clues: {
        easy: ["C'est un personnage", "Il vole"],
        medium: ["Il ne veut pas grandir", "Il vit dans un monde imaginaire"],
        hard: ["Il a une amie fÃƒÂ©e", "Il porte un chapeau vert"]
      },
      facts: ["Peter Pan vit au Pays imaginaire.", "Il adore l'aventure."]
    },
    {
      id: "aladin",
      label: "Aladin",
      aliases: ["aladin", "Aladin"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã…Â¾",
      clues: {
        easy: ["C'est un personnage", "Il a un ami magique"],
        medium: ["Il a une lampe", "Il vit dans une ville chaude"],
        hard: ["Il rencontre un gÃƒÂ©nie", "Il fait des vÃƒâ€¦Ã¢â‚¬Å“ux"]
      },
      facts: ["Aladin trouve une lampe magique.", "Le gÃƒÂ©nie l'aide dans ses aventures."]
    },
    {
      id: "petit_prince",
      label: "Le Petit Prince",
      aliases: ["petit prince", "le petit prince"],
      icon: "ÃƒÂ¢Ã‚Â­Ã‚Â",
      clues: {
        easy: ["C'est un personnage", "Il vient d'une ÃƒÂ©toile"],
        medium: ["Il aime une rose", "Il voyage dans l'espace"],
        hard: ["Il rencontre un renard", "Il parle d'amitiÃƒÂ©"]
      },
      facts: ["Le Petit Prince est un livre cÃƒÂ©lÃƒÂ¨bre.", "Il parle d'amitiÃƒÂ© et d'imagination."]
    },
    {
      id: "princesse",
      label: "Princesse",
      aliases: ["princesse", "une princesse", "la princesse"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ¢â‚¬Ëœ",
      clues: {
        easy: ["C'est un personnage", "Elle porte une couronne"],
        medium: ["Elle vit dans un chÃƒÂ¢teau", "Elle a une robe"],
        hard: ["Elle est gentille", "On la voit dans les contes"]
      },
      facts: ["Les princesses apparaissent souvent dans les contes.", "Elles vivent dans des chÃƒÂ¢teaux."]
    },
    {
      id: "super_heros",
      label: "Super-hÃƒÂ©ros",
      aliases: ["super hero", "super-hÃƒÂ©ros", "super heros"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¦Ã‚Â¸",
      clues: {
        easy: ["C'est un personnage", "Il aide les gens"],
        medium: ["Il a des pouvoirs", "Il porte un costume"],
        hard: ["Il protÃƒÂ¨ge la ville", "Il est trÃƒÂ¨s courageux"]
      },
      facts: ["Les super-hÃƒÂ©ros protÃƒÂ¨gent les personnes.", "Ils aiment la justice."]
    },
    {
      id: "pirate",
      label: "Pirate",
      aliases: ["pirate", "un pirate", "le pirate"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â´ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã‹Å“Ã‚Â ÃƒÂ¯Ã‚Â¸Ã‚Â",
      clues: {
        easy: ["C'est un personnage", "Il voyage en bateau"],
        medium: ["Il cherche un trÃƒÂ©sor", "Il porte parfois un chapeau"],
        hard: ["Il a un drapeau", "Il adore l'aventure"]
      },
      facts: ["Les pirates cherchent souvent des trÃƒÂ©sors.", "Ils naviguent sur la mer."]
    }
  ]
};

const EXTRA_DATA = {
  animal: [
    {
      id: "ecureuil",
      label: "Ãƒâ€°cureuil",
      aliases: ["ecureuil", "ÃƒÂ©cureuil", "un ÃƒÂ©cureuil"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â¿ÃƒÂ¯Ã‚Â¸Ã‚Â",
      clues: {
        easy: ["C'est un animal", "Il a une queue en panache"],
        medium: ["Il grimpe aux arbres", "Il mange des noisettes"],
        hard: ["Il a une queue en panache", "Il cache sa nourriture"]
      },
      facts: ["L'ÃƒÂ©cureuil aime les forÃƒÂªts.", "Il saute de branche en branche."]
    },
    {
      id: "zebre",
      label: "ZÃƒÂ¨bre",
      aliases: ["zebre", "zÃƒÂ¨bre", "un zÃƒÂ¨bre"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¦Ã¢â‚¬Å“",
      clues: {
        easy: ["C'est un animal", "Il est noir et blanc"],
        medium: ["Il vit en troupeau", "Il aime courir"],
        hard: ["Il vit dans la savane", "Il ressemble au cheval"]
      },
      facts: ["Le zÃƒÂ¨bre a des rayures uniques.", "Il vit en Afrique."]
    },
    {
      id: "koala",
      label: "Koala",
      aliases: ["koala", "un koala", "le koala"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â¨",
      clues: {
        easy: ["C'est un animal", "Il vient d'Australie"],
        medium: ["Il vit dans les arbres", "Il aime les feuilles"],
        hard: ["Il vient d'Australie", "Il dort beaucoup"]
      },
      facts: ["Le koala vit surtout en Australie.", "Il aime les eucalyptus."]
    },
    {
      id: "tigre",
      label: "Tigre",
      aliases: ["tigre", "un tigre", "le tigre"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â¯",
      clues: {
        easy: ["C'est un animal", "Il a des rayures"],
        medium: ["Il est carnivore", "Il est trÃƒÂ¨s fort"],
        hard: ["Il vit en Asie", "Il est un grand fÃƒÂ©lin"]
      },
      facts: ["Le tigre est un grand fÃƒÂ©lin.", "Il aime se cacher dans la jungle."]
    },
    {
      id: "herisson",
      label: "HÃƒÂ©risson",
      aliases: ["herisson", "hÃƒÂ©risson", "un hÃƒÂ©risson"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¦Ã¢â‚¬Â",
      clues: {
        easy: ["C'est un animal", "Il a des piquants"],
        medium: ["Il a des piquants", "Il se roule en boule"],
        hard: ["Il vit dans les jardins", "Il sort surtout la nuit"]
      },
      facts: ["Le hÃƒÂ©risson se protÃƒÂ¨ge avec ses piquants.", "Il aime les jardins."]
    },
    {
      id: "loutre",
      label: "Loutre",
      aliases: ["loutre", "une loutre", "la loutre"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¦Ã‚Â¦",
      clues: {
        easy: ["C'est un animal", "Il aime l'eau"],
        medium: ["Il nage trÃƒÂ¨s bien", "Il est joueur"],
        hard: ["Il vit prÃƒÂ¨s des riviÃƒÂ¨res", "Il a une fourrure douce"]
      },
      facts: ["La loutre est trÃƒÂ¨s agile dans l'eau.", "Elle aime jouer."]
    },
    {
      id: "paon",
      label: "Paon",
      aliases: ["paon", "un paon", "le paon"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¦Ã…Â¡",
      clues: {
        easy: ["C'est un oiseau", "Il est colorÃƒÂ©"],
        medium: ["Il a une grande queue", "Il ouvre ses plumes"],
        hard: ["Il montre sa roue", "Il est trÃƒÂ¨s beau"]
      },
      facts: ["Le paon dÃƒÂ©ploie sa queue pour impressionner.", "Il a des plumes colorÃƒÂ©es."]
    },
    {
      id: "kangourou",
      label: "Kangourou",
      aliases: ["kangourou", "un kangourou", "le kangourou"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¦Ã‹Å“",
      clues: {
        easy: ["C'est un animal", "Il saute"],
        medium: ["Il a une poche", "Il vit loin"],
        hard: ["Il vient d'Australie", "Il est trÃƒÂ¨s rapide"]
      },
      facts: ["Le kangourou porte son bÃƒÂ©bÃƒÂ© dans une poche.", "Il saute trÃƒÂ¨s loin."]
    },
    {
      id: "chevre",
      label: "ChÃƒÂ¨vre",
      aliases: ["chevre", "chÃƒÂ¨vre", "une chÃƒÂ¨vre"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â",
      clues: {
        easy: ["C'est un animal", "Il vit ÃƒÂ  la ferme"],
        medium: ["Il a des cornes", "Il mange de l'herbe"],
        hard: ["Il donne du lait", "Il aime grimper"]
      },
      facts: ["La chÃƒÂ¨vre peut grimper partout.", "Elle donne du lait."]
    },
    {
      id: "poule",
      label: "Poule",
      aliases: ["poule", "une poule", "la poule"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ¢â‚¬Â",
      clues: {
        easy: ["C'est un animal", "Elle vit ÃƒÂ  la ferme"],
        medium: ["Elle pond des oeufs", "Elle picore"],
        hard: ["Elle a des plumes", "Elle fait cot-cot"]
      },
      facts: ["La poule pond des oeufs.", "Elle vit souvent dans un poulailler."]
    },
    {
      id: "chevreuil",
      label: "Chevreuil",
      aliases: ["chevreuil", "un chevreuil"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¦Ã…â€™",
      clues: {
        easy: ["C'est un animal", "Il vit en forÃƒÂªt"],
        medium: ["Il est timide", "Il court vite"],
        hard: ["Il a des bois", "Il est marron"]
      },
      facts: ["Le chevreuil vit dans les forÃƒÂªts.", "Il est trÃƒÂ¨s discret."]
    },
    {
      id: "hippopotame",
      label: "Hippopotame",
      aliases: ["hippopotame", "un hippopotame", "hippo"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¦Ã¢â‚¬Âº",
      clues: {
        easy: ["C'est un animal", "Il est gros"],
        medium: ["Il aime l'eau", "Il est lourd"],
        hard: ["Il vit en Afrique", "Il a une grande bouche"]
      },
      facts: ["L'hippopotame passe beaucoup de temps dans l'eau.", "Il est trÃƒÂ¨s fort."]
    },
    {
      id: "loup",
      label: "Loup",
      aliases: ["loup", "un loup", "le loup"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Âº",
      clues: {
        easy: ["C'est un animal", "Il fait hou-hou"],
        medium: ["Il vit en forÃƒÂªt", "Il a des crocs"],
        hard: ["Il vit parfois en meute", "Il ressemble au chien"]
      },
      facts: ["Le loup vit souvent en groupe.", "Il a un trÃƒÂ¨s bon odorat."]
    },
    {
      id: "souris",
      label: "Souris",
      aliases: ["souris", "une souris", "la souris"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â­",
      clues: {
        easy: ["C'est un animal", "Elle est petite"],
        medium: ["Elle aime le fromage", "Elle a une longue queue"],
        hard: ["Elle se cache dans des petits trous", "Elle court trÃƒÂ¨s vite"]
      },
      facts: ["La souris est trÃƒÂ¨s agile.", "Elle a de petites oreilles rondes."]
    },
    {
      id: "chauve_souris",
      label: "Chauve-souris",
      aliases: ["chauve-souris", "chauve souris", "une chauve-souris"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¦Ã¢â‚¬Â¡",
      clues: {
        easy: ["C'est un animal", "Elle vole la nuit"],
        medium: ["Elle vit dans les grottes", "Elle dort la tÃƒÂªte en bas"],
        hard: ["Elle utilise l'ÃƒÂ©cho pour se repÃƒÂ©rer", "Elle a des ailes de peau"]
      },
      facts: ["La chauve-souris est un mammifÃƒÂ¨re.", "Elle chasse souvent la nuit."]
    },
    {
      id: "dromadaire",
      label: "Dromadaire",
      aliases: ["dromadaire", "un dromadaire"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Âª",
      clues: {
        easy: ["C'est un animal", "Il a une bosse"],
        medium: ["Il vit dans le dÃƒÂ©sert", "Il peut marcher longtemps"],
        hard: ["Il garde de l'eau dans son corps", "On le voit dans les dunes"]
      },
      facts: ["Le dromadaire vit dans les zones dÃƒÂ©sertiques.", "Sa bosse l'aide ÃƒÂ  survivre."]
    },
    {
      id: "flamant_rose",
      label: "Flamant rose",
      aliases: ["flamant rose", "un flamant rose", "flamant"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¦Ã‚Â©",
      clues: {
        easy: ["C'est un oiseau", "Il est rose"],
        medium: ["Il a de longues pattes", "Il vit prÃƒÂ¨s de l'eau"],
        hard: ["Il se tient parfois sur une patte", "Il a un long cou"]
      },
      facts: ["Le flamant rose aime les lacs.", "Sa couleur vient de sa nourriture."]
    },
    {
      id: "grenouille",
      label: "Grenouille",
      aliases: ["grenouille", "une grenouille", "la grenouille"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â¸",
      clues: {
        easy: ["C'est un animal", "Elle saute"],
        medium: ["Elle vit prÃƒÂ¨s de l'eau", "Elle fait croa-croa"],
        hard: ["Elle a une peau lisse", "Elle mange des insectes"]
      },
      facts: ["La grenouille aime les ÃƒÂ©tangs.", "Elle peut sauter trÃƒÂ¨s loin."]
    },
    {
      id: "paresseux",
      label: "Paresseux",
      aliases: ["paresseux", "un paresseux"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¦Ã‚Â¥",
      clues: {
        easy: ["C'est un animal", "Il bouge lentement"],
        medium: ["Il vit dans les arbres", "Il aime dormir"],
        hard: ["Il vient d'AmÃƒÂ©rique du Sud", "Il a de longues griffes"]
      },
      facts: ["Le paresseux se dÃƒÂ©place trÃƒÂ¨s lentement.", "Il passe beaucoup de temps dans les arbres."]
    },
    {
      id: "raton_laveur",
      label: "Raton laveur",
      aliases: ["raton laveur", "un raton laveur", "raton"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¦Ã‚Â",
      clues: {
        easy: ["C'est un animal", "Il a un masque"],
        medium: ["Il vit en forÃƒÂªt", "Il est nocturne"],
        hard: ["Il a une queue rayÃƒÂ©e", "Il est trÃƒÂ¨s curieux"]
      },
      facts: ["Le raton laveur est actif la nuit.", "Il fouille avec ses petites pattes."]
    },
    {
      id: "coccinelle",
      label: "Coccinelle",
      aliases: ["coccinelle", "une coccinelle"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ…Â¾",
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
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â¥",
      clues: {
        easy: ["C'est un animal", "Il est jaune"],
        medium: ["Il sort d'un oeuf", "Il est jaune"],
        hard: ["Il devient une poule", "Il fait piou-piou"]
      },
      facts: ["Le poussin est le bÃƒÂ©bÃƒÂ© de la poule.", "Il aime rester au chaud."]
    }
  ],
  objet: [
    {
      id: "trompette",
      label: "Trompette",
      aliases: ["trompette", "une trompette"],
      icon: "ÃƒÂ°Ã…Â¸Ã…Â½Ã‚Âº",
      clues: {
        easy: ["C'est un objet", "Il fait du bruit"],
        medium: ["On souffle dedans", "Il fait de la musique"],
        hard: ["Il brille", "C'est un instrument"]
      },
      facts: ["La trompette est un instrument de musique.", "Elle est souvent en mÃƒÂ©tal."]
    },
    {
      id: "micro",
      label: "Micro",
      aliases: ["micro", "un micro", "microphone"],
      icon: "ÃƒÂ°Ã…Â¸Ã…Â½Ã‚Â¤",
      clues: {
        easy: ["C'est un objet", "Il est petit"],
        medium: ["On parle dedans", "Il amplifie la voix"],
        hard: ["Il sert ÃƒÂ  chanter", "On l'utilise sur scÃƒÂ¨ne"]
      },
      facts: ["Le micro sert ÃƒÂ  enregistrer la voix.", "Il aide ÃƒÂ  se faire entendre."]
    },
    {
      id: "horloge",
      label: "Horloge",
      aliases: ["horloge", "une horloge", "l'horloge"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬Â¢Ã‚Â°ÃƒÂ¯Ã‚Â¸Ã‚Â",
      clues: {
        easy: ["C'est un objet", "Elle donne l'heure"],
        medium: ["Elle a des aiguilles", "Elle peut ÃƒÂªtre accrochÃƒÂ©e"],
        hard: ["Elle fait tic-tac", "On la voit au mur"]
      },
      facts: ["Une horloge sert ÃƒÂ  lire l'heure.", "Elle peut ÃƒÂªtre grande ou petite."]
    },
    {
      id: "gomme",
      label: "Gomme",
      aliases: ["gomme", "une gomme", "la gomme"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã‚Â¼",
      clues: {
        easy: ["C'est un objet", "On l'utilise ÃƒÂ  l'ÃƒÂ©cole"],
        medium: ["Elle efface", "Elle est petite"],
        hard: ["On efface le crayon", "Elle peut ÃƒÂªtre blanche"]
      },
      facts: ["La gomme efface les erreurs.", "On l'utilise avec un crayon."]
    },
    {
      id: "bouteille",
      label: "Bouteille",
      aliases: ["bouteille", "une bouteille", "la bouteille"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã‚Â´",
      clues: {
        easy: ["C'est un objet", "On met un liquide dedans"],
        medium: ["Elle peut ÃƒÂªtre en plastique", "On la tient ÃƒÂ  la main"],
        hard: ["Elle a un bouchon", "On la ferme"]
      },
      facts: ["Une bouteille peut contenir de l'eau.", "Elle se ferme avec un bouchon."]
    },
    {
      id: "chapeau",
      label: "Chapeau",
      aliases: ["chapeau", "un chapeau", "le chapeau"],
      icon: "ÃƒÂ°Ã…Â¸Ã…Â½Ã‚Â©",
      clues: {
        easy: ["C'est un objet", "On le met sur la tÃƒÂªte"],
        medium: ["Il protÃƒÂ¨ge du soleil", "Il peut ÃƒÂªtre ÃƒÂ©lÃƒÂ©gant"],
        hard: ["Il a une forme ronde", "On le porte pour se dÃƒÂ©guiser"]
      },
      facts: ["Le chapeau se porte sur la tÃƒÂªte.", "Il existe plein de styles de chapeaux."]
    },
    {
      id: "cadenas",
      label: "Cadenas",
      aliases: ["cadenas", "un cadenas", "le cadenas"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂÃ¢â‚¬â„¢",
      clues: {
        easy: ["C'est un objet", "Il sert ÃƒÂ  fermer"],
        medium: ["Il s'ouvre avec une clÃƒÂ©", "Il est en mÃƒÂ©tal"],
        hard: ["On le met sur un portail", "Il protÃƒÂ¨ge les affaires"]
      },
      facts: ["Le cadenas sert ÃƒÂ  verrouiller.", "Il existe des cadenas ÃƒÂ  code."]
    },
    {
      id: "regle",
      label: "RÃƒÂ¨gle",
      aliases: ["regle", "rÃƒÂ¨gle", "une rÃƒÂ¨gle"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬Å“Ã‚Â",
      clues: {
        easy: ["C'est un objet", "On l'utilise ÃƒÂ  l'ÃƒÂ©cole"],
        medium: ["Elle est longue", "Elle sert ÃƒÂ  tracer"],
        hard: ["Elle mesure", "Elle est droite"]
      },
      facts: ["La rÃƒÂ¨gle sert ÃƒÂ  mesurer.", "Elle aide ÃƒÂ  tracer des lignes."]
    },
    {
      id: "gourde",
      label: "Gourde",
      aliases: ["gourde", "une gourde", "la gourde"],
      icon: "Ã°Å¸Â§Â´",
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
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã‚Â­",
      clues: {
        easy: ["C'est un objet", "Elle montre une direction"],
        medium: ["Elle a une aiguille", "Elle aide ÃƒÂ  se repÃƒÂ©rer"],
        hard: ["Elle indique le nord", "On l'utilise en aventure"]
      },
      facts: ["La boussole montre le nord.", "Elle aide ÃƒÂ  s'orienter."]
    },
    {
      id: "panier",
      label: "Panier",
      aliases: ["panier", "un panier", "le panier"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã‚Âº",
      clues: {
        easy: ["C'est un objet", "On met des choses dedans"],
        medium: ["Il a une anse", "On le porte"],
        hard: ["On l'utilise au marchÃƒÂ©", "Il est en osier"]
      },
      facts: ["Le panier sert ÃƒÂ  transporter.", "Il peut ÃƒÂªtre lÃƒÂ©ger."]
    },
    {
      id: "telecommande",
      label: "TÃƒÂ©lÃƒÂ©commande",
      aliases: ["telecommande", "tÃƒÂ©lÃƒÂ©commande", "une tÃƒÂ©lÃƒÂ©commande"],
      icon: "Ã°Å¸Å½â€ºÃ¯Â¸Â",
      clues: {
        easy: ["C'est un objet", "On appuie dessus"],
        medium: ["Elle a des boutons", "Elle contrÃƒÂ´le un ÃƒÂ©cran"],
        hard: ["Elle change de chaÃƒÂ®ne", "Elle sert ÃƒÂ  la tÃƒÂ©lÃƒÂ©"]
      },
      facts: ["La tÃƒÂ©lÃƒÂ©commande contrÃƒÂ´le la tÃƒÂ©lÃƒÂ©vision.", "Elle fonctionne avec des piles."]
    },
    {
      id: "lunettes",
      label: "Lunettes",
      aliases: ["lunettes", "des lunettes", "une paire de lunettes"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ¢â‚¬Å“",
      clues: {
        easy: ["C'est un objet", "On le met sur le nez"],
        medium: ["Il aide ÃƒÂ  mieux voir", "Il a deux verres"],
        hard: ["Il peut protÃƒÂ©ger du soleil", "Il a des branches"]
      },
      facts: ["Les lunettes aident ÃƒÂ  bien voir.", "Il existe des lunettes de soleil."]
    },
    {
      id: "guitare",
      label: "Guitare",
      aliases: ["guitare", "une guitare"],
      icon: "ÃƒÂ°Ã…Â¸Ã…Â½Ã‚Â¸",
      clues: {
        easy: ["C'est un objet", "Elle fait de la musique"],
        medium: ["Elle a des cordes", "On la gratte"],
        hard: ["Elle a une caisse", "On la joue avec les doigts"]
      },
      facts: ["La guitare a plusieurs cordes.", "Elle est trÃƒÂ¨s utilisÃƒÂ©e en musique."]
    },
    {
      id: "marteau",
      label: "Marteau",
      aliases: ["marteau", "un marteau"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂÃ‚Â¨",
      clues: {
        easy: ["C'est un objet", "On le tient ÃƒÂ  la main"],
        medium: ["Il sert ÃƒÂ  taper", "Il est en mÃƒÂ©tal"],
        hard: ["Il enfonce des clous", "Il a un manche"]
      },
      facts: ["Le marteau sert ÃƒÂ  bricoler.", "Il aide ÃƒÂ  planter des clous."]
    },
    {
      id: "puzzle",
      label: "Puzzle",
      aliases: ["puzzle", "un puzzle"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã‚Â©",
      clues: {
        easy: ["C'est un objet", "On joue avec"],
        medium: ["Il a des piÃƒÂ¨ces", "On les assemble"],
        hard: ["Il forme une image", "Il demande de la patience"]
      },
      facts: ["Un puzzle a beaucoup de piÃƒÂ¨ces.", "On les assemble pour faire une image."]
    },
    {
      id: "appareil_photo",
      label: "Appareil photo",
      aliases: ["appareil photo", "un appareil photo", "appareil"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬Å“Ã‚Â·",
      clues: {
        easy: ["C'est un objet", "Il fait des images"],
        medium: ["Il a un bouton", "Il peut faire un flash"],
        hard: ["Il prend des photos", "Il a un objectif"]
      },
      facts: ["Un appareil photo sert ÃƒÂ  prendre des images.", "Il peut ÃƒÂªtre numÃƒÂ©rique."]
    },
    {
      id: "valise",
      label: "Valise",
      aliases: ["valise", "une valise"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã‚Â³",
      clues: {
        easy: ["C'est un objet", "On y met des affaires"],
        medium: ["On l'emporte en voyage", "Elle a une poignÃƒÂ©e"],
        hard: ["Elle peut avoir des roulettes", "On la ferme avec une fermeture"]
      },
      facts: ["La valise sert ÃƒÂ  voyager.", "Elle contient des vÃƒÂªtements."]
    },
    {
      id: "cle_usb",
      label: "ClÃƒÂ© USB",
      aliases: ["cle usb", "clÃƒÂ© usb", "une clÃƒÂ© usb"],
      icon: "Ã°Å¸â€Å’",
      clues: {
        easy: ["C'est un objet", "Il est petit"],
        medium: ["On le branche", "Il garde des fichiers"],
        hard: ["Il va dans un ordinateur", "Il sert ÃƒÂ  transporter des donnÃƒÂ©es"]
      },
      facts: ["Une clÃƒÂ© USB stocke des fichiers.", "Elle se branche sur un ordinateur."]
    },
    {
      id: "balle_tennis",
      label: "Balle de tennis",
      aliases: ["balle de tennis", "une balle de tennis", "balle"],
      icon: "Ã°Å¸Å½Â¾",
      clues: {
        easy: ["C'est un objet", "On joue avec"],
        medium: ["Elle est petite", "Elle est jaune"],
        hard: ["On l'utilise au tennis", "Elle rebondit"]
      },
      facts: ["La balle de tennis rebondit bien.", "Elle est souvent jaune."]
    },
    {
      id: "pistolet_eau",
      label: "Pistolet ÃƒÂ  eau",
      aliases: ["pistolet a eau", "pistolet ÃƒÂ  eau", "un pistolet ÃƒÂ  eau"],
      icon: "Ã°Å¸â€Â«",
      clues: {
        easy: ["C'est un objet", "On joue avec"],
        medium: ["Il envoie de l'eau", "Il est en plastique"],
        hard: ["On l'utilise l'ÃƒÂ©tÃƒÂ©", "Il sert ÃƒÂ  arroser en jouant"]
      },
      facts: ["Le pistolet ÃƒÂ  eau sert ÃƒÂ  jouer dehors.", "Il est utilisÃƒÂ© en ÃƒÂ©tÃƒÂ©."]
    },
    {
      id: "bonnet",
      label: "Bonnet",
      aliases: ["bonnet", "un bonnet"],
      icon: "Ã°Å¸Â§Â¢",
      clues: {
        easy: ["C'est un objet", "On le met sur la tÃƒÂ©te"],
        medium: ["Il tient chaud", "On le porte en hiver"],
        hard: ["Il est en laine", "Il protÃƒÂ©ge du froid"]
      },
      facts: ["Le bonnet protÃƒÂ©ge du froid.", "Il est souvent en laine."]
    },
    {
      id: "perceuse",
      label: "Perceuse",
      aliases: ["perceuse", "une perceuse"],
      icon: "Ã°Å¸Âªâ€º",
      clues: {
        easy: ["C'est un objet", "On l'utilise pour bricoler"],
        medium: ["Elle tourne", "Elle fait du bruit"],
        hard: ["Elle fait des trous", "On l'utilise sur le bois"]
      },
      facts: ["La perceuse sert ÃƒÂ  faire des trous.", "Elle est utile pour le bricolage."]
    },
    {
      id: "cahier",
      label: "Cahier",
      aliases: ["cahier", "un cahier"],
      icon: "Ã°Å¸â€œâ€œ",
      clues: {
        easy: ["C'est un objet", "On ÃƒÂ©crit dedans"],
        medium: ["Il a des pages", "On l'utilise ÃƒÂ© l'ÃƒÂ©cole"],
        hard: ["Il a une couverture", "On y note des devoirs"]
      },
      facts: ["Le cahier sert ÃƒÂ© ÃƒÂ©crire.", "On l'utilise souvent ÃƒÂ© l'ÃƒÂ©cole."]
    },
    {
      id: "brosse_a_cheveux",
      label: "Brosse ÃƒÂ© cheveux",
      aliases: ["brosse ÃƒÂ© cheveux", "brosse a cheveux", "une brosse ÃƒÂ© cheveux"],
      icon: "Ã°Å¸ÂªÂ®",
      clues: {
        easy: ["C'est un objet", "On l'utilise tous les jours"],
        medium: ["Elle est dans la salle de bain", "Elle dÃƒÂ©mÃƒÂ©le"],
        hard: ["Elle a des picots", "Elle sert pour les cheveux"]
      },
      facts: ["La brosse ÃƒÂ© cheveux aide ÃƒÂ© dÃƒÂ©mÃƒÂªler.", "Elle est utile aprÃƒÂ©s la douche."]
    },
  ],
  aliment: [
    {
      id: "framboise",
      label: "Framboise",
      aliases: ["framboise", "une framboise", "la framboise"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â«Ã‚Â",
      clues: {
        easy: ["C'est un fruit", "Elle est petite"],
        medium: ["Elle est rouge", "Elle est douce"],
        hard: ["On la met dans les desserts", "Elle pousse en ÃƒÂ©tÃƒÂ©"]
      },
      facts: ["La framboise pousse sur un framboisier.", "Elle est trÃƒÂ¨s parfumÃƒÂ©e."]
    },
    {
      id: "melon",
      label: "Melon",
      aliases: ["melon", "un melon", "le melon"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‹â€ ",
      clues: {
        easy: ["C'est un fruit", "Il est gros"],
        medium: ["Il est rond", "Il est sucrÃƒÂ©"],
        hard: ["On le mange en ÃƒÂ©tÃƒÂ©", "Il a des pÃƒÂ©pins"]
      },
      facts: ["Le melon est rafraÃƒÂ®chissant.", "On le mange souvent frais."]
    },
    {
      id: "epinard",
      label: "Ãƒâ€°pinard",
      aliases: ["epinard", "ÃƒÂ©pinard", "les ÃƒÂ©pinards"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¥Ã‚Â¬",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Il est vert"],
        medium: ["Il a des feuilles", "On le mange cuit"],
        hard: ["Il est bon pour la santÃƒÂ©", "On en fait des purÃƒÂ©es"]
      },
      facts: ["L'ÃƒÂ©pinard est riche en vitamines.", "Il se cuisine facilement."]
    },
    {
      id: "champignon",
      label: "Champignon",
      aliases: ["champignon", "un champignon", "les champignons"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ¢â‚¬Å¾",
      clues: {
        easy: ["C'est un aliment", "Il est petit"],
        medium: ["Il pousse dans la forÃƒÂªt", "Il a un chapeau"],
        hard: ["On le met dans les plats", "Il ne faut pas en manger n'importe lequel"]
      },
      facts: ["Certains champignons sont comestibles.", "Ils poussent souvent aprÃƒÂ¨s la pluie."]
    },
    {
      id: "poireau",
      label: "Poireau",
      aliases: ["poireau", "un poireau", "le poireau"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¥Ã‚Â¬",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Il est vert"],
        medium: ["Il est long", "On le coupe en rondelles"],
        hard: ["On le met dans les soupes", "Il a un goÃƒÂ»t doux"]
      },
      facts: ["Le poireau est un lÃƒÂ©gume d'hiver.", "On le met souvent dans les soupes."]
    },
    {
      id: "radis",
      label: "Radis",
      aliases: ["radis", "un radis", "le radis"],
      icon: "ÃƒÂ°Ã…Â¸Ã…â€™Ã‚Â¶ÃƒÂ¯Ã‚Â¸Ã‚Â",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Il est petit"],
        medium: ["Il est rouge", "Il est croquant"],
        hard: ["On le mange cru", "Il pousse dans la terre"]
      },
      facts: ["Le radis se mange souvent cru.", "Il est croquant et frais."]
    },
    {
      id: "poire",
      label: "Poire",
      aliases: ["poire", "une poire", "la poire"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â",
      clues: {
        easy: ["C'est un fruit", "Il est doux"],
        medium: ["Il est vert", "Il a une forme de goutte"],
        hard: ["Il pousse sur un poirier", "On le mange en dessert"]
      },
      facts: ["La poire est souvent trÃƒÂ¨s juteuse.", "On la mange fraÃƒÂ®che."]
    },
    {
      id: "clementine",
      label: "ClÃƒÂ©mentine",
      aliases: ["clementine", "clÃƒÂ©mentine", "une clÃƒÂ©mentine"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ…Â ",
      clues: {
        easy: ["C'est un fruit", "Il est orange"],
        medium: ["Il est petit", "On l'ÃƒÂ©pluche"],
        hard: ["Il se sÃƒÂ©pare en quartiers", "On le mange en hiver"]
      },
      facts: ["La clÃƒÂ©mentine est douce et facile ÃƒÂ  ÃƒÂ©plucher.", "Elle est riche en vitamine C."]
    },
    {
      id: "courge",
      label: "Courge",
      aliases: ["courge", "une courge", "la courge"],
      icon: "ÃƒÂ°Ã…Â¸Ã…Â½Ã†â€™",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Elle est grosse"],
        medium: ["Elle est orange", "On la cuisine"],
        hard: ["On en fait des soupes", "Elle a une peau dure"]
      },
      facts: ["La courge se cuisine en soupe.", "Elle est typique de l'automne."]
    },
    {
      id: "myrtille",
      label: "Myrtille",
      aliases: ["myrtille", "une myrtille", "la myrtille"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â«Ã‚Â",
      clues: {
        easy: ["C'est un fruit", "Elle est petite"],
        medium: ["Elle est violette", "Elle est sucrÃƒÂ©e"],
        hard: ["On la met dans les gÃƒÂ¢teaux", "Elle pousse en ÃƒÂ©tÃƒÂ©"]
      },
      facts: ["La myrtille est une petite baie.", "Elle est souvent utilisÃƒÂ©e en dessert."]
    },
    {
      id: "aneth",
      label: "Aneth",
      aliases: ["aneth", "de l'aneth"],
      icon: "ÃƒÂ°Ã…Â¸Ã…â€™Ã‚Â¿",
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
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â«Ã¢â‚¬Ëœ",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Il est colorÃƒÂ©"],
        medium: ["Il est jaune", "Il est croquant"],
        hard: ["Il a des graines", "On le coupe pour cuisiner"]
      },
      facts: ["Le poivron jaune est doux.", "Il se mange cru ou cuit."]
    },
    {
      id: "poire_asiatique",
      label: "Poire asiatique",
      aliases: ["poire asiatique", "poire nashi", "nashi"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â",
      clues: {
        easy: ["C'est un fruit", "Il est rond"],
        medium: ["Il est croquant", "Il est juteux"],
        hard: ["Il vient d'Asie", "On le mange frais"]
      },
      facts: ["La poire asiatique est trÃƒÂ¨s croquante.", "Elle est souvent appelÃƒÂ©e nashi."]
    },
    {
      id: "patisson",
      label: "PÃƒÂ¢tisson",
      aliases: ["patisson", "pÃƒÂ¢tisson", "un pÃƒÂ¢tisson"],
      icon: "ÃƒÂ°Ã…Â¸Ã…Â½Ã†â€™",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Il est rond"],
        medium: ["Il est blanc ou vert", "On le cuisine"],
        hard: ["Il ressemble ÃƒÂ  une courge", "On le met au four"]
      },
      facts: ["Le pÃƒÂ¢tisson est une courge.", "Il se cuisine facilement."]
    },
    {
      id: "kiwi",
      label: "Kiwi",
      aliases: ["kiwi", "un kiwi", "le kiwi"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¥Ã‚Â",
      clues: {
        easy: ["C'est un fruit", "Il est petit"],
        medium: ["Il est vert dedans", "Il a des graines"],
        hard: ["Il a une peau brune", "On l'ÃƒÂ©pluche"]
      },
      facts: ["Le kiwi est riche en vitamine C.", "Il a un goÃƒÂ»t acidulÃƒÂ©."]
    },
    {
      id: "mangue",
      label: "Mangue",
      aliases: ["mangue", "une mangue", "la mangue"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¥Ã‚Â­",
      clues: {
        easy: ["C'est un fruit", "Il est sucrÃƒÂ©"],
        medium: ["Il est jaune dedans", "Il vient des pays chauds"],
        hard: ["Il a un gros noyau", "On le mange bien mÃƒÂ»r"]
      },
      facts: ["La mangue est un fruit tropical.", "Elle est trÃƒÂ¨s parfumÃƒÂ©e."]
    },
    {
      id: "courgette",
      label: "Courgette",
      aliases: ["courgette", "une courgette"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¥Ã¢â‚¬â„¢",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Elle est verte"],
        medium: ["Elle est longue", "On la cuisine"],
        hard: ["On la met dans des plats", "Elle peut ÃƒÂªtre coupÃƒÂ©e en rondelles"]
      },
      facts: ["La courgette se cuisine facilement.", "Elle est souvent verte."]
    },
    {
      id: "poivron_rouge",
      label: "Poivron rouge",
      aliases: ["poivron rouge", "un poivron rouge"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â«Ã¢â‚¬Ëœ",
      clues: {
        easy: ["C'est un lÃƒÂ©gume", "Il est colorÃƒÂ©"],
        medium: ["Il est rouge", "Il est croquant"],
        hard: ["Il a des graines", "On le coupe pour cuisiner"]
      },
      facts: ["Le poivron rouge est sucrÃƒÂ©.", "Il se mange cru ou cuit."]
    },
    {
      id: "pomme_de_terre",
      label: "Pomme de terre",
      aliases: ["pomme de terre", "patate", "une pomme de terre"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¥Ã¢â‚¬Â",
      clues: {
        easy: ["C'est un aliment", "Il pousse dans la terre"],
        medium: ["On le cuisine", "Il n'est pas sucrÃƒÂ©"],
        hard: ["On en fait des frites", "Il a une peau"]
      },
      facts: ["La pomme de terre est trÃƒÂ¨s utilisÃƒÂ©e en cuisine.", "Elle pousse sous terre."]
    },
    {
      id: "fromage",
      label: "Fromage",
      aliases: ["fromage", "un fromage"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã¢â€šÂ¬",
      clues: {
        easy: ["C'est un aliment", "On le mange"],
        medium: ["Il vient du lait", "Il a une odeur"],
        hard: ["Il existe plein de variÃƒÂ©tÃƒÂ©s", "On le mange souvent avec du pain"]
      },
      facts: ["Le fromage est fabriquÃƒÂ© ÃƒÂ  partir de lait.", "Il existe beaucoup de types de fromage."]
    },
    {
      id: "pain",
      label: "Pain",
      aliases: ["pain", "un pain", "baguette"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â¥Ã¢â‚¬â€œ",
      clues: {
        easy: ["C'est un aliment", "On en mange souvent"],
        medium: ["Il est fait avec de la farine", "Il est cuit au four"],
        hard: ["Il peut ÃƒÂªtre en baguette", "Il a une croÃƒÂ»te"]
      },
      facts: ["Le pain est trÃƒÂ¨s courant.", "On le fait avec de la farine et de l'eau."]
    },
    {
      id: "glace",
      label: "Glace",
      aliases: ["glace", "une glace", "la glace"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â¦",
      clues: {
        easy: ["C'est un aliment", "C'est froid"],
        medium: ["Elle est sucrÃƒÂ©e", "On la mange en ÃƒÂ©tÃƒÂ©"],
        hard: ["Elle fond vite", "Elle peut ÃƒÂªtre dans un cornet"]
      },
      facts: ["La glace est une gourmandise.", "Elle se mange froide."]
    },
    {
      id: "yaourt",
      label: "Yaourt",
      aliases: ["yaourt", "un yaourt"],
      icon: "Ã°Å¸Â¥â€º",
      clues: {
        easy: ["C'est un aliment", "On le mange froid"],
        medium: ["Il vient du lait", "Il est crÃƒÂ©meux"],
        hard: ["On le met dans un pot", "Il peut ÃƒÂ©tre sucrÃƒÂ©"]
      },
      facts: ["Le yaourt est fait avec du lait.", "Il peut ÃƒÂ©tre nature ou sucrÃƒÂ©."]
    },
  ],
  personne: [
    {
      id: "mage",
      label: "Magicien",
      aliases: ["magicien", "un magicien"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã¢â€žÂ¢",
      clues: {
        easy: ["C'est un personnage", "Il fait des tours"],
        medium: ["Il a une baguette", "Il porte une cape"],
        hard: ["Il connaÃƒÂ®t des sorts", "Il surprend les gens"]
      },
      facts: ["Les magiciens aiment la magie.", "Ils font des spectacles."]
    },
    {
      id: "astronaute",
      label: "Astronaute",
      aliases: ["astronaute", "un astronaute"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ‚Â¨ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â€šÂ¬",
      clues: {
        easy: ["C'est une personne", "Elle voyage dans l'espace"],
        medium: ["Elle porte une combinaison", "Elle va dans une fusÃƒÂ©e"],
        hard: ["Elle flotte sans gravitÃƒÂ©", "Elle visite des ÃƒÂ©toiles"]
      },
      facts: ["Les astronautes s'entraÃƒÂ®nent longtemps.", "Ils vont dans l'espace."]
    },
    {
      id: "princesse_sirene",
      label: "Princesse sirÃƒÂ¨ne",
      aliases: ["sirene", "sirÃƒÂ¨ne", "princesse sirÃƒÂ¨ne"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã…â€œÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â€žÂ¢Ã¢â€šÂ¬ÃƒÂ¯Ã‚Â¸Ã‚Â",
      clues: {
        easy: ["C'est un personnage", "Elle vit dans l'eau"],
        medium: ["Elle a une queue", "Elle nage trÃƒÂ¨s bien"],
        hard: ["Elle vit sous la mer", "Elle aime la musique"]
      },
      facts: ["Les sirÃƒÂ¨nes vivent dans les histoires.", "Elles nagent trÃƒÂ¨s vite."]
    },
    {
      id: "chevalier",
      label: "Chevalier",
      aliases: ["chevalier", "un chevalier"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂºÃ‚Â¡ÃƒÂ¯Ã‚Â¸Ã‚Â",
      clues: {
        easy: ["C'est un personnage", "Il aide les autres"],
        medium: ["Il porte une armure", "Il protÃƒÂ¨ge un chÃƒÂ¢teau"],
        hard: ["Il a un bouclier", "Il est courageux"]
      },
      facts: ["Les chevaliers protÃƒÂ¨gent les gens.", "Ils vivent dans les chÃƒÂ¢teaux."]
    },
    {
      id: "exploratrice",
      label: "Exploratrice",
      aliases: ["exploratrice", "une exploratrice"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã‚Â­",
      clues: {
        easy: ["C'est une personne", "Elle aime voyager"],
        medium: ["Elle dÃƒÂ©couvre des lieux", "Elle porte un sac"],
        hard: ["Elle utilise une carte", "Elle vit des aventures"]
      },
      facts: ["Les explorateurs dÃƒÂ©couvrent le monde.", "Ils aiment l'aventure."]
    },
    {
      id: "chef",
      label: "Cuisinier",
      aliases: ["cuisinier", "chef", "un cuisinier"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ‚Â¨ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â³",
      clues: {
        easy: ["C'est une personne", "Il cuisine"],
        medium: ["Il prÃƒÂ©pare des plats", "Il porte souvent un chapeau"],
        hard: ["Il travaille dans une cuisine", "Il aime les recettes"]
      },
      facts: ["Le cuisinier prÃƒÂ©pare des repas.", "Il connaÃƒÂ®t beaucoup de recettes."]
    },
    {
      id: "musicien",
      label: "Musicien",
      aliases: ["musicien", "un musicien"],
      icon: "ÃƒÂ°Ã…Â¸Ã…Â½Ã‚Â¸",
      clues: {
        easy: ["C'est une personne", "Il fait de la musique"],
        medium: ["Il joue d'un instrument", "Il aime les notes"],
        hard: ["Il rÃƒÂ©pÃƒÂ¨te des morceaux", "Il peut faire un concert"]
      },
      facts: ["Le musicien joue de la musique.", "Il peut jouer en groupe."]
    },
    {
      id: "danseuse",
      label: "Danseuse",
      aliases: ["danseuse", "une danseuse"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬â„¢Ã†â€™",
      clues: {
        easy: ["C'est une personne", "Elle danse"],
        medium: ["Elle bouge au rythme", "Elle aime la musique"],
        hard: ["Elle apprend des chorÃƒÂ©graphies", "Elle peut monter sur scÃƒÂ¨ne"]
      },
      facts: ["La danseuse bouge avec la musique.", "Elle s'entraÃƒÂ®ne souvent."]
    },
    {
      id: "jardinier",
      label: "Jardinier",
      aliases: ["jardinier", "un jardinier"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ‚Â¨ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ°Ã…Â¸Ã…â€™Ã‚Â¾",
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
      aliases: ["docteur", "un docteur", "mÃƒÂ©decin"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã¢â‚¬ËœÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã…Â¡Ã¢â‚¬Â¢ÃƒÂ¯Ã‚Â¸Ã‚Â",
      clues: {
        easy: ["C'est une personne", "Il aide les autres"],
        medium: ["Il soigne", "Il travaille ÃƒÂ  l'hÃƒÂ´pital"],
        hard: ["Il porte une blouse", "Il donne des conseils"]
      },
      facts: ["Le docteur soigne les personnes.", "Il aide ÃƒÂ  rester en bonne santÃƒÂ©."]
    },
    {
      id: "pompiere",
      label: "Pompier",
      aliases: ["pompier", "un pompier"],
      icon: "ÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â‚¬â„¢",
      clues: {
        easy: ["C'est une personne", "Il aide les autres"],
        medium: ["Il ÃƒÂ©teint les feux", "Il porte un casque"],
        hard: ["Il conduit un camion rouge", "Il intervient en urgence"]
      },
      facts: ["Le pompier ÃƒÂ©teint les incendies.", "Il protÃƒÂ¨ge les gens."]
    },
    {
      id: "policier",
      label: "Policier",
      aliases: ["policier", "un policier"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ‚Â®ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â€žÂ¢Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¸Ã‚Â",
      clues: {
        easy: ["C'est une personne", "Il aide les autres"],
        medium: ["Il porte un uniforme", "Il protÃƒÂ¨ge la ville"],
        hard: ["Il dirige parfois la circulation", "Il garde la sÃƒÂ©curitÃƒÂ©"]
      },
      facts: ["Le policier protÃƒÂ¨ge les citoyens.", "Il porte un uniforme."]
    },
    {
      id: "boulanger",
      label: "Boulanger",
      aliases: ["boulanger", "un boulanger"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬ËœÃ‚Â¨ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â³",
      clues: {
        easy: ["C'est une personne", "Il fait du pain"],
        medium: ["Il travaille tÃƒÂ´t", "Il utilise un four"],
        hard: ["Il fait des baguettes", "Il travaille dans une boulangerie"]
      },
      facts: ["Le boulanger prÃƒÂ©pare le pain.", "Il travaille souvent le matin."]
    },
    {
      id: "coiffeur",
      label: "Coiffeur",
      aliases: ["coiffeur", "un coiffeur", "coiffeuse"],
      icon: "ÃƒÂ°Ã…Â¸Ã¢â‚¬â„¢Ã¢â‚¬Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â€žÂ¢Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¸Ã‚Â",
      clues: {
        easy: ["C'est une personne", "Il coupe les cheveux"],
        medium: ["Il utilise des ciseaux", "Il travaille en salon"],
        hard: ["Il fait des coiffures", "Il lave parfois les cheveux"]
      },
      facts: ["Le coiffeur coupe les cheveux.", "Il utilise des ciseaux et un peigne."]
    },
    {
      id: "bibliothecaire",
      label: "BibliothÃƒÂ©caire",
      aliases: ["bibliothecaire", "bibliothÃƒÂ©caire", "un bibliothÃƒÂ©caire"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã¢â‚¬ËœÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ°Ã…Â¸Ã‚ÂÃ‚Â«",
      clues: {
        easy: ["C'est une personne", "Elle aime les livres"],
        medium: ["Elle travaille dans une bibliothÃƒÂ¨que", "Elle aide ÃƒÂ  choisir"],
        hard: ["Elle range les livres", "Elle connaÃƒÂ®t beaucoup d'histoires"]
      },
      facts: ["Le bibliothÃƒÂ©caire travaille avec des livres.", "Il aide ÃƒÂ  trouver des histoires."]
    },
    {
      id: "infirmier",
      label: "Infirmier",
      aliases: ["infirmier", "un infirmier", "infirmiÃƒÂ¨re"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã¢â‚¬ËœÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã…Â¡Ã¢â‚¬Â¢ÃƒÂ¯Ã‚Â¸Ã‚Â",
      clues: {
        easy: ["C'est une personne", "Il aide les malades"],
        medium: ["Il travaille ÃƒÂ  l'hÃƒÂ´pital", "Il soigne"],
        hard: ["Il met des pansements", "Il prend soin des patients"]
      },
      facts: ["L'infirmier aide ÃƒÂ  soigner.", "Il travaille souvent ÃƒÂ  l'hÃƒÂ´pital."]
    },
    {
      id: "pilote",
      label: "Pilote",
      aliases: ["pilote", "un pilote"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã¢â‚¬ËœÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã…â€œÃ‹â€ ÃƒÂ¯Ã‚Â¸Ã‚Â",
      clues: {
        easy: ["C'est une personne", "Il voyage"],
        medium: ["Il conduit un avion", "Il porte un uniforme"],
        hard: ["Il travaille dans un cockpit", "Il transporte des passagers"]
      },
      facts: ["Le pilote conduit l'avion.", "Il emmÃƒÂ¨ne les gens en voyage."]
    },
    {
      id: "journaliste",
      label: "Journaliste",
      aliases: ["journaliste", "un journaliste"],
      icon: "ÃƒÂ°Ã…Â¸Ã‚Â§Ã¢â‚¬ËœÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ°Ã…Â¸Ã¢â‚¬â„¢Ã‚Â¼",
      clues: {
        easy: ["C'est une personne", "Elle raconte des nouvelles"],
        medium: ["Elle ÃƒÂ©crit ou parle", "Elle pose des questions"],
        hard: ["Elle fait des reportages", "Elle informe les gens"]
      },
      facts: ["Le journaliste informe le public.", "Il peut ÃƒÂ©crire des articles."]
    },
    {
      id: "facteur",
      label: "Facteur",
      aliases: ["facteur", "un facteur"],
      icon: "Ã°Å¸â€œÂ®",
      clues: {
        easy: ["C'est une personne", "Il apporte des lettres"],
        medium: ["Il porte une sacoche", "Il passe dans les maisons"],
        hard: ["Il distribue le courrier", "On le voit dans la rue"]
      },
      facts: ["Le facteur distribue le courrier.", "Il passe souvent le matin."]
    },
    {
      id: "vendeur",
      label: "Vendeur",
      aliases: ["vendeur", "une vendeuse", "vendeuse"],
      icon: "Ã°Å¸Â§â€˜Ã¢â‚¬ÂÃ°Å¸â€™Â¼",
      clues: {
        easy: ["C'est une personne", "Elle vend des choses"],
        medium: ["Elle travaille dans un magasin", "Elle aide les clients"],
        hard: ["Elle tient une caisse", "Elle range les produits"]
      },
      facts: ["Le vendeur aide les clients.", "Il travaille souvent en magasin."]
    },
    {
      id: "footballeur",
      label: "Footballeur",
      aliases: ["footballeur", "un footballeur"],
      icon: "Ã¢Å¡Â½",
      clues: {
        easy: ["C'est une personne", "Il joue au foot"],
        medium: ["Il court sur un terrain", "Il tape dans un ballon"],
        hard: ["Il porte un maillot", "Il marque des buts"]
      },
      facts: ["Le footballeur joue au football.", "Il aime marquer des buts."]
    },
    {
      id: "pompier",
      label: "PompiÃƒÂ©re",
      aliases: ["pompiÃƒÂ©re", "une pompiÃƒÂ©re", "pompier"],
      icon: "Ã°Å¸Å¡â€™",
      clues: {
        easy: ["C'est une personne", "Elle aide les autres"],
        medium: ["Elle ÃƒÂ©teint les feux", "Elle porte un casque"],
        hard: ["Elle intervient en urgence", "Elle conduit un camion rouge"]
      },
      facts: ["La pompiÃƒÂ©re ÃƒÂ©teint les incendies.", "Elle protÃƒÂ©ge les gens."]
    },
    {
      id: "professeur",
      label: "Professeur",
      aliases: ["professeur", "un professeur", "maÃƒÂ®tre"],
      icon: "Ã°Å¸Â§â€˜Ã¢â‚¬ÂÃ°Å¸ÂÂ«",
      clues: {
        easy: ["C'est une personne", "Il enseigne"],
        medium: ["Il travaille ÃƒÂ© l'ÃƒÂ©cole", "Il explique des choses"],
        hard: ["Il corrige des exercices", "Il aide ÃƒÂ© apprendre"]
      },
      facts: ["Le professeur aide ÃƒÂ© apprendre.", "Il explique des leÃƒÂ©ons."]
    },
    {
      id: "cuisiniere",
      label: "CuisiniÃƒÂ©re",
      aliases: ["cuisiniÃƒÂ©re", "une cuisiniÃƒÂ©re"],
      icon: "Ã°Å¸â€˜Â©Ã¢â‚¬ÂÃ°Å¸ÂÂ³",
      clues: {
        easy: ["C'est une personne", "Elle cuisine"],
        medium: ["Elle prÃƒÂ©pare des plats", "Elle travaille en cuisine"],
        hard: ["Elle utilise des recettes", "Elle aime les bons plats"]
      },
      facts: ["La cuisiniÃƒÂ©re prÃƒÂ©pare des repas.", "Elle connaÃƒÂ©t des recettes."]
    }
  ]
};

const mojibakeDecoder = new TextDecoder("utf-8");
const MOJIBAKE_RE = /[\u00c3\u00c2\u00c5\u00e2\u00f0\ufffd]/;
const SAFE_CATEGORY_ICONS = {
  animal: "\uD83D\uDC3E",
  objet: "\uD83E\uDDF8",
  aliment: "\uD83E\uDD57",
  personne: "\uD83E\uDDD2",
  aleatoire: "\uD83C\uDFB2",
  image: "\uD83D\uDDBC\uFE0F",
  texte: "\u2328\uFE0F"
};
const CP1252_REVERSE = {
  0x20ac: 0x80,
  0x201a: 0x82,
  0x0192: 0x83,
  0x201e: 0x84,
  0x2026: 0x85,
  0x2020: 0x86,
  0x2021: 0x87,
  0x02c6: 0x88,
  0x2030: 0x89,
  0x0160: 0x8a,
  0x2039: 0x8b,
  0x0152: 0x8c,
  0x017d: 0x8e,
  0x2018: 0x91,
  0x2019: 0x92,
  0x201c: 0x93,
  0x201d: 0x94,
  0x2022: 0x95,
  0x2013: 0x96,
  0x2014: 0x97,
  0x02dc: 0x98,
  0x2122: 0x99,
  0x0161: 0x9a,
  0x203a: 0x9b,
  0x0153: 0x9c,
  0x017e: 0x9e,
  0x0178: 0x9f
};

function toCp1252Bytes(text) {
  const bytes = [];
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if (code <= 0xff) {
      bytes.push(code);
      continue;
    }
    const mapped = CP1252_REVERSE[code];
    if (mapped === undefined) return null;
    bytes.push(mapped);
  }
  return Uint8Array.from(bytes);
}

function fixMojibake(text) {
  if (typeof text !== "string") return text;
  let current = text;
  for (let i = 0; i < 3; i++) {
    if (!MOJIBAKE_RE.test(current)) break;
    const bytes = toCp1252Bytes(current);
    if (!bytes) break;
    try {
      const decoded = mojibakeDecoder.decode(bytes);
      if (!decoded || decoded === current) break;
      current = decoded;
    } catch (error) {
      break;
    }
  }
  return current;
}

function getSafeFallbackIcon(id) {
  const direct = fixMojibake(ICON_FALLBACK[id] || "");
  if (direct && !MOJIBAKE_RE.test(direct) && !direct.includes("\ufffd")) return direct;

  const sources = [
    ["animal", [...(DATA.animal || []), ...(EXTRA_DATA.animal || [])]],
    ["objet", [...(DATA.objet || []), ...(EXTRA_DATA.objet || [])]],
    ["aliment", [...(DATA.aliment || []), ...(DATA.legume || []), ...(EXTRA_DATA.aliment || [])]],
    ["personne", [...(DATA.personne || []), ...(EXTRA_DATA.personne || [])]]
  ];

  for (const [category, items] of sources) {
    if (items.some((item) => item.id === id)) return SAFE_CATEGORY_ICONS[category];
  }
  return "\u2753";
}

function fixIcon(icon, id) {
  let value = fixMojibake(icon);
  if (!value || /^\?+$/.test(value) || value.includes("\ufffd") || MOJIBAKE_RE.test(value)) {
    value = getSafeFallbackIcon(id);
  }
  return value;
}

function normalizeItem(item) {
  item.label = fixMojibake(item.label);
  item.icon = fixIcon(item.icon, item.id);
  if (Array.isArray(item.aliases)) item.aliases = item.aliases.map(fixMojibake);
  if (item.clues) {
    if (Array.isArray(item.clues.easy)) item.clues.easy = item.clues.easy.map(fixMojibake);
    if (Array.isArray(item.clues.medium)) item.clues.medium = item.clues.medium.map(fixMojibake);
    if (Array.isArray(item.clues.hard)) item.clues.hard = item.clues.hard.map(fixMojibake);
  }
  if (Array.isArray(item.facts)) item.facts = item.facts.map(fixMojibake);
}

function normalizeDataset(dataset) {
  if (!Array.isArray(dataset)) return;
  dataset.forEach((item) => normalizeItem(item));
}

function normalizeAppData() {
  CATEGORIES.forEach((cat) => {
    cat.label = fixMojibake(cat.label);
    cat.icon = fixIcon(cat.icon, cat.id);
  });
  MODES.forEach((mode) => {
    mode.label = fixMojibake(mode.label);
    mode.icon = fixIcon(mode.icon, mode.id);
  });
  Object.values(DATA).forEach((list) => normalizeDataset(list));
  Object.values(EXTRA_DATA).forEach((list) => normalizeDataset(list));
}

normalizeAppData();


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
  usedByKey: {},
  feedbackTimerId: null
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
  timerLabel: document.getElementById("timerLabel"),
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
  feedbackOverlay: document.getElementById("feedbackOverlay"),
  feedbackTitle: document.getElementById("feedbackTitle"),
  feedbackSub: document.getElementById("feedbackSub"),
  playAgain: document.getElementById("playAgain"),
  backToSetup: document.getElementById("backToSetup"),
  playAgainMobile: document.getElementById("playAgainMobile"),
  backToSetupMobile: document.getElementById("backToSetupMobile"),
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
    icon.textContent = cat.icon || "\u2728";
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
    icon.textContent = mode.icon || "\u2728";
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

const CATEGORY_MARKERS = {
  animal: ["c'est un animal"],
  objet: ["c'est un objet"],
  aliment: ["c'est un fruit", "c'est un lÃƒÂ©gume", "c'est un aliment"],
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
  const keepCategoryHints = isRandom && state.mode === "texte";
  const filtered = keepCategoryHints ? clues : clues.filter((c) => !isCategoryHint(c));
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
  const answerKey = normalizeAnswer(answer.label);
  const seen = new Set([answerKey]);
  const others = [];

  shuffle(getCategoryItems(category)).forEach((item) => {
    if (item.id === answer.id) return;
    const key = normalizeAnswer(item.label);
    if (seen.has(key)) return;
    seen.add(key);
    others.push(item);
  });

  const picks = others.slice(0, Math.min(9, others.length));
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
    els.clueText.classList.add("clue-empty");
  } else {
    els.clueText.textContent = state.clues[state.clueIndex];
    els.clueText.classList.remove("clue-empty");
  }
  renderHistory();
  updateClueControls();
}

function setTimerLabel(text) {
  if (els.timerLabel) els.timerLabel.textContent = text;
}

function startTimer() {
  state.startTime = performance.now();
  if (isTimedMode()) {
    state.timedActive = true;
    state.timedEndAt = state.startTime + 60000;
    state.timedRemaining = 60;
    const isMobile = window.matchMedia("(max-width: 600px)").matches;
    setTimerLabel(isMobile ? "" : "Temps restant:");
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
    setTimerLabel("Temps:");
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

function isMobileViewport() {
  return window.matchMedia("(max-width: 600px)").matches;
}

function hideMobileFeedback() {
  if (!els.feedbackOverlay) return;
  if (state.feedbackTimerId) clearTimeout(state.feedbackTimerId);
  state.feedbackTimerId = null;
  els.feedbackOverlay.classList.remove("show", "success", "error", "final");
  els.feedbackOverlay.classList.add("hidden");
  if (els.feedbackTitle) els.feedbackTitle.textContent = "";
  if (els.feedbackSub) els.feedbackSub.textContent = "";
}

function showMobileFeedback(ok, title, subtitle = "", persist = false) {
  if (!isMobileViewport() || !els.feedbackOverlay) return;
  if (state.feedbackTimerId) clearTimeout(state.feedbackTimerId);
  state.feedbackTimerId = null;

  els.feedbackOverlay.classList.remove("hidden", "success", "error", "final");
  els.feedbackOverlay.classList.add("show", ok ? "success" : "error");
  if (persist) els.feedbackOverlay.classList.add("final");

  if (els.feedbackTitle) els.feedbackTitle.textContent = title;
  if (els.feedbackSub) els.feedbackSub.textContent = subtitle;

  if (!persist) {
    state.feedbackTimerId = setTimeout(() => hideMobileFeedback(), 520);
  }
}

function transitionToNextTimedRiddle(callback) {
  if (!isMobileViewport()) {
    callback();
    return;
  }
  els.game.classList.add("round-transition");
  setTimeout(() => {
    callback();
    requestAnimationFrame(() => {
      els.game.classList.remove("round-transition");
    });
  }, 140);
}

function resetTimedState() {
  state.timedRemaining = 60;
  state.timedScore = 0;
  state.timedRounds = 0;
  updateScoreChip();
}

function showResult(ok, message) {
  els.result.textContent = message;
  if (isMobileViewport()) showMobileFeedback(ok, message);
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
  const mobile = isMobileViewport();
  const noMore = state.clueIndex >= state.clues.length;
  if (state.finished) {
    els.nextClue.classList.add("hidden");
    els.nextClue.disabled = true;
    return;
  }
  if (noMore) {
    els.nextClue.classList.add("hidden");
    els.nextClue.disabled = true;
  } else {
    els.nextClue.classList.remove("hidden");
    els.nextClue.disabled = false;
    els.nextClue.textContent = mobile ? "+" : "Nouvel indice +";
    els.nextClue.title = "Nouvel indice";
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
    badge.textContent = `${i + 1}`;
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
      els.playAgain.textContent = "Rejouer";
    } else {
      els.playAgain.textContent = "Passer";
    }
  } else {
    els.playAgain.textContent = "Nouvelle \u00e9nigme";
  }
}


function updateMobileActionLabels() {
  const isMobile = window.matchMedia("(max-width: 600px)").matches;
  if (isMobile) {
    if (els.playAgainMobile) els.playAgainMobile.textContent = "Nouveau";
    if (els.backToSetupMobile) els.backToSetupMobile.textContent = "Retour";
    els.playAgain.textContent = "Nouveau";
    els.backToSetup.textContent = "Retour";
  } else {
    updateActionLabels();
    els.backToSetup.textContent = "Retour aux r\u00e9glages";
  }
}


function endTimedSession() {
  if (!isTimedMode() || state.finished) return;
  state.finished = true;
  stopTimer();
  updateActionLabels();
  updateMobileActionLabels();
  updateClueControls();
  if (els.answerInput) els.answerInput.disabled = true;
  if (els.submitAnswer) els.submitAnswer.disabled = true;
  els.nextClue.disabled = true;

  const score = state.timedScore;
  const summary = `Temps ÃƒÂ©coulÃƒÂ© ! Score: ${score} bonne${score > 1 ? "s" : ""} rÃƒÂ©ponse${score > 1 ? "s" : ""}.`;
  showResult(true, summary);

  const recordId = `timed-${state.mode}`;
  const record = getRecord(recordId);
  let recordMessage = "";
  if (!record || score > record.score) {
    const name = (prompt("Nouveau record ! Ton nom ?") || "Anonyme").trim() || "Anonyme";
    setRecord(recordId, score, name);
    recordMessage = `Nouveau record (${getLabel(state.mode)}): ${score} par ${name}.`;
    els.fact.textContent = recordMessage;
  } else {
    recordMessage = `Record actuel (${getLabel(state.mode)}): ${record.score} par ${record.name || "Anonyme"}.`;
    els.fact.textContent = recordMessage;
  }
  if (isMobileViewport()) showMobileFeedback(true, summary, recordMessage, true);
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
  hideMobileFeedback();
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
  hideMobileFeedback();
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.body.classList.add('game-active');
  state.age = Number(els.age.value);
  state.timedMode = !!els.timedMode?.checked;
  state.timer = isTimedMode() ? false : !!els.timer?.checked;
  state.sound = els.sound.checked;
  state.usedByKey = {};
  if (isTimedMode()) resetTimedState();
  updateActionLabels();
  updateMobileActionLabels();
  startRound();
  updateChips();
  startTimer();
  els.answerInput.value = "";

  els.setup.classList.add("hidden");
  els.game.classList.remove("hidden");
  playSound("start");
}

function updateChips() {
  const catLabel = state.category === "aleatoire" ? "AlÃƒÂ©atoire" : getLabel(state.category);
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
    const icon = document.createElement("span");
    icon.className = "image-emoji";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = fixIcon(item.icon, item.id);
    const span = document.createElement("span");
    span.textContent = item.label;
    card.appendChild(icon);
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
      showResult(true, "Bonne r\u00e9ponse !");
      setTimeout(() => {
        if (state.finished || !state.timedActive) return;
        transitionToNextTimedRiddle(() => startRound());
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
    const correctText = corrected ? `Bonne r\u00e9ponse! On \u00e9crit: ${answer}.` : "Bravo! Bonne r\u00e9ponse!";
    showResult(true, correctText);
  } else {
    showResult(false, `Perdu! La bonne r\u00e9ponse \u00e9tait: ${answer}.`);
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

if (els.feedbackOverlay) {
  els.feedbackOverlay.addEventListener("click", () => {
    if (els.feedbackOverlay.classList.contains("final")) {
      hideMobileFeedback();
    }
  });
}

els.submitAnswer.addEventListener("click", () => submitText());

els.answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") submitText();
});

if (els.playAgainMobile) {
  els.playAgainMobile.addEventListener("click", () => {
    if (isTimedMode() && state.timedActive && !state.finished) {
      startRound();
      return;
    }
    startGame();
  });
}

els.playAgain.addEventListener("click", () => {
  if (isTimedMode() && state.timedActive && !state.finished) {
    startRound();
    return;
  }
  startGame();
});
if (els.backToSetupMobile) {
  els.backToSetupMobile.addEventListener("click", () => {
    hideMobileFeedback();
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.body.classList.remove("game-active");
    stopTimer();
    els.game.classList.add("hidden");
    els.setup.classList.remove("hidden");
  });
}

els.backToSetup.addEventListener("click", () => {
  hideMobileFeedback();
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.body.classList.remove('game-active');
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

window.addEventListener("resize", () => {
  if (!els.game.classList.contains("hidden")) {
    updateMobileActionLabels();
    updateClueControls();
  }
});

function setup() {
  initOptions();
  updateTimedToggleUI();
  registerServiceWorker();
}

setup();

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}






