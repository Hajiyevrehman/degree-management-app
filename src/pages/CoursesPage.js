import React from 'react';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import styles from './CoursesPage.module.css';

const CoursesPage = () => {
    const courses = useSelector(state => state.degree.courses);

    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.header}>All Courses</h1>
                <ul className={styles.courseList}>
                    {courses.map(course => (
                        <li key={course.id} className={styles.courseItem}>
                            <span className={styles.courseCode}>{course.code}</span>
                            <span className={styles.courseName}>{course.name}</span>
                            <span className={styles.courseDescription}>{course.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CoursesPage;
