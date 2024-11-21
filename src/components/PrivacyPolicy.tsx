import React from 'react';
import { motion } from 'framer-motion';

export const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Collection and Usage</h2>
        <p className="mb-4">When you use ConstroMan's demo scheduling service, we collect and process the following information:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Company name</li>
          <li>Selected demo date and time</li>
          <li>Any additional message you provide</li>
        </ul>
        <p>This information is used solely for:</p>
        <ul className="list-disc pl-6">
          <li>Scheduling and managing your demo session</li>
          <li>Creating calendar events</li>
          <li>Sending confirmation emails</li>
          <li>Providing demo-related communications</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Google Calendar and Gmail Integration</h2>
        <p className="mb-4">Our application integrates with Google Calendar and Gmail to provide scheduling functionality. When you authorize access:</p>
        <ul className="list-disc pl-6">
          <li>We only request necessary permissions to create calendar events and send confirmation emails</li>
          <li>We do not store your Google credentials</li>
          <li>We do not access any other data from your Google account</li>
          <li>Calendar events and emails are created only with your explicit consent</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
        <p className="mb-4">Your data is stored securely in our database with the following practices:</p>
        <ul className="list-disc pl-6">
          <li>All data is encrypted in transit and at rest</li>
          <li>Access to data is strictly controlled and monitored</li>
          <li>We retain your data only for the duration necessary to provide our services</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6">
          <li>Request access to your personal data</li>
          <li>Request correction of your personal data</li>
          <li>Request deletion of your personal data</li>
          <li>Withdraw your consent at any time</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>For any privacy-related questions or requests, please contact us at:</p>
        <p className="mt-2">
          <a href="mailto:privacy@constroman.com" className="text-teal-600 hover:text-teal-700">
            constroman@gmail.com
          </a>
        </p>
      </section>
    </motion.div>
  );
}; 