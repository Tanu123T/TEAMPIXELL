import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { smoothScrollToTop } from '../utils/smoothScroll';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    smoothScrollToTop({ duration: 1000 });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-[#0F2A44] hover:bg-[#1E3A8A] text-white rounded-full shadow-2xl shadow-[#0F2A44]/30 flex items-center justify-center transition-all duration-300 group"
        >
          <ArrowUp className="size-6 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}