import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Menu = ({ menuItems, onLogout }) => {
  // Default to an empty array if menuItems is not provided
  const items = menuItems || [];

  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
        {/* Add a logout option if onLogout is provided */}
        {onLogout && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLogout: PropTypes.func,
};

export default Menu;
