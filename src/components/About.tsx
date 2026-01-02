import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, TrendingUp, Award, Users } from 'lucide-react';

const stats = [
  { icon: Target, value: '500+', label: 'Projects Delivered', color: 'from-blue-500 to-cyan-500' },
  { icon: TrendingUp, value: '250%', label: 'Average ROI', color: 'from-cyan-500 to-blue-500' },
  { icon: Award, value: '50+', label: 'Industry Awards', color: 'from-blue-600 to-blue-400' },
  { icon: Users, value: '100+', label: 'Happy Clients', color: 'from-cyan-600 to-cyan-400' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          {/* Section label */}
          <motion.div 
            className="text-sm tracking-wider text-blue-400 uppercase flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-transparent" />
            About Team Pixel
          </motion.div>
          
          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Team Pixel is a boutique digital agency built for brands that value precision, clarity, and results.
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  We operate at the intersection of <span className="text-blue-300">performance marketing, 
                  technology, and creative excellence</span>, crafting digital systems that scale businesses 
                  while elevating brand perception.
                </p>
                
                <p>
                  Every decision we make is intentional. Every execution is measured.
                </p>
              </div>
            </div>
            
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-6 bg-card/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition-all duration-300">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-2.5 mb-4`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div className="text-3xl mb-2 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
