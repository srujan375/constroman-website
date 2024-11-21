import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Navbar } from '../components/Navbar';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navbar />
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900">About Us</h1>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Rajesh Jujare</h2>
            <div className="w-16 h-1 bg-teal-500 rounded-full" />
            <p className="text-lg text-gray-600">
              Founder & Principal Consultant
            </p>
          </div>

          <div className="space-y-8 text-lg">
            <p className="text-gray-700 leading-relaxed">
              As a Civil Engineer with over 34 years of rich and diverse experience, I bring extensive expertise in Project & 
              Construction Management, Estimation, Value Engineering, and Contract Management across various sectors including 
              residential, commercial, industrial, IT parks, institutional, hospitality, and infrastructure projects.
            </p>

            <p className="text-gray-700 leading-relaxed">
              I am proud to be an active member of the Royal Institute of Chartered Surveyors (RICS, UK). 
              Additionally, I serve as a panelled faculty for MITCON, teaching courses in Construction Management.
            </p>

            <p className="text-gray-700 leading-relaxed">
              In the construction fraternity, I am recognized for my expertise in Cost & Time management. 
              Prior to establishing my consultancy business in 2011, I had the privilege of working with 
              renowned companies both in India and abroad.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}; 