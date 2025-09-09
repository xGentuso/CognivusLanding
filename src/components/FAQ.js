import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { scheduleConsultation, contactSales } from '../utils/actions';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is Cognivus's competitive advantage in the AI drug discovery market?",
      answer: "Cognivus is the only AI platform focused on synthesis optimization, addressing the critical bottleneck in drug development. Our 90.8% AUC model performance with 5 validated BACE1 leads demonstrates proven technology in a $8.2B market growing at 18.2% CAGR, with proprietary algorithms providing sustainable competitive advantages."
    },
    {
      question: "What is the current funding status and use of capital?",
      answer: "We are raising $4.25M in seed funding to validate our AI predictions through wet lab testing and scale operations. Funds will be allocated to: 40% wet lab validation, 30% team expansion, 25% platform development, and 5% legal and regulatory. This positions us for a $10.6M Series A within 12-18 months."
    },
    {
      question: "What partnerships are you seeking and what value do you provide?",
      answer: "We're seeking strategic partnerships with pharmaceutical companies, biotech firms, and research institutions. Partners gain access to our validated AI platform, 500x faster compound generation, and synthesis-optimized drug candidates. We offer co-development agreements, licensing deals, and joint venture opportunities."
    },
    {
      question: "What are the key milestones and timeline to market?",
      answer: "2025: Platform development completed with BACE1 validation. 2026: Wet lab testing in progress. 2027: Clinical partnerships and preclinical development. 2028: FDA submissions and clinical trials. Our accelerated timeline provides first-mover advantage in rapidly expanding AI drug discovery market."
    },
    {
      question: "What is the market opportunity and scalability potential?",
      answer: "The AI drug discovery market is $8.2B by 2030, growing at 18.2% CAGR. Our universal platform scales to 500+ disease targets across oncology ($185B), rare diseases ($165B), and infectious diseases ($42B). Each successful drug candidate represents $100M+ in potential licensing revenue."
    },
    {
      question: "How strong is your intellectual property position?",
      answer: "We have developed proprietary technology for AI-driven synthesis optimization, a unique approach in the market. Our advanced algorithms, retrosynthetic planning methods, and compound scoring systems provide competitive differentiation. We're continuously innovating to maintain our technological leadership."
    },
    {
      question: "What are the key risks and how are you mitigating them?",
      answer: "Primary risks include regulatory approval uncertainty, competition from pharma giants, and technology validation. We mitigate through: proven BACE1 results, proprietary technology, experienced team, diversified target approach, and strategic partnerships. Our synthesis focus differentiates us from binding-prediction competitors."
    },
    {
      question: "What type of returns can investors expect and what are comparable exits?",
      answer: "AI drug discovery companies have achieved significant exits: Recursion ($2.5B IPO), Exscientia ($2.4B SPAC), BioNTech ($21B IPO). With our synthesis-first approach in a $8.2B growing market, we target 10-50x returns through licensing deals, partnerships, IPO, or strategic acquisition within 5-7 years."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions from investors and potential partners about our investment opportunity
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is ready to discuss investment opportunities, partnerships, and how 
              Cognivus can deliver significant returns in the rapidly growing AI drug discovery market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn btn-primary btn-lg"
                onClick={scheduleConsultation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Investor Demo
              </motion.button>
              <motion.button
                className="btn btn-secondary btn-lg"
                onClick={contactSales}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Partnerships
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;