import React from "react";
import DestinationCard from "./DestinationCard";
import "../App.css"; // Ensure this is linked

const destinations = [
    {
        id: 1,
        name: "Bali",
        location: "Indonesia",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
        description: "Tropical paradise with beautiful beaches and vibrant culture",
        price: "$1,200",
      },
      {
        id: 2,
        name: "Paris",
        location: "France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
        description: "City of love, art, and exquisite cuisine",
        price: "$1,500",
      },
      {
        id: 3,
        name: "Santorini",
        location: "Greece",
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
        description: "Stunning sunsets and white-washed architecture",
        price: "$1,800",
      },
      {
        id: 4,
        name: "Tokyo",
        location: "Japan",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
        description: "Modern city with rich traditions and amazing food",
        price: "$2,000",
      },
      {
        id: 5,
        name: "Queenstown",
        location: "New Zealand",
        image: "https://wallpapercave.com/wp/wp7463818.jpg",
        description: "Queenstown is a resort town in the south-west of New Zealand's South Island, surrounded by stunning mountains, lakes and rivers. It's the ultimate",
        price: "$2,200",
      },
      {
        id: 6,
        name: "Dubai",
        location: "UAE",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
        description: "Luxury, skyscrapers, and stunning desert experiences",
        price: "$2,500",
      },
    ];

const DestinationContainer = () => {
  return (
    <div className="destination-container">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
};

export default DestinationContainer;
