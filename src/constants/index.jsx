export const NavItems = [
    {label: "Histoire", href: "#histoire"},
    {label: "Collection", href: "#collection"},
    {label: "Rendez-vous", href: "#rendez-vous"},
    {label: "Membership", href: "#membership"},
    {label: "Partenaires", href: "#partenaires" }
]

export const plans = [
    {
        id: "access",
        tag: "Accès",
        nom: "VAULT Access",
        prix: "490",
        periode: "/ an",
        description: "Pour suivre sans s'engager. Vous êtes notifié avant tout le monde, vous décidez après.",
        avantages: [
            "Accès aux annonces 48h avant mise en ligne",
            "Newsletter privée — arrivages & coulisses",
            "Invitation aux événements VAULT",
            "Historique complet de chaque vente passée",
        ],
        cta: "Rejoindre Access",
        highlight: false,
    },
    {
        id: "prestige",
        tag: "High Ticket",
        nom: "VAULT Prestige",
        prix: "2 900",
        periode: "/ an",
        description: "Vous ne cherchez pas — on cherche pour vous. Un interlocuteur unique, pas de standard.",
        avantages: [
            "Accès aux véhicules avant mise en ligne",
            "Recherche sur commande — on trouve ce qui n'est pas affiché",
            "Rendez-vous privatisés, sans limite",
            "Conseiller direct, joignable 7j/7",
            "Négociation & administratif pris en charge",
            "Mise en relation avec nos partenaires financiers",
        ],
        cta: "Rejoindre Prestige",
        highlight: true,
    },
]

export const partenaires = [
    {
        nom: "Rothschild & Co",
        categorie: "Financement privé",
        description: "Financement structuré sur actifs, sans passer par le circuit bancaire classique.",
    },
    {
        nom: "Hiscox",
        categorie: "Assurance collection",
        description: "Valeur agréée, pas valeur marchande. Zéro décote en cas de sinistre.",
    },
    {
        nom: "Atelier Pagani Paris",
        categorie: "Entretien & préparation",
        description: "Inspection pré-achat indépendante. On ne touche pas une voiture avant qu'ils l'aient vue.",
    },
    {
        nom: "Intercars Convoyage",
        categorie: "Transport & livraison",
        description: "Plateau fermé, GPS temps réel, assurance incluse. Paris–Milan en 14h.",
    },
]

export const logos = [
    { nom: "Rothschild & Co",   label: "Financement",  src: "./public/images/roth.png" },
    { nom: "Hiscox",            label: "Assurance",    src: "./public/images/His.png" },
    { nom: "Michelin",          label: "Performance",  src: "https://logo.clearbit.com/michelin.com" },
    { nom: "Porsche",           label: "Constructeur", src: "https://logo.clearbit.com/porsche.com" },
    { nom: "Ferrari",           label: "Constructeur", src: "https://logo.clearbit.com/ferrari.com" },
    { nom: "AXA",               label: "Assurance",    src: "https://logo.clearbit.com/axa.com" },
    { nom: "Koch-Chemie",       label: "Préparation",  src: "https://logo.clearbit.com/koch-chemie.de" },
    { nom: "Lamborghini",       label: "Constructeur", src: "https://logo.clearbit.com/lamborghini.com" },
]

export const voitures = [
    {
        id: 1,
        marque: "Porsche",
        modele: "911 GT3 RS",
        image: "/public/images/V1.jpg",
        annee: 2022,
        km: 4200,
        carburant: "Essence",
        boite: "PDK",
        populaire: true,
    },
    {
        id: 2,
        marque: "Ferrari",
        modele: "F8 Tributo",
        image: "/public/images/V2.jpg",
        annee: 2021,
        km: 8600,
        carburant: "Essence",
        boite: "Automatique",
        populaire: true,
    },
    {
        id: 3,
        marque: "Lamborghini",
        modele: "Huracán EVO",
        image: "/public/images/V3.jpg",
        annee: 2020,
        km: 12300,
        carburant: "Essence",
        boite: "Automatique",
        populaire: true,
    },
  
]