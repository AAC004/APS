import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Mentions Légales</h1>
        
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">1. Éditeur du site</h2>
            <p>
              Le site <strong>alphapredict.fr</strong> est édité par <strong>Alpha Predict Systems</strong>.
            </p>
            <ul className="list-none pl-0 space-y-2 mt-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
              <li><strong>Siège social :</strong> 41 RUE Jacquemars Gielée, 59800 Lille, FRANCE</li>
              <li><strong>SIREN :</strong> 988 041 620</li>
              <li><strong>Code APE :</strong> 7022Z - Conseil pour les affaires et autres conseils de gestion</li>
              <li><strong>Forme juridique :</strong> Sole Proprietorship</li>
              <li><strong>Contact :</strong> contact@alphapredict.fr</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">2. Hébergement</h2>
            <p>
              Ce site est hébergé par <strong>LWS (Ligne Web Services)</strong>.
            </p>
            <ul className="list-none pl-0 space-y-2 mt-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
              <li><strong>Adresse :</strong> 10, RUE PENTHIEVRE, 75008 PARIS, FRANCE</li>
              <li><strong>Site web :</strong> <a href="https://www.lws.fr" target="_blank" rel="noopener noreferrer" className="text-accent underline">www.lws.fr</a></li>
              <li><strong>Informations Société :</strong> Société à responsabilité limitée au capital de 500 000 Euros</li>
              <li><strong>RCS :</strong> Paris B 851 919 333 00036</li>
              <li><strong>Certification :</strong> Data Center certifiés ISO 27001 et hébergement en France</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">3. Activité</h2>
            <p>
              L'entreprise a pour activité principale le conseil et l'assistance opérationnelle apportés aux entreprises, notamment la fourniture de services administratifs, de gestion et de solutions digitales (incluant la gestion de données et l'optimisation des processus).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;