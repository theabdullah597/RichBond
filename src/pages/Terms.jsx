import React from 'react';
import SectionHeading from '../components/SectionHeading';
import '../styles/pages/TextPage.css';

const Terms = () => {
  return (
    <div className="text-page">
      <div className="container">
        <SectionHeading subtitle="Legal Information" title="Terms & Conditions" />
        
        <div className="text-page-content">
          <div className="text-section">
            <h2>1. Introduction</h2>
            <p>Welcome to RichBond Limited. By accessing or using this website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use this website.</p>
          </div>

          <div className="text-section">
            <h2>2. About Us</h2>
            <p>RichBond Limited is a UK-based wholesale supplier offering vape products, electronics, mobile accessories, chargers, audio devices, and related wholesale goods.</p>
          </div>

          <div className="text-section">
            <h2>3. Wholesale Use Only</h2>
            <p>Our products and services are intended for wholesale and business customers only. By placing an order or enquiry, you confirm that you are legally permitted to purchase and resell such products within your jurisdiction.</p>
          </div>

          <div className="text-section">
            <h2>4. Age Restriction</h2>
            <p>Certain products sold on this website, including vape-related products, are strictly intended for individuals aged 18 years or older. We reserve the right to refuse service or cancel orders where age verification requirements are not met.</p>
          </div>

          <div className="text-section">
            <h2>5. Product Availability</h2>
            <p>All products displayed on the website are subject to availability. We reserve the right to modify, discontinue, or limit quantities of products without prior notice.</p>
          </div>

          <div className="text-section">
            <h2>6. Pricing</h2>
            <p>Prices may change without notice. Wholesale pricing, quotations, and product availability are confirmed only after direct communication with our sales team.</p>
          </div>

          <div className="text-section">
            <h2>7. Orders & Payments</h2>
            <ul>
              <li>Orders are confirmed only after approval by our team.</li>
              <li>We reserve the right to reject or cancel any order at our discretion.</li>
              <li>Payment terms will be agreed upon directly with wholesale customers.</li>
            </ul>
          </div>

          <div className="text-section">
            <h2>8. Shipping & Delivery</h2>
            <p>Delivery times are estimates only and may vary depending on stock availability and courier services. RichBond Limited is not responsible for delays caused by third-party logistics providers.</p>
          </div>

          <div className="text-section">
            <h2>9. Returns & Refunds</h2>
            <p>Returns are accepted only for defective or incorrectly supplied products. Customers must contact us within 48 hours of delivery regarding any issues.</p>
            <p>Returned items must:</p>
            <ul>
              <li>Be unused</li>
              <li>Remain in original packaging</li>
              <li>Include proof of purchase</li>
            </ul>
            <p>Refunds or replacements are processed after inspection and approval.</p>
          </div>

          <div className="text-section">
            <h2>10. Product Compliance</h2>
            <p>Customers are responsible for ensuring that products purchased comply with local laws and regulations in their country or region before resale or distribution.</p>
          </div>

          <div className="text-section">
            <h2>11. Intellectual Property</h2>
            <p>All website content, including logos, branding, text, graphics, and images, belongs to RichBond Limited unless otherwise stated. Unauthorized use or reproduction is prohibited.</p>
          </div>

          <div className="text-section">
            <h2>12. Limitation of Liability</h2>
            <p>RichBond Limited shall not be liable for:</p>
            <ul>
              <li>Indirect or consequential damages</li>
              <li>Loss of business or profits</li>
              <li>Misuse of products purchased from the website</li>
            </ul>
            <p>All products are used at the customer’s own risk and responsibility.</p>
          </div>

          <div className="text-section">
            <h2>13. Third-Party Links</h2>
            <p>This website may contain links to third-party websites. We are not responsible for the content, security, or policies of external websites.</p>
          </div>

          <div className="text-section">
            <h2>14. Privacy</h2>
            <p>Please review our <a href="/privacy">Privacy Policy</a> to understand how we collect and use customer information.</p>
          </div>

          <div className="text-section">
            <h2>15. Changes to Terms</h2>
            <p>We reserve the right to update or modify these Terms & Conditions at any time without prior notice.</p>
          </div>

          <div className="text-section">
            <h2>16. Contact Information</h2>
            <p>For enquiries regarding these Terms & Conditions, please contact:</p>
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

export default Terms;
