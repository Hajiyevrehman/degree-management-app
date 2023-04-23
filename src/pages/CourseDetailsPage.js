import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CourseDetailsPage = () => {
    const { id } = useParams();
    const course = useSelector(state => 
        state.degree.courses.find(course => course.id === id)
    );

    if (!course) {
        return <p>Course not found.</p>;
    }

    return (
        <div>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
        </div>
    );
};

export default CourseDetailsPage;
