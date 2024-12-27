import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

// Components and Pages
import Menu from './components/Menu';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';
import './index.css';

// Layout Component
const Layout = ({ children, menuItems, onLogout }) => (
  <>
    <nav>
      <Menu menuItems={menuItems} onLogout={onLogout} />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
    <main>{children}</main>
    <footer>
      <Footer />
    </footer>
  </>
);

const App = () => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('authToken')
  );

  const handleLogin = () => {
    localStorage.setItem('authToken', 'your-token'); // Example token set
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  // Define menu items
  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Blog', link: '/blog' },
    { label: 'Service', link: '/service' },
    { label: 'Contact', link: '/contact' },
    ...(isAuthenticated ? [{ label: 'Dashboard', link: '/dashboard' }] : []),
  ];

  // Router configuration
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout menuItems={menuItems} onLogout={handleLogout}>
          <HomePage />
        </Layout>
      ),
    },
    {
      path: '/about',
      element: (
        <Layout menuItems={menuItems} onLogout={handleLogout}>
          <AboutPage />
        </Layout>
      ),
    },
    {
      path: '/blog',
      element: (
        <Layout menuItems={menuItems} onLogout={handleLogout}>
          <BlogPage />
        </Layout>
      ),
    },
    {
      path: '/service',
      element: (
        <Layout menuItems={menuItems} onLogout={handleLogout}>
          <ServicePage />
        </Layout>
      ),
    },
    {
      path: '/contact',
      element: (
        <Layout menuItems={menuItems} onLogout={handleLogout}>
          <ContactPage />
        </Layout>
      ),
    },
    {
      path: '/dashboard',
      element: (
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <Layout menuItems={menuItems} onLogout={handleLogout}>
            <Dashboard />
          </Layout>
        </PrivateRoute>
      ),
    },
    {
      path: '/login',
      element: <LoginPage onLogin={handleLogin} />,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
