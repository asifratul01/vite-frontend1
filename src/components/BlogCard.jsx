import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const BlogCard = ({ title, body, author, date }) => {
  return (
    <div className="blog-card">
      <h3>{title}</h3>
      <p>{body.slice(0, 100)}...</p> {/* Truncate the body for preview */}
      <small>
        By {author} on {new Date(date).toLocaleDateString()}
      </small>
    </div>
  );
};

// Add prop-types validation
BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default BlogCard;
