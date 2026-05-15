import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/components/AgeVerificationModal.css';

const AgeVerificationModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already verified their age
    const hasVerified = sessionStorage.getItem('ageVerified');
    if (!hasVerified) {
      // Add a slight delay before showing the modal
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem('ageVerified', 'true');
    setIsVisible(false);
  };

  const handleExit = () => {
    // Redirect to a safe site like Google since window.close() might be blocked
    window.location.href = 'https://www.google.com';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="age-modal-overlay"
        >
          <motion.div 
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            className="age-modal-content"
          >
            <img src="/logo.png" alt="Richbondlimited Logo" className="age-modal-logo" />
            <h2>Age Verification</h2>
            <p>
              This website contains products intended for adult use only. 
              By entering this site, you certify that you are at least 18 years of age.
            </p>
            
            <div className="age-modal-btns">
              <button className="btn-age-exit" onClick={handleExit}>Exit</button>
              <button className="btn-age-enter" onClick={handleEnter}>I am 18 or older - Enter</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AgeVerificationModal;
