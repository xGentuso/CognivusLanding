import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, 
  DollarSign, 
  Target, 
  Globe, 
  CheckCircle, 
  TrendingUp,
  Shield,
  Award,
  Clock,
  Brain
} from 'lucide-react';
import { scheduleDemo, downloadPitchDeck } from '../utils/actions';

const CompetitiveAdvantages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const advantages = [
    {
      icon: Shield,
      title: 'Proprietary Technology',
      description: 'Unique synthesis optimization approach provides sustainable competitive advantage',
      details: [
        'Novel AI-driven synthesis planning',
        'Proprietary retrosynthetic algorithms', 
        'Advanced algorithmic framework',
        'Trade secret methodologies'
      ],
      color: 'blue'
    },
    {
      icon: Award,
      title: 'First-Mover Advantage',
      description: 'Only validated AI platform with proven synthesis optimization',
      details: [
        'First to market with validated results',
        'Academic partnerships established',
        'PhD-level team expertise',
        'Published research validation'
      ],
      color: 'green'
    },
    {
      icon: Brain,
      title: 'Scalable Technology',
      description: 'Platform architecture designed for rapid expansion to 500+ targets',
      details: [
        'Multi-target drug discovery',
        'Disease-agnostic approach',
        'Automated model retraining',
        'Cloud-native infrastructure'
      ],
      color: 'purple'
    }
  ];


  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Sustainable Competitive Moats
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple layers of defensibility protect our market position and ensure 
            long-term competitive advantages in the AI drug discovery space.
          </p>
        </motion.div>


        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  advantage.color === 'blue' ? 'bg-blue-100' :
                  advantage.color === 'green' ? 'bg-green-100' :
                  advantage.color === 'purple' ? 'bg-purple-100' :
                  advantage.color === 'orange' ? 'bg-orange-100' : 'bg-gray-100'
                }`}>
                  <advantage.icon className={`w-6 h-6 ${
                    advantage.color === 'blue' ? 'text-blue-600' :
                    advantage.color === 'green' ? 'text-green-600' :
                    advantage.color === 'purple' ? 'text-purple-600' :
                    advantage.color === 'orange' ? 'text-orange-600' : 'text-gray-600'
                  }`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {advantage.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


        {/* Unique Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Only AI Platform with Proven Synthesis Optimization
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              While other AI drug discovery companies focus on binding prediction, 
              Cognivus uniquely optimizes for synthesis feasibility - the critical 
              bottleneck in drug development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn btn-primary"
                onClick={scheduleDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Investor Demo
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                onClick={downloadPitchDeck}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Pitch Deck
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantages;
