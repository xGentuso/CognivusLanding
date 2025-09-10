import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building2 } from 'lucide-react';
import { scheduleDemo, downloadPitchDeck } from '../utils/actions';

const SocialProof = () => {
  const validationPoints = [
    {
      title: "Validated Technology",
      description: "90.8% AUC performance proven with 5 BACE1 lead compounds for Alzheimer's disease",
      icon: "✓",
      color: "green"
    },
    {
      title: "Advanced Technology",
      description: "Unique synthesis optimization approach provides sustainable competitive advantage",
      icon: "🛡️",
      color: "blue"
    },
    {
      title: "Massive Market Opportunity", 
              description: "$8.2B AI drug discovery market growing at 18.2% CAGR with 500+ disease targets",
      icon: "📈",
      color: "purple"
    }
  ];

  const metrics = [
          { value: "$8.2B", label: "Market Size" },
            { value: "18.2%", label: "CAGR Growth" },
    { value: "90.8%", label: "AUC Score" },
    { value: "500x", label: "Faster Discovery" }
  ];

  const advisors = [
    { name: "Stanford", logo: "S" },
    { name: "MIT", logo: "M" },
    { name: "Harvard", logo: "H" },
    { name: "UCSF", logo: "U" },
    { name: "Caltech", logo: "C" },
    { name: "Berkeley", logo: "B" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Investment Opportunity Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary AI platform positioned to capture significant share of the $8.2B AI drug discovery market
          </p>
        </motion.div>

        {/* Academic Advisors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <p className="text-center text-gray-500 mb-8">Backed by world-class academic advisors</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-gray-400">{advisor.logo}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {metric.value}
              </div>
              <div className="text-gray-600 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Investment Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {validationPoints.map((point, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 text-center">
                {point.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-center">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join the AI Drug Discovery Revolution
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Cognivus is positioned to capture significant market share in the rapidly growing 
            $8.2B AI drug discovery market. Our advanced AI technology 
            provides sustainable competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="btn btn-primary btn-lg"
              onClick={scheduleDemo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Investor Demo
            </motion.button>
            <motion.button
              className="btn btn-secondary btn-lg"
              onClick={downloadPitchDeck}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Pitch Deck
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;