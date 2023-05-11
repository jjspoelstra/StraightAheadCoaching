import React, {useState} from "react"
import { useContext } from 'react';
import { CourseContext } from '../CourseContext';

export default function Description(){
    const { course } = useContext(CourseContext);
    if ( course === 'free' ){
      return (
        <div className="w-3/5">
            
            <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">D.A.R.E. to De-Stress</h2>
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
                <img className="w-full rounded-lg" src="https://straightaheadcoaching.com/wp-content/uploads/2021/05/sunset-3195637_1920-tree-in-profound-stillness-wate-1280x800.jpg.webp" alt="office content 1" />
                
              </div>
            </div>
          </section>
            
        </div>
        
        )
    } else {
      return (
        <div className="w-3/5">
            
            <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Other Paid Course</h2>
                <p className="mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas nobis! Facilis ipsum, totam ullam voluptates, deleniti a et libero corporis eum deserunt earum dicta reprehenderit explicabo cum nemo officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. At et distinctio nesciunt eligendi veniam non enim placeat incidunt.  </p>
                <span className="mb-4"> desc </span>
                <br />
                <span className="mb-4"> desc </span>
                <br />
                <span className="mb-4"> desc  </span>
                <br />
                <span className="mb-4"> desc </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="" alt="other pic" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="" alt="other pic" />
              </div>
            </div>
          </section>
            
        </div>
        
        )
    }

    
    
}