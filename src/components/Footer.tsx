import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { smoothScrollToTop } from '../utils/smoothScroll';

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
    <footer ref={ref} className="relative bg-white border-t border-[#E6ECF4] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 1, y: 12 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
                  <img src="/logo.png" alt="Logo" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="text-xl font-bold tracking-tight text-[#0F2A44]">
                  TEAM PIXELL
                </div>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed">
                A boutique digital agency built for brands that value precision, clarity, and results.
              </p>
              
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 rounded-lg bg-[#0F2A44]/5 border border-[#E6ECF4] hover:bg-[#0F2A44]/10 flex items-center justify-center transition-colors group"
                    >
                      <Icon className="size-4 text-[#0F2A44]" />
                    </a>
                  );
                })}
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-sm font-bold tracking-wider text-[#0F2A44] uppercase">Services</h4>
              <div className="space-y-3 text-sm text-[#475569]">
                {[
                  'Meta Advertising',
                  'Google Advertising',
                  'Web Development',
                  'SEO Services',
                  'Graphic Design',
                ].map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#0F2A44]" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-sm font-bold tracking-wider text-[#0F2A44] uppercase">Get in Touch</h4>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'contact@teampixell.com' },
                  { icon: Phone, text: '+91 9370718105' },
                  { icon: MapPin, text: 'Global Digital Agency' },
                ].map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <div
                      key={contact.text}
                      className="flex items-start gap-3 text-sm text-[#475569] hover:text-[#0F2A44] transition-colors"
                    >
                      <Icon className="size-4 mt-0.5 text-[#0F2A44]" />
                      <span>{contact.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#E6ECF4] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#475569]">
              © {currentYear} TEAM PIXELL. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <button className="text-sm text-[#475569] hover:text-[#0F2A44] transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-[#475569] hover:text-[#0F2A44] transition-colors">
                Terms of Service
              </button>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-lg bg-[#0F2A44] flex items-center justify-center hover:bg-[#1E3A8A] transition-colors group"
              >
                <ArrowUp className="size-4 text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
