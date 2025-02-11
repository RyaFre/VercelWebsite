// components/Layout.js
import Navbar from './Navbar';
import '../styles/globals.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* Optional Footer can be added here */}
    </>
  );
};

export default Layout;
