import React, { useState, useEffect } from 'react';
import BlogSection from '../components/BlogSection';
import { fetchBlogs } from '../utils/api';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const data = await fetchBlogs();
      setBlogs(data);
    };
    loadBlogs();
  }, []);

  return (
    <div>
      <section className="centered">
        <h1>Our Blogs</h1>
        <BlogSection blogs={blogs} />
      </section>
    </div>
  );
};

export default BlogPage;
