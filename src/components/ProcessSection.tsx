import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Lightbulb, 
  Pencil, 
  Code, 
  Rocket, 
  BarChart, 
  RefreshCw,
  ArrowRight 
} from 'lucide-react';

const processSteps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Discovery & Strategy',
    description: 'We dive deep into your brand, audience, and objectives to craft a tailored strategy.',
    details: [
      'Comprehensive market analysis',
      'Competitor research',
      'Target audience profiling',
      'Strategic roadmap creation'
    ],
    color: 'from-blue-500 to-cyan-500',
    duration: '1-2 weeks'
  },
  {
    number: '02',
    icon: Pencil,
    title: 'Creative Development',
    description: 'Our creative team brings your vision to life with compelling designs and messaging.',
    details: [
      'Brand identity refinement',
      'Visual asset creation',
      'Copywriting & messaging',
      'Design system development'
    ],
    color: 'from-cyan-500 to-blue-600',
    duration: '2-3 weeks'
  },
  {
    number: '03',
    icon: Code,
    title: 'Technical Implementation',
    description: 'Building robust, scalable solutions with cutting-edge technology and best practices.',
    details: [
      'Platform development',
      'Integration setup',
      'Quality assurance testing',
      'Performance optimization'
    ],
    color: 'from-blue-600 to-indigo-500',
    duration: '3-6 weeks'
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Activation',
    description: 'Strategic deployment ensuring maximum impact and seamless execution.',
    details: [
      'Soft launch testing',
      'Campaign activation',
      'Channel deployment',
      'Initial monitoring'
    ],
    color: 'from-indigo-500 to-purple-500',
    duration: '1 week'
  },
  {
    number: '05',
    icon: BarChart,
    title: 'Optimization & Growth',
    description: 'Continuous monitoring and refinement to maximize performance and ROI.',
    details: [
      'Performance tracking',
      'A/B testing',
      'Data analysis',
      'Strategic adjustments'
    ],
    color: 'from-purple-500 to-blue-500',
    duration: 'Ongoing'
  },
  {
    number: '06',
    icon: RefreshCw,
    title: 'Scale & Iterate',
    description: 'Expanding successful strategies and exploring new opportunities for growth.',
    details: [
      'Scaling campaigns',
      'New channel exploration',
      'Innovation testing',
      'Long-term planning'
    ],
    color: 'from-cyan-400 to-blue-500',
    duration: 'Ongoing'
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-blue-950/20" />
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-20"
        >
          {/* Section header */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <motion.div 
              className="text-sm tracking-wider text-blue-400 uppercase flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              Our Process
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              How We Transform Your Vision Into Reality
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology refined through hundreds of successful projects
            </p>
          </div>
          
          {/* Process steps */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isHovered = hoveredStep === index;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 * index,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="group relative"
                >
                  {/* Connection line (desktop only) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 left-full w-8 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent z-0">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                      />
                    </div>
                  )}
                  
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  
                  <div className="relative h-full p-8 bg-card/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl group-hover:border-blue-500/40 transition-all duration-300">
                    {/* Number badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-background to-blue-950/50 border-2 border-blue-500/30 flex items-center justify-center">
                      <span className="text-sm bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} p-3.5 mb-6`}
                      animate={isHovered ? { rotate: [0, -10, 10, -10, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-full h-full text-white" />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl tracking-tight text-blue-100 group-hover:text-blue-50 transition-colors">
                          {step.title}
                        </h3>
                        <div className="text-xs text-blue-400 opacity-70">
                          Duration: {step.duration}
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Details list */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                        className="space-y-2 overflow-hidden"
                      >
                        {step.details.map((detail, i) => (
                          <motion.div
                            key={detail}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-2 text-xs text-muted-foreground"
                          >
                            <ArrowRight className="size-3 text-blue-500 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                    
                    {/* Hover indicator */}
                    <motion.div
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100"
                      animate={isHovered ? { x: 5 } : { x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-blue-400" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
            className="text-center pt-8"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Ready to start your journey?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl text-white inline-flex items-center gap-2 group"
            >
              Let's Discuss Your Project
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
