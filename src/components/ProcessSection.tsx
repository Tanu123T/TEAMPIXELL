import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative bg-slate-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-20">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-sm font-bold tracking-[0.2em] text-[#0F2A44] uppercase"
            >
              The Methodology
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-[#0F2A44] tracking-tight"
            >
              Our <span className="text-gradient-navy">Process.</span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-10 bg-white border border-[#E6ECF4] rounded-[2.5rem] relative group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#0F2A44]/10"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0F2A44]/[0.02] rounded-bl-[4rem] group-hover:bg-[#0F2A44]/5 transition-colors duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-10">
                      <div className="size-14 rounded-2xl bg-[#0F2A44] flex items-center justify-center shadow-lg shadow-[#0F2A44]/20 group-hover:scale-110 transition-transform duration-500">
                        <Icon className="size-6 text-white" />
                      </div>
                      <span className="text-4xl font-black text-[#0F2A44]/5 group-hover:text-[#0F2A44]/10 transition-colors">
                        {step.number}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-[#0F2A44] tracking-tight">
                        {step.title}
                      </h3>
                      
                      {/* Default Description */}
                      <p className="text-[#475569] leading-relaxed text-lg group-hover:hidden transition-all duration-300">
                        {step.description}
                      </p>

                      {/* Hover Content */}
                      <div className="hidden group-hover:block transition-all duration-300 animate-in fade-in slide-in-from-bottom-2">
                        <ul className="space-y-3">
                          {step.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#475569] font-medium">
                              <CheckCircle2 className="size-4 text-[#0F2A44] mt-0.5 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6">
                         <button className="flex items-center gap-2 text-sm font-bold text-[#0F2A44] group/btn">
                           Explore Phase <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                         </button>
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
