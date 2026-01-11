import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Star } from 'lucide-react';
import { Button } from './ui/button';
import { useRef, useState, useEffect } from 'react';

// Using actual base64 strings provided by the user
const heroImages = [
  "attached_assets/Pasted-data-image-jpeg-base64-9j-4AAQSkZJRgABAQAAAQABAAD-2wCEA_1768154859527.txt",
  "attached_assets/Pasted-data-image-jpeg-base64-9j-4AAQSkZJRgABAQAAAQABAAD-2wCEA_1768154895532.txt",
  "attached_assets/Pasted-data-image-jpeg-base64-9j-4AAQSkZJRgABAQAAAQABAAD-2wCEA_1768154928511.txt"
];

export function Hero() {
  const ref = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Load the base64 content from the provided files
    const loadImages = async () => {
      try {
        const loadedImages = await Promise.all(
          heroImages.map(async (path) => {
            const response = await fetch('/' + path);
            return await response.text();
          })
        );
        setImages(loadedImages);
      } catch (error) {
        console.error("Error loading hero images:", error);
      }
    };
    loadImages();

    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  const expertiseItems = [
    { label: 'Meta Ads', icon: Zap },
    { label: 'Google Ads', icon: Sparkles },
    { label: 'Technology', icon: Star },
    { label: 'Creative', icon: Zap }
  ];
  
  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-[#0F2A44]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] bg-[#1E3A8A]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div 
        style={{ opacity, y }}
        className="max-w-7xl w-full relative z-30 grid lg:grid-cols-2 gap-16 items-center"
      >
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F2A44]/5 border border-[#0F2A44]/10 text-[#0F2A44] text-sm font-medium"
          >
            <Sparkles className="size-4 animate-pulse" />
            <span>Premium Digital Solutions</span>
          </motion.div>

          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl font-bold tracking-tight text-[#0F2A44] leading-[1.1]"
            >
              Where Strategy <br />
              <span className="text-gradient-navy font-black italic">Meets Sophistication.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-[#475569] max-w-xl leading-relaxed"
            >
              TEAM PIXELL partners with ambitious brands to deliver refined digital experiences, performance-driven growth, and measurable impact.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {expertiseItems.map((item, i) => (
              <div 
                key={i}
                className="px-4 py-2 rounded-xl bg-slate-50 border border-[#E6ECF4] text-[#0F2A44] text-sm font-bold flex items-center gap-2"
              >
                <item.icon className="size-3 text-[#0F2A44]" />
                {item.label}
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4"
          >
            <Button 
              size="lg" 
              className="bg-[#0F2A44] hover:bg-[#1E3A8A] text-white rounded-full px-10 py-7 text-lg shadow-xl shadow-[#0F2A44]/10 transition-all hover:scale-105"
              onClick={() => window.open('https://wa.me/919370718105', '_blank')}
            >
              Start a Conversation
              <ArrowRight className="ml-2 size-5" />
            </Button>
            
            <div className="flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-[#0F2A44]">50+</span>
                <span className="text-xs font-bold text-[#475569] uppercase tracking-wider">Happy Clients</span>
              </div>
              <div className="w-px h-8 bg-[#E6ECF4]" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black text-[#0F2A44]">4.9</span>
                  <Star className="size-4 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-xs font-bold text-[#475569] uppercase tracking-wider">Rating</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-[#0F2A44] rounded-[2.5rem] rotate-3 -z-10 opacity-5" />
          <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border border-[#E6ECF4] relative overflow-hidden group min-h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0F2A44]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-full h-full relative aspect-square bg-slate-50 rounded-[2rem] flex items-center justify-center overflow-hidden">
               <AnimatePresence mode="wait">
                 {images[imageIndex] ? (
                   <motion.img
                     key={imageIndex}
                     src={images[imageIndex]}
                     initial={{ opacity: 0, scale: 1.1 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     transition={{ duration: 0.8 }}
                     className="absolute inset-0 w-full h-full object-cover"
                   />
                 ) : (
                   <svg viewBox="0 0 200 200" className="w-full h-full text-[#0F2A44]/20 animate-float">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 8" />
                    <path d="M40 100 Q100 20 160 100 T280 180" fill="none" stroke="currentColor" strokeWidth="1" />
                    <rect x="70" y="70" width="60" height="60" className="text-[#0F2A44]/40" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                 )}
               </AnimatePresence>
            </div>
          </div>
          
          {/* Floating Metric Card */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-[#E6ECF4] flex items-center gap-4 z-40"
          >
            <div className="size-12 rounded-xl bg-[#0F2A44] flex items-center justify-center">
              <Zap className="size-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0F2A44]">250%</div>
              <div className="text-xs text-[#475569] font-medium uppercase tracking-wider">Avg. ROI Gained</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
