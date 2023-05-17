import React, { createContext, useState } from 'react';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [course, setCourse] = useState('paid');

  return (
    <CourseContext.Provider value={{ course, setCourse }}>
      {children}
    </CourseContext.Provider>
  );
};


//this was utilized when the page contained both a free and paid course. No longer needed, so setting default to 'paid' in case it needs to be utilized in the future.