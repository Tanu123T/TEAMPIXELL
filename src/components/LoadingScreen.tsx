import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      onAnimationComplete={() => setIsLoading(false)}
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
    >
      <div className="text-center space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-20 h-20 mx-auto"
        >
          <div className="w-full h-full border-4 border-[#0F2A44]/20 border-t-[#0F2A44] rounded-full animate-spin" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl font-bold text-[#0F2A44]"
        >
          TEAM PIXELL
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-[#475569]"
        >
          Loading excellence...
        </motion.p>
      </div>
    </motion.div>
  );
}