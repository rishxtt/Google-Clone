import React from "react";

const MapToggleIcon = ({ onClick, showMap }) => {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/627px-Google_Maps_icon_%282020%29.svg.png?20200218211225"
      alt="Toggle Map"
      onClick={onClick}
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        width: "32px",
        height: "32px", 
        cursor: "pointer",
        zIndex: 1000,
      }}
    />
  );
};

export default MapToggleIcon;
