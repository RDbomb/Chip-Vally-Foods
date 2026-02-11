import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products, brands } from '../data/products';
import './ProductsPage.css';

const ProductsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [sortBy, setSortBy] = useState('alphabetical');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedBrand !== 'All Brands') {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'alphabetical':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'featured':
          return b.featured - a.featured;
        default:
          return 0;
      }
    });

    return sorted;
  }, [searchTerm, selectedBrand, sortBy]);

  const handleImageNav = (productId, direction, e) => {
    e.stopPropagation();
    const product = products.find(p => p.id === productId);
    const currentIndex = currentImageIndex[productId] || 0;
    const imagesLength = product.images.length;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % imagesLength;
    } else {
      newIndex = currentIndex === 0 ? imagesLength - 1 : currentIndex - 1;
    }
    
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: newIndex
    }));
  };

  return (
    <div className="products-page">
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
            Our Products
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore our diverse range of premium food products
          </motion.p>
        </div>
      </motion.div>

      <section className="products-section">
        <div className="container">
          <motion.div 
            className="filters-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="search-bar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  className="clear-search"
                  onClick={() => setSearchTerm('')}
                >
                  ✕
                </button>
              )}
            </div>

            <div className="filter-group">
              <label>Brand</label>
              <select 
                value={selectedBrand} 
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option>All Brands</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Sort By</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="alphabetical">Alphabetical</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="featured">Featured</option>
              </select>
            </div>
          </motion.div>

          <div className="results-info">
            <p>Showing {filteredAndSortedProducts.length} of {products.length} products</p>
          </div>

          {filteredAndSortedProducts.length > 0 ? (
            <div className="products-grid">
              {filteredAndSortedProducts.map((product, index) => {
                const currentIndex = currentImageIndex[product.id] || 0;
                const isHovered = hoveredProduct === product.id;

                return (
                  <motion.div
                    key={product.id}
                    className="product-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    whileHover={{ y: -10 }}
                    onClick={() => navigate(`/product/${product.id}`)}
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <div className="product-image">
                      {/* Smooth image transition with AnimatePresence */}
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={`${product.id}-${currentIndex}`}
                          src={product.images[currentIndex]} 
                          alt={product.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                      </AnimatePresence>
                      
                      {isHovered && product.images.length > 1 && (
                        <>
                          <button 
                            className="image-nav-btn prev-btn"
                            onClick={(e) => handleImageNav(product.id, 'prev', e)}
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M15 18l-6-6 6-6"/>
                            </svg>
                          </button>
                          <button 
                            className="image-nav-btn next-btn"
                            onClick={(e) => handleImageNav(product.id, 'next', e)}
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M9 18l6-6-6-6"/>
                            </svg>
                          </button>
                          
                          <div className="image-indicators">
                            {product.images.map((_, idx) => (
                              <span 
                                key={idx} 
                                className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                      
                      <div className="product-overlay">
                        <button className="view-btn">View Details</button>
                      </div>
                    </div>
                    
                    <div className="product-info">
                      <span className="product-brand">{product.brand}</span>
                      <h3>{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                      
                      {/* Removed Add to Cart Button, only Price remains */}
                      <div className="product-footer">
                        <span className="product-price">₹{product.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <motion.div 
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <h3>No products found</h3>
              <p>Try adjusting your search or filter to find what you're looking for.</p>
              <button 
                className="reset-filters"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedBrand('All Brands');
                  setSortBy('alphabetical');
                }}
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;