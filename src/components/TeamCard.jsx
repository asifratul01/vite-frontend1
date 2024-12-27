import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const TeamCard = ({ name, position, photo }) => {
  return (
    <div className="team-card">
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
};

// Add prop-types validation
TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired, // If photo is a URL or image path
};

export default TeamCard;
