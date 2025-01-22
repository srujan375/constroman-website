import React from 'react';
import { motion } from 'framer-motion';

export const TermsAndConditions = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Service Usage</h2>
        <p className="mb-4">By using ConstroMan's services, you agree to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide accurate and complete information</li>
          <li>Maintain the security of your account credentials</li>
          <li>Use the service in compliance with applicable laws</li>
          <li>Not misuse or attempt to manipulate the service</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Payment Terms</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>All payments are processed securely through Razorpay</li>
          <li>Prices are subject to change with prior notice</li>
          <li>Subscription fees are billed according to the chosen plan</li>
          <li>Taxes will be added as applicable under Indian law</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
        <p className="mb-4">All content and materials available through ConstroMan are protected by intellectual property rights. Users may not:</p>
        <ul className="list-disc pl-6">
          <li>Copy or reproduce any part of the service without permission</li>
          <li>Modify or create derivative works</li>
          <li>Remove any copyright or proprietary notices</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
        <p className="mb-4">ConstroMan shall not be liable for:</p>
        <ul className="list-disc pl-6">
          <li>Indirect or consequential damages</li>
          <li>Loss of data or business interruption</li>
          <li>Issues arising from third-party services</li>
        </ul>
      </section>
    </motion.div>
  );
}; 