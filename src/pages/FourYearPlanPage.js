import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FourYearPlan from '../components/FourYearPlan';
import CoursesDragDrop from '../components/CoursesDragDrop';
import PrerequisiteTree from '../components/PrerequisiteTree';
import { useSelector } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import styles from './FourYearPlanPage.module.css';

const FourYearPlanPage = () => {
    const allCourses = useSelector(state => state.degree.courses);
    const [availableCourses, setAvailableCourses] = useState(allCourses);

    const removeCourseFromAvailable = (courseId) => {
        setAvailableCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
    };

    return (
        <div>
            <Navbar />
            <div className={styles.pageContainer}>
                <div className={styles.coursesContainer}>
                    <DndProvider backend={HTML5Backend}>
                        <CoursesDragDrop courses={availableCourses} />
                    </DndProvider>
                </div>
                <div className={styles.planContainer}>
                    <DndProvider backend={HTML5Backend}>
                        <FourYearPlan removeCourseFromAvailable={removeCourseFromAvailable} />
                    </DndProvider>
                </div>
            </div>
        </div>
    );
};

export default FourYearPlanPage;
