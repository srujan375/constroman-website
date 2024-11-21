import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, LineChart, ChevronDown, ArrowLeft, Send, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Navbar } from '../components/Navbar';
import { InsightSection } from '../components/InsightSection';
import { ProblemSolution } from '../components/ProblemSolution';
import { BackgroundText } from '../components/BackgroundText';
import { VideoSection } from '../components/VideoSection';

export const Home = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <BackgroundText />
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left relative z-10"
            >
              <div className="inline-block px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-bold mb-2">
                Smart Construction Analytics
              </div>
              <h1 className="text-4xl sm:text-5xl font-medium text-gray-700 mb-6 leading-tight">
                Constructing the Future
                <span className="text-teal-700 font-medium block mt-4">Business Intelligence:</span>
                <span className="text-teal-600 font-small font-light mt-2">through automated data analytics in Construction</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8  leading-relaxed">
                Leverage advanced AI-powered analytics to understand your construction data better. 
                Make informed decisions with clear visualizations and data-driven insights to optimize and grow your business even faster.
              </p>
              <div className="flex gap-4 mt-8">
                <Link
                  to="/demo"
                  className="bg-teal-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors inline-flex items-center gap-2 shadow-lg shadow-teal-200"
                >
                  Schedule Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <ScrollLink
                  to="data-driven-insights"
                  smooth={true}
                              className="bg-white text-gray-800 px-6 py-3 rounded-lg text-sm font-medium 
                  hover:bg-gray-50 transition-colors border border-gray-200 cursor-pointer"
                >
                  Learn More
                </ScrollLink>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-[120%] -ml-[10%]"
            >
              <div className="relative w-full pb-[56.25%] bg-white rounded-xl overflow-hidden shadow-xl">
                <iframe
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://www.youtube.com/embed/WK5gk-CmeBQ?autoplay=1&mute=1&loop=1&playlist=WK5gk-CmeBQ"
                  title="ConstroMan Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <InsightSection />
      <ProblemSolution />

      {/* Closing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">Ready to gain better insights?</h2>
          <p className="text-gray-600 mb-8">
            Let us show you how data analysis can enhance your decision-making process.
          </p>
          <Link to="/demo" className="bg-teal-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors inline-flex items-center gap-2 shadow-lg shadow-teal-200">
            Schedule a Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};