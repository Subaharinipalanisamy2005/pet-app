import React, { useState } from "react";
import PetList from "../components/PetList"; // Import the PetList component
import { Link } from "react-router-dom";
import "./styles/Home.css"; // Import the CSS file

const Home = () => {
  const [showPets, setShowPets] = useState(false); // State to toggle pet list visibility

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to the Pet Adoption app</h1>
        <p>Find your perfect furry friend!</p>
        <div className="buttons">
          <button className="view-pets-btn" onClick={() => setShowPets(!showPets)}>
            {showPets ? "View Pets" : "View Pets"}
          </button>
        </div>
      </div>

      {showPets && <PetList />} {/* Show PetList when button is clicked */}
    </div>
  );
};

export default Home;
