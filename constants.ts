import { FileText, Users, Lightbulb, TrendingUp, ShieldCheck, Clock, Brain, Rocket } from 'lucide-react';

// IMPORTANT : Assurez-vous que le fichier "ID_PHOTO.png" est bien présent dans le dossier public de votre projet.
export const PROFILE_IMAGE_URL = "https://i.ibb.co/3yhBj08L/ID-PHOTO.jpg"; 

export const OFFERS = [
  {
    id: "acculturation",
    title: "Acculturation",
    subtitle: "Comprendre les enjeux",
    description: "Webinaires et articles pour décrypter l'IA sans jargon. Comprenez ce que la technologie peut réellement faire pour votre TPE/PME.",
    icon: Lightbulb,
    features: ["Webinaires mensuels", "Articles de fond", "Veille technologique"]
  },
  {
    id: "formation",
    title: "Formation",
    subtitle: "Monter en compétence",
    description: "Ateliers pratiques en petits groupes pour maîtriser les outils (Prompt Engineering, Automatisation) et gagner en productivité immédiatement.",
    icon: Users,
    features: ["Ateliers pratiques", "Prompt Engineering", "Sessions petits groupes"]
  },
  {
    id: "conseil",
    title: "Conseil",
    subtitle: "Accompagnement stratégique",
    description: "Diagnostics Data et déploiement de solutions sur-mesure. Une approche artisanale pour des résultats industriels.",
    icon: TrendingUp,
    features: ["Diagnostics Data", "Déploiement POC", "Suivi long terme"]
  }
];

