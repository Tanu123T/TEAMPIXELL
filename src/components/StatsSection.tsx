import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { TrendingUp, Users, Award, Zap, Globe, Clock, Target, DollarSign } from 'lucide-react';

function AnimatedCounter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const rounded = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const mainStats = [
  {
    icon: Users,
    value: 100,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Brands we\'ve helped scale',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Award,
    value: 50,
    suffix: '+',
    label: 'Industry Awards',
    description: 'Recognition for excellence',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: TrendingUp,
    value: 250,
    suffix: '%',
    label: 'Average ROI',
    description: 'Return on investment',
    color: 'from-blue-600 to-indigo-500',
  },
  {
    icon: DollarSign,
    value: 50,
    suffix: 'M+',
    label: 'Revenue Generated',
    description: 'For our clients',
    color: 'from-indigo-500 to-purple-500',
  },
];

const additionalStats = [
  { icon: Globe, label: 'Global Reach', value: '45+ Countries' },
  { icon: Clock, label: 'Support', value: '24/7 Available' },
  { icon: Target, label: 'Success Rate', value: '98%' },
  { icon: Zap, label: 'Avg. Response', value: '< 2 Hours' },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
      
      {/* Animated grid background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
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
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <motion.div 
              className="text-sm tracking-wider text-blue-400 uppercase flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            >
              <TrendingUp className="size-4" />
              By The Numbers
              <TrendingUp className="size-4" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Results That Speak For Themselves
            </h2>
            <p className="text-lg text-muted-foreground">
              Our track record of excellence, backed by real metrics and measurable impact
            </p>
          </div>
          
          {/* Main stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {mainStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                  />
                  
                  <div className="relative h-full p-8 bg-card/50 backdrop-blur-sm border border-blue-500/20 rounded-3xl group-hover:border-blue-500/40 transition-all duration-300">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} p-3.5 mb-6`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-full h-full text-white" />
                    </motion.div>
                    
                    {/* Number */}
                    <div className="space-y-2 mb-4">
                      <div className="text-4xl md:text-5xl bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <h3 className="text-lg text-blue-100">
                        {stat.label}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                    
                    {/* Progress bar */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Additional stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {additionalStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl hover:bg-blue-500/10 hover:border-blue-500/40 transition-all text-center group"
                >
                  <Icon className="size-6 text-blue-400 mx-auto mb-3 group-hover:text-blue-300 transition-colors" />
                  <div className="text-xl mb-1 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="pt-8 border-t border-blue-500/20"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-sm text-blue-400 mb-2">Certified Partners</div>
                <div className="flex gap-4">
                  {['Google', 'Meta', 'AWS'].map((partner, index) => (
                    <motion.div
                      key={partner}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-200"
                    >
                      {partner}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-blue-400 mb-2">Industry Recognition</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="size-4 text-yellow-400" />
                  Top 1% Digital Agencies 2024
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
