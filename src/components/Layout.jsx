import React from 'react';
import Menu from './Menu'; // Your Menu component
import Footer from './Footer'; // Your Footer component

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <header>
        <Menu />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
