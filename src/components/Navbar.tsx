import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Logo } from './Logo';

export const Navbar = () => (
  <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 border-b border-gray-100">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex items-center gap-8">
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
  </nav>
);