import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, Building2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'Luxe Fashion Co.',
    avatar: 'SM',
    rating: 5,
    text: 'Team Pixel transformed our entire digital presence. The ROI we achieved in just 6 months exceeded our yearly projections. Their strategic approach and attention to detail is unmatched.',
    results: '+380% ROI',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Marcus Chen',
    role: 'Founder & CTO',
    company: 'TechFlow Solutions',
    avatar: 'MC',
    rating: 5,
    text: 'Working with Team Pixel was a game-changer. They didn\'t just build us a platform; they crafted a complete growth engine. The technical excellence combined with marketing prowess is rare.',
    results: '50K+ Users',
    gradient: 'from-cyan-500 to-indigo-500'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Marketing Director',
    company: 'Gourmet Express',
    avatar: 'ER',
    rating: 5,
    text: 'The marketplace advertising strategy they implemented revolutionized our business. We went from struggling to compete to dominating our category. Truly exceptional work.',
    results: '+315% Sales',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    name: 'David Thompson',
    role: 'Co-Founder',
    company: 'HealthConnect',
    avatar: 'DT',
    rating: 5,
    text: 'Team Pixel\'s holistic approach to digital strategy helped us scale from a startup to a market leader. Their expertise in SEO and development created a foundation for sustainable growth.',
    results: '25K+ Patients',
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    name: 'Lisa Anderson',
    role: 'VP of Sales',
    company: 'Prime Properties',
    avatar: 'LA',
    rating: 5,
    text: 'The lead generation campaigns exceeded every expectation. The quality of leads and conversion rates have been phenomenal. Team Pixel truly understands high-value customer acquisition.',
    results: '$45M in Sales',
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    name: 'James Park',
    role: 'Brand Director',
    company: 'InnovateTech',
    avatar: 'JP',
    rating: 5,
    text: 'From branding to video production, every touchpoint they created was world-class. Our brand recognition skyrocketed, and the creative work continues to win industry awards.',
    results: '+200% Recognition',
    gradient: 'from-cyan-400 to-blue-600'
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-background to-blue-950/40" />
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.gradient} opacity-5`}
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
        />
      </div>
      
      {/* Floating quote marks */}
      <motion.div
        className="absolute top-20 left-20 text-blue-500/10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Quote className="size-32" />
      </motion.div>
      
      <div className="max-w-6xl mx-auto relative z-10">
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
              <Star className="size-4 icon-golden" />
              Client Testimonials
              <Star className="size-4 icon-golden" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </div>
          
          {/* Main testimonial carousel */}
          <div className="relative">
            {/* Navigation buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none z-20">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate(-1)}
                className="pointer-events-auto w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 hover:bg-blue-500/30 hover:border-blue-500/50 flex items-center justify-center transition-all group -ml-6"
              >
                <ChevronLeft className="size-6 text-blue-300 group-hover:text-blue-100 transition-colors" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate(1)}
                className="pointer-events-auto w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 hover:bg-blue-500/30 hover:border-blue-500/50 flex items-center justify-center transition-all group -mr-6"
              >
                <ChevronRight className="size-6 text-blue-300 group-hover:text-blue-100 transition-colors" />
              </motion.button>
            </div>
            
            {/* Testimonial card */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${currentTestimonial.gradient} rounded-3xl blur-xl opacity-20`} />
                  
                  <div className="relative bg-card/50 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 md:p-12">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      {/* Left: Avatar and info */}
                      <div className="flex flex-col items-center text-center space-y-6 text-muted-foreground">
                        {/* Avatar */}
                        <div className="relative">
                          <motion.div
                            className={`absolute -inset-2 bg-gradient-to-r ${currentTestimonial.gradient} rounded-full blur-lg opacity-50`}
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.5, 0.7, 0.5],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                            }}
                          />
                          <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${currentTestimonial.gradient} flex items-center justify-center border-4 border-background`}>
                            <span className="text-2xl text-white">
                              {currentTestimonial.avatar}
                            </span>
                          </div>
                        </div>
                        
                        {/* Info */}
                        <div className="space-y-2">
                          <h4 className="text-xl text-blue-100">
                            {currentTestimonial.name}
                          </h4>
                          <p className="text-sm text-blue-400">
                            {currentTestimonial.role}
                          </p>
                          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                            <Building2 className="size-4" />
                            {currentTestimonial.company}
                          </div>
                        </div>
                        
                        {/* Results badge */}
                        <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${currentTestimonial.gradient} text-white text-sm`}>
                          {currentTestimonial.results}
                        </div>
                      </div>
                      
                      {/* Right: Testimonial content */}
                      <div className="md:col-span-2 space-y-6">
                        {/* Stars */}
                        <div className="flex gap-1">
                          {[...Array(currentTestimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 + i * 0.05, type: "spring" }}
                            >
                              <Star className="size-6 fill-yellow-400 text-yellow-400 icon-golden" />
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Quote */}
                        <div className="relative">
                          <Quote className="absolute -top-2 -left-2 size-8 text-blue-500/20" />
                          <p className="text-lg md:text-xl text-foreground leading-relaxed pl-6">
                            {currentTestimonial.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className="relative"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-blue-500 w-8' 
                      : 'bg-blue-500/30 hover:bg-blue-500/50'
                  }`} />
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Bottom grid of smaller testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-8"
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl hover:bg-blue-500/10 hover:border-blue-500/40 transition-all cursor-pointer"
                onClick={() => setCurrentIndex(index)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center`}>
                    <span className="text-white text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="text-sm text-blue-100">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3 fill-yellow-400 text-yellow-400 icon-golden" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
