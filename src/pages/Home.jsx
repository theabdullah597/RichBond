import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiOutlineShieldCheck,
  HiOutlineTruck,
  HiOutlineThumbUp,
  HiOutlineSupport,
} from "react-icons/hi";
import SectionHeading from "../components/SectionHeading";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import { categories } from "../data/categories";
import { products } from "../data/products";
import "../styles/pages/HomePage.css";

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <div className="hero-badge">
              <HiOutlineShieldCheck /> Trusted UK Wholesale Supplier
            </div>
            <h1>
              Your Premium Source for{" "}
              <span style={{ color: "#d4af37" }}>B2B Excellence</span>
            </h1>
            <p>
              Wholesale distribution of top-tier vape products, high-end
              electronics, and essential mobile accessories across the United
              Kingdom.
            </p>
            <div className="hero-btns">
              <Link to="/products" className="btn-primary">
                View Catalogue <HiArrowRight />
              </Link>
              <Link to="/contact" className="btn-outline">
                {" "}
                Become a Partner{" "}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            subtitle="Premium Categories"
            title="Our Top Categories"
          />
          <div className="categories-grid">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section section-gray">
        <div className="container">
          <SectionHeading
            subtitle="Why Richbondlimited"
            title="Your Strategic Business Partner"
          />
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <HiOutlineTruck />
              </div>
              <h3>UK-Wide Delivery</h3>
              <p>
                Fast and reliable shipping across the United Kingdom with order
                tracking and professional handling.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <HiOutlineThumbUp />
              </div>
              <h3>Bulk Pricing</h3>
              <p>
                Unbeatable wholesale rates designed to maximise your retail
                margins and business growth.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <HiOutlineShieldCheck />
              </div>
              <h3>Authentic Products</h3>
              <p>
                We source directly from manufacturers to guarantee 100% genuine
                products for your customers.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <HiOutlineSupport />
              </div>
              <h3>24/7 Support</h3>
              <p>
                Dedicated account managers to assist with your wholesale orders
                and technical enquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "50px",
            }}
          >
            <SectionHeading
              subtitle="Best Sellers"
              title="Featured Products"
              centered={false}
            />
            <Link
              to="/products"
              className="btn-outline"
              style={{
                color: "var(--primary)",
                borderColor: "#eee",
                marginBottom: "50px",
              }}
            >
              View All Products
            </Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => console.log(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Solutions Section */}
      <section className="section section-gray" style={{ textAlign: "center" }}>
        <div className="container">
          <SectionHeading
            title="Trusted Wholesale & Retail Distribution Solutions"
            centered={true}
          />
          <p style={{ maxWidth: "800px", margin: "0 auto 40px", fontSize: "1.2rem", color: "var(--text-dim)", lineHeight: "1.6" }}>
            We provide reliable product sourcing and distribution solutions designed to help businesses grow efficiently with quality products and strong market support.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/products" className="btn-primary" style={{ width: "fit-content" }}>
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-box">
            <div className="newsletter-content">
              <h2>Join Our Wholesale Network</h2>
              <p>
                Get early access to new product arrivals and exclusive bulk
                offers.
              </p>
            </div>
            <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your business email"
                required
              />
              <button type="submit" className="btn-subscribe">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
