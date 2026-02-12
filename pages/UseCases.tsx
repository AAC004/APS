import React from 'react';
import { 
  Factory, ShoppingCart, Briefcase, Calculator, AlertTriangle, 
  Cpu, TrendingUp, ArrowRight, Hammer, Utensils, Home, 
  Truck, Scale, Leaf, Wrench 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const UseCases: React.FC = () => {
  const cases = [
    {
      id: 1,
      domain: "BTP & Maçonnerie",
      title: "Automatisation des Devis Artisans",
      icon: Hammer,
      challenge: "Le gérant d'une entreprise de maçonnerie (12 salariés) passait ses soirées et weekends à chiffrer des devis, avec des risques d'erreurs de métré sur plan.",
      solution: "Intégration d'un outil IA qui analyse les plans PDF/Photos, extrait les surfaces automatiquement et pré-remplit les lignes du logiciel de devis (Batappli/Sage).",
      impact: "Devis envoyés en 24h au lieu de 5 jours. Taux de transformation en hausse de 20% grâce à la réactivité."
    },
    {
      id: 2,
      domain: "Restauration & Boulangerie",
      title: "Prédiction des Ventes & Anti-Gaspillage",
      icon: Utensils,
      challenge: "Un réseau de 3 boulangeries jetait environ 15% de sa production quotidienne, faute de pouvoir anticiper l'affluence (météo, vacances scolaires, événements locaux).",
      solution: "Algorithme simple croisant l'historique de caisse avec la météo locale et le calendrier des vacances pour recommander la quantité exacte de baguettes et viennoiseries à produire chaque matin.",
      impact: "Réduction des invendus de 60%. Marge brute augmentée de 4 points dès le 2ème mois."
    },
    {
      id: 3,
      domain: "Industrie & Usinage",
      title: "Contrôle Qualité par Vision",
      icon: Factory,
      challenge: "Une PME de décolletage mobilisait 2 opérateurs à temps plein pour contrôler visuellement l'aspect de pièces métalliques, avec une fatigue oculaire entraînant des erreurs.",
      solution: "Installation d'une caméra low-cost couplée à un modèle de vision IA entraîné sur 100 photos de pièces 'bonnes' et 'mauvaises' pour éjecter automatiquement les défauts.",
      impact: "Zéro défaut livré au client final en 6 mois. Les opérateurs ont été repositionnés sur le réglage machine à plus forte valeur ajoutée."
    },
    {
      id: 4,
      domain: "Expertise Comptable",
      title: "Saisie et Catégorisation Automatique",
      icon: Calculator,
      challenge: "Les collaborateurs passaient 30% de leur temps à saisir manuellement des facturettes et à courir après les justificatifs clients manquants.",
      solution: "Mise en place d'un OCR intelligent (Reconnaissance de caractères) qui lit, catégorise l'achat et détecte les anomalies de TVA avant même validation humaine.",
      impact: "Gain de productivité équivalent à 1 ETP (Équivalent Temps Plein) sur le cabinet, réinvesti dans le conseil client."
    },
    {
      id: 5,
      domain: "Immobilier",
      title: "Qualification des Locataires 24/7",
      icon: Home,
      challenge: "Une agence immobilière indépendante était noyée sous les appels et emails pour des locations, empêchant les agents de se concentrer sur les mandats de vente.",
      solution: "Déploiement d'un assistant conversationnel sur le site web qui pré-qualifie les dossiers locataires (revenus, garants) et planifie les visites uniquement pour les profils validés.",
      impact: "Agents 100% focalisés sur le terrain. Les visites inutiles ont disparu, la satisfaction client a grimpé."
    },
    {
      id: 6,
      domain: "Transport & Logistique",
      title: "Optimisation de Tournées",
      icon: Truck,
      challenge: "Un transporteur régional planifiait ses 20 camions manuellement chaque matin, entraînant des kilomètres parasites et des heures supplémentaires chauffeurs.",
      solution: "Utilisation d'un solver IA prenant en compte le trafic, les créneaux de livraison clients et la capacité des véhicules pour générer la route optimale.",
      impact: "Réduction de 12% du kilométrage mensuel et baisse significative de la consommation de carburant."
    },
    {
      id: 7,
      domain: "Professions Juridiques",
      title: "Recherche de Jurisprudence",
      icon: Scale,
      challenge: "Les avocats d'un cabinet d'affaires perdaient des heures à rechercher des précédents spécifiques dans des milliers de documents PDF internes et bases publiques.",
      solution: "Moteur de recherche sémantique (RAG) sécurisé permettant de poser une question en langage naturel : 'Quels sont les précédents sur les vices cachés en toiture depuis 2020 ?'.",
      impact: "Temps de recherche divisé par 5. Qualité des mémoires améliorée grâce à une exhaustivité garantie."
    },
    {
      id: 8,
      domain: "E-commerce TPE",
      title: "Génération de Fiches Produits SEO",
      icon: ShoppingCart,
      challenge: "Un e-commerçant spécialisé Bio peinait à mettre en ligne ses 500 nouveaux produits annuels avec des descriptions uniques pour le référencement Google.",
      solution: "Workflow IA générant automatiquement titre, description, méta-tags et texte marketing unique à partir d'une simple photo du produit et de ses caractéristiques techniques.",
      impact: "Mise en ligne x10 plus rapide. Trafic organique (SEO) en hausse de 40% grâce à la richesse des contenus."
    },
    {
      id: 9,
      domain: "Agriculture & Viticulture",
      title: "Détection Précoce de Maladies",
      icon: Leaf,
      challenge: "Un domaine viticole traitait l'ensemble de ses parcelles par précaution, coûtant cher en produits phytosanitaires et impactant l'environnement.",
      solution: "Analyse d'images prises par drone pour détecter les premiers signes de mildiou ou de stress hydrique à l'échelle du cep de vigne.",
      impact: "Réduction de 30% des intrants (traitements ciblés uniquement là où nécessaire). Label HVE obtenu plus facilement."
    },
    {
      id: 10,
      domain: "Plomberie & CVC",
      title: "Planning d'Intervention Dynamique",
      icon: Wrench,
      challenge: "La gestion des urgences (fuites, pannes chaudière) désorganisait constamment le planning des 8 techniciens, créant du stress et des retards.",
      solution: "Système de planification intelligent qui réorganise les tournées en temps réel lors d'une urgence, en minimisant l'impact sur les autres rendez-vous.",
      impact: "+2 interventions par technicien par semaine grâce à la réduction des trajets inutiles. Zenitude retrouvée au standard."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Cas d'Usage Concrets</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            L'IA n'est pas une abstraction. C'est un outil qui résout des problèmes coûteux.
            <br className="hidden md:block"/> Voici comment nous transformons les défis des PME françaises en leviers de performance.
          </p>
        </div>
      </div>

      {/* Cases Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12">
          {cases.map((useCase) => (
            <div key={useCase.id} className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              
              {/* Card Header */}
              <div className="bg-slate-100 px-8 py-6 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-lg text-accent shadow-sm">
                    <useCase.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{useCase.domain}</span>
                    <h2 className="text-2xl font-bold text-primary">{useCase.title}</h2>
                  </div>
                </div>
                {/* Badge removed as requested */}
              </div>

              {/* Logic Grid: Challenge -> Solution -> Impact */}
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                
                {/* Challenge */}
                <div className="p-8 group">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <h3 className="font-bold text-lg text-slate-800">Challenge</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {useCase.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-8 bg-blue-50/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="w-5 h-5 text-accent" />
                    <h3 className="font-bold text-lg text-accent">Solution Alpha</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium">
                    {useCase.solution}
                  </p>
                </div>

                {/* Impact */}
                <div className="p-8 bg-teal-50/30">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-5 h-5 text-teal-600" />
                    <h3 className="font-bold text-lg text-teal-700">Impact ROI</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium border-l-4 border-teal-500 pl-4">
                    {useCase.impact}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary rounded-2xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
           {/* Abstract Decoration */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

           <div className="relative z-10">
             <h2 className="text-3xl font-bold text-white mb-6">Vous avez un challenge similaire ?</h2>
             <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
               Ne restez pas avec vos questions. Un diagnostic de 30 minutes suffit souvent pour identifier si l'IA est pertinente pour votre problème.
             </p>
             <Link 
               to="/contact" 
               className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg"
             >
               Étudier mon cas <ArrowRight className="w-5 h-5" />
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;