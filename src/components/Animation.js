import React, { useEffect, useState } from 'react';

export default function LinkComponent()  {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const linkElement = document.querySelector('.link-underline');

    // Add the animation class on mount
    linkElement.classList.add('link-animation');

    // Remove the animation class after the animation has played
    const onAnimationEnd = () => {
      linkElement.classList.remove('link-animation');
      setAnimate(false);
    };

    linkElement.addEventListener('animationend', onAnimationEnd);

    // Clean up the event listener when the component unmounts
    return () => {
      linkElement.removeEventListener('animationend', onAnimationEnd);
    };
  }, []);

  return <div className={`link-underline ${animate ? 'link-animation' : ''}`}></div>;
};

