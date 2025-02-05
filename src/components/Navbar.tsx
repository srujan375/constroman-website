import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 backdrop-blur-sm sticky top-0 z-50 py-4 px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link to="/">
            <Logo />
          </Link>
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
        </div>

        <div className="flex items-center">
          <a 
            href="https://www.constroman.co.in/" 
            className="text-sm text-teal-600 hover:text-teal-700 transition-colors px-6 py-1.5 border border-teal-600 rounded-md"
          >
            Login
          </a>
          <button
            className="md:hidden ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

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
    </nav>
  );
};