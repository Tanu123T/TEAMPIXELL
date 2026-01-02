import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, TrendingUp, Users, DollarSign, Award } from 'lucide-react';

const portfolioItems = [
  {
    title: 'E-Commerce Fashion Brand',
    category: 'Meta Advertising + Web Development',
    description: 'Complete digital transformation for a luxury fashion retailer',
    results: [
      { icon: TrendingUp, label: '380% ROI', value: '+380%' },
      { icon: Users, label: 'Traffic Growth', value: '+250%' },
      { icon: DollarSign, label: 'Revenue Increase', value: '+420%' },
    ],
    gradient: 'from-blue-500 via-cyan-500 to-blue-600',
    image: 'fashion'
  },
  {
    title: 'SaaS Platform Launch',
    category: 'Google Ads + SEO + Development',
    description: 'Full-stack digital strategy for B2B software company',
    results: [
      { icon: Users, label: 'User Acquisition', value: '50K+' },
      { icon: TrendingUp, label: 'Conversion Rate', value: '+185%' },
      { icon: Award, label: 'Industry Awards', value: '3' },
    ],
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    image: 'saas'
  },
  {
    title: 'Restaurant Chain Expansion',
    category: 'Marketplace Advertising + Design',
    description: 'Multi-platform strategy for quick-commerce dominance',
    results: [
      { icon: DollarSign, label: 'Sales Growth', value: '+315%' },
      { icon: Users, label: 'New Locations', value: '12' },
      { icon: TrendingUp, label: 'Order Volume', value: '+450%' },
    ],
    gradient: 'from-indigo-500 via-purple-500 to-blue-500',
    image: 'restaurant'
  },
  {
    title: 'Tech Startup Branding',
    category: 'Branding + Video + Creative',
    description: 'Complete brand identity and marketing collateral',
    results: [
      { icon: Award, label: 'Brand Recognition', value: '+200%' },
      { icon: Users, label: 'Social Growth', value: '+380%' },
      { icon: TrendingUp, label: 'Engagement', value: '+275%' },
    ],
    gradient: 'from-blue-600 via-cyan-600 to-blue-500',
    image: 'tech'
  },
  {
    title: 'Healthcare Platform',
    category: 'SEO + Development + Content',
    description: 'Digital presence for telehealth service provider',
    results: [
      { icon: Users, label: 'Patient Onboarding', value: '25K+' },
      { icon: TrendingUp, label: 'Organic Traffic', value: '+340%' },
      { icon: DollarSign, label: 'Revenue', value: '+290%' },
    ],
    gradient: 'from-cyan-400 via-blue-500 to-indigo-500',
    image: 'healthcare'
  },
  {
    title: 'Real Estate Agency',
    category: 'Meta + Google Ads + Web',
    description: 'Lead generation powerhouse for luxury properties',
    results: [
      { icon: Users, label: 'Qualified Leads', value: '2.5K+' },
      { icon: DollarSign, label: 'Properties Sold', value: '$45M' },
      { icon: TrendingUp, label: 'Lead Quality', value: '+210%' },
    ],
    gradient: 'from-purple-500 via-blue-500 to-cyan-500',
    image: 'realestate'
  },
];

const filters = ['All Projects', 'Advertising', 'Development', 'Branding', 'E-Commerce'];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent" />
      
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
              <Award className="size-4 icon-golden" />
              Our Portfolio
              <Award className="size-4 icon-golden" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Success Stories That Speak Volumes
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from real partnerships. Here's how we've helped brands achieve extraordinary growth.
            </p>
          </div>
          
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl text-sm transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-blue-500/10 border border-blue-500/20 text-blue-300 hover:bg-blue-500/20 hover:border-blue-500/40'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Portfolio grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5 + 0.1 * index,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                className="group relative"
              >
                {/* Glow effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                />
                
                <div className="relative h-full bg-card/50 backdrop-blur-sm border border-blue-500/20 rounded-3xl overflow-hidden group-hover:border-blue-500/40 transition-all duration-300">
                  {/* Image placeholder with gradient */}
                  <div className={`relative h-48 bg-gradient-to-br ${item.gradient} overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 bg-black/20"
                      animate={hoveredItem === index ? { opacity: 0 } : { opacity: 0.2 }}
                    />
                    
                    {/* Animated pattern overlay */}
                    <motion.div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                      }}
                      animate={hoveredItem === index ? { 
                        backgroundPosition: ['0px 0px', '40px 40px'] 
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md border border-white/30">
                      <span className="text-xs text-white">{item.category}</span>
                    </div>
                    
                    {/* View project button */}
                    <motion.div
                      className="absolute top-4 right-4"
                      animate={hoveredItem === index ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                        <ArrowUpRight className="size-5 text-white" />
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl tracking-tight text-blue-100 group-hover:text-blue-50 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-blue-500/20">
                      {item.results.map((result, i) => {
                        const Icon = result.icon;
                        return (
                          <motion.div
                            key={result.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={hoveredItem === index ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="text-center"
                          >
                            <Icon className="size-4 text-blue-400 mx-auto mb-1" />
                            <div className="text-sm bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent mb-0.5">
                              {result.value}
                            </div>
                            <div className="text-[10px] text-muted-foreground">
                              {result.label}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Hover effect line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`}
                    initial={{ scaleX: 0 }}
                    animate={hoveredItem === index ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Stats summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12"
          >
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '$50M+', label: 'Revenue Generated' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '250%', label: 'Average ROI' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="text-center p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl hover:bg-blue-500/10 transition-colors"
              >
                <div className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
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
