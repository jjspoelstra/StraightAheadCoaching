import React, { createContext, useState } from 'react';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [course, setCourse] = useState('free');

  return (
    <CourseContext.Provider value={{ course, setCourse }}>
      {children}
    </CourseContext.Provider>
  );
};