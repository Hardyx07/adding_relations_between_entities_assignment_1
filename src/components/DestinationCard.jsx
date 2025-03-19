import React from "react";

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} />
      <div className="destination-info">
        <h2>{destination.name}</h2>
        <p>{destination.location}</p>
        <p>{destination.description}</p>
        <p className="price">{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
