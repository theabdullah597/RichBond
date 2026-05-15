import React from 'react';
import { motion } from 'framer-motion';
import './SectionHeading.css';

const SectionHeading = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`section-heading ${centered ? 'centered' : ''} ${light ? 'light' : ''}`}
    >
      <span className="subtitle">{subtitle}</span>
      <h2 className="title">{title}</h2>
      <div className="underline"></div>
    </motion.div>
  );
};

export default SectionHeading;
