import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DegreePlansPage from './pages/DegreePlansPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import CoursesPage from './pages/CoursesPage';
import FourYearPlanPage from './pages/FourYearPlanPage';

const App = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/degree-plans" element={<DegreePlansPage />} />
            <Route path="/course/:id" element={<CourseDetailsPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/four-year-plan" element={<FourYearPlanPage />} />
        </Routes>
    </Router>
);

export default App;
