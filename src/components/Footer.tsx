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
            <p className="text-white mb-6">
              AirStaff, nessuna perdita di tempo. tutto in un'unica piattaforma.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/airstaff-it/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Links Utili</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/faq" className="text-white hover:text-white transition-colors">Domande frequenti</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contattaci</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-white mr-3 mt-1" />
                <span className="text-white">
                  Via Comelico 11<br />
                  20135 Milano, Italia
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-white mr-3" />
                <a href="mailto:hello@airstaff.it" className="text-white hover:text-white transition-colors">
                  hello@airstaff.it
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
