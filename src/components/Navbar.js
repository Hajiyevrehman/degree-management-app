import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
    <nav className={styles.navbar}>
        <Link to="/" className={styles.navbarBrand}>Degree Management</Link>
        <div className={styles.navLinks}>
            <Link to="/" className={styles.navLink}>Home</Link>
            <Link to="/degree-plans" className={styles.navLink}>Degree Plans</Link>
            <Link to="/courses" className={styles.navLink}>Courses</Link>
            <Link to="/four-year-plan" className={styles.navLink}>Four Year Plan</Link>
        </div>
    </nav>
);

export default Navbar;
