import React from 'react';
import "./TestCard.css"; // optional for styling

const TestCard = ({ name, location, feedback, profile_pic }) => {
  return (
    <div className="test-card">
      <div className="test-card-header">
        <img src={profile_pic} alt={name} className="profile-pic" />
        <div className="user-info">
          <h4>{name}</h4>
          <p className="location">{location}</p>
        </div>
      </div>
      <p className="feedback">"{feedback}"</p>
    </div>
  );
};

export default TestCard;
