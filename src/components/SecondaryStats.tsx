import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Clock, CheckCircle, MessageSquare } from 'lucide-react';

const stats = [
  { icon: Globe, value: '45+', label: 'Happy Countries' },
  { icon: Clock, value: '24×7', label: 'Available' },
  { icon: CheckCircle, value: '98%', label: 'Success Rate' },
  { icon: MessageSquare, value: '< 2 Hours', label: 'Avg. Response' },
];

export function SecondaryStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-slate-50 border-b border-[#E6ECF4]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-4 sm:p-6 md:p-8 bg-white border border-[#E6ECF4] rounded-2xl shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="size-10 sm:size-12 rounded-xl bg-[#0F2A44]/5 flex items-center justify-center group-hover:bg-[#0F2A44] transition-colors">
                    <Icon className="size-5 sm:size-6 text-[#0F2A44] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-[#0F2A44] tracking-tight">{stat.value}</div>
                    <div className="text-xs font-bold text-[#475569] uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
