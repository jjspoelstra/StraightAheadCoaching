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
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white autoAnimateTitleUnderline ">Energy Coaching 101</h2>
                <br />
                  <br />
                <p className="mb-4"> Everything you need to know about: coaching, coaching vs therapy, core energy coaching, who coaching is for. Ready to get started and change your life? Send me a DM or book a free Energy Audit via the link in bio. I can’t wait to hear about your dreams & goals!  </p>
                <span className="mb-4"> Reframe & rewire your emotions and thoughts, so YOU ARE IN CHARGE not them. </span>
                <br />
                <span className="mb-4"> Repattern unconscious learned behaviors and experience internal FREEDOM to choose your actions. </span>
                <br />
                <span className="mb-4">  Reconnect with the real, the awesome, the amazing YOU, and BELIEVE YOU ARE THAT. </span>
                <br />
                <span className="mb-4"> Release old beliefs and stories that have held you back, so you can LIVE A LIFE YOU LOVE. </span>
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