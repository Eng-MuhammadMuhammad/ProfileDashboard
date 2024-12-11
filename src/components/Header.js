import React from 'react';
import styles from './Header.module.css';
import { FaUser } from 'react-icons/fa'; // Example: using Font Awesome for the user icon

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <input type="text" placeholder="Search..." className={styles.searchInput} />
      </div>
      <div className={styles.userSection}>
        <span className={styles.userText}>User</span>
        <FaUser className={styles.userIcon} />
      </div>
    </header>
  );
};

export default Header;
