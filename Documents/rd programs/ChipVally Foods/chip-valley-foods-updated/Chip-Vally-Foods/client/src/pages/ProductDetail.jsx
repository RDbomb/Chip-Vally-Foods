import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container">
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/products')} className="btn btn-primary">
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  // Navigation functions for image gallery
  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  // Get related products from same brand
  const relatedProducts = products
    .filter(p => p.brand === product.brand && p.id !== product.id)
    .slice(0, 4);

  const shopOnlineLinks = [
    {
      name: 'Amazon',
      key: 'amazon',
      color: '#FF9900',
      url: product.shopLinks.amazon
    },
    {
      name: 'BigBasket',
      key: 'bigbasket',
      color: '#84C225',
      url: product.shopLinks.bigbasket
    },
    {
      name: 'Blinkit',
      key: 'blinkit',
      color: '#F8CB46',
      url: product.shopLinks.blinkit
    },
    {
      name: 'Swiggy Instamart',
      key: 'instamart',
      color: '#FC8019',
      url: product.shopLinks.instamart
    },
    {
      name: 'Zepto',
      key: 'zepto',
      color: '#8B50FF',
      url: product.shopLinks.zepto
    }
  ];

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <Link to={`/brands`}>{product.brand}</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <section className="product-detail-section">
        <div className="container">
          <div className="product-detail-grid">
            {/* Product Image Gallery */}
            <motion.div 
              className="product-image-section"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="main-image">
                {/* Navigation Arrows */}
                <button 
                  className="image-nav-btn prev-btn"
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                
                <button 
                  className="image-nav-btn next-btn"
                  onClick={handleNextImage}
                  aria-label="Next image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>

                {/* Main Image with Animation */}
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImageIndex}
                    src={product.images[activeImageIndex]} 
                    alt={`${product.name} - Image ${activeImageIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </AnimatePresence>

                {/* Image Counter */}
                <div className="image-counter">
                  {activeImageIndex + 1} / {product.images.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="thumbnail-strip">
                {product.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className={`thumbnail ${index === activeImageIndex ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={image} alt={`${product.name} thumbnail ${index + 1}`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div 
              className="product-info-section"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="product-brand-tag">{product.brand}</div>
              <h1>{product.name}</h1>
              <p className="product-description">{product.description}</p>
              
              <div className="product-meta">
                <span className="category">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M3 9h18M9 21V9"/>
                  </svg>
                  {product.category}
                </span>
                <span className="weight">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 7h-9M14 17H5"/>
                    <circle cx="17" cy="17" r="3"/>
                    <circle cx="7" cy="7" r="3"/>
                  </svg>
                  {product.weight}
                </span>
              </div>

              <div className="price-section">
                <span className="price">₹{product.price.toFixed(2)}</span>
                <span className="tax-info">Inclusive of all taxes</span>
              </div>

              {/* Shop Online Section */}
              <div className="shop-online-section">
                <h3>Shop Online</h3>
                <div className="shop-online-buttons">
                  {shopOnlineLinks.map((shop, index) => (
                    shop.url ? (
                      <a
                        key={index}
                        href={shop.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shop-btn"
                        style={{ 
                          backgroundColor: shop.color,
                          borderColor: shop.color
                        }}
                      >
                        <span className="shop-name">{shop.name}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                    ) : (
                      <div
                        key={index}
                        className="shop-btn shop-btn-disabled"
                        style={{ 
                          backgroundColor: '#e0e0e0',
                          borderColor: '#e0e0e0',
                          cursor: 'not-allowed'
                        }}
                      >
                        <span className="shop-name" style={{ color: '#999' }}>{shop.name}</span>
                        <span style={{ color: '#999', fontSize: '0.8rem' }}>Coming Soon</span>
                      </div>
                    )
                  ))}
                </div>
              </div>

              {/* Product Details Tabs */}
              <div className="product-tabs">
                <div className="tab-content">
                  <h3>Ingredients</h3>
                  <p>{product.ingredients}</p>
                </div>
                
                <div className="tab-content">
                  <h3>Nutritional Information</h3>
                  <ul className="nutrition-list">
                    <li>
                      <span>Calories</span>
                      <span>{product.nutritionalInfo.calories}</span>
                    </li>
                    <li>
                      <span>Protein</span>
                      <span>{product.nutritionalInfo.protein}</span>
                    </li>
                    <li>
                      <span>Carbohydrates</span>
                      <span>{product.nutritionalInfo.carbs}</span>
                    </li>
                    <li>
                      <span>Fat</span>
                      <span>{product.nutritionalInfo.fat}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="related-products-section">
          <div className="container">
            <h2>More from {product.brand}</h2>
            <div className="related-products-grid">
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  className="related-product-card"
                  whileHover={{ y: -5 }}
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <div className="related-product-image">
                    <img src={relatedProduct.image} alt={relatedProduct.name} />
                  </div>
                  <div className="related-product-info">
                    <h4>{relatedProduct.name}</h4>
                    <p className="related-price">₹{relatedProduct.price.toFixed(2)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;