import React from 'react';
import { useSelector } from 'react-redux';

const CourseList = () => {
    const courses = useSelector(state => state.degree.courses);
    
    return (
        <ul>
            {courses.map(course => (
                <li key={course.id}>{course.name}</li>
            ))}
        </ul>
    );
};

export default CourseList;
