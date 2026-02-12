import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Politique de Confidentialité</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="italic text-sm text-gray-500 mb-8">Dernière mise à jour : Juin 2025</p>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">1. Collecte des données</h2>
            <p>
              Alpha Predict Systems collecte les données que vous nous transmettez volontairement via nos formulaires de contact ou d'inscription aux webinaires (Nom, Prénom, Email, Téléphone, Entreprise).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">2. Utilisation des données</h2>
            <p>Vos données sont utilisées exclusivement pour :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Répondre à vos demandes de contact ou de devis.</li>
              <li>Vous envoyer les informations relatives aux webinaires auxquels vous vous êtes inscrits.</li>
              <li>Vous adresser notre lettre d'information mensuelle (uniquement si vous y avez consenti).</li>
            </ul>
            <p className="mt-4 font-semibold">
              Nous ne revendons jamais vos données à des tiers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">3. Vos droits</h2>
            <p>
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
            </p>
            <p>
              Le déclarant s’est opposé à la mise à disposition de ses données à des fins de prospection en application de l’article 21 du RGPD (art. R.123-320 du code commerce).
            </p>
            <p className="mt-2">
              Pour exercer ces droits, contactez-nous à : <strong>contact@alphapredict.fr</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;