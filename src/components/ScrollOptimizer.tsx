import { useEffect } from 'react';

export function ScrollOptimizer() {
  useEffect(() => {
    // Disable scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Optimize scroll performance
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Scroll-based animations can go here
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', () => {}, { passive: true });
    window.addEventListener('touchmove', () => {}, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
