import React from 'react';
import { useDrop } from 'react-dnd';
import styles from './Semester.module.css';

const Semester = ({ semesterIndex, courses, moveCourse }) => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: 'course',
        drop: (item) => moveCourse(item, semesterIndex),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    const isActive = canDrop && isOver;
    let backgroundColor = '#f4f4f9';
    if (isActive) {
        backgroundColor = '#d6f5d6';
    } else if (canDrop) {
        backgroundColor = '#f0f0f0';
    }

    return (
        <div ref={drop} className={styles.semester} style={{ backgroundColor }}>
            <h3>Semester {semesterIndex + 1}</h3>
            {courses.map(course => (
                <div key={course.id} className={styles.course}>
                    {course.code} - {course.name}
                </div>
            ))}
        </div>
    );
};

export default Semester;
