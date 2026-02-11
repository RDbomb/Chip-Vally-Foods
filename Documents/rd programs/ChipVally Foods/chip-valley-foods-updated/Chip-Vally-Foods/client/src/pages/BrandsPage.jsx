import React from 'react';
import { motion } from 'framer-motion';
import './BrandsPage.css';

const BrandsPage = () => {
  const brands = [
    { name: 'American Pancake Co', color: '#c41e3a', description: 'Premium pancake mixes and breakfast solutions' },
    { name: 'Desita', color: '#1e3a8a', description: 'Authentic Mediterranean delicacies' },
    { name: 'El-Dina', color: '#8b4513', description: 'Iconic tastes of the world' },
    { name: 'Gurmé', color: '#ea580c', description: 'Gourmet food experiences' },
    { name: 'KOKA', color: '#dc2626', description: 'Instant noodles and Asian cuisine' },
    { name: "Kelly's", color: '#8b1538', description: 'Traditional confectionery delights' },
    { name: 'Mojo Bar', color: '#1f2937', description: 'Energy and nutrition bars' },
    { name: 'Peacock', color: '#059669', description: 'Quality rice and grains' },
    { name: 'Pantai', color: '#dc2626', description: 'Norasingh authentic Thai flavors' },
    { name: 'Tai Hua', color: '#dc2626', description: 'Premium Asian noodles' },
    { name: 'Waffle Mill', color: '#4a3428', description: 'Artisan waffles and baking mixes' },
    { name: 'Yes You Can', color: '#1e3a8a', description: 'Celebrate taste in every bite' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
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
    <div className="brands-page">
      {/* Brands Grid Section */}
      <section className="brands-content-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="brands-page-header"
          >
            <h1>Our Portfolio</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="brands-intro-text"
          >
            <p className="intro-lead">
              Curating excellence across global food brands
            </p>
            <p className="intro-description">
              We partner with leading international manufacturers to bring you a diverse portfolio of premium food products. 
              From breakfast essentials to gourmet delicacies, each brand in our collection represents quality, 
              authenticity, and exceptional taste.
            </p>
          </motion.div>

          <motion.div 
            className="brands-page-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className="brand-page-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -15, 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="brand-page-logo">
                  <span style={{ color: brand.color }}>{brand.name}</span>
                </div>
                <div className="brand-page-description">
                  <p>{brand.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BrandsPage;