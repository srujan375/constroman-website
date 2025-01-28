import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 hover:text-teal-600 transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <ScrollLink 
            to="data-driven-insights" 
            smooth={true} 
            duration={500}
            offset={-100}
            className="text-sm text-gray-600 hover:text-teal-600 transition-colors cursor-pointer"
          >
            Insights
          </ScrollLink>
          <Link to="/contact" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
            Contact
          </Link>
          <Link to="/about" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
            About Us
          </Link>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm flex-col items-center py-4 gap-4 border-b border-gray-100`}>
          <ScrollLink 
            to="data-driven-insights" 
            smooth={true} 
            duration={500}
            offset={-100}
            className="text-sm text-gray-600 hover:text-teal-600 transition-colors cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Insights
          </ScrollLink>
          <Link to="/contact" className="text-sm text-gray-600 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/about" className="text-sm text-gray-600 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};