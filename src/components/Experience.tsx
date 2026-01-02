import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star } from 'lucide-react';

const experiences = [
  {
    title: 'Bespoke strategies tailored to your brand',
    benefit: 'Custom solutions, not cookie-cutter templates'
  },
  {
    title: 'Performance measured beyond vanity metrics',
    benefit: 'Real results that impact your bottom line'
  },
  {
    title: 'Transparent communication and execution',
    benefit: 'Full visibility into your campaign performance'
  },
  {
    title: 'Competitive, value-driven engagement models',
    benefit: 'Fair pricing that reflects true value'
  },
  {
    title: 'A partnership mindset, not a vendor approach',
    benefit: 'Your success is our success'
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-transparent to-blue-950/30" />
      
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
              <Star className="size-4 icon-golden" />
              The Team Pixel Experience
              <Star className="size-4 icon-golden" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              What Sets Us Apart
            </h2>
          </div>
          
          {/* Experience list */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 * index,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="group relative"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"
                />
                
                <div className="relative h-full p-8 bg-card/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl group-hover:border-blue-500/50 group-hover:bg-card/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {/* Animated checkmark */}
                    <motion.div
                      className="size-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 mt-1"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Check className="size-5 text-white" />
                    </motion.div>
                    
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl text-blue-100 group-hover:text-blue-50 transition-colors">
                        {experience.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {experience.benefit}
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-b-2xl"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 pt-8"
          >
            {[
              { value: '24/7', label: 'Support' },
              { value: '100%', label: 'Satisfaction' },
              { value: 'NDA', label: 'Protected' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl mb-1 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
