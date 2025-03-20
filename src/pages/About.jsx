import React from "react";
import "./styles/About.css"; // Correct path

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to the Pet Adoption App! Our mission is to help loving families
        find their perfect pet companion. We connect you with animals in need
        of a home.
      </p>
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Wide variety of pets available</li>
        <li>Easy adoption process</li>
        <li>Supportive community</li>
      </ul>
    </div>
  );
};

export default About;