export const BLOG_ARTICLES = [
  {
    id: 1,
    date: "14 Février 2026",
    category: "Légal",
    title: "IA Act : Le guide de survie pour les PME en 2026",
    summary: "Un an après les premières directives, quelles sont vos obligations réelles si vous utilisez ChatGPT ou des API ?",
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">La conformité sans la panique</h3>
      <p class="mb-4">L'IA Act européen est pleinement effectif. Pour 90% des PME, cela ne change pas votre business model, mais cela change vos mentions légales.</p>
      <h4 class="text-lg font-bold text-primary mb-2">Check-list de février 2026 :</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Avez-vous déclaré l'usage de chatbots à vos clients ?</li>
        <li>Vos fournisseurs d'IA (SaaS) sont-ils conformes aux normes EU ?</li>
        <li>Avez-vous formé vos salariés à ne pas entrer de données personnelles (GDPR) dans les modèles ouverts ?</li>
      </ul>
      <p>Nous avons préparé un template de déclaration simple pour nos clients.</p>
    `
  },
  {
    id: 2,
    date: "28 Janvier 2026",
    category: "Productivité",
    title: "Bilan Copilot : 1 an après, est-ce rentable pour une TPE ?",
    summary: "Retour d'expérience sur 15 déploiements dans des entreprises de moins de 20 salariés.",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">Le verdict financier</h3>
      <p class="mb-4">À 30€/mois par utilisateur, la facture monte vite. Est-ce justifié ?</p>
      <p class="mb-4"><strong>OUI</strong> pour les fonctions supports (RH, Admin, Direction) qui traitent beaucoup d'emails et de réunions Teams. Le résumé automatique fait gagner environ 45min/jour.</p>
      <p class="mb-4"><strong>NON</strong> pour les équipes terrain ou purement opérationnelles qui n'ont pas la culture de l'écrit. Pour eux, des outils spécialisés métier sont plus pertinents.</p>
    `
  },
  {
    id: 10,
    date: "15 Janvier 2026",
    category: "Cybersécurité",
    title: "Ransomwares et IA : Votre meilleur bouclier est numérique",
    summary: "Comment l'IA détecte les signaux faibles d'une attaque avant le chiffrement de vos données.",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">L'attaque silencieuse</h3>
      <p class="mb-4">Les antivirus classiques basés sur des signatures sont dépassés. Les hackers utilisent désormais l'IA pour générer du code malveillant unique à chaque attaque.</p>
      <p>La réponse ? Une IA de défense (EDR) qui surveille le <em>comportement</em> de votre réseau. Si un ordinateur commence à renommer 1000 fichiers à la minute à 3h du matin, l'IA coupe la connexion instantanément, sauvant votre entreprise.</p>
    `
  },
  {
    id: 3,
    date: "10 Décembre 2025",
    category: "Automatisation",
    title: "Factur-X et IA : Automatiser la saisie comptable pour 2026",
    summary: "La facture électronique est là. Comment l'IA va plus loin que la simple réception.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">Au-delà du format légal</h3>
      <p class="mb-4">Factur-X standardise l'échange. Mais l'IA (via des outils comme Make + OpenAI) permet d'automatiser le <em>traitement</em> analytique.</p>
      <p>Désormais, une facture reçue peut automatiquement :</p>
      <ol class="list-decimal pl-5 mb-4 space-y-2">
        <li>Être vérifiée (montant vs devis).</li>
        <li>Être affectée au bon code analytique (Chantier A, Projet B).</li>
        <li>Déclencher le virement si < 500€.</li>
      </ol>
      <p>C'est la fin du "bâtonnage" comptable.</p>
    `
  },
  {
    id: 11,
    date: "22 Novembre 2025",
    category: "Retail",
    title: "Commerce : Fini les ruptures de stock le samedi",
    summary: "L'IA prédictive démocratisée pour les commerçants indépendants.",
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">L'intuition ne suffit plus</h3>
      <p class="mb-4">Jusqu'ici, Carrefour et Amazon avaient des algorithmes. Aujourd'hui, une boutique de prêt-à-porter indépendante peut utiliser nos solutions pour croiser ses ventes passées, la météo du week-end et les tendances locales.</p>
      <p>Résultat : -20% de stock dormant et +15% de disponibilité sur les tailles les plus demandées.</p>
    `
  },
  {
    id: 4,
    date: "15 Novembre 2025",
    category: "Sécurité",
    title: "Deepfakes audio : La nouvelle arnaque au président",
    summary: "Les virements frauduleux explosent. Comment protéger votre trésorerie.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">"C'est ma voix, mais ce n'est pas moi"</h3>
      <p class="mb-4">En 2025, nous avons vu les premiers cas de PME locales victimes de faux appels du dirigeant, générés par IA, demandant un virement urgent.</p>
      <h4 class="text-lg font-bold text-primary mb-2">La parade absolue</h4>
      <p class="mb-4">Aucune technologie ne vous protégera à 100%. La solution est procédurale : instaurez un <strong>mot de passe oral</strong> ou une double validation systématique pour tout virement hors process habituel.</p>
    `
  },
  {
    id: 12,
    date: "30 Octobre 2025",
    category: "Agriculture",
    title: "Agri-Tech : L'irrigation pilotée par la donnée",
    summary: "Économiser l'eau grâce aux prévisions micro-locales.",
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">Chaque goutte compte</h3>
      <p class="mb-4">En connectant des sondes d'humidité bon marché à un modèle prédictif simple, nous aidons les maraîchers à anticiper les besoins en eau à 3 jours.</p>
      <p>L'IA ne décide pas à la place de l'agriculteur, elle lui donne la carte météo précise de sa parcelle, pas celle de l'aéroport voisin.</p>
    `
  },
  {
    id: 5,
    date: "02 Octobre 2025",
    category: "Marketing",
    title: "SEO et IA : Google ne veut plus de votre contenu générique",
    summary: "La mise à jour de l'algorithme privilégie l'expérience réelle (EEAT).",
    imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">La fin du "Copier-Coller" ChatGPT</h3>
      <p class="mb-4">Générer 50 articles de blog en 1 clic ne marche plus. Google pénalise désormais le contenu sans "saveur humaine".</p>
      <p>Utilisez l'IA pour la structure, le plan, et la correction. Mais l'anecdote client, l'avis d'expert et la photo du chantier doivent venir de vous. C'est le retour de l'authenticité comme facteur de rang.</p>
    `
  },
  {
    id: 13,
    date: "14 Septembre 2025",
    category: "Logistique",
    title: "Transport : Réduire la consommation de 12% sans changer de camions",
    summary: "L'optimisation de tournées n'est pas qu'une question de GPS.",
    imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">Le Tetris des colis</h3>
      <p class="mb-4">Le problème du voyageur de commerce est complexe. Pour une PME avec 10 camions et 150 points de livraison, les combinaisons sont infinies.</p>
      <p>Nos algorithmes prennent en compte les créneaux horaires des clients, la capacité des véhicules et le trafic prédictif pour générer la feuille de route parfaite en 30 secondes chaque matin.</p>
    `
  },
  {
    id: 6,
    date: "10 Septembre 2025",
    category: "Tech",
    title: "L'avènement des 'Small Language Models' (SLM) en local",
    summary: "Pourquoi faire tourner une IA sur vos propres serveurs devient accessible.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">La confidentialité totale est possible</h3>
      <p class="mb-4">Avec la sortie des modèles Mistral et Llama optimisés en 2025, une PME peut désormais avoir une IA performante qui tourne sur un simple PC gamer, sans qu'aucune donnée ne sorte de l'entreprise.</p>
      <p>Idéal pour les cabinets d'avocats, le médical ou l'industrie de défense.</p>
    `
  },
  {
    id: 14,
    date: "25 Août 2025",
    category: "Immobilier",
    title: "Estimation Immobilière : L'IA voit ce que l'humain ignore",
    summary: "Croiser 50 critères de données pour une valorisation juste.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">La data au service de l'agent</h3>
      <p class="mb-4">Proximité des écoles, nuisances sonores, ensoleillement, historique des ventes du quartier, projets d'urbanisme futurs...</p>
      <p>L'IA agrège ces milliers de points de données pour proposer une fourchette de prix ultra-précise, permettant à l'agent immobilier de justifier son mandat avec des faits objectifs.</p>
    `
  },
  {
    id: 15,
    date: "12 Juillet 2025",
    category: "Productivité",
    title: "Artisanat : Gagnez 4h par semaine sur vos devis",
    summary: "L'IA générative pour rédiger les descriptifs techniques.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">La fin des soirées paperasse</h3>
      <p class="mb-4">Dictez simplement vos notes de chantier sur votre téléphone : "Remplacement chauffe-eau 200L, accès difficile, prévoir 2h de main d'oeuvre et raccords cuivre."</p>
      <p>L'IA transforme cet audio en une ligne de devis professionnelle, claire et sans faute, prête à être envoyée au client.</p>
    `
  },
  {
    id: 7,
    date: "20 Juin 2025",
    category: "RH",
    title: "Recrutement : L'IA ne remplace pas le feeling",
    summary: "Bilan de 6 mois d'utilisation d'assistants RH.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">Un gain de temps, pas de jugement</h3>
      <p class="mb-4">L'IA est excellente pour vérifier si un CV contient les compétences techniques requises ("Sait utiliser Excel"). Elle est nulle pour savoir si le candidat s'entendra avec l'équipe.</p>
      <p>Utilisez-la pour filtrer les 200 candidatures reçues, mais ne la laissez jamais envoyer une réponse de refus automatique sans validation humaine.</p>
    `
  },
  {
    id: 16,
    date: "05 Juin 2025",
    category: "Santé",
    title: "Déserts médicaux : L'IA en pré-diagnostic",
    summary: "Comment la technologie aide les secrétariats médicaux débordés.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">Trier l'urgence</h3>
      <p class="mb-4">Face à l'afflux d'appels, des assistants conversationnels médicaux peuvent désormais qualifier la demande du patient selon des protocoles stricts validés par des médecins.</p>
      <p>Cela permet de prioriser les rendez-vous d'urgence et de rediriger la bobologie vers la téléconsultation, libérant du temps médical précieux.</p>
    `
  },
  {
    id: 17,
    date: "20 Mai 2025",
    category: "Mode",
    title: "Textile : Prédire les tendances couleurs avec 6 mois d'avance",
    summary: "L'analyse des réseaux sociaux au service des créateurs.",
    imageUrl: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">Écouter Instagram et TikTok</h3>
      <p class="mb-4">L'IA analyse des millions d'images postées quotidiennement pour détecter les micro-signaux.</p>
      <p>Si le vert émeraude commence à apparaître sur les influenceurs scandinaves, nos modèles prédisent une vague en France dans 4 mois. Les PME textiles peuvent ainsi ajuster leurs achats de tissus avant la hausse des prix.</p>
    `
  },
  {
    id: 8,
    date: "15 Avril 2025",
    category: "Industrie",
    title: "Maintenance Prédictive : Le ticket d'entrée baisse",
    summary: "Plus besoin de capteurs à 10 000€. Le son suffit.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">Écouter les machines</h3>
      <p class="mb-4">Nous avons déployé chez un client une solution basée sur l'analyse sonore. Un simple micro connecté enregistre le bruit du moteur.</p>
      <p>L'IA détecte le changement de fréquence inaudible pour l'homme qui précède la panne de roulement. Coût du matériel : moins de 500€. ROI : immédiat.</p>
    `
  },
  {
    id: 18,
    date: "05 Avril 2025",
    category: "Tourisme",
    title: "Hôtellerie : Le Pricing Dynamique pour les indépendants",
    summary: "Adapter vos prix à la demande locale en temps réel.",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">Ne laissez pas de marge sur la table</h3>
      <p class="mb-4">Un événement local ? Un congrès ? La météo qui s'améliore ?</p>
      <p>Votre PME hôtelière peut désormais ajuster ses tarifs nuit par nuit automatiquement, comme le font les grandes chaînes et les compagnies aériennes, pour maximiser le taux d'occupation et le prix moyen.</p>
    `
  },
  {
    id: 19,
    date: "22 Mars 2025",
    category: "Tech",
    title: "No-Code & IA : La révolution de l'autonomie",
    summary: "Pourquoi vous n'avez plus besoin d'un développeur senior pour tout.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">Construire ses propres outils</h3>
      <p class="mb-4">Avec l'IA qui écrit des scripts et les plateformes No-Code, un assistant administratif motivé peut créer une application interne de gestion des congés ou de suivi de parc automobile en une semaine.</p>
      <p>Le rôle de l'expert technique change : il devient architecte et garant de la sécurité, laissant la construction aux équipes métier.</p>
    `
  },
  {
    id: 10, // Re-using ID 9 for launch, ensuring uniqueness for new ones
    date: "10 Mars 2025",
    category: "Lancement",
    title: "Alpha Predict Systems : Notre vision pour les PME",
    summary: "Pourquoi nous avons créé ce cabinet. Le manifeste de l'IA pragmatique.",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">Marre des POCs qui finissent au placard</h3>
      <p class="mb-4">En ce début 2025, tout le monde parle d'IA, mais peu l'utilisent vraiment pour gagner de l'argent.</p>
      <p>Nous lançons Alpha Predict Systems avec une promesse : nous ne facturons pas la technologie, nous facturons le résultat. Si l'IA ne vous fait pas gagner de temps ou d'argent, nous ne l'installons pas.</p>
    `
  },
  {
    id: 20,
    date: "28 Février 2025",
    category: "Éthique",
    title: "La fin de la 'Boîte Noire' algorithmique",
    summary: "Pourquoi l'explicabilité devient un avantage concurrentiel.",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">La confiance avant la performance</h3>
      <p class="mb-4">Un algorithme qui refuse un crédit ou un recrutement sans dire pourquoi est un risque juridique et d'image.</p>
      <p>Nous développons des modèles "Glass Box" qui expliquent chaque décision. "Ce dossier a été priorisé car le risque d'impayé est faible ET la fidélité client est haute". C'est crucial pour l'acceptation par vos équipes.</p>
    `
  },
  {
    id: 21,
    date: "15 Février 2025",
    category: "Finance",
    title: "Trésorerie : Anticiper les trous d'air",
    summary: "L'IA analyse vos flux bancaires pour prédire le BFR.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    content: `
      <h3 class="text-xl font-bold text-primary mb-4">Dormir tranquille</h3>
      <p class="mb-4">Plutôt que de constater le découvert le 20 du mois, nos modèles analysent la saisonnalité de vos encaissements et les délais de paiement réels de vos clients.</p>
      <p>Vous recevez une alerte 3 semaines avant un potentiel problème de cash, vous laissant le temps de négocier avec la banque ou de relancer les factures.</p>
    `
  }
];

export const PAST_WEBINARS = [
  {
    id: "web-01",
    date: "Janvier 2026",
    title: "Automatiser l'administratif sans coder",
    description: "Replay de la session live sur les outils No-Code."
  },
  {
    id: "web-02",
    date: "Décembre 2025",
    title: "IA & Droit : Êtes-vous conformes ?",
    description: "Intervention avec un avocat spécialisé numérique."
  },
  {
    id: "web-03",
    date: "Novembre 2025",
    title: "Le ROI de la Data Science en PME",
    description: "Calculs et méthodologie pour convaincre votre CODIR."
  }
];