import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <a
          href="https://about.google/intl/ALL_in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
        <a
          href="https://ads.google.com/intl/en_in/home/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Advertising
        </a>
        <a
          href="https://business.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Business
        </a>
        <a
          href="https://www.google.com/intl/en/search/howsearchworks/how-search-works/"
          target="_blank"
          rel="noopener noreferrer"
        >
          How Search works
        </a>
      </div>
    </div>
  );
};

export default Footer;
