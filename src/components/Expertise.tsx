import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Facebook,
  Search, 
  Code2, 
  TrendingUp, 
  ShoppingCart, 
  Palette, 
  Video 
} from 'lucide-react';

const services = [
  {
    icon: Facebook,
    title: 'Meta Advertising',
    description: 'Elegantly engineered Facebook and Instagram campaigns designed to convert attention into sustained revenue.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Search,
    title: 'Google Advertising',
    description: 'High-intent search and performance strategies capturing demand at the moment it matters most.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Code2,
    title: 'Website & App Development & Support',
    description: 'Architected digital platforms built for speed, stability, and seamless user experience — supported with ongoing technical care.',
    color: 'from-blue-600 to-indigo-500',
  },
  {
    icon: TrendingUp,
    title: 'Search Engine Optimization',
    description: 'A disciplined, long-term approach to organic growth through strategic search visibility and authority building.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: ShoppingCart,
    title: 'Marketplace Advertising',
    description: 'Precision-led marketplace strategies that enhance discoverability, conversions, and profitability.',
    note: 'Quick-commerce & E-commerce',
    color: 'from-blue-500 to-purple-500',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Refined visual language that communicates trust, quality, and brand distinction across digital touchpoints.',
    color: 'from-purple-500 to-blue-500',
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Cinematic, performance-oriented video edits crafted for ads, products, and modern storytelling.',
    color: 'from-cyan-400 to-blue-500',
  },
];

export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          {/* Section header */}
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <motion.div 
              className="text-sm tracking-wider text-blue-400 uppercase flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              Our Expertise
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Capabilities That Drive Results
            </h2>
          </div>
          
          {/* Services grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredIndex === index;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 * index,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative"
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                  />
                  
                  <div className="relative h-full p-8 bg-card/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition-all duration-300">
                    {/* Icon */}
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6`}
                      animate={isHovered ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-full h-full text-white" />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl tracking-tight text-blue-100">
                        {service.title}
                      </h3>
                      {service.note && (
                        <div className="text-xs text-blue-400 opacity-70">
                          ({service.note})
                        </div>
                      )}
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Hover arrow */}
                    <motion.div
                      className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
                      animate={isHovered ? { x: 5 } : { x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
