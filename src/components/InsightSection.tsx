import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LineChart, PieChart, BarChart2, PercentCircle } from 'lucide-react';

const insights = [
  {
    icon: LineChart,
    title: "Trend Analysis",
    description: <>Visualize <strong>project patterns</strong> and identify <strong>key trends</strong> in your construction data. Track progress, spot bottlenecks, and optimize workflows in <strong>real-time</strong>.</>,
  },
  {
    icon: PieChart,
    title: "Cost Distribution",
    description: <>Understand <strong>resource allocation</strong> and <strong>cost breakdowns</strong> across project phases. Get detailed insights into spending patterns and <strong>budget utilization</strong>.</>,
  },
  {
    icon: BarChart2,
    title: "Performance Management",
    description: <>Track and analyze <strong>key performance indicators</strong> for informed decision-making. Monitor <strong>team productivity</strong>, <strong>project milestones</strong>, and quality metrics.</>,
  },
  {
    icon: PercentCircle,
    title: "Forecasting",
    description: <>Predict <strong>future trends</strong> using past data for global and specific metrics. Make <strong>data-driven decisions</strong> with <strong>AI-powered predictive analytics</strong>.</>,
  },
  {
    icon: LineChart,
    title: "Resource Optimization",
    description: <>Optimize <strong>resource allocation</strong> across projects with <strong>intelligent scheduling</strong> and capacity planning tools. Maximize team utilization and minimize waste.</>,
  },
  {
    icon: PieChart,
    title: "Risk Assessment",
    description: <>Identify and mitigate <strong>potential risks</strong> before they impact your projects. Use <strong>historical data</strong> to predict and prevent common issues.</>,
  }
];

export const InsightSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="data-driven-insights" className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-teal-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-teal-50 rounded-full text-teal-600 text-sm font-medium mb-4">
            Powerful Analytics
          </span>
          <h2 className="text-4xl font-bold mb-6">Data-Driven Insights</h2>
          <p className="text-gray-900 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Transform your construction projects with powerful analytics and insights. 
            Make informed decisions backed by real-time data and predictive analysis.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">AI-powered analytics</span>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50/40 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              
              <div className="relative">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center shadow-sm">
                    <item.icon className="w-7 h-7 text-teal-600" />
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-3 group-hover:text-teal-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};