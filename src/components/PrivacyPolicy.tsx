import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Logo } from './Logo';

export const PrivacyPolicy = () => {
  return (
    <>
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
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto px-4 py-8"
      >
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Collection and Usage</h2>
          <p className="mb-4">When you use ConstroMan's services, we collect and process the following information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and contact information</li>
            <li>Email address</li>
            <li>Company details</li>
            <li>Payment information (processed securely through Razorpay)</li>
            <li>Usage data and analytics</li>
            <li>Communication preferences</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Payment Processing</h2>
          <p className="mb-4">Our payment processing is handled securely through Razorpay. When processing payments:</p>
          <ul className="list-disc pl-6">
            <li>All transactions are encrypted and processed securely</li>
            <li>Payment information is handled directly by Razorpay</li>
            <li>We do not store your complete payment details</li>
            <li>Transaction history is maintained for legal and accounting purposes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="mb-4">Your data is protected using industry-standard security measures:</p>
          <ul className="list-disc pl-6">
            <li>SSL/TLS encryption for all data transmission</li>
            <li>Regular security audits and updates</li>
            <li>Restricted access to personal information</li>
            <li>Compliance with data protection regulations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request data deletion</li>
            <li>Withdraw consent for data processing</li>
            <li>Receive a copy of your data</li>
            <li>Object to data processing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4">For privacy-related inquiries, contact us at:</p>
          <div className="bg-gray-50/70 backdrop-blur-sm p-4 rounded-lg border border-gray-100/50">
            <p>ConstroMan</p>
            <p>H-901, Treasure Park Soc</p>
            <p>Pune, Maharashtra 411057</p>
            <p>Email:constromanai@gmail.com</p>
            <p>Phone: +91 95118 76403</p>
          </div>
        </section>
      </motion.div>
    </>
  );
}; 