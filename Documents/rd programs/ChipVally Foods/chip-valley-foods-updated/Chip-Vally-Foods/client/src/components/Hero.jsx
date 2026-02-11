import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Premium Quality",
      subtitle: "International Food Brands",
      description: "Discover world-class products from trusted global suppliers",
      background: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
    },
    {
      title: "Fresh & Authentic",
      subtitle: "Taste the Difference",
      description: "Experience authentic flavors from around the world",
      background: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1920&q=80"
    },
    {
      title: "Delivered Fast",
      subtitle: "Shop with Ease",
      description: "Available on all major online grocery platforms",
      background: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero-modern">
      {/* Background Slider */}
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.background})` }}
          >
            <div className="hero-slide-overlay"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="hero-content-modern">
        <div className="container">
          <motion.div
            className="hero-text-modern"
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="hero-label"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {slides[currentSlide].title}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {slides[currentSlide].subtitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {slides[currentSlide].description}
            </motion.p>

            <motion.div
              className="hero-buttons-modern"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <button 
                className="btn-hero-primary"
                onClick={() => navigate('/products')}
              >
                <span>Explore Products</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>

              <button 
                className="btn-hero-secondary"
                onClick={() => navigate('/brands')}
              >
                View Brands
              </button>
            </motion.div>
          </motion.div>

          {/* Slider Indicators */}
          <div className="hero-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="hero-floating-elements">
        <motion.div 
          className="floating-circle circle-1"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="floating-circle circle-2"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="floating-circle circle-3"
          animate={{
            y: [0, -15, 0],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default Hero;