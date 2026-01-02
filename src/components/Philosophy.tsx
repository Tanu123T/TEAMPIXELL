import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, BarChart3, Lightbulb, Compass } from 'lucide-react';

const principles = [
  { 
    icon: Shield,
    text: 'Strategic restraint',
    description: 'Focused precision over scattered noise',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    icon: BarChart3,
    text: 'Data-led clarity',
    description: 'Insights that drive decisions',
    color: 'from-cyan-500 to-blue-600'
  },
  { 
    icon: Lightbulb,
    text: 'Creative excellence',
    description: 'Innovation meets execution',
    color: 'from-blue-600 to-indigo-500'
  },
  { 
    icon: Compass,
    text: 'Long-term thinking',
    description: 'Sustainable growth, not quick wins',
    color: 'from-indigo-500 to-blue-500'
  },
];

export function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          {/* Section header */}
          <div className="space-y-6 text-center max-w-4xl mx-auto">
            <motion.div 
              className="text-sm tracking-wider text-blue-400 uppercase flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              Our Philosophy
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              We believe true growth is built on:
            </h2>
          </div>
          
          {/* Principles grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 pt-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              
              return (
                <motion.div
                  key={principle.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 * index,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="group relative"
                >
                  {/* Animated border gradient */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
                  
                  <div className="relative h-full p-8 bg-card/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl group-hover:border-blue-500/40 transition-all duration-300">
                    <div className="flex items-start gap-6">
                      {/* Animated icon */}
                      <motion.div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${principle.color} p-3.5 shrink-0`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-full h-full text-white" />
                      </motion.div>
                      
                      <div className="flex-1 space-y-2">
                        <h3 className="text-2xl text-blue-100 group-hover:text-blue-50 transition-colors">
                          {principle.text}
                        </h3>
                        <p className="text-muted-foreground">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Corner accent */}
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Closing statement with particles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative pt-12"
          >
            <div className="text-center">
              <div className="inline-block relative">
                {/* Particle effects */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                    }}
                    animate={{
                      x: [0, (i - 1) * 50],
                      y: [0, -30],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
                
                <p className="text-2xl md:text-3xl text-center bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent italic px-8">
                  No noise. No shortcuts. Only outcomes.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
