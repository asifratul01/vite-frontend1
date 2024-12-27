import React, { useEffect } from 'react'; // Keep this import to access React and useEffect
import Hero from '../components/Hero';
import BlogSection from '../components/BlogSection';
import CustomSection from '../components/CustomSection';
import '../index.css'; // Path to the index.css from src/pages

const HomePage = () => {
  return (
    <div className="centered-page">
      {/* Hero Section */}
      <Hero
        title="Welcome to Our Blog Agency"
        description="Your non-stop solution for high-quality content."
        backgroundImage="/images/mountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes.jpeg"
      />

      {/* Blog Section (Dynamic Content) */}
      <BlogSection />

      {/* Custom Section (Optional Dynamic Content) */}
      <CustomSection />
    </div>
  );
};
export default HomePage;
