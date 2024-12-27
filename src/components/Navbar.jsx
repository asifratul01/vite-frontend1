import React, { useState, startTransition } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Link } from 'react-router-dom';

const Navbar = ({ title, links }) => {
  const [activeLink, setActiveLink] = useState(null);

  function handleLinkClick(link) {
    startTransition(() => {
      // Non-urgent state update
      setActiveLink(link);
    });
  }

  return (
    <nav>
      <h2>{title}</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              onClick={() => handleLinkClick(link.label)}
              style={{
                fontWeight: activeLink === link.label ? 'bold' : 'normal',
                color: activeLink === link.label ? 'blue' : 'black',
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Prop validation
Navbar.propTypes = {
  title: PropTypes.string.isRequired, // title should be a string
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired, // path should be a string
      label: PropTypes.string.isRequired, // label should be a string
    })
  ).isRequired, // links should be an array of objects containing 'path' and 'label'
};

export default Navbar;
