
import React from 'react';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <Logo className="mb-6" />
            <p className="text-gray-400 mb-6">
              AirStaff è il motore di ricerca intelligente che ti elenca, in una sola ricerca, tutti i lavoratori disponibili tramite le agenzie per il lavoro associate.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/airstaff" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Links Utili</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/come-funziona" className="text-gray-400 hover:text-white transition-colors">Come Funziona</Link>
              </li>
              <li>
                <Link to="/chi-siamo" className="text-gray-400 hover:text-white transition-colors">Chi Siamo</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contattaci</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-gray-400 mr-3 mt-1" />
                <span className="text-gray-400">
                  Via Comelico 11<br />
                  20135 Milano, Italia
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gray-400 mr-3" />
                <a href="mailto:info@airstaff.com" className="text-gray-400 hover:text-white transition-colors">
                  info@airstaff.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} AirStaff. Tutti i diritti riservati.
            </p>
            <div className="mt-4 sm:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="text-gray-500 hover:text-white transition-colors">
                    Termini e Condizioni
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-policy" className="text-gray-500 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
