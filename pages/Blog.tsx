import React, { useState } from 'react';
import { Calendar, Mic, FileText, ArrowRight, Video, X } from 'lucide-react';
import { BLOG_ARTICLES, PAST_WEBINARS } from '../constants';

const Blog: React.FC = () => {
  const [showWebinarModal, setShowWebinarModal] = useState(false);
  const [showArticleModal, setShowArticleModal] = useState(false);
  const [selectedWebinar, setSelectedWebinar] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  const handleRegisterClick = (webinarTitle: string) => {
    setSelectedWebinar(webinarTitle);
    setShowWebinarModal(true);
  };

  const handleArticleClick = (article: any) => {
    setSelectedArticle(article);
    setShowArticleModal(true);
  };

  const closeModals = () => {
    setShowWebinarModal(false);
    setShowArticleModal(false);
    setSelectedWebinar(null);
    setSelectedArticle(null);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
       {/* Header for Blog Page */}
       <div className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">Ressources & Veille</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Accédez à notre bibliothèque de contenus. Notre engagement : analyser l'actualité avec un prisme ROI pour les dirigeants.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content: Articles */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-accent" />
              Articles de fond
            </h2>

            {BLOG_ARTICLES.map((article) => (
              <article 
                key={article.id} 
                onClick={() => handleArticleClick(article)}
                className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer overflow-hidden flex flex-col md:flex-row"
              >
                {/* Image Section */}
                <div className="md:w-1/3 h-48 md:h-auto relative">
                   <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                   />
                </div>

                {/* Content Section */}
                <div className="p-6 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2 text-sm">
                      <span className="bg-blue-50 text-accent px-2 py-1 rounded font-medium text-xs uppercase tracking-wide">{article.category}</span>
                      <span className="text-gray-400 flex items-center gap-1 text-xs"><Calendar className="w-3 h-3" /> {article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2 hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {article.summary}
                    </p>
                  </div>
                  <div className="flex items-center text-accent font-semibold text-sm mt-auto">
                    Lire l'analyse <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar: Webinars */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-slate-900 text-white p-6 rounded-xl shadow-xl">
                 <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                   <Video className="w-5 h-5 text-red-400" /> Replays Webinaires
                 </h3>
                 <p className="text-slate-400 text-sm mb-6">Accédez aux sessions des 3 derniers mois.</p>
                 
                 <div className="space-y-4">
                   {PAST_WEBINARS.map((web) => (
                     <div key={web.id} className="block bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-xs text-blue-300 font-mono">{web.date}</span>
                        </div>
                        <h4 className="font-semibold text-sm mb-1">{web.title}</h4>
                        <p className="text-xs text-slate-400 mb-3">{web.description}</p>
                        <button 
                          onClick={() => handleRegisterClick(web.title)}
                          className="w-full text-center bg-accent hover:bg-blue-600 text-white text-xs py-2 rounded transition-colors font-medium"
                        >
                          Accéder au replay
                        </button>
                     </div>
                   ))}
                 </div>
              </div>

              {/* Newsletter Box */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-bold text-primary mb-2">Restez informé</h3>
                <p className="text-sm text-gray-500 mb-4">Recevez une notification lors de la sortie de nos prochaines analyses.</p>
                <input type="email" placeholder="Email professionnel" className="w-full px-3 py-2 bg-white text-black border border-slate-200 rounded-md mb-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent placeholder-gray-400" />
                <button className="w-full bg-slate-100 text-slate-600 font-medium text-sm py-2 rounded hover:bg-slate-200 transition-colors">
                  M'inscrire
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Webinar Registration Modal */}
      {showWebinarModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-primary">Accès Replay</h3>
              <button onClick={closeModals} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-4">
                Pour accéder au replay <strong>"{selectedWebinar}"</strong>, merci de compléter ce formulaire.
              </p>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Accès envoyé par email !"); closeModals(); }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Prénom</label>
                    <input type="text" required className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md focus:ring-accent focus:border-accent" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Nom</label>
                    <input type="text" required className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md focus:ring-accent focus:border-accent" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Email professionnel</label>
                  <input type="email" required className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md focus:ring-accent focus:border-accent" />
                </div>
                <button type="submit" className="w-full bg-accent text-white font-bold py-3 rounded-md hover:bg-blue-600 transition-colors">
                  Regarder maintenant
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Article Reading Modal */}
      {showArticleModal && selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full h-[85vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
             {/* Modal Header */}
            <div className="bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-start shrink-0">
               <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-50 text-accent text-xs px-2 py-1 rounded font-medium uppercase tracking-wide">{selectedArticle.category}</span>
                    <span className="text-gray-400 text-xs flex items-center gap-1"><Calendar className="w-3 h-3" /> {selectedArticle.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary leading-tight">{selectedArticle.title}</h3>
               </div>
              <button onClick={closeModals} className="text-gray-400 hover:text-gray-600 ml-4 p-1 rounded-full hover:bg-slate-100 transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Modal Body (Scrollable) */}
            <div className="p-0 overflow-y-auto">
              <div className="h-64 w-full relative">
                <img src={selectedArticle.imageUrl} className="w-full h-full object-cover" alt="Cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <div 
                  className="prose prose-slate max-w-none prose-lg"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                ></div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 text-center shrink-0">
               <p className="text-sm text-gray-500 mb-3">Cette analyse vous a intéressé ? Discutons de son application pour votre PME.</p>
               <button onClick={closeModals} className="text-accent font-semibold text-sm hover:underline">
                 Fermer et retourner à la liste
               </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Blog;