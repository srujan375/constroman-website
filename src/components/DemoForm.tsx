import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import toast from 'react-hot-toast';
import { Calendar, Clock } from 'lucide-react';
import { submitDemoRequest } from '../lib/supabase';
import "react-datepicker/dist/react-datepicker.css";

export const DemoForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    date: null as Date | null,
    time: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate available time slots between 11 AM and 10 PM
  const getTimeSlots = () => {
    const slots = [];
    for (let hour = 11; hour <= 22; hour++) {
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    return slots;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started...', formState);

    if (!formState.date || !formState.time) {
      console.log('Validation failed: Missing date or time');
      toast.error('Please select both date and time for the demo');
      return;
    }

    setIsSubmitting(true);
    try {
      console.log('Submitting demo request to database...');
      await submitDemoRequest({
        name: formState.name,
        email: formState.email,
        company: formState.company,
        date: formState.date,
        time: formState.time,
        message: formState.message
      });
      
      console.log('Demo request submitted successfully');
      toast.success('Demo request submitted successfully!');
      setFormState({
        name: '',
        email: '',
        company: '',
        message: '',
        date: null,
        time: ''
      });
    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast.error('Failed to submit demo request. Please try again.');
    } finally {
      setIsSubmitting(false);
      console.log('Form submission completed');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100/50"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl font-light mb-4">Schedule a Demo</h1>
        <p className="text-gray-600">Choose a convenient time for your personalized demo</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={formState.name}
              onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={formState.email}
              onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            value={formState.company}
            onChange={(e) => setFormState(prev => ({ ...prev, company: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Date
            </label>
            <div className="relative">
              <DatePicker
                selected={formState.date}
                onChange={(date) => setFormState(prev => ({ ...prev, date }))}
                minDate={new Date()}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                required
              />
              <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Time
            </label>
            <div className="relative">
              <select
                value={formState.time}
                onChange={(e) => setFormState(prev => ({ ...prev, time: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors appearance-none"
                required
              >
                <option value="">Select time</option>
                {getTimeSlots().map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
              <Clock className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Message (Optional)
          </label>
          <textarea
            value={formState.message}
            onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-teal-200 disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Schedule Demo'}
        </button>
      </form>
    </motion.div>
  );
};