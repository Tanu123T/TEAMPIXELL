import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, TrendingUp, Award, Users, Globe, Clock, CheckCircle, MessageSquare, ArrowRight, ShieldCheck, Trophy } from 'lucide-react';

const stats = [
  { icon: Target, value: '200+', label: 'Projects Delivered' },
  { icon: TrendingUp, value: '250%', label: 'Average ROI' },
  { icon: Award, value: '₹6 Crore+', label: 'Monthly Ad Budget Handled' },
  { icon: Users, value: '50+', label: 'Happy Clients' },
  { icon: Globe, value: '45+', label: 'Happy Countries' },
  { icon: Clock, value: '24×7', label: 'Available' },
  { icon: CheckCircle, value: '98%', label: 'Success Rate' },
  { icon: MessageSquare, value: '< 2 Hours', label: 'Avg. Response' },
];

const partners = ['Google', 'Meta', 'AWS'];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6ECF4] to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-12 lg:sticky lg:top-32"
          >
            <div className="space-y-6">
              <span className="text-sm font-bold tracking-[0.2em] text-[#0F2A44] uppercase">Our Story</span>
              <h2 className="text-4xl md:text-6xl font-bold text-[#0F2A44] leading-tight tracking-tight">
                Boutique Precision. <br />
                <span className="text-gradient-navy">Global Impact.</span>
              </h2>
            </div>
            
            <div className="space-y-8 text-xl text-[#475569] leading-relaxed">
              <p className="font-medium text-[#0F2A44]">
                TEAM PIXELL is a boutique digital agency built for brands that value precision, clarity, and results.
              </p>
              <p>
                We operate at the intersection of performance marketing, technology, and creative excellence, crafting digital systems that scale businesses while elevating brand perception.
              </p>
              <p className="text-lg italic">
                Every decision we make is intentional. Every execution is measured.
              </p>
            </div>

            <div className="space-y-8 pt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0F2A44] uppercase tracking-wider">
                  <ShieldCheck className="size-4" />
                  Certified Partners
                </div>
                <div className="flex flex-wrap gap-4">
                  {partners.map((partner) => (
                    <div key={partner} className="px-6 py-3 bg-white border border-[#E6ECF4] rounded-xl text-sm font-black text-[#0F2A44] shadow-sm">
                      {partner}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0F2A44] uppercase tracking-wider">
                  <Trophy className="size-4" />
                  Industry Recognition
                </div>
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#0F2A44] text-white rounded-xl shadow-lg shadow-[#0F2A44]/20">
                  <span className="font-bold">Top 1% Digital Agencies 2025</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-8 bg-white border border-[#E6ECF4] rounded-[2rem] shadow-xl shadow-[#0F2A44]/5 relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#0F2A44]/[0.02] rounded-bl-[3rem]" />
                  <Icon className="size-8 text-[#0F2A44] mb-6 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-black text-[#0F2A44] mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-[#475569] uppercase tracking-wider">
                    {stat.label}
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
