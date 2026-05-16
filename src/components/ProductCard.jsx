import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineShoppingCart, HiOutlineEye } from 'react-icons/hi';
import '../styles/components/ProductCard.css';

const ProductCard = ({ product, onQuickView }) => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="product-card"
    >
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-badge">{product.stock}</div>
        <div className="product-overlay">
          <button className="overlay-btn" onClick={() => onQuickView(product)}>
            <HiOutlineEye /> Quick View
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <span className="product-cat">{product.category}</span>
        <h3 className="product-title">{product.name}</h3>
        <div className="product-meta">
          <div className="product-price">
            <span className="price-label">Price</span>
            <span className="price-value" style={{ fontSize: '1rem' }}>Enquire via Email</span>
          </div>
        </div>
        <button className="btn-add-inquiry" onClick={() => navigate('/contact')}>
          <HiOutlineShoppingCart /> Contact for Order
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
