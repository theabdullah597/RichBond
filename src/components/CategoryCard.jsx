import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/components/CategoryCard.css';

const CategoryCard = ({ category }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="category-card"
    >
      <Link to={`/products?category=${category.name}`}>
        <div className="category-image">
          <img src={category.image} alt={category.name} />
          <div className="category-overlay"></div>
          <div className="category-content">
            <span className="product-count">{category.count}</span>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <span className="explore-btn">Explore Category</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
