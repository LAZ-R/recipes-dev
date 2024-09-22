export const RECIPES = [
  { 
    id: 1, 
    name: "Burger patty de Gordon Ramsay 🍔", 
    imgSrc: "https://www.jpmeatsandmore.co.uk/wp-content/uploads/2021/10/Burger-Patties-NEW-e1634072760784.jpeg",
    prepTime: 15,
    cookingTime: 10,
    smDesc: "Comment faire passer tes burgers à la catégorie supérieure.",
    desc: "Le plus important dans un bon burger, c'est la viande. Un steak haché c'est sympa, mais une fois que tu auras gouté aux pattys il te sera juste impossible de revenir en arrière.<br>Cette recette est directement issue du légendaire Gordon, donnée dans un épisode de \"Kitchen Nightmare\"",
    ingredients: [
      "Viande de boeuf hachée (500g)",
      "Oignon rouge (1/2)",
      "Jaunes d'oeuf (3)",
      "Sauce Worcestershire",
      "Moutarde de Dijon",
      "Ketchup",
      "Sel",
      "Poivre",
    ],
    steps: [
      { type: "STEP", value: "Émince finement l'oignon rouge." },

      { type: "STEP", value: "Mélange à la main tous les ingrédients dans un saladier jusqu'à obtention d'une pâte homogène." },
      { type: "TIPS", value: "Les quantités de Worcestershire, Moutarde de Dijon et ketchup sont à déterminer en fonction de tes goûts.<br>Une bonne base serait 2 cuillères à soupe de chaque, avec une emphase sur la Moutarde de Dijon." },
  
      { type: "STEP", value: "Fais chauffer de l'huile dans une grande poêle." },

      { type: "STEP", value: "Forme des boules avec la pâte obtenue précedemment." },
      { type: "TIPS", value: "Si ta pâte est trop sèche, rajoute un jaune d'oeuf." },
      { type: "TIPS", value: "De la taille des boules dépendra le diamètre de ton patty, mais surtout son épaisseur.<br>Une boule de la taille d'un kiwi te donnera un patty tout fin, type \"Mc Donald's\". Généralement, je fais une boule de la taille d'un citron." },
      
      { type: "STEP", value: "Place chaque boule dans la poêle, en les écrasant avec une spatule pour qu'elles prennent progressivement la forme d'un palet." },
      
      { type: "STEP", value: "Retourne les régulièrement, en les écrasant à chaque fois." },
      
      { type: "STEP", value: "Une fois cuit à coeur, c'est prêt !" },
      { type: "TIPS", value: "Un pain burger aux graines, de la salade, une tranche de VRAI cheddar, et ta sauce burger préférée." },
    ],
  },
  { 
    id: 2, 
    name: "Pâte pour thai green curry", 
    imgSrc: "https://norecipes.com/wp-content/uploads/2019/04/green-curry-paste-002.jpg",
    prepTime: 30,
    cookingTime: 0,
    smDesc: "L'ingrédient central du meilleur plat de tous les temps.",
    desc: "Un thai green curry, c'est déjà un plaisir indescriptible en soi.<br>Mais avec une pâte faite maison, on s'élève à un niveau divin.",
    ingredients: [
      "Graines de cumin",
      "Graines de coriandre",
      "Grains de poivre blanc",
      "Citronnelle <i>(Lime grass)</i> (2 tiges)",
      "Galangal (Pas de gingembre, il faut absolument du galangal)",
      "Échalotte thai (1)",
      "Zest de Combava <i>(Kaffir lime)</i>",
      "Gousses d'ail (4)",
      "Feuilles de Combava <i>(Kaffir lime)</i> (6)",
      "Piments verts <i>(Green chilly)</i> (12)",
      "Piments rouges <i>(Red chilly)</i> (2)",
      "Racines de coriandre",
      "Shrimp paste (1/2 cuillère à café)",
      "Sel",
    ],
    steps: [
      { type: "STEP", value: "Hache grossièrement la citronnelle, le galangal, l'échalotte thai, l'ail, les piments (avec les pépins) et les racines de coriandre, et réserve." },
      { type: "STEP", value: "Toaste les graines de cumin, les graines de coriandre et les grains de poivre blanc dans une poêle." },
      { type: "STEP", value: "Transfert-les dans mortier de cuisine, puis écrase jusqu'à obtenir une fine poudre." },
      { type: "STEP", value: "Ajoute dans le mortier la citronnelle, le galangal, l'échalotte thai, le zest de Combava, l'ail, les piments, les feuilles de Combava, les racines de coriandre et le sel." },
      { type: "STEP", value: "Écrase. Beaucoup. Longtemps." },
      { type: "STEP", value: "Ajoute la shrimp paste, et continue d'écraser. C'est prêt !" },
    ],
  },
  { 
    id: 3, 
    name: "Thai green curry 🌶️🌶️🌶️", 
    imgSrc: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2020/01/thai-chicken-curry-768x960.jpg",
    prepTime: 10,
    cookingTime: 20,
    smDesc: "Le meilleur plat de tous les temps. Point.",
    desc: "La Taïlande a beaucoup à offrir culinairement parlant, mais pour moi rien n'arrive à la cheville d'un Green curry.<br>Si on respecte la recette traditionnelle, on accède à une explosion de saveur rarement atteinte.",
    ingredients: [
      "Poulet (750g)",
      "Lait de coco (50cl)",
      "Pâte de curry vert (<a href=\"./recipe.html?id=2\">la recette ici</a>)",
      "Aubergines pois <i>(Makheua, Thai eggplant)</i>",
      "Sucre de palmier (idéalement liquide)",
      "Fish sauce (idéalement de la marque \"Squid\")",
      "Feuilles de basilic thai",
      "Sel"
    ],
    steps: [
      { type: "STEP", value: "Coupe le poulet en dès." },
      { type: "STEP", value: "Coupe les aubergines pois en 4." },
      { type: "STEP", value: "Fais cuire le lait de coco dans une poêle chaude, puis ajoute la pate, mélange et attend que la graisse remonte." },
      { type: "STEP", value: "Ajoute le poulet et laisse mijoter quelques minutes." },

      { type: "STEP", value: "Ajoute les aubergines pois, une pincée de sel, le sucre de palmier et la fish sauce, mélange puis laisse reposer quelques minutes." },
      { type: "TIPS", value: "Fais tremper les aubergines pois préalablement dans de l'eau, pour qu'elles se ramollissent et cuisent plus vite." },
      { type: "TIPS", value: "Après cette étape, évite de trop mélanger afin d'éviter l'évaporation des saveurs." },

      { type: "STEP", value: "Ajoute les feuilles de basilic thai entières juste avant de servir." },
      
      { type: "TIPS", value: "A servir avec une boule de riz thai.<br>Sers le riz dans les assiettes, et le green curry dans un grand plat." },
    ],
  },
];