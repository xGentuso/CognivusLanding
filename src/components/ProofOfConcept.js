import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CheckCircle, 
  TrendingUp, 
  Target, 
  TestTube, 
  BarChart3,
  Award,
  Zap,
  Shield
} from 'lucide-react';
import { scheduleDemo } from '../utils/actions';

const ProofOfConcept = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const results = [
    {
      metric: '5',
      label: 'Lead Compounds',
      description: 'Structure-based BACE1 inhibitors',
      icon: TestTube,
      color: 'blue'
    },
    {
      metric: '90.8%',
      label: 'Model Performance',
      description: 'AUC score (vs industry 80%)',
      icon: Target,
      color: 'green'
    },
    {
      metric: '0.630',
      label: 'R² Score',
      description: 'Model correlation coefficient',
      icon: CheckCircle,
      color: 'purple'
    },
    {
      metric: '7.01/10',
      label: 'Synthesis Score',
      description: 'Average feasibility rating',
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  const synthesisData = [
    { difficulty: 'Ready for Testing', percentage: 60, color: 'bg-green-500' },
    { difficulty: 'Optimization Needed', percentage: 25, color: 'bg-blue-500' },
    { difficulty: 'Further Analysis', percentage: 15, color: 'bg-yellow-500' }
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Validated Results
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            BACE1 Inhibitor Proof of Concept
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform's proof-of-concept generated 5 promising BACE1 inhibitor leads for Alzheimer's disease, 
            ready for wet lab validation with strong AI model performance.
          </p>
        </motion.div>

        {/* Key Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 text-center"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                result.color === 'blue' ? 'bg-blue-100' :
                result.color === 'green' ? 'bg-green-100' :
                result.color === 'purple' ? 'bg-purple-100' :
                result.color === 'orange' ? 'bg-orange-100' : 'bg-gray-100'
              }`}>
                <result.icon className={`w-6 h-6 ${
                  result.color === 'blue' ? 'text-blue-600' :
                  result.color === 'green' ? 'text-green-600' :
                  result.color === 'purple' ? 'text-purple-600' :
                  result.color === 'orange' ? 'text-orange-600' : 'text-gray-600'
                }`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{result.metric}</div>
              <div className="font-semibold text-gray-700 mb-2">{result.label}</div>
              <p className="text-sm text-gray-600">{result.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Synthesis Feasibility Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Lead Compound Status</h3>
            </div>
            
            <div className="space-y-4">
              {synthesisData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{item.difficulty}</span>
                    <span className="text-sm text-gray-500">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`${item.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-green-50 rounded-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">5</div>
                <div className="text-sm text-gray-600">Lead compounds generated</div>
              </div>
            </div>
          </motion.div>

          {/* Compound Properties */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <TestTube className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Compound Properties</h3>
            </div>
            
            <div className="space-y-6">
              {[
                { property: 'Molecular Weight', range: '150-490 Da', status: 'Optimal' },
                { property: 'LogP', range: '1.8-3.9', status: 'Drug-like' },
                { property: 'Regulatory Risk', range: '98.9% Low Risk', status: 'Excellent' },
                { property: 'Binding Affinity', range: 'Ki < 100 nM', status: 'Strong' }
              ].map((prop, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-semibold text-gray-900">{prop.property}</div>
                    <div className="text-sm text-gray-600">{prop.range}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-medium text-green-600">{prop.status}</div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Validation Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Platform Validation Summary
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our BACE1 inhibitor proof-of-concept demonstrates the platform's ability to generate 
              promising drug candidates ready for experimental validation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'Speed',
                value: '500x Faster',
                description: 'Than traditional methods'
              },
              {
                icon: Shield,
                title: 'Performance',
                value: '90.8% AUC',
                description: 'Model performance score'
              },
              {
                icon: CheckCircle,
                title: 'Correlation',
                value: '0.630 R²',
                description: 'Model correlation strength'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-1">{item.value}</div>
                <div className="font-semibold text-gray-700 mb-2">{item.title}</div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready for Wet Lab Validation
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our AI platform generated promising BACE1 inhibitor leads ready for experimental testing. 
              The next step is wet lab validation to confirm binding predictions.
            </p>
            <motion.button
              className="btn btn-primary btn-lg"
              onClick={scheduleDemo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Investor Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofOfConcept;
