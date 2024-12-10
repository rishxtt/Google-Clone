import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import LocationMap from "./components/LocationMap";
import Footer from "./components/Footer";
import MapToggleIcon from "./components/MapToggleIcon";
import "./App.css";

const App = () => {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap((prev) => !prev);
  };

  return (
    <div className="app">
      <MapToggleIcon onClick={toggleMap} showMap={showMap} />
      {showMap && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "20px",
            width: "300px",
            height: "400px",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            zIndex: 1000,
            padding: "10px",
          }}
        >
          <LocationMap />
        </div>
      )}
      <Header />
      <SearchBar />
      <Footer />
    </div>
  );
};

export default App;
