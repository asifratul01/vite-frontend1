import React, { useState, useEffect } from 'react';
import { fetchBlogs, createBlog, deleteBlog } from '../utils/api';

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(true);

  // Fetch blogs on component mount
  useEffect(() => {
    const loadBlogs = async () => {
      setLoading(true);
      const data = await fetchBlogs();
      setBlogs(data);
      setLoading(false);
    };
    loadBlogs();
  }, []);

  // Create a new blog
  const handleCreate = async () => {
    if (!newBlog.title || !newBlog.content) {
      alert('Title and content are required');
      return;
    }
    const created = await createBlog(newBlog);
    setBlogs(prev => [...prev, created]);
    setNewBlog({ title: '', content: '' });
  };

  // Delete a blog
  const handleDelete = async id => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      await deleteBlog(id);
      setBlogs(prev => prev.filter(blog => blog._id !== id)); // Adjust to `_id` if needed
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Manage Blogs</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newBlog.title}
          onChange={e =>
            setNewBlog(prev => ({ ...prev, title: e.target.value }))
          }
        />
        <textarea
          placeholder="Content"
          value={newBlog.content}
          onChange={e =>
            setNewBlog(prev => ({ ...prev, content: e.target.value }))
          }
        ></textarea>
        <button onClick={handleCreate}>Create Blog</button>
      </div>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <button onClick={() => handleDelete(blog._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageBlogs;
