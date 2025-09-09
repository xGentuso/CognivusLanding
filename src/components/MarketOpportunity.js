
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  DollarSign, 
  TrendingUp, 
  Globe, 
  Target, 
  Users, 
  BarChart3,
  ArrowUpRight,
  Brain,
  TestTube,
  Clock
} from 'lucide-react';
import { scheduleDemo } from '../utils/actions';

const MarketOpportunity = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const marketData = [
    {
      metric: '$8.2B',
      label: 'Addressable Market',
      description: 'AI drug discovery market by 2030',
      icon: DollarSign,
      color: 'blue'
    },
    {
      metric: '18.2%',
      label: 'CAGR Growth',
      description: 'Annual growth rate expected',
      icon: TrendingUp,
      color: 'green'
    },
    {
      metric: '500+',
      label: 'Disease Targets',
      description: 'Potential protein targets',
      icon: Target,
      color: 'purple'
    },
    {
      metric: '$2.6B',
      label: 'Average Drug Cost',
      description: 'Traditional development cost',
      icon: TestTube,
      color: 'orange'
    }
  ];

  const marketSegments = [
    {
      segment: 'Alzheimer\'s Disease',
      marketSize: '$4.2B',
      growth: '6.8% CAGR',
      description: 'BACE1 inhibitors and other targets'
    },
    {
      segment: 'Oncology',
      marketSize: '$185B',
      growth: '8.5% CAGR',
      description: 'Multiple cancer targets'
    },
    {
      segment: 'Rare Diseases',
      marketSize: '$165B',
      growth: '9.2% CAGR',
      description: 'Orphan drug opportunities'
    },
    {
      segment: 'Infectious Diseases',
      marketSize: '$42B',
      growth: '5.4% CAGR',
      description: 'Antimicrobial resistance'
    }
  ];

  return (
    <section id="market" className="py-20 bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            $8.2B Market Opportunity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The AI drug discovery market is experiencing strong growth, driven by 
            the urgent need for faster, more efficient drug development processes.
          </p>
        </motion.div>

        {/* Market Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 text-center"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                item.color === 'blue' ? 'bg-blue-100' :
                item.color === 'green' ? 'bg-green-100' :
                item.color === 'purple' ? 'bg-purple-100' :
                item.color === 'orange' ? 'bg-orange-100' : 'bg-gray-100'
              }`}>
                <item.icon className={`w-6 h-6 ${
                  item.color === 'blue' ? 'text-blue-600' :
                  item.color === 'green' ? 'text-green-600' :
                  item.color === 'purple' ? 'text-purple-600' :
                  item.color === 'orange' ? 'text-orange-600' : 'text-gray-600'
                }`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{item.metric}</div>
              <div className="font-semibold text-gray-700 mb-2">{item.label}</div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Market Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Market Growth Trajectory</h3>
            </div>
            
            <div className="space-y-6">
              {[
                { year: '2025', market: '$2.5B', growth: 'Current Market' },
                { year: '2026', market: '$3.2B', growth: 'Projected Growth' },
                { year: '2028', market: '$5.4B', growth: 'Accelerated Adoption' },
                { year: '2030', market: '$8.2B', growth: 'Market Maturity' }
              ].map((period, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-bold text-gray-900">{period.year}</div>
                    <div className="text-sm text-gray-600">{period.growth}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-600">{period.market}</div>
                    <div className="text-sm text-gray-500">Market Size</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-green-50 rounded-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">18.2% CAGR</div>
                <div className="text-sm text-gray-600">Compound Annual Growth Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Market Segments */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Key Market Segments</h3>
            </div>
            
            <div className="space-y-4">
              {marketSegments.map((segment, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{segment.segment}</h4>
                    <div className="text-sm font-medium text-green-600">{segment.growth}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">{segment.description}</p>
                    <div className="text-lg font-bold text-blue-600">{segment.marketSize}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Industry Drivers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Market Drivers & Industry Trends
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                title: 'Cost Pressure',
                description: 'Pharma companies seeking 500x cost reduction in R&D'
              },
              {
                icon: Clock,
                title: 'Time to Market',
                description: 'Urgent need for faster drug development cycles'
              },
              {
                icon: Brain,
                title: 'AI Adoption',
                description: 'Rapid adoption of AI/ML in pharmaceutical industry'
              },
              {
                icon: Target,
                title: 'Precision Medicine',
                description: 'Growing demand for targeted therapeutics'
              },
              {
                icon: Users,
                title: 'Patient Demand',
                description: 'Increasing patient demand for novel treatments'
              },
              {
                icon: BarChart3,
                title: 'Regulatory Support',
                description: 'FDA and EMA supporting AI-driven drug development'
              }
            ].map((driver, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <driver.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{driver.title}</h4>
                <p className="text-sm text-gray-600">{driver.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Competitive Landscape */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Cognivus's Market Position
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'First Mover Advantage',
                description: 'First AI platform with proven synthesis focus',
                metric: 'Patent-Pending'
              },
              {
                title: 'Proven Technology',
                description: '90.8% AUC performance with BACE1 leads',
                metric: 'Validated'
              },
              {
                title: 'Scalable Platform',
                description: 'Ready to address any disease target',
                metric: 'Universal'
              }
            ].map((position, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ArrowUpRight className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{position.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{position.description}</p>
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {position.metric}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Investment Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join the AI Drug Discovery Revolution
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Cognivus is positioned to capture a significant share of the $8.2B 
              AI drug discovery market with our validated, synthesis-optimized platform.
            </p>
            <motion.button
              className="btn btn-lg bg-white text-blue-600 hover:bg-gray-100"
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

export default MarketOpportunity;
