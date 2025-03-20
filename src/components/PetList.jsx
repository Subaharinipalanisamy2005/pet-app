import React from "react";
import Pet from "./Pet";
import "./PetList.css"; // Ensure this file exists

const pets = [
  { id: 1, name: "Buddy", breed: "Golden Retriever", age: 3, description: "Playful and friendly.", image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg" },
  { id: 2, name: "Luna", breed: "Siberian Husky", age: 2, description: "Energetic and loyal.", image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" },
  { id: 3, name: "Milo", breed: "Beagle", age: 4, description: "Curious and affectionate.", image: "https://images.pexels.com/photos/7210757/pexels-photo-7210757.jpeg" },
  { id: 4, name: "Bella", breed: "Labrador Retriever", age: 5, description: "Gentle and loving.", image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" },
  { id: 5, name: "Max", breed: "German Shepherd", age: 3, description: "Brave and intelligent.", image: "https://images.pexels.com/photos/4587990/pexels-photo-4587990.jpeg" },
  { id: 6, name: "Daisy", breed: "Shih Tzu", age: 2, description: "Small and affectionate.", image: "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg" },
  { id: 7, name: "Charlie", breed: "Poodle", age: 4, description: "Smart and hypoallergenic.", image: "https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg"},
  { id: 8, name: "Rocky", breed: "Bulldog", age: 5, description: "Calm and loving.", image: "https://images.pexels.com/photos/15893740/pexels-photo-15893740.jpeg" },
  { id: 9, name: "Coco", breed: "Pomeranian", age: 3, description: "Fluffy and adorable.", image: "https://images.pexels.com/photos/1405937/pexels-photo-1405937.jpeg" },
  { id: 9, name: "Coco", breed: "Pomeranian", age: 3, description: "Fluffy and adorable.", image: "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg" }, 
  { id: 10, name: "Oliver", breed: "Persian Cat", age: 4, description: "Elegant and friendly.", image: "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg" }, 
  { id: 11, name: "Simba", breed: "Maine Coon", age: 6, description: "Large and playful.", image: "https://images.pexels.com/photos/12704074/pexels-photo-12704074.jpeg" }
];

const PetList = () => {
  return (
    <div className="pet-list-container">
      <h1 className="title">🐾 Available Pets for Adoption 🐾</h1>
      <div className="pet-list">
        {pets.map((pet) => (
          <Pet key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default PetList;
