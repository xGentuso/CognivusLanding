import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Building2 } from 'lucide-react';
import { scheduleConsultation, contactSales, scrollToSection } from '../utils/actions';

const Pricing = () => {
  const handlePlanClick = (planName) => {
    if (planName === 'Free Trial') {
      // For demo purposes, redirect to contact
      scheduleConsultation();
    } else if (planName === 'Enterprise') {
      contactSales();
    } else {
      scheduleConsultation();
    }
  };

  const plans = [
    {
      name: "Free Trial",
      icon: Star,
      price: "$0",
      period: "14 days",
      description: "Perfect for evaluating our platform",
      features: [
        "5 compound generations",
        "Basic ADMET profiling", 
        "Standard molecular descriptors",
        "Email support",
        "Access to tutorials"
      ],
      cta: "Start Free Trial",
      popular: false,
      buttonClass: "btn-secondary"
    },
    {
      name: "Professional",
      icon: Zap,
      price: "$5,000",
      period: "/month",
      description: "For small biotech and research teams",
      features: [
        "Unlimited compound generation",
        "Advanced ADMET profiling",
        "Synthesis route planning",
        "Custom target analysis",
        "Priority support",
        "Integration APIs",
        "Monthly strategy calls"
      ],
      cta: "Start Professional",
      popular: true,
      buttonClass: "btn-primary"
    },
    {
      name: "Enterprise",
      icon: Building2,
      price: "Custom",
      period: "",
      description: "For pharmaceutical companies and large research organizations",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom model training",
        "On-premise deployment options",
        "White-label solutions",
        "SLA guarantees",
        "24/7 phone support",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false,
      buttonClass: "btn-secondary"
    }
  ];

  const additionalServices = [
    {
      title: "Wet Lab Validation",
      description: "Experimental validation of AI-predicted compounds",
      price: "Starting at $10K"
    },
    {
      title: "Custom AI Models",
      description: "Train models on your private datasets", 
      price: "Starting at $50K"
    },
    {
      title: "Consulting Services",
      description: "Expert guidance for drug discovery strategy",
      price: "$500/hour"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your drug discovery needs. All plans include our 
            core AI platform with different levels of support and features.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`relative bg-white rounded-3xl p-8 shadow-lg border-2 transition-all ${
                plan.popular 
                  ? 'border-blue-500 shadow-blue-200' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`btn ${plan.buttonClass} w-full btn-lg`}
                onClick={() => handlePlanClick(plan.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Additional Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="text-blue-600 font-semibold">
                  {service.price}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team can help you select the right plan based on your specific 
              drug discovery needs and organizational requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn btn-primary"
                onClick={scheduleConsultation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                onClick={() => scrollToSection('#faq')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View FAQ
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;