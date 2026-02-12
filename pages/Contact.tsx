import React from 'react';
import { Phone, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary mb-4">Discutons de vos données</h1>
          <p className="text-gray-600 text-lg">
            Pas de chatbot, pas de serveur vocal. Un ingénieur vous rappelle.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-50 p-3 rounded-full text-accent">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-primary">Engagement Alpha</h3>
                <p className="text-sm text-gray-500">Rappel garanti sous 4 heures ouvrées.</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Demande envoyée ! Nous vous rappelons très vite."); }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input type="text" id="name" required className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder-gray-400" placeholder="Jean Dupont" />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="tel" id="phone" required className="w-full pl-10 px-4 py-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder-gray-400" placeholder="06 12 34 56 78" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email professionnel</label>
                <input type="email" id="email" required className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder-gray-400" placeholder="jean@entreprise.fr" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet (Optionnel)</label>
                <select id="subject" className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all">
                  <option>Je souhaite un diagnostic rapide</option>
                  <option>Demande de formation</option>
                  <option>Question sur l'accompagnement</option>
                  <option>Autre</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-slate-800 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                Être rappelé sous 4h
              </button>
              <p className="text-xs text-center text-gray-400 mt-4">
                En soumettant ce formulaire, vous acceptez d'être contacté dans le cadre de votre demande. Vos données ne sont jamais revendues.
              </p>
            </form>
          </div>

          <div className="bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-6">Coordonnées</h3>
              <div className="space-y-4 text-slate-300">
                <p className="flex items-start gap-3">
                  <span className="font-semibold text-white min-w-[60px]">Email:</span>
                  <a href="mailto:contact@alphapredict.fr" className="hover:text-accent transition-colors">contact@alphapredict.fr</a>
                </p>
                <p className="flex items-start gap-3">
                  <span className="font-semibold text-white min-w-[60px]">Siège:</span>
                  <span>41 RUE Jacquemars Gielée<br/>59800 Lille, FRANCE</span>
                </p>
              </div>
            </div>

            <div className="mt-12 opacity-80">
                <p className="text-sm text-slate-400">Pour toute demande urgente, privilégiez le formulaire pour un rappel prioritaire.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;