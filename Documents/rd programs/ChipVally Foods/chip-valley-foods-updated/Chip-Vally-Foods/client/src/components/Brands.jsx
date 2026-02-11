import React from 'react';
import { motion } from 'framer-motion';
import './Brands.css';

const Brands = () => {
  const brands = [
    { name: 'American Pancake Co', color: '#c41e3a' },
    { name: 'Desita', color: '#1e3a8a' },
    { name: 'El-Dina', color: '#8b4513' },
    { name: 'Gurmé', color: '#ea580c' },
    { name: 'KOKA', color: '#dc2626' },
    { name: "Kelly's", color: '#8b1538' },
    { name: 'Mojo Bar', color: '#1f2937' },
    { name: 'Peacock', color: '#059669' },
    { name: 'Pantai', color: '#dc2626' },
    { name: 'Tai Hua', color: '#dc2626' },
    { name: 'Waffle Mill', color: '#4a3428' },
    { name: 'Yes You Can', color: '#1e3a8a' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="brands-section" id="brands">
      <div className="brands-background-overlay"></div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="brands-header"
        >
          <h2>Our Portfolio</h2>
          <p className="brands-subtitle">
            We bring you the finest selection of international food brands
          </p>
        </motion.div>

        <motion.div 
          className="brands-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="brand-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="brand-logo">
                <span style={{ color: brand.color }}>{brand.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;