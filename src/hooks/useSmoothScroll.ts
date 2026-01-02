import { useCallback } from 'react';
import { smoothScrollToId, smoothScrollToTop } from '../utils/smoothScroll';

export function useSmoothScroll() {
  const scrollToSection = useCallback((id: string, offset = 80, duration = 1000) => {
    smoothScrollToId(id, { duration, offset });
  }, []);

  const scrollToTop = useCallback((duration = 1000) => {
    smoothScrollToTop({ duration });
  }, []);

  return { scrollToSection, scrollToTop };
}
