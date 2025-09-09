import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import { scheduleDemo, downloadPitchDeck } from '../utils/actions';

const Hero = () => {
  const keyMetrics = [
    { value: '$8.2B', label: 'Market Size', icon: Zap },
    { value: '18.2%', label: 'Market CAGR', icon: Target },
    { value: '90.8%', label: 'AI Accuracy', icon: TrendingUp }
  ];

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              AI-Generated BACE1 Leads for Alzheimer's
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                500x Faster
              </span>
              <br />
              Drug Discovery
              <br />
              with AI
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Revolutionary AI platform targeting the $8.2B drug discovery market growing at 18.2% CAGR. 
              Validated technology with 90.8% AUC accuracy and optimized synthesis 
              optimization provides first-mover advantage in rapidly expanding market.
            </motion.p>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {keyMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                    <metric.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="btn btn-primary btn-lg"
                onClick={scheduleDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Investor Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="btn btn-secondary btn-lg"
                onClick={downloadPitchDeck}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Pitch Deck
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-6 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                5 BACE1 Lead Compounds Generated
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                IP Portfolio Protected
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {/* Hero Visual */}
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-200 rounded-3xl transform -rotate-2"></div>
              
              {/* Main Content Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                {/* AI Pipeline Visualization */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Validated Technology Platform</h3>
                    <p className="text-gray-600">BACE1 Inhibitor Proof-of-Concept Results</p>
                  </div>
                  
                  {/* Pipeline Steps */}
                  <div className="space-y-4">
                    {[
                      { step: '1', title: 'Target Analysis', desc: 'BACE1 Protein' },
                      { step: '2', title: 'AI Generation', desc: '5 Lead Compounds' },
                      { step: '3', title: 'AI Model', desc: '90.8% AUC Score' },
                      { step: '4', title: 'Ready for', desc: 'Wet Lab Testing' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {item.step}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-600">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Results Summary */}
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">5</div>
                        <div className="text-sm text-gray-600">Lead Compounds</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">90.8%</div>
                        <div className="text-sm text-gray-600">AUC Score</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
