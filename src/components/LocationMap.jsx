import React, { useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const LocationMap = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [position, setPosition] = useState({ lat: 51.505, lng: -0.09 });
  const [location, setLocation] = useState(null);

  const apiKey = "pk.c07318919c1dd4394e9ef1da90141fc6";

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      try {
        const response = await axios.get(
          `https://us1.locationiq.com/v1/search?key=${apiKey}&q=${encodeURIComponent(
            searchQuery
          )}&format=json`
        );
        const result = response.data[0];
        setPosition({ lat: parseFloat(result.lat), lng: parseFloat(result.lon) });
        setLocation(result.display_name);
      } catch (error) {
        console.error("Error fetching location:", error);
        alert("Location not found. Please try again.");
      }
    } else {
      alert("Please enter a location to search.");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search for a location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "90%",
            color: "#555",
            backgroundColor: "#fff",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "#0056b3") 
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = "#007BFF") 
          }
        >
          Search Location
        </button>
      </div>

      <div style={{ height: "300px", width: "100%", borderRadius: "8px" }}>
        <MapContainer
          center={[position.lat, position.lng]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          key={`${position.lat}-${position.lng}`} 
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[position.lat, position.lng]}>
            <Popup>
              {location ? `Location: ${location}` : "Coordinates not found"}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default LocationMap;
