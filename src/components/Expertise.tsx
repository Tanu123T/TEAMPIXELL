import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Facebook,
  Search, 
  Code2, 
  TrendingUp, 
  ShoppingCart, 
  Palette
} from 'lucide-react';

const services = [
  {
    icon: Facebook,
    title: 'Meta Advertising',
    description: 'Elegantly engineered Facebook and Instagram campaigns designed to convert attention into sustained revenue.',
    color: 'bg-[#0F2A44]', // Deep Navy
    border: 'border-[#0F2A44]/10'
  },
  {
    icon: Search,
    title: 'Google Advertising',
    description: 'High-intent search and performance strategies capturing demand at the moment it matters most.',
    color: 'bg-[#1E3A8A]', // Royal Navy
    border: 'border-[#1E3A8A]/10'
  },
  {
    icon: Code2,
    title: 'Development & Support',
    description: 'Architected digital platforms built for speed, stability, and seamless user experience.',
    color: 'bg-[#0F172A]', // Dark Navy
    border: 'border-[#0F172A]/10'
  },
  {
    icon: TrendingUp,
    title: 'Strategic SEO',
    description: 'A disciplined approach to organic growth through strategic search visibility and authority.',
    color: 'bg-[#1E40AF]', // Blue 800
    border: 'border-[#1E40AF]/10'
  },
  {
    icon: ShoppingCart,
    title: 'Marketplace Ads',
    description: 'Precision-led marketplace strategies that enhance discoverability and profitability.',
    note: 'Quick-commerce & E-commerce',
    color: 'bg-[#172554]', // Darker Royal
    border: 'border-[#172554]/10'
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Refined visual language that communicates trust, quality, and brand distinction.',
    color: 'bg-[#334155]', // Slate Navy
    border: 'border-[#334155]/10'
  }
];

export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative bg-[#F8FAFC] overflow-hidden">
      {/* Abstract Design Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0F2A44]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1E3A8A]/5 rounded-full blur-[100px] -ml-48 -mb-48" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-24">
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-[#0F2A44]/10 shadow-sm"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-[#0F2A44] uppercase">Capabilities</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold text-[#0F2A44] tracking-tight leading-tight"
            >
              Driven by <span className="text-gradient-navy">Precision.</span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="p-10 bg-white border border-[#0F2A44]/10 rounded-[2.5rem] relative group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#0F2A44]/10"
                >
                  <div className={`size-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-black/10`}>
                    <Icon className="size-8 text-white" />
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#0F2A44] tracking-tight group-hover:translate-x-1 transition-transform">
                      {service.title}
                    </h3>
                    {service.note && (
                      <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-[10px] font-black text-[#475569] uppercase tracking-widest border border-slate-200">
                        {service.note}
                      </span>
                    )}
                    <p className="text-[#475569] leading-relaxed text-lg">
                      {service.description}
                    </p>
                    
                    <div className="pt-6 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#0F2A44] uppercase tracking-wider">
                        Strategic Execution <ArrowRight className="size-3" />
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
const ArrowRight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);
