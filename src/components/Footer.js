import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowUp
} from 'lucide-react';
import Logo from './Logo';
import { SOCIAL_LINKS } from '../utils/actions';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-100 text-gray-900">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo size="large" className="mb-4" />
              <p className="text-gray-600 text-sm">AI-First Drug Discovery Platform</p>
            </div>
            
            <p className="text-gray-700 mb-6 max-w-md">
              Revolutionizing drug discovery with AI. 90.8% AUC model performance, 
              generating synthesis-optimized compounds for breakthrough treatments.
            </p>
            
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-600 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Technology', href: '#technology' },
                { name: 'Results', href: '#results' },
                { name: 'Market', href: '#market' },
                { name: 'Team', href: '#team' },
                { name: 'Investment', href: '#investment' }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-gray-700">ryanmota@cognivus.ca</div>
                </div>
              </div>
              
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="text-gray-700">Niagara Falls, ON</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimers */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h5 className="font-semibold mb-3">Investment Disclaimer</h5>
              <p className="text-sm text-gray-400">
                This presentation is for informational purposes only and does not constitute 
                an offer to sell or a solicitation of an offer to buy any securities. 
                Past performance does not guarantee future results.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Drug Development Risks</h5>
              <p className="text-sm text-gray-400">
                Drug development involves substantial risks and uncertainties. 
                Success in preclinical studies does not guarantee clinical success. 
                Regulatory approval is not assured.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Forward-Looking Statements</h5>
              <p className="text-sm text-gray-400">
                This presentation contains forward-looking statements that involve risks 
                and uncertainties. Actual results may differ materially from those 
                projected in forward-looking statements.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2025 Cognivus. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <button 
              onClick={() => alert('Privacy Policy - Please contact ryanmota@cognivus.ca for our privacy policy.')} 
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => alert('Terms of Service - Please contact ryanmota@cognivus.ca for our terms of service.')} 
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Terms of Service
            </button>
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-white"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Scroll to top"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
