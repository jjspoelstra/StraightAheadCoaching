import React, { useEffect, useState } from 'react';
import Header from './components/Header'
import Signup from './components/Signup';
import Footer from './components/Footer';
import Description from './components/Description';

import { CourseProvider } from './CourseContext';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMediaQuery = (event) => {
      setIsMobile(event.matches);
    };

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery); // Initial check on page load

    // Cleanup the listener when component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
    };
  }, []);

  return (
    <CourseProvider>
      <div className="container">
        <Header src="https://straightaheadcoaching.com/wp-content/uploads/2021/11/logo-word-resized.jpg.webp" />
        <div className={`place-content-evenly ${isMobile ? "" : "flex"}`}>
          <Description />
          <Signup />
        </div>
        <Footer />
      </div>
    </CourseProvider>
  );
}


export default App;





// get text from mom for email, thank-you, and picture


// remove link to paid course?

//host site


