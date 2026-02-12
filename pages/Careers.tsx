import React, { useState } from 'react';
import { 
  Target, Zap, Users, Heart, Shield, BookOpen, 
  Briefcase, GraduationCap, ArrowRight, CheckCircle, Mail, ExternalLink 
} from 'lucide-react';

const Careers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  // State for form fields to construct the mailto link
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: 'Commercial / Business Development',
    linkedin: '',
    pitch: ''
  });

  const toggleTab = (id: string) => {
    setActiveTab(activeTab === id ? null : id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Candidature Stage - ${formData.domain} - ${formData.name}`;
    const body = `Nom: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ADomaine: ${formData.domain}%0D%0ALinkedIn: ${formData.linkedin}%0D%0A%0D%0APitch:%0D%0A${formData.pitch}`;
    window.location.href = `mailto:contact@alphapredict.fr?subject=${subject}&body=${body}`;
  };

  const values = [
    { icon: Target, title: "Pragmatisme Radical", desc: "Nous ne faisons pas de la R&D pour la gloire. Chaque ligne de code doit servir un objectif business concret pour nos clients." },
    { icon: Shield, title: "Transparence Totale", desc: "Pas de politique interne. Nous disons les choses telles qu'elles sont. L'honnêteté fait gagner du temps." },
    { icon: Zap, title: "Vitesse & Excellence", desc: "Nous livrons vite, mais nous livrons propre. L'agilité n'est pas une excuse pour la dette technique." },
    { icon: Users, title: "Esprit d'Équipe", desc: "On gagne ensemble, on apprend ensemble. Le savoir est fait pour être partagé." },
    { icon: BookOpen, title: "Curiosité Insatiable", desc: "L'IA change chaque semaine. Si vous n'aimez pas apprendre en permanence, vous allez vous ennuyer." },
    { icon: Heart, title: "Bienveillance", desc: "L'exigence n'empêche pas la gentillesse. Nous prenons soin les uns des autres." }
  ];

  const offers = [
    {
      id: "bizdev",
      title: "Bras Droit CEO - Business Developer",
      type: "Stage (max 2 mois)",
      profile: "Master / Bachelor - Commerce",
      desc: "Vous ne servirez pas le café. Vous apprendrez à négocier, à qualifier des leads B2B complexes et à construire des offres commerciales pour des dirigeants de PME.",
      missions: [
        "Qualification des prospects entrants et sortants",
        "Participation aux rendez-vous stratégiques clients",
        "Rédaction de propositions commerciales",
        "Veille concurrentielle et sectorielle"
      ]
    },
    {
      id: "tech",
      title: "Junior AI Engineer / Data Analyst",
      type: "Stage (max 2 mois)",
      profile: "Master / École d'Ingénieur - IT/Data",
      desc: "Plongez dans le code réel. Pas de POCs jetables, mais des intégrations concrètes d'agents IA, de RAG et d'automatisations No-Code/Low-Code.",
      missions: [
        "Développement de scripts Python pour l'analyse de données",
        "Configuration de workflows d'automatisation (Make/n8n)",
        "Test et benchmark des nouveaux modèles LLM",
        "Nettoyage et structuration de datasets clients"
      ]
    },
    {
      id: "marketing",
      title: "Growth & Content Marketing",
      type: "Stage (max 2 mois)",
      profile: "Master / Bachelor - Com/Marketing",
      desc: "L'IA est un sujet complexe. Votre mission : le rendre simple et désirable. Vous gérerez la voix d'Alpha Predict Systems.",
      missions: [
        "Rédaction d'articles de blog à forte valeur ajoutée (SEO)",
        "Création de cas d'usage visuels pour LinkedIn",
        "Organisation des webinaires mensuels",
        "Analyse des performances des campagnes"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Rejoignez l'Avant-Garde</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Alpha Predict Systems recrute les talents de demain. <br/>
            Nous privilégions les <strong>stages courts et intenses (moins de 2 mois)</strong> pour une immersion rapide. 
            <br/>Possibilité d'extension jusqu'à 6 mois selon profil et besoins.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
            <GraduationCap className="w-4 h-4 text-accent" />
            <span>Spécial Étudiants Master & Bachelor</span>
          </div>
        </div>
      </section>

      {/* Mindset Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Le "Mindset" Alpha</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nous ne cherchons pas des exécutants, mais des <strong>intrapreneurs</strong>. 
              Chez nous, il n'y a pas de manuel prédéfini pour chaque tâche. Vous serez confronté à des problèmes nouveaux que personne n'a encore résolus. 
              Si vous aimez l'autonomie, que vous n'avez pas peur de demander "pourquoi" et que vous voulez voir l'impact direct de votre travail sur des entreprises françaises, vous êtes au bon endroit.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Nos 6 Piliers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-50 text-accent rounded-lg flex items-center justify-center mb-6">
                  <val.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{val.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Pourquoi faire votre stage chez nous ?</h2>
              <ul className="space-y-4">
                {[
                  "Formation intensive : Apprenez plus en 1 mois qu'en 6 mois ailleurs",
                  "Mentorat direct par des experts seniors (pas de management intermédiaire)",
                  "Accès aux meilleurs outils du marché (Licences OpenAI, Midjourney, Copilot fournies)",
                  "Télétravail flexible (Hybride Lille ou Full Remote possible selon profil)",
                  "Réelles responsabilités : vos livrables partent en production"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-4">Format du stage</h3>
                 <p className="text-slate-300 mb-4">
                   Nous privilégions les stages <strong>non rémunérés de courte durée (inférieur à 2 mois)</strong>, axés sur la formation et la découverte.
                 </p>
                 <p className="text-slate-300 font-medium mb-4">
                   Des exceptions pour des stages de 4 à 6 mois (gratifiés) sont possibles pour des profils techniques autonomes déjà opérationnels.
                 </p>
                 <div className="mt-6 flex items-center gap-2 text-sm text-blue-300">
                    <CheckCircle className="w-4 h-4" /> Pas d'alternance pour le moment
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Postes Ouverts</h2>
          
          <div className="space-y-4">
            {offers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <button 
                  onClick={() => toggleTab(offer.id)}
                  className="w-full px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left hover:bg-slate-50 transition-colors"
                >
                  <div>
                    <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                      {offer.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                      <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {offer.type}</span>
                      <span className="flex items-center gap-1"><GraduationCap className="w-4 h-4" /> {offer.profile}</span>
                    </div>
                  </div>
                  <div className={`transform transition-transform ${activeTab === offer.id ? 'rotate-90' : ''}`}>
                    <div className="bg-primary text-white p-2 rounded-full">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>
                
                {activeTab === offer.id && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50">
                    <p className="text-gray-700 mb-4">{offer.desc}</p>
                    <h4 className="font-semibold text-sm uppercase text-gray-500 mb-2">Vos Missions :</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-6">
                      {offer.missions.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                    <a 
                      href={`mailto:contact@alphapredict.fr?subject=Candidature ${offer.title}`} 
                      className="inline-flex items-center gap-2 bg-accent hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors text-sm"
                    >
                      <Mail className="w-4 h-4" /> Postuler par Email
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-4">Collaborons ensemble</h2>
            <p className="text-gray-600">
              Candidature spontanée ? Complétez ce formulaire pour préparer votre email de candidature.
            </p>
          </div>

          <form className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-lg" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prénom & Nom</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" 
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Domaine souhaité</label>
              <select 
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent"
              >
                <option>Commercial / Business Development</option>
                <option>Marketing / Communication</option>
                <option>Tech / Data / IT</option>
                <option>Autre (Candidature Spontanée)</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Lien LinkedIn ou Portfolio</label>
              <input 
                type="url" 
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/votre-profil" 
                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent" 
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Pourquoi vous ? (Le pitch)</label>
              <textarea 
                rows={4} 
                name="pitch"
                value={formData.pitch}
                onChange={handleChange}
                required 
                placeholder="Dites-nous pourquoi nous devrions travailler ensemble en quelques phrases percutantes..." 
                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent"
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <button type="submit" className="flex-1 bg-primary hover:bg-slate-800 text-white font-bold py-3 rounded-lg shadow-lg transition-all flex justify-center items-center gap-2">
                <Mail className="w-5 h-5" /> Envoyer ma candidature (Email)
              </button>
              
              <a 
                href="https://docs.google.com/forms" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-bold py-3 rounded-lg shadow transition-all flex justify-center items-center gap-2"
              >
                 <ExternalLink className="w-5 h-5" /> Via Google Forms
              </a>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              Ce bouton ouvrira votre client mail par défaut.
            </p>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Careers;