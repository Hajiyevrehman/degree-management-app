import React from 'react';
import { useDrag } from 'react-dnd';
import styles from './CoursesDragDrop.module.css';

const Course = ({ course }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'course',
        item: { id: course.id, code: course.code, name: course.name },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div ref={drag} className={styles.course} style={{ opacity: isDragging ? 0.5 : 1 }}>
            {course.code} - {course.name}
        </div>
    );
};

const CoursesDragDrop = ({ courses }) => (
    <div className={styles.coursesContainer}>
        {courses.map(course => (
            <Course key={course.id} course={course} />
        ))}
    </div>
);

export default CoursesDragDrop;
