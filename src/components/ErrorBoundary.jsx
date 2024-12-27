// src/components/ErrorBoundary.js
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    // Update state to render fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service
    console.log('Error caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return <h1>Something went wrong with the Menu component.</h1>;
    }

    return this.props.children;
  }
}

// Add propTypes validation for 'children'
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired, // Validate the 'children' prop
};

export default ErrorBoundary;
