import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Mail, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

export const Contact = () => {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100/50"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl font-light mb-4">Contact Us</h1>
            <p className="text-gray-600">Get in touch with us for any inquiries about ConstroMan</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Office Address */}
            <div className="flex items-start gap-4">
              <div className="bg-teal-100/70 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Office Address</h3>
                <p className="text-gray-600">
                  H-901, Treasure Park Soc<br />
                  Pune, Maharashtra, 411009<br />
                  India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-teal-100/70 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Email Us</h3>
                <a href="mailto:constromanai@gmail.com" className="text-teal-600 hover:text-teal-700">
                  [constromanai@gmail.com]
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-teal-100/70 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Call Us</h3>
                <a href="tel:+91 95118 76403" className="text-teal-600 hover:text-teal-700">
                  [+91 95118 76403]
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4">
              <div className="bg-teal-100/70 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: [9:00 AM - 6:00 PM]<br />
                  Saturday: [10:00 AM - 2:00 PM]<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};