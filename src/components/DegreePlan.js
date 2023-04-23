import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './DegreePlan.module.css';

const DegreePlan = () => {
    const degreePlans = useSelector(state => state.degree.degreePlans);
    const [openPlan, setOpenPlan] = useState(null);

    const togglePlan = (id) => {
        setOpenPlan(openPlan === id ? null : id);
    };

    return (
        <div className={styles.container}>
            {degreePlans.map(plan => (
                <div key={plan.id} className={styles.plan}>
                    <div
                        className={styles.planHeader}
                        onClick={() => togglePlan(plan.id)}
                    >
                        {plan.name}
                        <span>{openPlan === plan.id ? '-' : '+'}</span>
                    </div>
                    <div
                        className={`${styles.courseList} ${openPlan === plan.id ? styles.open : ''}`}
                    >
                        {plan.courses.map(course => (
                            <div key={course.id} className={styles.courseItem}>
                                {course.code} - {course.name}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DegreePlan;
