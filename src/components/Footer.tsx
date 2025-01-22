import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 right-0 p-4 bg-gradient-to-r from-transparent to-white">
      <div className="flex gap-4 text-sm">
        <Link 
          to="/privacy-policy" 
          className="text-gray-600 hover:text-teal-600 transition-colors duration-200"
        >
          Privacy Policy
        </Link>
        <Link 
          to="/terms" 
          className="text-gray-600 hover:text-teal-600 transition-colors duration-200"
        >
          Terms & Conditions
        </Link>
        <Link 
          to="/refund-policy" 
          className="text-gray-600 hover:text-teal-600 transition-colors duration-200"
        >
          Refund Policy
        </Link>
      </div>
    </footer>
  );
}; 