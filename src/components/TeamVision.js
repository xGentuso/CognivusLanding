import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  User, 
  Brain, 
  Target, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Star,
  Lightbulb,
  Clock
} from 'lucide-react';
import { scheduleDemo, downloadPitchDeck } from '../utils/actions';

const TeamVision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const visionPillars = [
    {
      icon: Brain,
      title: 'Universal AI Platform',
      description: 'Scales to any protein target and disease area',
      details: [
        'Multi-target drug discovery',
        'Rapid target switching',
        'Customizable pipelines',
        'Continuous learning'
      ]
    },
    {
      icon: Target,
      title: 'Synthesis-First Approach',
      description: 'AI optimization for practical drug development',
      details: [
        'Synthesis feasibility scoring',
        'Route optimization',
        'Cost-benefit analysis',
        'Manufacturing considerations'
      ]
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Democratizing drug discovery worldwide',
      details: [
        'Accessible to small biotechs',
        'Rare disease focus',
        'Global health initiatives',
        'Affordable therapeutics'
      ]
    }
  ];

  const milestones = [
    { 
      year: '2025', 
      milestone: 'Platform Development', 
      status: 'Completed',
      description: 'BACE1 lead generation with 90.8% AUC performance'
    },
    { 
      year: '2026', 
      milestone: 'Wet Lab Testing', 
      status: 'In Progress',
      description: 'Synthesis and biological validation of lead compounds'
    },
    { 
      year: '2027', 
      milestone: 'Clinical Partnerships', 
      status: 'Target',
      description: 'Pharma partnerships and preclinical development'
    },
    { 
      year: '2028', 
      milestone: 'FDA Submissions', 
      status: 'Target',
      description: 'IND applications and clinical trial preparation'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Team & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Led by a visionary founder with deep expertise in AI and drug discovery, 
            Cognivus is building the future of pharmaceutical innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Founder Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Ryan</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Software Engineering graduate from triOS College with expertise in full-stack development, 
              mobile applications, and AI/ML systems. Self-taught in artificial intelligence and machine 
              learning with a passionate focus on applying technology to solve complex problems in drug 
              discovery and healthcare innovation.
            </p>
            
            <div className="space-y-4">
              {[
                'Software Engineering, triOS College Business Technology Healthcare',
                'Self-Taught AI/ML Specialist with High Interest in Drug Discovery', 
                'Patent-Pending AI Technology for Synthesis Optimization',
                '90.8% AUC Performance with BACE1 Leads'
              ].map((expertise, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{expertise}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              To revolutionize drug discovery by making it 500x faster and more accessible, 
              enabling breakthrough treatments for diseases that currently have no cure. 
              We envision a world where AI-powered drug discovery democratizes access to 
              life-saving therapeutics.
            </p>
            
            <div className="space-y-3">
              {[
                'Democratize drug discovery',
                'Accelerate breakthrough treatments',
                'Reduce healthcare costs globally',
                'Enable precision medicine for all'
              ].map((goal, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Star className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">{goal}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Vision Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {visionPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <pillar.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
              <p className="text-gray-600 mb-6">{pillar.description}</p>
              
              <div className="space-y-3">
                {pillar.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Scalability */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Platform Scalability & Roadmap
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Current Capabilities */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Current Capabilities</h4>
              <div className="space-y-4">
                {[
                  '5 BACE1 lead compounds (Alzheimer\'s)',
                  '90.8% AUC model performance',
                  '0.630 R² correlation score',
                  'Patent-pending technology'
                ].map((capability, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Targets */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Future Disease Targets</h4>
              <div className="space-y-4">
                {[
                  'Oncology (multiple cancer types)',
                  'Rare genetic disorders',
                  'Infectious diseases',
                  'Autoimmune conditions'
                ].map((target, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Target className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{target}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Development Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-2xl p-8 border border-blue-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Development Timeline
          </h3>
          
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-gray-300 rounded-full transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                  className="relative text-center group"
                >
                  {/* Connection Line */}
                  {index < milestones.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-400 to-gray-300 transform -translate-y-1/2 z-0"></div>
                  )}
                  
                  {/* Year Circle */}
                  <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-300 group-hover:scale-110 ${
                    milestone.status === 'Completed' ? 'bg-gradient-to-br from-green-400 to-green-600 shadow-green-200' :
                    milestone.status === 'In Progress' ? 'bg-gradient-to-br from-blue-400 to-blue-600 shadow-blue-200 animate-pulse' :
                    'bg-gradient-to-br from-gray-300 to-gray-500 shadow-gray-200'
                  }`}>
                    <div className="text-xl font-bold text-white">{milestone.year}</div>
                    
                    {/* Status Icon */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center bg-white shadow-md">
                      {milestone.status === 'Completed' ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : milestone.status === 'In Progress' ? (
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                      ) : (
                        <Clock className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                  </div>
                  
                  {/* Milestone Card */}
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">{milestone.milestone}</h4>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{milestone.description}</p>
                    
                    {/* Status Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                      milestone.status === 'Completed' ? 'bg-green-100 text-green-700 border border-green-200' :
                      milestone.status === 'In Progress' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                      'bg-gray-100 text-gray-700 border border-gray-200'
                    }`}>
                      {milestone.status === 'Completed' ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : milestone.status === 'In Progress' ? (
                        <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Clock className="w-4 h-4" />
                      )}
                      {milestone.status}
                    </div>
                    
                    {/* Progress Indicator */}
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                            milestone.status === 'Completed' ? 'bg-green-500 w-full' :
                            milestone.status === 'In Progress' ? 'bg-blue-500 w-3/4' :
                            'bg-gray-400 w-0'
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Mission
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Help us revolutionize drug discovery and bring life-saving treatments 
              to patients faster than ever before. Our validated platform is ready 
              to scale to any disease target.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn btn-primary"
                onClick={scheduleDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Investor Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                onClick={downloadPitchDeck}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Pitch Deck
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamVision;
