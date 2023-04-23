import React from 'react';
import styles from './PrerequisiteTree.module.css';

const PrerequisiteTree = ({ courses }) => {
    // Placeholder for the prerequisite tree visualization logic
    // This would be more complex in a real application
    return (
        <div className={styles.tree}>
            <h3>Prerequisite Tree</h3>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        {course.code} - {course.name}
                        {course.prerequisites && course.prerequisites.length > 0 && (
                            <ul>
                                {course.prerequisites.map(prereq => (
                                    <li key={prereq.id}>
                                        {prereq.code} - {prereq.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PrerequisiteTree;
