'use client';

import React from 'react';
import LearningPaths from './LearningPaths';
import BrowseAllCourses from './BrowseAllCourses';

const CoursesPage = () => {
    // The page owns the container; this component is just the two legacy grids.
    return (
        <>
            <LearningPaths/>
            <BrowseAllCourses />
        </>
    );
};

export default CoursesPage;