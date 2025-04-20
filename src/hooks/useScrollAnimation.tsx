
import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a slight delay to each element based on its index in the NodeList
          // This creates a cascading animation effect
          setTimeout(() => {
            entry.target.classList.add('fade-in');
          }, index * 100); // 100ms delay between each element
          
          // Once the animation is applied, stop observing this element
          if (observerRef.current) {
            observerRef.current.unobserve(entry.target);
          }
        }
      });
    };

    // Create observer
    observerRef.current = new IntersectionObserver(callback, options);

    // Select all elements with the 'animate-on-scroll' class
    const targets = document.querySelectorAll('.animate-on-scroll');
    targets.forEach(target => {
      if (observerRef.current) {
        observerRef.current.observe(target);
      }
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
};

export default useScrollAnimation;
