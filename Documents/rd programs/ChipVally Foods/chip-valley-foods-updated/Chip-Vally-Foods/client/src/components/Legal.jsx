import React, { useEffect } from 'react';
import './Legal.css'; // We will create this small CSS file below

const Legal = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Legal Information</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* You can edit this section later */}
        <div className="legal-content">
          <section id="privacy">
            <h2>Privacy Policy</h2>
            <p>
              At Chip Valley Foods, we value your privacy. This section will outline how we collect, 
              use, and protect your personal information. Content is currently being updated.
            </p>
          </section>

          <hr className="legal-divider" />

          <section id="terms">
            <h2>Terms of Service</h2>
            <p>
              Welcome to Chip Valley Foods. By using our website, you agree to comply with and be bound 
              by the following terms and conditions. Content is currently being updated.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;