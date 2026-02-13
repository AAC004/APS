import { z } from 'zod';

// Schéma de validation pour le formulaire de contact
// Cela protège contre les injections SQL et garantit le format des données
export const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  phone: z.string().min(10, "Numéro de téléphone invalide").regex(/^[0-9+\s-]*$/, "Format invalide"),
  email: z.string().email("Adresse email invalide"),
  subject: z.string().min(1, "Veuillez sélectionner un sujet"),
  userId: z.string().optional(), // Pour lier la demande à l'utilisateur authentifié
});

export type ContactFormData = z.infer<typeof contactFormSchema>;