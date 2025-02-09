import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Logo } from './Logo';

export const RefundPolicy = () => {
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
        <h1 className="text-3xl font-bold mb-6">Refund & Cancellation Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">No Refund Policy</h2>
          <p className="mb-4">
            At ConstroMan, we maintain a strict no-refund policy for all our services and subscriptions. By making a purchase, you acknowledge and agree that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>All sales are final and non-refundable</li>
            <li>Subscription payments, once processed, cannot be reversed</li>
            <li>Service cancellations do not qualify for partial refunds</li>
            <li>Unused service period will remain accessible until the subscription end date</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Exceptional Circumstances</h2>
          <p className="mb-4">
            In cases of unauthorized transactions or technical errors in payment processing, please contact our support team immediately. Such cases will be reviewed on an individual basis.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4">For any questions about this policy, please contact us at:</p>
          <div className="bg-gray-50/70 backdrop-blur-sm p-4 rounded-lg border border-gray-100/50">
            <p>ConstroMan</p>
            <p>H-901, Treasure Park Soc</p>
            <p>Pune, Maharashtra 411057</p>
            <p>Email:constromanai@gmail.com</p>
            <p>Phone: +91 95118 76403</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Policy Updates</h2>
          <p>
            We reserve the right to modify this policy at any time. Any changes will be effective immediately upon posting on our website. Continued use of our services after such modifications constitutes acceptance of the updated policy.
          </p>
        </section>
      </motion.div>
    </>
  );
}; 