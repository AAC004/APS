import React from 'react';
import { PROFILE_IMAGE_URL } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header for About Page */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">À Propos</h1>
          <p className="text-xl text-slate-400">La genèse d'Alpha Predict Systems</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg prose-slate mx-auto text-gray-700 leading-relaxed">
          
          <div className="mb-12 border-l-4 border-accent pl-6">
            <h2 className="text-3xl font-bold text-primary mb-4">Pourquoi des Ingénieurs IA ont décidé de parler aux décideurs</h2>
          </div>

          {/* MODIFICATION HERE: Enlarged photo bubble */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
             <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-slate-100 shadow-xl">
                <img src={PROFILE_IMAGE_URL} alt="Fondateur" className="w-full h-full object-cover" />
             </div>
             <div>
                <h3 className="text-xl font-bold text-primary">Ingénieur IA Appliquée</h3>
                <p className="text-accent text-sm mb-4">Fondateur d'Alpha Predict Systems</p>
                <p className="mb-0">
                  Bonjour. Nous sommes l'équipe fondatrice d'<strong>Alpha Predict Systems</strong>. Pendant des années, nous avons travaillé sur des algorithmes complexes, des réseaux de neurones profonds et des infrastructures Big Data.
                </p>
             </div>
          </div>


          <p className="mb-6 font-semibold">
             Un fossé immense sépare l'excellence technologique de la réalité des TPE/PME.
          </p>

          <p className="mb-6">
            D'un côté, des géants de la Tech qui vendent du rêve (et du jargon). De l'autre, des dirigeants d'entreprises formidables, DG, DAF, Directeurs Opérationnels, qui se sentent dépassés. Ils savent qu'il "faut y aller", mais ils ont peur d'investir à perte, de se faire avoir par des prestataires peu scrupuleux, ou de déshumaniser leur entreprise.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Notre mission : Reconnecter l'Intelligence Artificielle au terrain</h3>

          <p className="mb-6">
            Nous avons créé Alpha Predict Systems avec une conviction simple : <strong>l'IA n'a de valeur que si elle sert une stratégie business claire.</strong>
          </p>

          <p className="mb-6">
            Notre groupe a décidé de quitter le confort de la technique pure pour endosser le rôle de traducteur et de partenaire stratégique. Nous ne sommes pas là pour vous vendre l'algorithme le plus complexe, mais le plus <em>utile</em>.
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-8 bg-slate-50 p-6 rounded-lg border border-slate-100">
            <li><strong>Loin du buzz :</strong> Nous ne vous parlerons pas de la dernière tendance TikTok, mais de l'optimisation de vos stocks ou de l'automatisation de votre facturation.</li>
            <li><strong>Proche du terrain :</strong> Nous privilégions une approche "Slow Content" et sur-mesure. Nous prenons le temps de comprendre votre métier avant d'ouvrir un ordinateur.</li>
            <li><strong>Transmission :</strong> Au-delà du conseil, nous nous engageons à travers des webinaires mensuels et une veille active pour vous rendre autonome.</li>
          </ul>

          <p>
            L'IA est un outil puissant, peut-être le plus puissant de notre siècle. Notre travail est de nous assurer qu'elle devienne <strong>votre</strong> levier de croissance, en toute sécurité et transparence.
          </p>

          <div className="mt-12 text-right">
             <p className="text-xl font-handwriting italic text-slate-500">L'équipe Alpha Predict Systems</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;