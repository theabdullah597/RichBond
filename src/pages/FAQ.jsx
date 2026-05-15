import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineChevronDown } from 'react-icons/hi';
import SectionHeading from '../components/SectionHeading';
import '../styles/pages/FAQPage.css';

const faqData = [
  {
    category: 'Wholesale',
    questions: [
      {
        q: "How do I create a wholesale account?",
        a: "To create a wholesale account, simply fill out the inquiry form on our Contact page. One of our account managers will review your application and get in touch with you within 24-48 business hours to finalize your registration."
      },
      {
        q: "What is the Minimum Order Quantity (MOQ)?",
        a: "MOQs vary by product category. Typically, disposable vapes have an MOQ of 10 units per flavor, while mobile accessories may require larger quantities. You can see the specific MOQ for each item in our product catalog."
      },
      {
        q: "Do you offer tiered pricing for bulk orders?",
        a: "Yes, we offer competitive tiered pricing. The more you order, the lower the unit price becomes. Pricing tiers are clearly listed on each product's detail page."
      }
    ]
  },
  {
    category: 'Shipping',
    questions: [
      {
        q: "Where do you ship to?",
        a: "We ship to all regions within the United Kingdom, including Northern Ireland, the Scottish Highlands, and the Channel Islands. International shipping can be arranged for bulk container orders."
      },
      {
        q: "What are the shipping costs?",
        a: "Shipping is calculated based on order volume and weight. We offer free standard delivery for wholesale orders over £500 within mainland UK."
      },
      {
        q: "How long does delivery take?",
        a: "Standard wholesale orders are usually delivered within 2-3 business days. Next-day delivery is available for orders placed before 1:00 PM."
      }
    ]
  },
  {
    category: 'Payments',
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit/debit cards, bank transfers (BACS), and offer credit terms for established retail partners after a successful credit check."
      },
      {
        q: "Is it safe to pay online?",
        a: "Absolutely. All transactions are processed through secure, encrypted payment gateways. We do not store your credit card information on our servers."
      }
    ]
  }
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('Wholesale');
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const currentFaqs = faqData.find(cat => cat.category === activeCategory).questions;

  return (
    <div className="faq-page">
      <div className="container">
        <SectionHeading subtitle="Help Center" title="Frequently Asked Questions" />
        
        <div className="faq-container">
          <div className="faq-tabs">
            {faqData.map(cat => (
              <div 
                key={cat.category}
                className={`faq-tab ${activeCategory === cat.category ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.category);
                  setActiveQuestion(null);
                }}
              >
                {cat.category}
              </div>
            ))}
          </div>

          <div className="faq-list">
            {currentFaqs.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeQuestion === index ? 'active' : ''}`}
              >
                <div className="faq-question" onClick={() => toggleQuestion(index)}>
                  <h4>{item.q}</h4>
                  <div className="faq-icon"><HiOutlineChevronDown /></div>
                </div>
                
                <AnimatePresence>
                  {activeQuestion === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="faq-answer"
                    >
                      <div className="faq-answer-content">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
