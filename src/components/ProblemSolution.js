import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, CheckCircle, Clock, DollarSign, TestTube, Zap } from 'lucide-react';
import { scrollToSection, requestTechnicalDemo } from '../utils/actions';

const ProblemSolution = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const problems = [
    {
      icon: Clock,
      title: 'Slow Time-to-Market',
      description: '3-5 years for lead identification vs weeks with AI',
      color: 'red'
    },
    {
      icon: DollarSign,
      title: 'Capital Inefficiency',
      description: '$2.6B average drug development cost',
      color: 'red'
    },
    {
      icon: X,
      title: 'High Failure Rates',
      description: '80% of compounds fail synthesis feasibility',
      color: 'red'
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: 'Rapid Market Entry',
      description: '6 weeks vs 3-5 years for lead compounds',
      color: 'green'
    },
    {
      icon: DollarSign,
      title: 'Capital Efficiency',
      description: '500x cost reduction in discovery phase',
      color: 'green'
    },
    {
      icon: CheckCircle,
      title: 'Higher Success Rates',
      description: 'AI-optimized lead generation vs manual methods',
      color: 'green'
    }
  ];

  return (
    <section id="problem-solution" className="py-20 bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Market Opportunity & Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The $8.2B AI drug discovery market is driven by critical inefficiencies in traditional 
            pharmaceutical R&D. Our platform directly addresses these multi-billion dollar pain points.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Market Pain Points</h3>
              </div>
              
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <problem.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{problem.title}</h4>
                      <p className="text-gray-600">{problem.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Cognivus Advantage</h3>
              </div>
              
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <solution.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{solution.title}</h4>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Drug Discovery?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join us in revolutionizing how new drugs are discovered. Our validated platform 
              is ready to scale to any disease target.
            </p>
            <motion.button
              className="btn btn-primary btn-lg"
              onClick={requestTechnicalDemo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Our Technology in Action
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
