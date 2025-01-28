import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    problem: "Drowning in Data",
    solution: "Simple chat interface for quick and natural language querying",
    description: "Our system can **analyze complex construction data** and build relationships within it. Using our chat interface, users can get the answers they need in seconds."
  },
  {
    icon: TrendingUp,
    problem: "Complex Data Analysis",
    solution: "Automated data processing and visualization",
    description: "Transform raw construction data into clear, **actionable insights** with our intelligent analytics engine."
  },
  {
    icon: Clock,
    problem: "Delayed Project Timelines",
    solution: "Identify delays and their causes to optimize project timeline and resource allocation",
    description: "Our system uses **AI to analyze project data** and identify potential problems, providing actionable insights."
  },
  {
    icon: TrendingUp,
    problem: "Unpredictable Future Trends",
    solution: "Forecast future trends using past data for global and specific metrics",
    description: "Leverage historical data to **predict future trends**, enabling proactive decision-making and strategic planning."
  }
];

export const ProblemSolution = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="problems-solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Common Challenges We Solve</h2>
          <p className="text-xl text-gray-600">Transform construction challenges into opportunities with ConstroMan</p>
        </motion.div>
        
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-white/60 backdrop-blur-sm rounded-2xl shadow-md p-6 overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-gray-100/50"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-50/70 rounded-lg">
                    <item.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.problem}</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-teal-600">
                    <CheckCircle2 className="w-5 h-5" />
                    <h4 className="font-semibold">Our Solution:</h4>
                  </div>
                  <p className="text-lg font-medium text-gray-800">{item.solution}</p>
                  <p className="text-black-full" dangerouslySetInnerHTML={{ 
                    __html: item.description.replace(
                      /\*\*(.*?)\*\*/g, 
                      '<strong>$1</strong>'
                    ) 
                  }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};