import { useEffect } from 'react';

export function usePerformanceOptimization() {
  useEffect(() => {
    // Throttle scroll events
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttle resize events
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // Resize logic if needed
      }, 250);
    };

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('wheel', () => {}, { passive: true });
    window.addEventListener('touchmove', () => {}, { passive: true });

    // Disable scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
}
