import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Mail, Calendar, Send, Sparkles } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section id="contact" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-blue-900/30 to-cyan-900/50"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,14,39,0.8)_100%)]" />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="space-y-8 text-center">
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            >
              <Sparkles className="size-4 text-blue-400 icon-golden" />
              <span className="text-sm text-blue-300 tracking-wider uppercase">Let's Connect</span>
              <Sparkles className="size-4 text-blue-400 icon-golden" />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight">
              <span className="block bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Let's Create Something
              </span>
              <span className="block bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent mt-2">
                Enduring
              </span>
            </h2>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              If you seek more than visibility — if you seek{' '}
              <span className="text-blue-300 italic relative">
                impact
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
              {' '}— we're ready.
            </motion.p>
          </div>
          
          {/* Interactive CTA container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 blur-3xl"
              animate={isHovering ? { scale: 1.2, opacity: 1 } : { scale: 1, opacity: 0.5 }}
              transition={{ duration: 0.5 }}
            />
            
            <div className="relative bg-card/30 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                {/* Primary CTA */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group w-full md:w-auto"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-20 transition duration-300" />
                  <Button 
                    size="lg" 
                    className="relative gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white border-0 px-8 py-6 w-full md:w-auto"
                  >
                    <Calendar className="size-5" />
                    <span>Schedule Strategy Consultation</span>
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
                
                {/* Secondary CTA */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto"
                >
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="gap-2 border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-500/50 bg-background/50 backdrop-blur-sm px-8 py-6 w-full md:w-auto group"
                  >
                    <Mail className="size-5" />
                    <span className="text-foreground">Email Us</span>
                    <Send className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </motion.div>
              </div>
              
              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-blue-500/20"
              >
                {[
                  { icon: '🔒', text: 'Private & Confidential' },
                  { icon: '⚡', text: 'Quick Response' },
                  { icon: '✨', text: 'No Obligation' },
                ].map((badge, index) => (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-lg emoji-original">{badge.icon}</span>
                    <span>{badge.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center space-y-4"
          >
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 1 + i * 0.1, type: "spring" }}
                >
                  <svg className="w-6 h-6 text-yellow-400 icon-golden" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by 100+ brands worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
