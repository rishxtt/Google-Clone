import React, { useEffect } from "react";
import "../styles/SearchBar.css";

const SearchBar = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cse.google.com/cse.js?cx=15a77abfcef1645b6";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup the script on unmount
    };
  }, []);

  return (
    <div className="search-bar-wrapper">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        alt="Google Logo"
        className="google-logo"
      />
      <div className="search-box-container">
        <div className="gcse-searchbox-only"></div>
      </div>
    </div>
  );
};

export default SearchBar;
