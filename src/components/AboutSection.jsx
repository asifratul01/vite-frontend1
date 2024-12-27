import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const AboutSection = ({ title, paragraph1, paragraph2 }) => {
  return (
    <section className="about-section">
      <h2>{title}</h2>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </section>
  );
};

// Prop validation
AboutSection.propTypes = {
  title: PropTypes.string.isRequired, // title should be a string
  paragraph1: PropTypes.string.isRequired, // first paragraph should be a string
  paragraph2: PropTypes.string.isRequired, // second paragraph should be a string
};

export default AboutSection;
