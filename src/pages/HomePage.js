import React from 'react';
import Navbar from '../components/Navbar';
import StudentInfo from '../components/StudentInfo';
import styles from './HomePage.module.css';

const HomePage = () => {
    const studentData = {
        major: 'Computer Science',
        standing: 'Junior',
        units: 90,
        completedPercentage: 75,
        additionalFacts: [
            'Dean’s list for 2 semesters',
            'Member of the Computer Science Club',
            'Internship at XYZ Corp last summer'
        ]
    };

    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.header}>Welcome to the Degree Management System</h1>
                <StudentInfo
                    major={studentData.major}
                    standing={studentData.standing}
                    units={studentData.units}
                    completedPercentage={studentData.completedPercentage}
                    additionalFacts={studentData.additionalFacts}
                />
            </div>
        </div>
    );
};

export default HomePage;
