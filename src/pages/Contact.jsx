import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock, HiOutlinePaperAirplane } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import SectionHeading from '../components/SectionHeading';
import '../styles/pages/ContactPage.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'Wholesale Inquiry',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace these with actual EmailJS IDs when available
    emailjs.send('service_3tw76mi', 'template_3gxdr8v', formData, 'MZROnu0pLq769s0Sx')

    // Simulating success for demonstration
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', subject: 'Wholesale Inquiry', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="container">
        <SectionHeading subtitle="Get In Touch" title="Wholesale Partnership Inquiries" />

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info-wrap">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="contact-card"
            >
              <div className="contact-card-icon"><HiOutlineLocationMarker /></div>
              <div className="contact-card-text">
                <h4>Our Location</h4>
                <p>5 Brayford Square, London, United Kingdom, E1 0SG</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="contact-card"
            >
              <div className="contact-card-icon"><HiOutlinePhone /></div>
              <div className="contact-card-text">
                <h4>Call Us</h4>
                <p><a href="tel:02080587336" style={{ color: 'inherit', textDecoration: 'none' }}>0208 058 7336</a></p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="contact-card"
            >
              <div className="contact-card-icon"><HiOutlineMail /></div>
              <div className="contact-card-text">
                <h4>Email Us</h4>
                <p><a href="mailto:info@richbondlimited.uk" style={{ color: 'inherit', textDecoration: 'none' }}>info@richbondlimited.uk</a></p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="contact-form-wrap"
          >
            <h2>Send an Inquiry</h2>
            <p>Interested in our wholesale pricing? Fill out the form below and our team will get back to you with a custom quote.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Business Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" required />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Retail Store Ltd" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="07123 456789" />
                </div>
                <div className="form-group full-width">
                  <label>Inquiry Subject</label>
                  <select name="subject" value={formData.subject} onChange={handleChange}>
                    <option value="Wholesale Inquiry">Wholesale Inquiry</option>
                    <option value="Order Tracking">Order Tracking</option>
                    <option value="Bulk Discount Request">Bulk Discount Request</option>
                    <option value="Become a Supplier">Become a Supplier</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Tell us about your business and which products you are interested in..." required></textarea>
                </div>
              </div>

              <button type="submit" className="btn-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : (
                  <>
                    Send Inquiry <HiOutlinePaperAirplane />
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ color: '#2ecc71', marginTop: '15px', textAlign: 'center', fontWeight: 'bold' }}
                >
                  Thank you! Your inquiry has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Live Map Integration */}
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.493863483561!2d-0.0463991!3d51.522513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d157a41416d%3A0x6b1c4b4b4b4b4b4b!2s5%20Brayford%20Square%2C%20London%20E1%200SG%2C%20UK!5e0!3m2!1sen!2suk!4v1715785000000!5m2!1sen!2suk"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
