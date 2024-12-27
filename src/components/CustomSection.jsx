import React from 'react';
import PropTypes from 'prop-types';

const CustomSection = ({ title, description }) => {
  return (
    <div className="custom-section">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

CustomSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CustomSection;
