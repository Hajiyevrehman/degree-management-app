import React, { useState } from 'react';
import Semester from './Semester';
import styles from './FourYearPlan.module.css';

const FourYearPlan = ({ removeCourseFromAvailable }) => {
    const [plan, setPlan] = useState(Array(8).fill([]));

    const moveCourse = (course, semesterIndex) => {
        setPlan(prevPlan => {
            const newPlan = [...prevPlan];
            newPlan[semesterIndex] = [...newPlan[semesterIndex], course];
            return newPlan;
        });
        removeCourseFromAvailable(course.id);
    };

    return (
        <div className={styles.planContainer}>
            {plan.map((semester, index) => (
                <Semester key={index} semesterIndex={index} courses={semester} moveCourse={moveCourse} />
            ))}
        </div>
    );
};

export default FourYearPlan;
