import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-right">
        <a
          href="https://mail.google.com/mail/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gmail
        </a>
        <a
          href="https://accounts.google.com/v3/signin/identifier?dsh=-235831970334581929&service=lh2&flowName=WebLiteSignIn&flowEntry=ServiceLogin&ifkv=AU9NCcyw9MlAJ5CAgWcjcM2u7IyedgrXPxQc2BZHvhnLWTMR_TLFOGJ9_j2dqFGAjnYazuODLLYRZA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Images
        </a>
        <a
          href="https://accounts.google.com/signin"
          target="_blank"
          rel="noopener noreferrer"
          className="sign-in-button"
        >
          Sign In
        </a>
        <a
          href="https://labs.google/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Google_Labs_Icon_%282023%29.svg/1200px-Google_Labs_Icon_%282023%29.svg.png"
            alt="Google Labs"
            className="apps-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
