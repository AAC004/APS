import React, { useState } from 'react';
import { Phone, Clock, Loader2, Lock, AlertTriangle, CheckCircle } from 'lucide-react';
import { Session } from '@supabase/supabase-js';
import { contactFormSchema, ContactFormData } from '../lib/schemas';
import { z } from 'zod';

interface ContactProps {
  session: Session | null;
  onOpenAuth: () => void;
}

const Contact: React.FC<ContactProps> = ({ session, onOpenAuth }) => {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    name: '',
    phone: '',
    email: session?.user?.email || '',
    subject: 'Je souhaite un diagnostic rapide'
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // Clear error for this field when typing
    if (validationErrors[e.target.id]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[e.target.id];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) {
      onOpenAuth();
      return;
    }

    setStatus('submitting');
    setValidationErrors({});
    setErrorMessage('');

    try {
      // 1. Validation Client (Zod)
      const validData = contactFormSchema.parse({
        ...formData,
        userId: session.user.id
      });

      // 2. Appel API Route (Server Side)
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erreur lors de l'envoi");
      }

      setStatus('success');
      setFormData({ name: '', phone: '', email: session.user.email || '', subject: 'Je souhaite un diagnostic rapide' });
      
    } catch (err: any) {
      console.error(err);
      if (err instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        err.errors.forEach(e => {
          if (e.path[0]) errors[e.path[0] as string] = e.message;
        });
        setValidationErrors(errors);
        setErrorMessage("Veuillez corriger les erreurs dans le formulaire.");
      } else {
        setErrorMessage(err.message || "Une erreur technique est survenue.");
      }
      setStatus('error');
    }
  };

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
          <div className="p-8 md:p-12 relative">
            
            {/* Protection Layer if not logged in */}
            {!session && (
              <div className="absolute inset-0 z-10 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8">
                <div className="bg-blue-50 p-4 rounded-full mb-4">
                  <Lock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Espace Réservé</h3>
                <p className="text-gray-600 mb-6 max-w-xs">
                  Pour garantir la qualité de nos échanges et éviter le spam, merci de vous identifier pour nous contacter.
                </p>
                <button 
                  onClick={onOpenAuth}
                  className="bg-primary hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  Se connecter / S'inscrire
                </button>
              </div>
            )}

            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-50 p-3 rounded-full text-accent">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-primary">Engagement Alpha</h3>
                <p className="text-sm text-gray-500">Rappel garanti sous 4 heures ouvrées.</p>
              </div>
            </div>

            {status === 'success' ? (
              <div className="text-center py-12 animate-in fade-in zoom-in">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Demande Reçue !</h3>
                <p className="text-gray-600">
                  Merci {session?.user?.email}. Nous avons bien reçu votre demande de diagnostic. Un consultant vous contactera très rapidement.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-accent font-semibold hover:underline"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> {errorMessage}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white text-black border ${validationErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-accent outline-none transition-all placeholder-gray-400`} 
                    placeholder="Jean Dupont" 
                  />
                  {validationErrors.name && <p className="text-red-500 text-xs mt-1">{validationErrors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="tel" 
                      id="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-10 px-4 py-3 bg-white text-black border ${validationErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-accent outline-none transition-all placeholder-gray-400`} 
                      placeholder="06 12 34 56 78" 
                    />
                  </div>
                  {validationErrors.phone && <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email professionnel</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    readOnly
                    className="w-full px-4 py-3 bg-gray-100 text-gray-500 border border-gray-300 rounded-lg cursor-not-allowed" 
                  />
                  <p className="text-xs text-gray-400 mt-1">L'email de votre compte est utilisé automatiquement.</p>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                  <select 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none transition-all"
                  >
                    <option>Je souhaite un diagnostic rapide</option>
                    <option>Demande de formation</option>
                    <option>Question sur l'accompagnement</option>
                    <option>Autre</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-primary hover:bg-slate-800 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex justify-center items-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours...
                    </>
                  ) : (
                    'Être rappelé sous 4h'
                  )}
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">
                  En soumettant ce formulaire, vous acceptez d'être contacté dans le cadre de votre demande. Vos données sont sécurisées.
                </p>
              </form>
            )}
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