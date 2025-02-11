// components/Navbar.js
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Ryan Harding</div>
      <div className={styles.menuContainer}>
        <button 
          onClick={toggleMenu} 
          className={styles.menuButton} 
          aria-haspopup="true" 
          aria-expanded={menuOpen}
        >
          Menu
        </button>
        {menuOpen && (
          <ul className={styles.dropdown} aria-label="Navigation menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
