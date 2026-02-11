import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <motion.div 
        className="page-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Learn about our journey and commitment to quality
          </motion.p>
        </div>
      </motion.div>
      
      <About />
    </div>
  );
};

export default AboutPage;
