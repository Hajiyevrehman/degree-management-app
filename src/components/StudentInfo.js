import React from 'react';
import styles from './StudentInfo.module.css';

const StudentInfo = ({ major, standing, units, completedPercentage, additionalFacts }) => {
    return (
        <div className={styles.studentInfo}>
            <div className={styles.infoItem}>
                <span className={styles.infoTitle}>Current Major:</span> {major}
            </div>
            <div className={styles.infoItem}>
                <span className={styles.infoTitle}>Year Standing:</span> {standing}
            </div>
            <div className={styles.infoItem}>
                <span className={styles.infoTitle}>Total Units:</span> {units}
            </div>
            <div className={styles.infoItem}>
                <span className={styles.infoTitle}>Completed Requirements:</span>
                <div className={styles.progressBarContainer}>
                    <div
                        className={styles.progressBar}
                        style={{ width: `${completedPercentage}%` }}
                    >
                        {completedPercentage}%
                    </div>
                </div>
            </div>
            <div className={styles.infoItem}>
                <span className={styles.infoTitle}>Additional Facts:</span>
                <ul>
                    {additionalFacts.map((fact, index) => (
                        <li key={index}>{fact}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StudentInfo;
