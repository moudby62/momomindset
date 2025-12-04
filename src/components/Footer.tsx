import { Link } from 'react-router-dom'
import { Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-800 border-t border-dark-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-dark-900 font-bold">
                M
              </div>
              <span className="font-serif text-lg font-bold text-gold-500">MomoMindset</span>
            </div>
            <p className="text-gray-400 text-sm">Réveille ta force intérieure.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-gold-500 transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-gold-500 transition-colors">À propos</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-gold-500 transition-colors">Communauté</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif font-bold text-white mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><Link to="/articles" className="text-gray-400 hover:text-gold-500 transition-colors">Articles</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-gold-500 transition-colors">Ressources</Link></li>
              <li><Link to="/podcast" className="text-gray-400 hover:text-gold-500 transition-colors">Podcast</Link></li>
              <li><Link to="/newsletter" className="text-gray-400 hover:text-gold-500 transition-colors">Newsletter</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:Businessinstagram620@gmail.com" className="flex items-center space-x-2 text-gray-400 hover:text-gold-500 transition-colors">
                <Mail size={18} />
                <span className="text-sm">Email</span>
              </a>
              <a href="https://wa.me/224666789916" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-gold-500 transition-colors">
                <Phone size={18} />
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} MomoMindset. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
