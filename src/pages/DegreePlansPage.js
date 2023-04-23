import React from 'react';
import Navbar from '../components/Navbar';
import DegreePlan from '../components/DegreePlan';
import styles from './DegreePlansPage.module.css';

const DegreePlansPage = () => (
    <div>
        <Navbar />
        <h1 className={styles.degreePlansTitle}>Degree Plans</h1>
        <DegreePlan />
    </div>
);

export default DegreePlansPage;
