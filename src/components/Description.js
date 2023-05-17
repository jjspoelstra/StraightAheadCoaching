import React, { useEffect, useRef, useState, useContext } from 'react';
import { CourseContext } from '../CourseContext';


export default function Description(){
    const { course } = useContext(CourseContext);

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
 
    if ( course === 'free' ){
      return (
        <div className={`${isMobile ? "" : "w-3/5"}`} >
            
            <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 
                className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white autoAnimateTitleUnderline  "
      
                >
                  D.A.R.E. to De-Stress</h2>
                  <br />
                  <br />
                <p className="mb-4">Tap the amazing intelligence of your body to calm down and de-stress. Use this simple, 4 step strategy to activate the bodys innate hardwiring to relax, release unwanted tension, and confidently step into your day.</p>
                <span className="mb-4"> D - Deep Breathing </span>
                <br />
                <span className="mb-4"> A - Activate the Body's Energy </span>
                <br />
                <span className="mb-4"> R - Release Stagnent Stressful Energy </span>
                <br />
                <span className="mb-4"> E - Expand into Relaxed Flow </span>
              </div>
              <div className="grid ">
                <img className="w-full rounded-lg" src="/dare.jpg" alt="Stacked rocks and a lotus flower on a relaxing blue background" />
                
              </div>
            </div>
          </section>
            
        </div>
        
        )
    } else {
      return (
        <div className={`${isMobile ? "" : "w-3/5"}`} >
            
            <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white autoAnimateTitleUnderline ">Other Paid Course</h2>
                <br />
                  <br />
                <p className="mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas nobis! Facilis ipsum, totam ullam voluptates, deleniti a et libero corporis eum deserunt earum dicta reprehenderit explicabo cum nemo officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. At et distinctio nesciunt eligendi veniam non enim placeat incidunt.  </p>
                <span className="mb-4"> desc </span>
                <br />
                <span className="mb-4"> desc </span>
                <br />
                <span className="mb-4"> desc  </span>
                <br />
                <span className="mb-4"> desc </span>
              </div>
              <div className="grid">
                <img className="w-full rounded-lg" src="/paid.jpg" alt="a humanoid shape of energy" />
                
              </div>
            </div>
          </section>
            
        </div>
        
        )
    }

    
    
}