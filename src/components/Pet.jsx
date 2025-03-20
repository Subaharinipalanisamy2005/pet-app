import React, { useState } from "react";
import AdoptionForm from "./AdoptionForm";
import "./Pet.css";

const Pet = ({ pet }) => {
  const [isAdopting, setIsAdopting] = useState(false);

  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} className="pet-image" />
      <h2>{pet.name}</h2>
      <p><strong>Breed:</strong> {pet.breed}</p>
      <p><strong>Age:</strong> {pet.age} years</p>
      <p className="pet-description">{pet.description}</p>
      <button className="adopt-btn" onClick={() => setIsAdopting(true)}>Adopt</button>

      {isAdopting && <AdoptionForm petName={pet.name} onClose={() => setIsAdopting(false)} />}
    </div>
  );
};

export default Pet;


