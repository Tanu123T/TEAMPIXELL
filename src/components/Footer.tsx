import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { smoothScrollToId, smoothScrollToTop } from '../utils/smoothScroll';

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    smoothScrollToTop({ duration: 1000 });
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-blue-500/20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/20 to-background" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white">TP</span>
                </div>
                <div className="text-xl tracking-tight bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Team Pixel
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A boutique digital agency built for brands that value precision, clarity, and results.
              </p>
              
              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.1 * index, type: "spring" }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 flex items-center justify-center transition-colors group"
                    >
                      <Icon className="size-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
            
            {/* Quick links */}
            <div className="space-y-6">
              <h4 className="text-sm tracking-wider text-blue-400 uppercase">Quick Links</h4>
              <div className="space-y-3">
                {[
                  { label: 'Home', id: 'top' },
                  { label: 'Our Expertise', id: 'expertise' },
                  { label: 'Philosophy', id: 'philosophy' },
                  { label: 'Contact', id: 'contact' },
                ].map((link, index) => (
                  <motion.button
                    key={link.label}
                    onClick={() => smoothScrollToId(link.id, { duration: 1000 })}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.1 * index }}
                    className="block text-sm text-muted-foreground hover:text-blue-300 transition-colors group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300" />
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-sm tracking-wider text-blue-400 uppercase">Services</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                {[
                  'Meta Advertising',
                  'Google Advertising',
                  'Web Development',
                  'SEO Services',
                  'Graphic Design',
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1 h-1 rounded-full bg-blue-500" />
                    {service}
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Contact info */}
            <div className="space-y-6">
              <h4 className="text-sm tracking-wider text-blue-400 uppercase">Get in Touch</h4>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'teampixel@gmail.com' },
                  { icon: Phone, text: '+91 9370718105' },
                  { icon: MapPin, text: 'Global Digital Agency' },
                ].map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.div
                      key={contact.text}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-3 text-sm text-muted-foreground group cursor-pointer hover:text-blue-300 transition-colors"
                    >
                      <Icon className="size-4 mt-0.5 text-blue-500 group-hover:text-blue-400 transition-colors" />
                      <span>{contact.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-8 border-t border-blue-500/20"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Team Pixel. All rights reserved.
              </p>
              
              <div className="flex items-center gap-6">
                <button className="text-sm text-muted-foreground hover:text-blue-300 transition-colors">
                  Privacy Policy
                </button>
                <button className="text-sm text-muted-foreground hover:text-blue-300 transition-colors">
                  Terms of Service
                </button>
                
                {/* Back to top button */}
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-shadow group"
                >
                  <ArrowUp className="size-4 text-white group-hover:animate-bounce" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
