import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Play, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useRef, useState, useEffect } from 'react';
import { smoothScrollToId } from '../utils/smoothScroll';

export function Hero() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [] = useState(false);
  
  useEffect(() => {
    let ticking = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Only add listener if not mobile
    if (window.innerWidth >= 768) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.setAttribute('data-loaded', 'true');
    }
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={handleVideoLoad}
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'brightness(0.4) contrast(0.8)' }}
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        <source src="/videos/hero-background.webm" type="video/webm" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-background to-blue-900" />
      </video>

      {/* Animated gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-background to-blue-900/30 pointer-events-none z-10" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20 z-20">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
      </div>
      
      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full z-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        style={{ y, opacity }}
        className="max-w-5xl w-full relative z-30"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm group hover:bg-blue-500/20 hover:border-blue-500/40 transition-all cursor-pointer"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="size-4 text-blue-400 icon-golden" />
            </motion.div>
            <span className="text-sm text-blue-300">Premium Digital Solutions</span>
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          {/* Main headline with gradient */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight max-w-4xl hero-headline-white">
            Where Strategy Meets Sophistication.
          </h1>
          
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl"
          >
            Team Pixel partners with ambitious brands to deliver refined digital experiences, 
            performance-driven growth, and measurable impact.
          </motion.p>
          
          {/* Animated services tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3"
          >
            {['Meta Ads', 'Google Ads', 'Technology', 'Creative'].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-lg bg-blue-500/5 border border-blue-500/20 hover:bg-blue-500/10 hover:border-blue-500/40 transition-all duration-300 cursor-default group"
              >
                <span className="text-sm text-blue-200 group-hover:text-blue-100 transition-colors">
                  {service}
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA with glow effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="pt-4 flex gap-4 flex-wrap items-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-20 transition duration-300" />
              <Button 
                size="lg" 
                className="relative gap-2 bg-blue-600 hover:bg-blue-500"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Zap className="size-4 icon-golden" />
                Start a Conversation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-500/50 gap-2 group"
              onClick={() => {
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Play className="size-4 group-hover:scale-110 transition-transform" />
              View Our Work
            </Button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg border border-blue-500/30 hover:border-blue-500/50 bg-blue-500/5 hover:bg-blue-500/10 transition-all flex items-center gap-2 text-blue-300 hover:text-blue-200"
            >
              <MessageCircle className="size-4" />
              <span className="text-sm text-blue-300">Quick Chat</span>
            </motion.button>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8 flex flex-wrap items-center gap-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + i * 0.1, type: "spring" }}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-background flex items-center justify-center text-xs text-white"
                  >
                    {String.fromCharCode(64 + i)}
                  </motion.div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">100+ Happy Clients</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.05 }}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400 icon-golden"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">5.0 Rating</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available Now
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-blue-500/30 rounded-full flex items-start justify-center p-2 cursor-pointer hover:border-blue-500/50 transition-colors"
          onClick={() => {
            smoothScrollToId('about', { duration: 1000 });
          }}
        >
          <motion.div 
            className="w-1 h-2 bg-blue-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}