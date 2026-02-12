import React from 'react';
import { ArrowRight, CheckCircle, BarChart3, Database, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OFFERS, PROFILE_IMAGE_URL } from '../constants';

// Helper pour générer des logos textuels propres quand l'image officielle n'est pas disponible publiquement
const generateTextLogo = (text: string, color: string = '#334155') => 
  `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="80" viewBox="0 0 200 80"><rect width="200" height="80" fill="none"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="22" fill="${encodeURIComponent(color)}">${encodeURIComponent(text)}</text></svg>`;

const Home: React.FC = () => {
  
  const scrollToOffers = () => {
    const element = document.getElementById('offers-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const partners = [
    { name: "Bpifrance", logo: "https://www.bativigie.fr/wp-content/uploads/2024/02/Logo-BPI-France.png" },
    { name: "Région Hauts-de-France", logo: "https://bassinminier-patrimoinemondial.org/wp-content/uploads/2014/12/Logo-Re%CC%81gion-HDF-partenaire.jpg" },
    { name: "Communauté Urbaine de Dunkerque", logo: "https://upload.wikimedia.org/wikipedia/fr/5/5b/Logo_M%C3%A9tropole_Europ%C3%A9enne_de_Lille_%28Rectangle%29.png" },
    { name: "Euratechnologies", logo: "https://images.teamtailor-cdn.com/images/s3/teamtailor-production/gallery_picture-v6/image_uploads/8fba743f-80b5-40bf-afa7-48fdac5990b0/original.png" },
    { name: "Université de Lille", logo: "https://grapheine.com/wp-content/uploads/2022/06/co-branding.gif" },
    { name: "Université du Littoral", logo: "https://cel.univ-littoral.fr/wp-content/uploads/2018/06/LOGO-ULCO.png" },
    { name: "Union Européenne", logo: "https://cel.univ-littoral.fr/wp-content/uploads/2020/02/bandeau-compo-logo-FEDER-2048x557.png" },
    { name: "Pépite France", logo: "https://www.pepitea2u.fr/wp-content/uploads/2021/09/logo_pe%CC%81pite.png" },
    
    // Logos générés pour les entités locales sans URL publique stable
    { name: "La Turbine", logo: "https://www.la-turbine.fr/images/logo.png" },
    { name: "La French Tech", logo: "https://lafrenchtech.gouv.fr/app/uploads/2023/09/logo-french-tech.png" },    
    { name: "Hubhouse", logo: "https://cel.univ-littoral.fr/wp-content/uploads/2020/02/Fichier-3-2048x593.png" },
    { name: "CEL", logo: "https://cel.univ-littoral.fr/wp-content/uploads/2019/01/logo_cel2.png" },
    { name: "Osez l'IA", logo: "https://www.francenum.gouv.fr/files/2025-06/logo-osez-ia-pastille-v02.png" },
  ];

  const tools = [
    // Tech Tools (Conservés)
    { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
    { name: "Databricks", logo: "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png" },
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Google Gemini", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
    { name: "Google Colab", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" },
    
    // Financial Tools (URL Publiques)
    { name: "Caisse d'Epargne", logo: "https://www.lesepl.fr/wp-content/uploads/2021/09/caisse-epargne-logo-2021-rvb-1920x629.png" },
    { name: "Interactive Brokers", logo: "https://download.logo.wine/logo/Interactive_Brokers/Interactive_Brokers-Logo.wine.png" },
    { name: "BoursoBank", logo: "https://s3-eu-west-1.amazonaws.com/tpd/logos/65128e7d2e9669167050cf94/0x0.png" },
    { name: "Revolut Business", logo: "https://banque.meilleurtaux.com/images/logo/Logo_Revolut_Busines.png" },
  ];

  return (
    <div className="flex flex-col">
      {/* HEADER / HERO SECTION */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Transformez vos Données en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Leviers de Croissance</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-300 mb-8 font-light leading-relaxed">
              L'Intelligence Artificielle pragmatique pour les dirigeants de TPE/PME. 
              <br className="hidden md:block"/> Expertise technique, langage business, résultats mesurables.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToOffers}
                className="cursor-pointer bg-accent hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                Découvrir nos offres <ArrowRight className="w-5 h-5" />
              </button>
              <Link 
                to="/blog"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm flex items-center justify-center"
              >
                Lire nos analyses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-bold tracking-wider uppercase text-sm">Le Défi</span>
              <h3 className="text-3xl font-bold text-primary mt-2 mb-6">L'IA vous semble complexe, risquée ou réservée aux géants ?</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Vous entendez parler de ChatGPT, de prédictions, d'automatisation. Mais face à la technique, les questions s'accumulent : Par où commencer ? Quel ROI ? Mes données sont-elles en sécurité ?
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Le risque n'est pas d'ignorer l'IA, mais de mal l'investir. Sans guide technique, les projets échouent.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">La Solution Alpha</span>
              <h3 className="text-2xl font-bold text-primary mt-2 mb-6">Nous traduisons la technologie en performance business.</h3>
              <ul className="space-y-4">
                {[
                  { icon: Shield, text: "Sécurité & Confidentialité garanties" },
                  { icon: BarChart3, text: "ROI clair avant chaque projet" },
                  { icon: Database, text: "Solutions sur-mesure, pas d'usine à gaz" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-white p-1 rounded shadow-sm text-accent">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="italic text-gray-500 text-sm">
                  "Alpha Predict Systems agit comme votre Directeur Technique externalisé. Nous filtrons le bruit pour ne garder que ce qui compte pour votre PME."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US / PROFILE SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-16 flex flex-col justify-center">
                <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4">L'approche Artisan Data</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Pourquoi Alpha Predict Systems ?
                </h2>
                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                  <p>
                    Nous ne sommes pas une agence marketing déguisée. Nous sommes des <strong>Ingénieurs IA Appliquée</strong>.
                  </p>
                  <p>
                    Notre engagement : <strong>Qualité > Quantité</strong>. Pour garantir un niveau d'expertise maximal, nous limitons volontairement notre activité de conseil à <strong>5 projets clés par an</strong>.
                  </p>
                  <p>
                    Cette rareté est votre assurance. Quand nous travaillons sur vos données, c'est notre équipe senior qui opère. Nous vous apportons la rigueur scientifique alliée au pragmatisme entrepreneurial.
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-6">
                  <div className="h-40 w-40 rounded-full bg-slate-600 overflow-hidden border-4 border-white/20 shadow-2xl flex-shrink-0">
                     <img src={PROFILE_IMAGE_URL} alt="Ingénieur IA" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">Ingénieur IA Appliquée</p>
                    <p className="text-blue-400 text-base">Fondateur d'Alpha Predict Systems</p>
                  </div>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Réunion stratégique" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM MARQUEE SECTION */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
           <h3 className="text-2xl font-bold text-primary">Notre Écosystème & Partenaires</h3>
           <p className="text-gray-500 mt-2">Ils nous accompagnent et nous fournissent l'excellence technologique.</p>
        </div>

        {/* Row 1: Partners (Left Scroll) */}
        <div className="relative flex overflow-hidden group mb-10">
          <div className="animate-scroll whitespace-nowrap flex gap-12 py-4 items-center">
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className="inline-flex items-center justify-center min-w-[150px] px-4">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-20 w-auto object-contain max-w-[200px]" 
                  title={partner.name}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Tools (Right Scroll) */}
        <div className="relative flex overflow-hidden group">
          <div className="animate-scroll-reverse whitespace-nowrap flex gap-12 py-4 items-center">
            {[...tools, ...tools].map((tool, i) => (
              <div key={i} className="inline-flex items-center justify-center min-w-[150px] px-4">
                 <img 
                  src={tool.logo} 
                  alt={tool.name} 
                  className="h-16 w-auto object-contain max-w-[200px]" 
                  title={tool.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS SECTION */}
      <section id="offers-section" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Une expertise graduée selon votre maturité</h2>
            <p className="text-gray-600 text-lg">
              De la simple acculturation au déploiement de solutions complexes. Avancez à votre rythme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OFFERS.map((offer, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-slate-100 group flex flex-col">
                <div className="w-12 h-12 bg-blue-50 text-accent rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <offer.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{offer.title}</h3>
                <h4 className="text-accent font-medium mb-4 text-sm uppercase tracking-wide">{offer.subtitle}</h4>
                <p className="text-gray-600 mb-8 min-h-[80px]">{offer.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {offer.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block text-center w-full py-3 px-4 border border-slate-200 rounded-lg text-primary font-semibold hover:border-accent hover:text-accent transition-colors">
                  En savoir plus
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;