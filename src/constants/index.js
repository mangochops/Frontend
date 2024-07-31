import {

  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  newArrFive,
 
 
 
} from "../assets/images/index";


// =================== NavBarList Start here ====================
export const navBarList = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },
  {
    _id: 1002,
    title: "Saloon",
    link: "/shoes",
  },
  {
    _id: 1003,
    title: "SUVs",
    link: "/clothes",
  },
  {
    _id: 1004,
    title: "Vans",
    link: "accessories",
  },
  {
    _id: 1005,
    title: "Trucks",
    link: "/bags",
  },
];
// =================== NavBarList End here ======================
// =================== Special Offer data Start here ============
export const SplOfferData = [
  {
    _id: "201",
    img: newArrOne,
    productName: "BMW 740i",
    price: "35.00",
    color: "Blanc",
    badge: true,
    brand: "Clarks",
    des: "Imprimante Laser PANTUM Couleur - Fonctions: Impression  - Technologie d'impression: Laser - Format Papier: A4 - Vitesse d’impression(Couleur/N&B): 24 ppm (A4) / 26 ppm (Lettre) - Résolution d'impression: 600 x 600 dpi - Sortie papier: 100 page - Mémoire: Double cœur, 1 GHz - Impression recto verso: Automatique - Heure de la première impression: Moins de 11s  - Connecteurs: USB 2.0 haut débit Ethernet 10/100/1000 BaseTX (RJ-45) 802.11b/g/n Sans fil - Dimensions: 411.2 x 394.1 x 243.7mm - Poids: 16,1 kg - Couleur: Blanc",
    cat: "Boots",
    
    ficheTech: [
      { label: "Technology ", value: "Electrophotographic monochrome laser " },
      { label: "Print speed ", value: "22 ppm (A4)/23 ppm (Letter)" },

      { label: "First print out time ", value: "Less than 7.8s       " },
      { label: "Maximum Monthly Duty Cycle", value: "15,000 pages " },
      {
        label: "Recommended monthly volume Resolution(dpi) ",
        value: "700 pages ",
      },
      { label: "Printer language Duplex Mode ", value: "Max. 1,200×1,200 " },
      { label: "Printer  ", value: "Max. 1,2   " },
      { label: "galass  ", value: "Max. 1,2   " },
    ],
  },
  {
    _id: "202",
    img: newArrTwo,
    productName: "Audi A6",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Clarks",
    des: "Pantum BM5100fdw Imprimante laser mono : Pantum BM5100fdw -Imprimante :laser -monochrome multifonction,:format A4-,4-en-1 avec fonctions impression, copie, numérisation et fax, vitesse d'impression de 40ppm, connexion Réseau :LAN RJ45-, Wifichrome multifonction, format A4, 4-en-1 avec fonctions impression, copie, numérisation et fax, vitesse d'impression de 40ppm, connexion Réseau LAN RJ45, Wifi",
    cat:"Boots",
    
    ficheTech: [
      { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
      { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

      {
        label: "Nombre de pages mensuel recommandé",
        value: "750 à 4,000 Pages",
      },
      { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
      {
        label: "Langage d'impression ",
        value: "PCL5e, PCL6, PS        ",
      },
      { label: "Vitesse du processeur", value: "1.2 GHz" },
      { label: "Mémoire", value: "512 MB" },
      {
        label: "Panneau de commande ",
        value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
      },
      { label: "Impression recto-verso automatique      ", value: "Oui" },
      {
        label: "Autres fonctions d'impression      ",
        value:
          "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
      },
      { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
      {
        label: "Temps de sortie de la première page",
        value: "Plateau : moins de 10 s ADF : moins de 11 s",
      },
    ],
  },

  {
    _id: "203",
    img: newArrThree,
    productName: "Mercedes Benz C200",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Adidas",
    des: "Imprimante Monochrome Laser PANTUM BP5100DN : Fonctions Impression - :Capacité Bac à papier 250 pages - :Formats papier -: A4 - Technologie d’impression Laser Monochrome - :Vitesse d’impression Noir & Blanc Jusqu’à 40 pages par minute en A4 -: Résolution 1200 dpi -: Mémoire 512 Mo - Connectivité Ethernet, USB 2.0 -:Auto-Duplex-, Network-Ready : Impression silencieuse - faible encombrement et respectueux de l'environnement -: cartouches à haut rendement en option - processeur haute vitesse 1,2 GHz - Dimensions: 364 x 344 x 257 mm - Poids: 9.3 kg - Garantie: 1 an",
    cat: "Sneaker",
    
    ficheTech: [
      { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
      { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

      {
        label: "Nombre de pages mensuel recommandé",
        value: "750 à 4,000 Pages",
      },
      { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
      {
        label: "Langage d'impression ",
        value: "PCL5e, PCL6, PS        ",
      },
      { label: "Vitesse du processeur", value: "1.2 GHz" },
      { label: "Mémoire", value: "512 MB" },
      {
        label: "Panneau de commande ",
        value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
      },
      { label: "Impression recto-verso automatique      ", value: "Oui" },
      {
        label: "Autres fonctions d'impression      ",
        value:
          "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
      },
      { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
      {
        label: "Temps de sortie de la première page",
        value: "Plateau : moins de 10 s ADF : moins de 11 s",
      },
    ],
  },
  {
    _id: "2005",
    img: newArrFour,
    productName: "Volkswagen Toureg",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Adidas",
    des: "Imprimante Laser 3en1 à toner rechargeable PANTUM M6559N - Capacité d'impression Jusqu'à 1600 pages - Vitesse d’impression : 22 ppm (A4) / 23 ppm (Lettre) - Résolution (impression, copie et numérisation) : 1200×1200dpi - Heure de la première impression : Moins de 7.8s - Connectivité : USB 2.0 haute vitesse - Vitesse de copie : 22cpm (A4) / 23cpm (Lettre) - Capacité du chargeur automatique de documents : 35 pages - Entrée papier : 150 pages - Sortie papier : 100 pages - Dimensions : 417 x 305 x 301 mm - Poids : 8.5 kg - Garantie 1 an",
    cat: "Sneaker",
    
    ficheTech: [
      { label: "gtin	", value: "M6559N      " },
      { label: "Marque	", value: "PANTUM      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Impression	", value: "Noir & Blanc      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Gestion d entrée Papier Standard		", value: "150 pages      " },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      {
        label: "Résolution d'impression Noir		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats		", value: "A4      " },
      { label: "Sortie papier		", value: "100 pages      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      { label: "Poids		", value: "4,75 kg      " },
    ],
  },

  {
    _id: "20005",
    img: newArrFive,
    productName: "Mini Cooper",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Adidas",
    des: "Imprimante Laser 3en1 à toner rechargeable PANTUM M6559N - Capacité d'impression Jusqu'à 1600 pages - Vitesse d’impression : 22 ppm (A4) / 23 ppm (Lettre) - Résolution (impression, copie et numérisation) : 1200×1200dpi - Heure de la première impression : Moins de 7.8s - Connectivité : USB 2.0 haute vitesse - Vitesse de copie : 22cpm (A4) / 23cpm (Lettre) - Capacité du chargeur automatique de documents : 35 pages - Entrée papier : 150 pages - Sortie papier : 100 pages - Dimensions : 417 x 305 x 301 mm - Poids : 8.5 kg - Garantie 1 an",
    cat: "Sneaker",
    
    ficheTech: [
      { label: "gtin	", value: "M6559N      " },
      { label: "Marque	", value: "PANTUM      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Impression	", value: "Noir & Blanc      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Gestion d entrée Papier Standard		", value: "150 pages      " },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      {
        label: "Résolution d'impression Noir		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats		", value: "A4      " },
      { label: "Sortie papier		", value: "100 pages      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      { label: "Poids		", value: "4,75 kg      " },
    ],
  },
]
  
// =================== Special Offer data End here ==============


// =================== PaginationItems Start here ===============

export const paginationItems = [
  {
    _id: "201",
    img: newArrOne,
    productName: "BMW 740i",
    price: "35.00",
    color: "Blanc",
    badge: true,
    brand: "Clarks",
    des: "Imprimante Laser PANTUM Couleur - Fonctions: Impression  - Technologie d'impression: Laser - Format Papier: A4 - Vitesse d’impression(Couleur/N&B): 24 ppm (A4) / 26 ppm (Lettre) - Résolution d'impression: 600 x 600 dpi - Sortie papier: 100 page - Mémoire: Double cœur, 1 GHz - Impression recto verso: Automatique - Heure de la première impression: Moins de 11s  - Connecteurs: USB 2.0 haut débit Ethernet 10/100/1000 BaseTX (RJ-45) 802.11b/g/n Sans fil - Dimensions: 411.2 x 394.1 x 243.7mm - Poids: 16,1 kg - Couleur: Blanc",
    cat: "Boots",
    
    ficheTech: [
      { label: "Technology ", value: "Electrophotographic monochrome laser " },
      { label: "Print speed ", value: "22 ppm (A4)/23 ppm (Letter)" },

      { label: "First print out time ", value: "Less than 7.8s       " },
      { label: "Maximum Monthly Duty Cycle", value: "15,000 pages " },
      {
        label: "Recommended monthly volume Resolution(dpi) ",
        value: "700 pages ",
      },
      { label: "Printer language Duplex Mode ", value: "Max. 1,200×1,200 " },
      { label: "Printer  ", value: "Max. 1,2   " },
      { label: "galass  ", value: "Max. 1,2   " },
    ],
  },
  {
    _id: "202",
    img: newArrTwo,
    productName: "Audi A6",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Clarks",
    des: "Pantum BM5100fdw Imprimante laser mono : Pantum BM5100fdw -Imprimante :laser -monochrome multifonction,:format A4-,4-en-1 avec fonctions impression, copie, numérisation et fax, vitesse d'impression de 40ppm, connexion Réseau :LAN RJ45-, Wifichrome multifonction, format A4, 4-en-1 avec fonctions impression, copie, numérisation et fax, vitesse d'impression de 40ppm, connexion Réseau LAN RJ45, Wifi",
    cat:"Boots",
    
    ficheTech: [
      { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
      { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

      {
        label: "Nombre de pages mensuel recommandé",
        value: "750 à 4,000 Pages",
      },
      { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
      {
        label: "Langage d'impression ",
        value: "PCL5e, PCL6, PS        ",
      },
      { label: "Vitesse du processeur", value: "1.2 GHz" },
      { label: "Mémoire", value: "512 MB" },
      {
        label: "Panneau de commande ",
        value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
      },
      { label: "Impression recto-verso automatique      ", value: "Oui" },
      {
        label: "Autres fonctions d'impression      ",
        value:
          "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
      },
      { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
      {
        label: "Temps de sortie de la première page",
        value: "Plateau : moins de 10 s ADF : moins de 11 s",
      },
    ],
  },

  {
    _id: "203",
    img: newArrThree,
    productName: "Mercedes Benz C200",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Adidas",
    des: "Imprimante Monochrome Laser PANTUM BP5100DN : Fonctions Impression - :Capacité Bac à papier 250 pages - :Formats papier -: A4 - Technologie d’impression Laser Monochrome - :Vitesse d’impression Noir & Blanc Jusqu’à 40 pages par minute en A4 -: Résolution 1200 dpi -: Mémoire 512 Mo - Connectivité Ethernet, USB 2.0 -:Auto-Duplex-, Network-Ready : Impression silencieuse - faible encombrement et respectueux de l'environnement -: cartouches à haut rendement en option - processeur haute vitesse 1,2 GHz - Dimensions: 364 x 344 x 257 mm - Poids: 9.3 kg - Garantie: 1 an",
    cat: "Sneaker",
    
    ficheTech: [
      { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
      { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

      {
        label: "Nombre de pages mensuel recommandé",
        value: "750 à 4,000 Pages",
      },
      { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
      {
        label: "Langage d'impression ",
        value: "PCL5e, PCL6, PS        ",
      },
      { label: "Vitesse du processeur", value: "1.2 GHz" },
      { label: "Mémoire", value: "512 MB" },
      {
        label: "Panneau de commande ",
        value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
      },
      { label: "Impression recto-verso automatique      ", value: "Oui" },
      {
        label: "Autres fonctions d'impression      ",
        value:
          "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
      },
      { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
      {
        label: "Temps de sortie de la première page",
        value: "Plateau : moins de 10 s ADF : moins de 11 s",
      },
    ],
  },
  {
    _id: "2005",
    img: newArrFour,
    productName: "Volkswagen Toureg",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Adidas",
    des: "Imprimante Laser 3en1 à toner rechargeable PANTUM M6559N - Capacité d'impression Jusqu'à 1600 pages - Vitesse d’impression : 22 ppm (A4) / 23 ppm (Lettre) - Résolution (impression, copie et numérisation) : 1200×1200dpi - Heure de la première impression : Moins de 7.8s - Connectivité : USB 2.0 haute vitesse - Vitesse de copie : 22cpm (A4) / 23cpm (Lettre) - Capacité du chargeur automatique de documents : 35 pages - Entrée papier : 150 pages - Sortie papier : 100 pages - Dimensions : 417 x 305 x 301 mm - Poids : 8.5 kg - Garantie 1 an",
    cat: "Sneaker",
    
    ficheTech: [
      { label: "gtin	", value: "M6559N      " },
      { label: "Marque	", value: "PANTUM      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Impression	", value: "Noir & Blanc      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Gestion d entrée Papier Standard		", value: "150 pages      " },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      {
        label: "Résolution d'impression Noir		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats		", value: "A4      " },
      { label: "Sortie papier		", value: "100 pages      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      { label: "Poids		", value: "4,75 kg      " },
    ],
  },

  {
    _id: "20005",
    img: newArrFive,
    productName: "Mini Cooper",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Adidas",
    des: "Imprimante Laser 3en1 à toner rechargeable PANTUM M6559N - Capacité d'impression Jusqu'à 1600 pages - Vitesse d’impression : 22 ppm (A4) / 23 ppm (Lettre) - Résolution (impression, copie et numérisation) : 1200×1200dpi - Heure de la première impression : Moins de 7.8s - Connectivité : USB 2.0 haute vitesse - Vitesse de copie : 22cpm (A4) / 23cpm (Lettre) - Capacité du chargeur automatique de documents : 35 pages - Entrée papier : 150 pages - Sortie papier : 100 pages - Dimensions : 417 x 305 x 301 mm - Poids : 8.5 kg - Garantie 1 an",
    cat: "Sneaker",
    
    ficheTech: [
      { label: "gtin	", value: "M6559N      " },
      { label: "Marque	", value: "PANTUM      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Impression	", value: "Noir & Blanc      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Gestion d entrée Papier Standard		", value: "150 pages      " },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      {
        label: "Résolution d'impression Noir		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats		", value: "A4      " },
      { label: "Sortie papier		", value: "100 pages      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      { label: "Poids		", value: "4,75 kg      " },
    ],
  },
]

  
// ======clothes=======================================



  // =================== imprimante hp =================


  
    // =================== imprimante hp =================




export const ClothespaginationItems = [
    {
    _id: "201",
    img: newArrOne,
    productName: "BMW 740i",
    price: "35.00",
    color: "Blanc",
    badge: true,
    brand: "Clarks",
    des: "Imprimante Laser PANTUM Couleur - Fonctions: Impression  - Technologie d'impression: Laser - Format Papier: A4 - Vitesse d’impression(Couleur/N&B): 24 ppm (A4) / 26 ppm (Lettre) - Résolution d'impression: 600 x 600 dpi - Sortie papier: 100 page - Mémoire: Double cœur, 1 GHz - Impression recto verso: Automatique - Heure de la première impression: Moins de 11s  - Connecteurs: USB 2.0 haut débit Ethernet 10/100/1000 BaseTX (RJ-45) 802.11b/g/n Sans fil - Dimensions: 411.2 x 394.1 x 243.7mm - Poids: 16,1 kg - Couleur: Blanc",
    cat: "Boots",
    
    ficheTech: [
      { label: "Technology ", value: "Electrophotographic monochrome laser " },
      { label: "Print speed ", value: "22 ppm (A4)/23 ppm (Letter)" },

      { label: "First print out time ", value: "Less than 7.8s       " },
      { label: "Maximum Monthly Duty Cycle", value: "15,000 pages " },
      {
        label: "Recommended monthly volume Resolution(dpi) ",
        value: "700 pages ",
      },
      { label: "Printer language Duplex Mode ", value: "Max. 1,200×1,200 " },
      { label: "Printer  ", value: "Max. 1,2   " },
      { label: "galass  ", value: "Max. 1,2   " },
    ],
  },
  {
    _id: "202",
    img: newArrTwo,
    productName: "Audi A6",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Clarks",
    des: "Pantum BM5100fdw Imprimante laser mono : Pantum BM5100fdw -Imprimante :laser -monochrome multifonction,:format A4-,4-en-1 avec fonctions impression, copie, numérisation et fax, vitesse d'impression de 40ppm, connexion Réseau :LAN RJ45-, Wifichrome multifonction, format A4, 4-en-1 avec fonctions impression, copie, numérisation et fax, vitesse d'impression de 40ppm, connexion Réseau LAN RJ45, Wifi",
    cat:"Boots",
    
    ficheTech: [
      { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
      { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

      {
        label: "Nombre de pages mensuel recommandé",
        value: "750 à 4,000 Pages",
      },
      { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
      {
        label: "Langage d'impression ",
        value: "PCL5e, PCL6, PS        ",
      },
      { label: "Vitesse du processeur", value: "1.2 GHz" },
      { label: "Mémoire", value: "512 MB" },
      {
        label: "Panneau de commande ",
        value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
      },
      { label: "Impression recto-verso automatique      ", value: "Oui" },
      {
        label: "Autres fonctions d'impression      ",
        value:
          "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
      },
      { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
      {
        label: "Temps de sortie de la première page",
        value: "Plateau : moins de 10 s ADF : moins de 11 s",
      },
    ],
  },

  {
    _id: "203",
    img: newArrThree,
    productName: "Mercedes Benz C200",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Adidas",
    des: "Imprimante Monochrome Laser PANTUM BP5100DN : Fonctions Impression - :Capacité Bac à papier 250 pages - :Formats papier -: A4 - Technologie d’impression Laser Monochrome - :Vitesse d’impression Noir & Blanc Jusqu’à 40 pages par minute en A4 -: Résolution 1200 dpi -: Mémoire 512 Mo - Connectivité Ethernet, USB 2.0 -:Auto-Duplex-, Network-Ready : Impression silencieuse - faible encombrement et respectueux de l'environnement -: cartouches à haut rendement en option - processeur haute vitesse 1,2 GHz - Dimensions: 364 x 344 x 257 mm - Poids: 9.3 kg - Garantie: 1 an",
    cat: "Sneaker",
    
    ficheTech: [
      { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
      { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

      {
        label: "Nombre de pages mensuel recommandé",
        value: "750 à 4,000 Pages",
      },
      { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
      {
        label: "Langage d'impression ",
        value: "PCL5e, PCL6, PS        ",
      },
      { label: "Vitesse du processeur", value: "1.2 GHz" },
      { label: "Mémoire", value: "512 MB" },
      {
        label: "Panneau de commande ",
        value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
      },
      { label: "Impression recto-verso automatique      ", value: "Oui" },
      {
        label: "Autres fonctions d'impression      ",
        value:
          "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
      },
      { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
      {
        label: "Temps de sortie de la première page",
        value: "Plateau : moins de 10 s ADF : moins de 11 s",
      },
    ],
  },
  {
    _id: "2005",
    img: newArrFour,
    productName: "Volkswagen Toureg",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Adidas",
    des: "Imprimante Laser 3en1 à toner rechargeable PANTUM M6559N - Capacité d'impression Jusqu'à 1600 pages - Vitesse d’impression : 22 ppm (A4) / 23 ppm (Lettre) - Résolution (impression, copie et numérisation) : 1200×1200dpi - Heure de la première impression : Moins de 7.8s - Connectivité : USB 2.0 haute vitesse - Vitesse de copie : 22cpm (A4) / 23cpm (Lettre) - Capacité du chargeur automatique de documents : 35 pages - Entrée papier : 150 pages - Sortie papier : 100 pages - Dimensions : 417 x 305 x 301 mm - Poids : 8.5 kg - Garantie 1 an",
    cat: "Sneaker",
    
    ficheTech: [
      { label: "gtin	", value: "M6559N      " },
      { label: "Marque	", value: "PANTUM      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Impression	", value: "Noir & Blanc      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Gestion d entrée Papier Standard		", value: "150 pages      " },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      {
        label: "Résolution d'impression Noir		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats		", value: "A4      " },
      { label: "Sortie papier		", value: "100 pages      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      { label: "Poids		", value: "4,75 kg      " },
    ],
  },

  {
    _id: "20005",
    img: newArrFive,
    productName: "Mini Cooper",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Adidas",
    des: "Imprimante Laser 3en1 à toner rechargeable PANTUM M6559N - Capacité d'impression Jusqu'à 1600 pages - Vitesse d’impression : 22 ppm (A4) / 23 ppm (Lettre) - Résolution (impression, copie et numérisation) : 1200×1200dpi - Heure de la première impression : Moins de 7.8s - Connectivité : USB 2.0 haute vitesse - Vitesse de copie : 22cpm (A4) / 23cpm (Lettre) - Capacité du chargeur automatique de documents : 35 pages - Entrée papier : 150 pages - Sortie papier : 100 pages - Dimensions : 417 x 305 x 301 mm - Poids : 8.5 kg - Garantie 1 an",
    cat: "Sneaker",
    
    ficheTech: [
      { label: "gtin	", value: "M6559N      " },
      { label: "Marque	", value: "PANTUM      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Impression	", value: "Noir & Blanc      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Gestion d entrée Papier Standard		", value: "150 pages      " },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      {
        label: "Résolution d'impression Noir		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats		", value: "A4      " },
      { label: "Sortie papier		", value: "100 pages      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      { label: "Poids		", value: "4,75 kg      " },
    ],
  },
  
]
// ======clothes=======================================

export const AccessoriespaginationItems = [
    
  {
    _id: "201",
    img: newArrOne,
    productName: "BMW 740i",
    price: "35.00",
    color: "Blanc",
    badge: true,
    brand: "Clarks",
    des: "Imprimante Laser PANTUM Couleur - Fonctions: Impression  - Technologie d'impression: Laser - Format Papier: A4 - Vitesse d’impression(Couleur/N&B): 24 ppm (A4) / 26 ppm (Lettre) - Résolution d'impression: 600 x 600 dpi - Sortie papier: 100 page - Mémoire: Double cœur, 1 GHz - Impression recto verso: Automatique - Heure de la première impression: Moins de 11s  - Connecteurs: USB 2.0 haut débit Ethernet 10/100/1000 BaseTX (RJ-45) 802.11b/g/n Sans fil - Dimensions: 411.2 x 394.1 x 243.7mm - Poids: 16,1 kg - Couleur: Blanc",
    cat: "Boots",
    
    ficheTech: [
      { label: "Technology ", value: "Electrophotographic monochrome laser " },
      { label: "Print speed ", value: "22 ppm (A4)/23 ppm (Letter)" },

      { label: "First print out time ", value: "Less than 7.8s       " },
      { label: "Maximum Monthly Duty Cycle", value: "15,000 pages " },
      {
        label: "Recommended monthly volume Resolution(dpi) ",
        value: "700 pages ",
      },
      { label: "Printer language Duplex Mode ", value: "Max. 1,200×1,200 " },
      { label: "Printer  ", value: "Max. 1,2   " },
      { label: "galass  ", value: "Max. 1,2   " },
    ],
  },
  {
    _id: "202",
    img: newArrTwo,
    productName: "Audi A6",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Clarks",
    des: "Pantum BM5100fdw Imprimante laser mono : Pantum BM5100fdw -Imprimante :laser -monochrome multifonction,:format A4-,4-en-1 avec fonctions impression, copie, numérisation et fax, vitesse d'impression de 40ppm, connexion Réseau :LAN RJ45-, Wifichrome multifonction, format A4, 4-en-1 avec fonctions impression, copie, numérisation et fax, vitesse d'impression de 40ppm, connexion Réseau LAN RJ45, Wifi",
    cat:"Boots",
    
    ficheTech: [
      { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
      { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

      {
        label: "Nombre de pages mensuel recommandé",
        value: "750 à 4,000 Pages",
      },
      { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
      {
        label: "Langage d'impression ",
        value: "PCL5e, PCL6, PS        ",
      },
      { label: "Vitesse du processeur", value: "1.2 GHz" },
      { label: "Mémoire", value: "512 MB" },
      {
        label: "Panneau de commande ",
        value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
      },
      { label: "Impression recto-verso automatique      ", value: "Oui" },
      {
        label: "Autres fonctions d'impression      ",
        value:
          "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
      },
      { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
      {
        label: "Temps de sortie de la première page",
        value: "Plateau : moins de 10 s ADF : moins de 11 s",
      },
    ],
  },

  {
    _id: "203",
    img: newArrThree,
    productName: "Mercedes Benz C200",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Adidas",
    des: "Imprimante Monochrome Laser PANTUM BP5100DN : Fonctions Impression - :Capacité Bac à papier 250 pages - :Formats papier -: A4 - Technologie d’impression Laser Monochrome - :Vitesse d’impression Noir & Blanc Jusqu’à 40 pages par minute en A4 -: Résolution 1200 dpi -: Mémoire 512 Mo - Connectivité Ethernet, USB 2.0 -:Auto-Duplex-, Network-Ready : Impression silencieuse - faible encombrement et respectueux de l'environnement -: cartouches à haut rendement en option - processeur haute vitesse 1,2 GHz - Dimensions: 364 x 344 x 257 mm - Poids: 9.3 kg - Garantie: 1 an",
    cat: "Sneaker",
    
    ficheTech: [
      { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
      { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

      {
        label: "Nombre de pages mensuel recommandé",
        value: "750 à 4,000 Pages",
      },
      { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
      {
        label: "Langage d'impression ",
        value: "PCL5e, PCL6, PS        ",
      },
      { label: "Vitesse du processeur", value: "1.2 GHz" },
      { label: "Mémoire", value: "512 MB" },
      {
        label: "Panneau de commande ",
        value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
      },
      { label: "Impression recto-verso automatique      ", value: "Oui" },
      {
        label: "Autres fonctions d'impression      ",
        value:
          "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
      },
      { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
      {
        label: "Temps de sortie de la première page",
        value: "Plateau : moins de 10 s ADF : moins de 11 s",
      },
    ],
  },
  {
    _id: "2005",
    img: newArrFour,
    productName: "Volkswagen Toureg",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Adidas",
    des: "Imprimante Laser 3en1 à toner rechargeable PANTUM M6559N - Capacité d'impression Jusqu'à 1600 pages - Vitesse d’impression : 22 ppm (A4) / 23 ppm (Lettre) - Résolution (impression, copie et numérisation) : 1200×1200dpi - Heure de la première impression : Moins de 7.8s - Connectivité : USB 2.0 haute vitesse - Vitesse de copie : 22cpm (A4) / 23cpm (Lettre) - Capacité du chargeur automatique de documents : 35 pages - Entrée papier : 150 pages - Sortie papier : 100 pages - Dimensions : 417 x 305 x 301 mm - Poids : 8.5 kg - Garantie 1 an",
    cat: "Sneaker",
    
    ficheTech: [
      { label: "gtin	", value: "M6559N      " },
      { label: "Marque	", value: "PANTUM      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Impression	", value: "Noir & Blanc      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Gestion d entrée Papier Standard		", value: "150 pages      " },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      {
        label: "Résolution d'impression Noir		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats		", value: "A4      " },
      { label: "Sortie papier		", value: "100 pages      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      { label: "Poids		", value: "4,75 kg      " },
    ],
  },

  {
    _id: "20005",
    img: newArrFive,
    productName: "Mini Cooper",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Adidas",
    des: "Imprimante Laser 3en1 à toner rechargeable PANTUM M6559N - Capacité d'impression Jusqu'à 1600 pages - Vitesse d’impression : 22 ppm (A4) / 23 ppm (Lettre) - Résolution (impression, copie et numérisation) : 1200×1200dpi - Heure de la première impression : Moins de 7.8s - Connectivité : USB 2.0 haute vitesse - Vitesse de copie : 22cpm (A4) / 23cpm (Lettre) - Capacité du chargeur automatique de documents : 35 pages - Entrée papier : 150 pages - Sortie papier : 100 pages - Dimensions : 417 x 305 x 301 mm - Poids : 8.5 kg - Garantie 1 an",
    cat: "Sneaker",
    
    ficheTech: [
      { label: "gtin	", value: "M6559N      " },
      { label: "Marque	", value: "PANTUM      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Impression	", value: "Noir & Blanc      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Gestion d entrée Papier Standard		", value: "150 pages      " },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      {
        label: "Résolution d'impression Noir		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats		", value: "A4      " },
      { label: "Sortie papier		", value: "100 pages      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      { label: "Poids		", value: "4,75 kg      " },
    ],
  },
]

  // =================== imprimante hp =================
export const BagspaginationItems = [
  {
    _id: "201",
    img: newArrOne,
    productName: "BMW 740i",
    price: "35.00",
    color: "Blanc",
    badge: true,
    brand: "Clarks",
    des: "Imprimante Laser PANTUM Couleur - Fonctions: Impression  - Technologie d'impression: Laser - Format Papier: A4 - Vitesse d’impression(Couleur/N&B): 24 ppm (A4) / 26 ppm (Lettre) - Résolution d'impression: 600 x 600 dpi - Sortie papier: 100 page - Mémoire: Double cœur, 1 GHz - Impression recto verso: Automatique - Heure de la première impression: Moins de 11s  - Connecteurs: USB 2.0 haut débit Ethernet 10/100/1000 BaseTX (RJ-45) 802.11b/g/n Sans fil - Dimensions: 411.2 x 394.1 x 243.7mm - Poids: 16,1 kg - Couleur: Blanc",
    cat: "Boots",
    
    ficheTech: [
      { label: "Technology ", value: "Electrophotographic monochrome laser " },
      { label: "Print speed ", value: "22 ppm (A4)/23 ppm (Letter)" },

      { label: "First print out time ", value: "Less than 7.8s       " },
      { label: "Maximum Monthly Duty Cycle", value: "15,000 pages " },
      {
        label: "Recommended monthly volume Resolution(dpi) ",
        value: "700 pages ",
      },
      { label: "Printer language Duplex Mode ", value: "Max. 1,200×1,200 " },
      { label: "Printer  ", value: "Max. 1,2   " },
      { label: "galass  ", value: "Max. 1,2   " },
    ],
  },
  {
    _id: "202",
    img: newArrTwo,
    productName: "Audi A6",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Clarks",
    des: "Pantum BM5100fdw Imprimante laser mono : Pantum BM5100fdw -Imprimante :laser -monochrome multifonction,:format A4-,4-en-1 avec fonctions impression, copie, numérisation et fax, vitesse d'impression de 40ppm, connexion Réseau :LAN RJ45-, Wifichrome multifonction, format A4, 4-en-1 avec fonctions impression, copie, numérisation et fax, vitesse d'impression de 40ppm, connexion Réseau LAN RJ45, Wifi",
    cat:"Boots",
    
    ficheTech: [
      { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
      { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

      {
        label: "Nombre de pages mensuel recommandé",
        value: "750 à 4,000 Pages",
      },
      { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
      {
        label: "Langage d'impression ",
        value: "PCL5e, PCL6, PS        ",
      },
      { label: "Vitesse du processeur", value: "1.2 GHz" },
      { label: "Mémoire", value: "512 MB" },
      {
        label: "Panneau de commande ",
        value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
      },
      { label: "Impression recto-verso automatique      ", value: "Oui" },
      {
        label: "Autres fonctions d'impression      ",
        value:
          "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
      },
      { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
      {
        label: "Temps de sortie de la première page",
        value: "Plateau : moins de 10 s ADF : moins de 11 s",
      },
    ],
  },

  {
    _id: "203",
    img: newArrThree,
    productName: "Mercedes Benz C200",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Adidas",
    des: "Imprimante Monochrome Laser PANTUM BP5100DN : Fonctions Impression - :Capacité Bac à papier 250 pages - :Formats papier -: A4 - Technologie d’impression Laser Monochrome - :Vitesse d’impression Noir & Blanc Jusqu’à 40 pages par minute en A4 -: Résolution 1200 dpi -: Mémoire 512 Mo - Connectivité Ethernet, USB 2.0 -:Auto-Duplex-, Network-Ready : Impression silencieuse - faible encombrement et respectueux de l'environnement -: cartouches à haut rendement en option - processeur haute vitesse 1,2 GHz - Dimensions: 364 x 344 x 257 mm - Poids: 9.3 kg - Garantie: 1 an",
    cat: "Sneaker",
    
    ficheTech: [
      { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
      { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

      {
        label: "Nombre de pages mensuel recommandé",
        value: "750 à 4,000 Pages",
      },
      { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
      {
        label: "Langage d'impression ",
        value: "PCL5e, PCL6, PS        ",
      },
      { label: "Vitesse du processeur", value: "1.2 GHz" },
      { label: "Mémoire", value: "512 MB" },
      {
        label: "Panneau de commande ",
        value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
      },
      { label: "Impression recto-verso automatique      ", value: "Oui" },
      {
        label: "Autres fonctions d'impression      ",
        value:
          "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
      },
      { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
      {
        label: "Temps de sortie de la première page",
        value: "Plateau : moins de 10 s ADF : moins de 11 s",
      },
    ],
  },
  {
    _id: "2005",
    img: newArrFour,
    productName: "Volkswagen Toureg",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Adidas",
    des: "Imprimante Laser 3en1 à toner rechargeable PANTUM M6559N - Capacité d'impression Jusqu'à 1600 pages - Vitesse d’impression : 22 ppm (A4) / 23 ppm (Lettre) - Résolution (impression, copie et numérisation) : 1200×1200dpi - Heure de la première impression : Moins de 7.8s - Connectivité : USB 2.0 haute vitesse - Vitesse de copie : 22cpm (A4) / 23cpm (Lettre) - Capacité du chargeur automatique de documents : 35 pages - Entrée papier : 150 pages - Sortie papier : 100 pages - Dimensions : 417 x 305 x 301 mm - Poids : 8.5 kg - Garantie 1 an",
    cat: "Sneaker",
    
    ficheTech: [
      { label: "gtin	", value: "M6559N      " },
      { label: "Marque	", value: "PANTUM      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Impression	", value: "Noir & Blanc      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Gestion d entrée Papier Standard		", value: "150 pages      " },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      {
        label: "Résolution d'impression Noir		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats		", value: "A4      " },
      { label: "Sortie papier		", value: "100 pages      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      { label: "Poids		", value: "4,75 kg      " },
    ],
  },

  {
    _id: "20005",
    img: newArrFive,
    productName: "Mini Cooper",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Adidas",
    des: "Imprimante Laser 3en1 à toner rechargeable PANTUM M6559N - Capacité d'impression Jusqu'à 1600 pages - Vitesse d’impression : 22 ppm (A4) / 23 ppm (Lettre) - Résolution (impression, copie et numérisation) : 1200×1200dpi - Heure de la première impression : Moins de 7.8s - Connectivité : USB 2.0 haute vitesse - Vitesse de copie : 22cpm (A4) / 23cpm (Lettre) - Capacité du chargeur automatique de documents : 35 pages - Entrée papier : 150 pages - Sortie papier : 100 pages - Dimensions : 417 x 305 x 301 mm - Poids : 8.5 kg - Garantie 1 an",
    cat: "Sneaker",
    
    ficheTech: [
      { label: "gtin	", value: "M6559N      " },
      { label: "Marque	", value: "PANTUM      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Impression	", value: "Noir & Blanc      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Gestion d entrée Papier Standard		", value: "150 pages      " },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      {
        label: "Résolution d'impression Noir		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats		", value: "A4      " },
      { label: "Sortie papier		", value: "100 pages      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      { label: "Poids		", value: "4,75 kg      " },
    ],
  },
  
]

  
    // =================== imprimante hp =================








