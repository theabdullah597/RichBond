import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineX, HiCheckCircle, HiOutlineShoppingCart } from 'react-icons/hi';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import { products } from '../data/products';
import { categories } from '../data/categories';
import '../styles/pages/ProductsPage.css';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    const search = params.get('search');
    
    if (cat) setSelectedCategory(cat);
    
    let result = [...products];

    if (cat && cat !== 'All') {
      result = result.filter(p => p.category.includes(cat));
    } else if (selectedCategory !== 'All') {
      result = result.filter(p => p.category.includes(selectedCategory));
    }

    if (search) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(search.toLowerCase()) || 
        p.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);

    setFilteredProducts(result);
  }, [location.search, selectedCategory, sortBy]);

  return (
    <div className="products-page">
      <div className="container">
        <SectionHeading 
          subtitle="Wholesale Catalog" 
          title="Premium Product Range" 
        />

        <div className="products-layout">
          {/* Sidebar Filters */}
          <aside className="products-sidebar">
            <div className="filter-section">
              <h4>Categories</h4>
              <div className="filter-list">
                <div 
                  className={`filter-item ${selectedCategory === 'All' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('All')}
                >
                  <div className="checkbox"></div> All Products
                </div>
                {categories.map(cat => (
                  <div 
                    key={cat.id} 
                    className={`filter-item ${selectedCategory === cat.name ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat.name)}
                  >
                    <div className="checkbox"></div> {cat.name}
                  </div>
                ))}
              </div>
            </div>

          </aside>

          {/* Main Grid */}
          <main className="products-main">
            <div className="products-top-bar">
              <div className="results-count">
                Showing {filteredProducts.length} wholesale products
              </div>
              <div className="sorting">
                <select 
                  className="sorting-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Sort by: Featured</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            <div className="products-grid-inner">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onQuickView={(p) => setSelectedProduct(p)} 
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="empty-state" style={{ textAlign: 'center', padding: '100px 0' }}>
                <h3>No products found in this category.</h3>
                <p>Try adjusting your filters or search criteria.</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="close-modal" onClick={() => setSelectedProduct(null)}>
                <HiOutlineX />
              </div>
              
              <div className="modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>

              <div className="modal-details">
                <span className="modal-category">{selectedProduct.category}</span>
                <h2>{selectedProduct.name}</h2>
                <p className="description">{selectedProduct.description}</p>

                <div className="modal-price-tier">
                  <h4>Wholesale Inquiry</h4>
                  <p>Prices for this product are provided upon business verification. Please contact us for a bulk quote tailored to your requirements.</p>
                </div>

                <div className="modal-features">
                  <h4>Key Features</h4>
                  <ul>
                    {selectedProduct.features.map((f, i) => (
                      <li key={i}><HiCheckCircle style={{ color: 'var(--accent)' }} /> {f}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-btns">
                  <button className="btn-primary" style={{ flex: 1 }} onClick={() => navigate('/contact')}>
                    <HiOutlineShoppingCart /> Contact for Quote
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
