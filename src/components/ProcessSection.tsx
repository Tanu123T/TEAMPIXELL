import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Lightbulb, 
  Pencil, 
  Code, 
  Rocket, 
  BarChart, 
  RefreshCw,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const processSteps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Discovery & Strategy',
    description: 'In-depth market analysis and strategic roadmap creation tailored to your objectives.',
    points: [
      'Market Research & Analysis',
      'Competitor Benchmarking',
      'Goal Alignment & KPI Setting',
      'Strategic Roadmap Planning'
    ],
    color: 'bg-[#0F172A]' // Dark Navy
  },
  {
    number: '02',
    icon: Pencil,
    title: 'Creative Development',
    description: 'Bringing your vision to life with compelling design systems and brand identity.',
    points: [
      'Brand Identity Design',
      'UI/UX Prototyping',
      'Ad Creative Production',
      'Copywriting & Messaging'
    ],
    color: 'bg-[#0F2A44]' // Deep Navy
  },
  {
    number: '03',
    icon: Code,
    title: 'Technical Build',
    description: 'Engineering robust, scalable solutions using cutting-edge technology and best practices.',
    points: [
      'Custom Web Development',
      'API Integrations',
      'Performance Optimization',
      'Security & Scalability'
    ],
    color: 'bg-[#1E3A8A]' // Royal Navy
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Strategic Launch',
    description: 'Controlled deployment and campaign activation for maximum immediate impact.',
    points: [
      'A/B Testing Setup',
      'Campaign Architecture',
      'Launch Management',
      'Tracking Implementation'
    ],
    color: 'bg-[#172554]' // Darker Royal
  },
  {
    number: '05',
    icon: BarChart,
    title: 'Growth Tuning',
    description: 'Continuous data analysis and refinement to maximize your performance and ROI.',
    points: [
      'Real-time Analytics',
      'Conversion Rate Optimization',
      'Budget Management',
      'Audience Refinement'
    ],
    color: 'bg-[#1E40AF]' // Blue 800
  },
  {
    number: '06',
    icon: RefreshCw,
    title: 'Scale & Iteration',
    description: 'Expanding successful strategies and identifying new opportunities for dominance.',
    points: [
      'Vertical & Horizontal Scaling',
      'LTV Optimization',
      'Market Expansion',
      'Strategic Retargeting'
    ],
    color: 'bg-[#111827]' // Slate Navy
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative bg-white overflow-hidden mesh-gradient">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0F2A44]/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-20">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-block px-4 py-1.5 rounded-full bg-[#0F2A44]/5 text-xs font-bold tracking-[0.2em] text-[#0F2A44] uppercase"
            >
              The Methodology
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
              className="text-4xl md:text-7xl font-bold text-[#0F2A44] tracking-tight"
            >
              Our <span className="text-gradient-navy italic">Process.</span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="p-10 bg-white border border-[#0F2A44]/10 rounded-[2.5rem] relative group overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,42,68,0.12)] glow-on-hover"
                >
                  {/* Subtle Background Accent */}
                  <div className={`absolute top-0 right-0 w-40 h-40 opacity-[0.03] rounded-bl-[5rem] transition-all duration-500 group-hover:opacity-[0.08] ${step.color}`} />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-10">
                      <motion.div 
                        whileHover={{ rotate: 10 }}
                        className={`size-16 rounded-2xl ${step.color} flex items-center justify-center shadow-xl shadow-[#0F2A44]/20 group-hover:scale-110 transition-all duration-500`}
                      >
                        <Icon className="size-7 text-white" />
                      </motion.div>
                      <span className="text-5xl font-black text-[#0F2A44]/5 group-hover:text-[#0F2A44]/10 transition-colors tracking-tighter">
                        {step.number}
                      </span>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-[#0F2A44] tracking-tight group-hover:text-gradient-navy transition-all">
                        {step.title}
                      </h3>
                      
                      {/* Interactive Text Area */}
                      <div className="relative min-h-[120px]">
                        <p className="text-[#475569] leading-relaxed text-lg group-hover:opacity-0 group-hover:-translate-y-4 transition-all duration-500">
                          {step.description}
                        </p>

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
                          <ul className="space-y-3">
                            {step.points.map((point, i) => (
                              <motion.li 
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-2 text-sm text-[#475569] font-medium"
                              >
                                <CheckCircle2 className={`size-4 mt-0.5 shrink-0 text-[#0F2A44]`} />
                                {point}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-8 flex items-center justify-between border-t border-[#0F2A44]/5">
                         <span className="text-xs font-black uppercase tracking-widest text-[#0F2A44]/40">Precision Phase</span>
                         <motion.button 
                           whileHover={{ x: 5 }}
                           className="flex items-center gap-2 text-sm font-bold text-[#0F2A44] group/btn"
                         >
                           <ArrowRight className="size-5" />
                         </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
