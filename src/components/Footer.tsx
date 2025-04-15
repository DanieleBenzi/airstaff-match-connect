
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Logo className="mb-6" />
            <p className="text-gray-400 mb-6">
              AirStaff rivoluziona il modo in cui staffing e aziende si connettono, 
              ottimizzando il processo di ricerca e selezione del personale.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Links Utili</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/#come-funziona" className="text-gray-400 hover:text-white transition-colors">Come Funziona</a>
              </li>
              <li>
                <a href="/#vantaggi" className="text-gray-400 hover:text-white transition-colors">Vantaggi</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Chi Siamo</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contattaci</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-gray-400 mr-3 mt-1" />
                <span className="text-gray-400">
                  Via Roma 123<br />
                  20100 Milano, Italia
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gray-400 mr-3" />
                <span className="text-gray-400">+39 02 1234567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gray-400 mr-3" />
                <a href="mailto:info@airstaff.com" className="text-gray-400 hover:text-white transition-colors">
                  info@airstaff.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Iscriviti alla nostra newsletter per rimanere aggiornato sulle ultime novità
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="La tua email" 
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-airstaff-blue"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-cta text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
              >
                Iscriviti
              </button>
            </form>
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
                  <a href="#" className="text-gray-500 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors">
                    Termini e Condizioni
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors">
                    Cookie Policy
                  </a>
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
