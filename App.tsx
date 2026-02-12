import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, ArrowRight } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import UseCases from './pages/UseCases';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';
import Careers from './pages/Careers';

// --- Components ---

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: "Cas d'Usage", path: '/use-cases' },
    { name: 'Carrières', path: '/careers' },
    { name: 'Ressources', path: '/blog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">α</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-primary">Alpha Predict Systems</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-accent bg-blue-50'
                    : 'text-gray-600 hover:text-accent hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-blue-900/20"
            >
              Prendre RDV
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-accent bg-blue-50'
                    : 'text-gray-600 hover:text-accent hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="w-full text-left block px-3 py-2 text-base font-medium text-white bg-primary rounded-md mt-4"
            >
              Prendre RDV
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-slate-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">α</span>
              </div>
              <span className="font-bold text-xl text-white">Alpha Predict Systems</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-slate-400">
              Expertise Data Science & IA pragmatique pour les dirigeants qui exigent des résultats mesurables. Qualité artisanale, impact industriel.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact & Légal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/legal" className="hover:text-white transition-colors">Mentions Légales</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Politique de Confidentialité</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Carrières / Recrutement</Link></li>
              <li><a href="mailto:contact@alphapredict.fr" className="hover:text-white transition-colors">contact@alphapredict.fr</a></li>
              <li>41 RUE Jacquemars Gielée, 59800 Lille</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Nous contacter</h3>
            <div className="flex space-x-4 mb-6">
              <a href="mailto:contact@alphapredict.fr" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                <Mail className="h-6 w-6" />
                <span>Nous écrire</span>
              </a>
            </div>
            <p className="text-xs text-slate-500">
              © 2025 Alpha Predict Systems. Tous droits réservés.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500 font-mono">
            Designed for Performance & ROI.
          </p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;