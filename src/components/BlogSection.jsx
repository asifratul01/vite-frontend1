import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const BlogSection = ({ blogs }) => {
  return (
    <div className="blog-section">
      {blogs && blogs.length > 0 ? (
        blogs.slice(0, 6).map(blog => (
          <div key={blog.id} className="blog-card">
            <h3>{blog.title}</h3>
            <p>{blog.content.substring(0, 100)}...</p>
          </div>
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
};

// Add prop-types validation
BlogSection.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired, // Changed 'body' to 'content' to match the prop name
    })
  ).isRequired,
};

export default BlogSection;
