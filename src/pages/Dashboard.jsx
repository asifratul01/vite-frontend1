import React, { useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import ManageBlogs from './ManageBlogs';
import ManageTeam from './ManageTeam';
import ManageServices from './ManageServices';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const navigate = useNavigate();

  // Ensure the user is authenticated
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove token on logout
    navigate('/login');
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <ul>
            <li>
              <Link to="/dashboard/blogs">Manage Blogs</Link>
            </li>
            <li>
              <Link to="/dashboard/team">Manage Team</Link>
            </li>
            <li>
              <Link to="/dashboard/services">Manage Services</Link>
            </li>
          </ul>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div className="dashboard-content">
          <Routes>
            <Route path="blogs" element={<ManageBlogs />} />
            <Route path="team" element={<ManageTeam />} />
            <Route path="services" element={<ManageServices />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
