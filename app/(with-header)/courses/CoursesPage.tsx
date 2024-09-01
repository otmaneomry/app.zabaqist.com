'use client';

import React from 'react';
import LearningPaths from './LearningPaths';
import BrowseAllCourses from './BrowseAllCourses';

const CoursesPage = () => {
    return (
        <div className="container mx-auto p-6 max-w-6xl">
            <LearningPaths/>
            <BrowseAllCourses />
        </div>
    );
};

export default CoursesPage;