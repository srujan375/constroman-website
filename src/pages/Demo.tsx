import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Logo } from '../components/Logo';
import { DemoForm } from '../components/DemoForm';

export const Demo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <nav className="w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <DemoForm />
      </div>
    </div>
  );
};