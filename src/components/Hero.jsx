import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ title, description, backgroundImage }) => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center vertically
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <button>Learn More</button>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  title: 'Welcome to Our Blog Agency',
  description: 'Your non-stop solution for high-quality content.',
  backgroundImage:
    '/images/mountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes.jpeg', // Public path
};

export default Hero;
