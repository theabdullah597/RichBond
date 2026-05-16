import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX, HiSearch } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/components/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/products?search=${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="Richbondlimited Logo" />
          {/* <span>RICHBOND<span style={{ color: '#fff' }}>LIMITED</span></span> */}
        </Link>

        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Products</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          <NavLink to="/faq" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>FAQs</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
        </div>

        <div className="nav-actions">
          <div className="nav-search">
            <HiSearch onClick={() => navigate(`/products?search=${searchTerm}`)} style={{ cursor: 'pointer' }} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
          <Link to="/contact" className="btn-inquiry">Wholesale Inquiry</Link>
          <button className="nav-toggle" onClick={toggleMenu}>
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
          >
            <div className="mobile-links">
              <Link to="/" onClick={toggleMenu}>Home</Link>
              <Link to="/products" onClick={toggleMenu}>Products</Link>
              <Link to="/about" onClick={toggleMenu}>About</Link>
              <Link to="/faq" onClick={toggleMenu}>FAQ</Link>
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
