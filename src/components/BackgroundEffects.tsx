import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function BackgroundEffects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reduce particles on mobile
  const particleCount = isMobile ? 5 : 15;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large floating orbs - fewer on mobile */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute top-1/2 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </>
      )}

      {/* Fewer particles on mobile */}
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={isMobile ? {} : {
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.5, 0],
            scale: [0, 1.5, 0],
          }}
          transition={
            isMobile
              ? {}
              : {
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  );
}
