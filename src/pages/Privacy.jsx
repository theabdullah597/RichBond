import React from 'react';
import SectionHeading from '../components/SectionHeading';
import '../styles/pages/TextPage.css';

const Privacy = () => {
  return (
    <div className="text-page">
      <div className="container">
        <SectionHeading subtitle="Legal Information" title="Privacy Policy" />
        
        <div className="text-page-content">
          <div className="text-section">
            <h2>1. Introduction</h2>
            <p>RichBond Limited values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.</p>
          </div>

          <div className="text-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul>
              <li>Name</li>
              <li>Business name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing and shipping information</li>
              <li>Enquiry or order details</li>
              <li>IP address and browser information</li>
            </ul>
          </div>

          <div className="text-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to enquiries</li>
              <li>Process wholesale requests</li>
              <li>Improve our website and services</li>
              <li>Communicate regarding products and orders</li>
              <li>Maintain website security and prevent fraud</li>
            </ul>
          </div>

          <div className="text-section">
            <h2>4. Cookies</h2>
            <p>Our website may use cookies and similar technologies to improve user experience and website functionality.</p>
            <p>Users can disable cookies through browser settings if preferred.</p>
          </div>

          <div className="text-section">
            <h2>5. Data Protection</h2>
            <p>We implement reasonable technical and organisational measures to protect your information from unauthorised access, misuse, or disclosure.</p>
          </div>

          <div className="text-section">
            <h2>6. Sharing of Information</h2>
            <p>We do not sell or rent personal information to third parties.</p>
            <p>We may share information with:</p>
            <ul>
              <li>Delivery partners</li>
              <li>Payment providers</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </div>

          <div className="text-section">
            <h2>7. Vape Product Compliance</h2>
            <p>Because this website contains vape-related products, users must be of legal age according to UK law and local regulations.</p>
          </div>

          <div className="text-section">
            <h2>8. Third-Party Services</h2>
            <p>Our website may use third-party tools or services such as analytics, payment gateways, or contact forms. These services may collect limited technical information according to their own privacy policies.</p>
          </div>

          <div className="text-section">
            <h2>9. Data Retention</h2>
            <p>We retain customer information only for as long as necessary to provide services, fulfill legal obligations, and maintain business records.</p>
          </div>

          <div className="text-section">
            <h2>10. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have rights to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request corrections</li>
              <li>Request deletion of your data</li>
              <li>Object to certain processing activities</li>
            </ul>
          </div>

          <div className="text-section">
            <h2>11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Updated versions will be posted on this page.</p>
          </div>

          <div className="text-section">
            <h2>12. Contact Us</h2>
            <p>For any privacy-related questions, contact:</p>
            <ul>
              <li><strong>RichBond Limited</strong></li>
              <li>Email: <a href="mailto:info@richbondlimited.uk">info@richbondlimited.uk</a></li>
              <li>Website: <a href="/">richbondlimited.uk</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
