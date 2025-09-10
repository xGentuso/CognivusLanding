import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  DollarSign, 
  TrendingUp, 
  Target, 
  Calendar, 
  Mail, 
  ArrowRight,
  CheckCircle,
  Award,
  Zap,
  Brain
} from 'lucide-react';
import { submitContactForm } from '../utils/actions';

const InvestmentOpportunity = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const result = await submitContactForm(formData);
      setSubmitStatus(result);
      
      if (result.success) {
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
          message: ''
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting your form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const investmentHighlights = [
    {
      icon: Target,
      title: 'Validated Technology',
      description: '90.8% AUC performance with BACE1 leads',
      value: 'Proven'
    },
    {
      icon: Zap,
      title: '500x Faster',
      description: 'Than traditional drug discovery',
      value: 'Revolutionary'
    },
    {
      icon: DollarSign,
      title: '$8.2B Market',
      description: 'AI drug discovery market by 2030',
      value: 'Massive'
    },
    {
      icon: Brain,
      title: 'Advanced Tech',
      description: 'Unique synthesis optimization approach',
      value: 'Advanced'
    }
  ];

  const useOfFunds = [
    { category: 'Wet Lab Validation', percentage: 40, amount: '$1.7M' },
    { category: 'Team Expansion', percentage: 30, amount: '$1.3M' },
    { category: 'Platform Development', percentage: 20, amount: '$0.85M' },
    { category: 'Legal & Compliance', percentage: 10, amount: '$0.4M' }
  ];

  return (
    <section id="investment" className="py-20 bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Investment Opportunity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in revolutionizing drug discovery. Cognivus is seeking seed funding 
            to validate our AI predictions through wet lab testing and scale our platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Investment Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Highlights</h3>
              
              <div className="space-y-6">
                {investmentHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <highlight.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{highlight.title}</h4>
                        <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          {highlight.value}
                        </span>
                      </div>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Funding Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Funding Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-semibold text-gray-900">Seed Round</div>
                    <div className="text-sm text-gray-600">Series A preparation</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">$4.25M</div>
                    <div className="text-sm text-gray-500">Target</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-semibold text-gray-900">Timeline</div>
                    <div className="text-sm text-gray-600">Wet lab validation</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">6-12</div>
                    <div className="text-sm text-gray-500">Months</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-semibold text-gray-900">Next Milestone</div>
                    <div className="text-sm text-gray-600">Series A raise</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">$10.6M</div>
                    <div className="text-sm text-gray-500">Target</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Use of Funds */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Use of Funds</h3>
            
            <div className="space-y-6">
              {useOfFunds.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">{item.category}</span>
                    <span className="text-sm text-gray-500">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-blue-600">{item.amount}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-green-50 rounded-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">$4.25M Total</div>
                <div className="text-sm text-gray-600">Seed funding target</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Investment Thesis */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Investment Thesis</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Technology',
                description: '90.8% AUC performance validated with BACE1 leads',
                icon: Award
              },
              {
                title: 'Massive Market',
                description: '$8.2B AI drug discovery market growing at 18.2% CAGR',
                icon: TrendingUp
              },
              {
                title: 'First Mover Advantage',
                description: 'Only AI platform with proven synthesis optimization',
                icon: Target
              }
            ].map((thesis, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <thesis.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{thesis.title}</h4>
                <p className="text-blue-100">{thesis.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Schedule Investor Demo
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h4>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">ryanmota@cognivus.ca</div>
                  </div>
                </div>
                
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                <h5 className="font-semibold text-gray-900 mb-3">What to Expect</h5>
                <div className="space-y-2">
                  {[
                    '30-minute platform demonstration',
                    'Detailed technical overview',
                    'Investment opportunity discussion',
                    'Q&A session'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your role"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your investment interests..."
                ></textarea>
              </div>
              
              {submitStatus && (
                <div className={`p-4 rounded-lg mb-4 ${
                  submitStatus.success 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn btn-primary btn-lg ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Submitting...' : 'Schedule Demo'}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentOpportunity;
