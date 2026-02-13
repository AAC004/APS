import { createClient } from '@supabase/supabase-js';

// Fonction pour récupérer les variables d'environnement de manière sécurisée
// Compatible Vite (import.meta.env) et autres environnements
const getEnvVar = (key: string) => {
  // Vérification sécurisée pour import.meta.env
  const meta = import.meta as any;
  if (meta && meta.env && meta.env[key]) {
    return meta.env[key];
  }
  
  // Fallback pour process.env (si défini)
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key];
  }
  
  return '';
};

const supabaseUrl = getEnvVar('VITE_SUPABASE_URL');
const supabaseAnonKey = getEnvVar('VITE_SUPABASE_ANON_KEY');

if (!supabaseUrl || !supabaseAnonKey) {
  // Avertissement en console mais pas de crash immédiat
  console.warn("Supabase URLs manquantes. Vérifiez votre fichier .env.local");
}

// Initialisation avec des valeurs par défaut pour éviter le crash de l'application
// Si les clés sont absentes, les appels API échoueront proprement au lieu de casser toute l'UI
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseAnonKey || 'placeholder-key'
);