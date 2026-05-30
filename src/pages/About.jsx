import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineBuildingStorefront,
  HiOutlineCheckBadge,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import SectionHeading from "../components/SectionHeading";
import "../styles/pages/AboutPage.css";

const About = () => {
  const achievements = [
    {
      id: 1,
      icon: HiOutlineTruck,
      value: "25,000+",
      label: "Orders Fulfilled",
      description: "Successfully delivered wholesale orders across the UK.",
    },
    {
      id: 2,
      icon: HiOutlineUserGroup,
      value: "1,200+",
      label: "Retail Partners",
      description: "Long-term partnerships with independent and chain retailers.",
    },
    {
      id: 3,
      icon: HiOutlineBuildingStorefront,
      value: "300+",
      label: "Top Brands",
      description:
        "A broad catalogue of trusted vape and consumer electronics brands.",
    },
    {
      id: 4,
      icon: HiOutlineSparkles,
      value: "98%",
      label: "Partner Retention",
      description:
        "Consistent service quality that keeps partners growing with us.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Leading the Way in UK Distribution
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Richbondlimited is more than just a wholesaler. We are a strategic
            partner committed to powering the growth of retail businesses across
            the United Kingdom.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="story-content"
            >
              <h2>Our Story</h2>
              <p>
                Founded over a decade ago, Richbondlimited began with a simple
                mission: to bridge the gap between global manufacturers and UK
                retail businesses.
              </p>
              <p>
                Starting from a small warehouse in London, we have grown into
                one of the region's most trusted distributors of vapes,
                electronics, and mobile accessories. Our journey is defined by a
                relentless pursuit of quality and a deep understanding of the
                B2B marketplace.
              </p>
              <div className="story-features">
                <div className="story-feat-item">
                  <HiOutlineCheckBadge /> <span>Certified UK Distributor</span>
                </div>
                <div className="story-feat-item">
                  <HiOutlineGlobeAlt /> <span>Global Sourcing Power</span>
                </div>
                <div className="story-feat-item">
                  <HiOutlineUserGroup />{" "}
                  <span>Trusted Retail Partnerships</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="story-image"
            >
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
                alt="Warehouse"
              />
              {/* <div className="image-badge">
                <h3>10+</h3>
                <p>Years of Expertise</p>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="section section-dark">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card section-dark">
              <h3 style={{ color: "var(--accent)" }}>Our Mission</h3>
              <p>
                To provide UK retailers with reliable access to high-quality,
                authentic consumer electronics and vape products at competitive
                wholesale prices.
              </p>
            </div>
            <div className="feature-card section-dark">
              <h3 style={{ color: "var(--accent)" }}>Our Vision</h3>
              <p>
                To be the primary catalyst for retail success in the UK, setting
                the standard for excellence in wholesale distribution and
                customer service.
              </p>
            </div>
            <div className="feature-card section-dark">
              <h3 style={{ color: "var(--accent)" }}>Our Values</h3>
              <p>
                Integrity, transparency, and innovation are at the core of
                everything we do. We build relationships based on trust and
                mutual growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section achievements-section">
        <div className="container">
          <SectionHeading
            subtitle="Our Achievements"
            title="Proven Results for Retail Partners"
          />
          <div className="achievements-grid">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;

              return (
                <motion.div
                  key={achievement.id}
                  className="achievement-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="achievement-icon">
                    <Icon />
                  </div>
                  <h3>{achievement.value}</h3>
                  <h4>{achievement.label}</h4>
                  <p>{achievement.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
