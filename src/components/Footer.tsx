import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} ConstroMan. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link 
              to="/privacy-policy" 
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}; 