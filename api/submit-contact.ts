import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

// Nous redéfinissons le schéma ici ou l'importons d'un package partagé si configuré.
// Pour la simplicité dans un déploiement Vite/Vercel standard sans monorepo complexe :
const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  subject: z.string().min(1),
  userId: z.string().optional(),
});

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // 1. Validation des données entrantes (Server-Side Validation)
    const validatedData = contactSchema.parse(request.body);

    // 2. Initialisation de Supabase avec la clé ADMIN (Service Role)
    // C'est ici que la sécurité opère : cette clé n'est jamais exposée au client.
    // Elle permet d'écrire dans la base de données en contournant les restrictions RLS si nécessaire,
    // ou simplement d'agir en tant que serveur de confiance.
    const supabaseAdmin = createClient(
      process.env.VITE_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // 3. Insertion dans la base de données
    const { error } = await supabaseAdmin
      .from('contacts')
      .insert({
        user_id: validatedData.userId || null, // Peut être null si on autorisait les anonymes, mais ici on a bloqué coté client
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        subject: validatedData.subject,
        created_at: new Date().toISOString(),
      });

    if (error) {
      console.error("Supabase Error:", error);
      throw new Error("Database insertion failed");
    }

    return response.status(200).json({ success: true, message: "Demande enregistrée avec succès" });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return response.status(400).json({ error: "Données invalides", details: error.errors });
    }
    console.error("Server Error:", error);
    return response.status(500).json({ error: "Erreur interne du serveur" });
  }
}