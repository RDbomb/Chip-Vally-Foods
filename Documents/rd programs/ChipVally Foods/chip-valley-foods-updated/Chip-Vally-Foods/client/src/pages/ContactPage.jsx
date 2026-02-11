import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get in touch with us. We'd love to hear from you
          </motion.p>
        </div>
      </motion.div>
      
      <Contact />
    </div>
  );
};

export default ContactPage;
