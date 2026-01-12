import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const formRef = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xpqqzdlp', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatusMessage('Message sent successfully!');
        setIsSuccess(true);
        form.reset();
      } else {
        setStatusMessage('Failed to send message. Please try again.');
        setIsSuccess(false);
      }
    } catch (error) {
      setStatusMessage('An error occurred. Please try again.');
      setIsSuccess(false);
    }
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email Us', 
      value: 'contact@teampixell.com', 
      href: 'mailto:contact@teampixell.com',
      color: 'bg-blue-50 text-blue-600'
    },
    { 
      icon: Phone, 
      label: 'Call Us', 
      value: '+91 9370718105', 
      href: 'tel:+919370718105',
      color: 'bg-indigo-50 text-indigo-600'
    },
    { 
      icon: MessageSquare, 
      label: 'WhatsApp', 
      value: 'Start a Chat', 
      href: 'https://wa.me/919370718105',
      color: 'bg-emerald-50 text-emerald-600'
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'Global Digital Agency', 
      href: '#',
      color: 'bg-slate-50 text-slate-600'
    },
  ];

  return (
    <section ref={ref} id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden bg-white">
      {/* Decorative blobs */}
      <div className="bg-blob bg-[#0F2A44]/5 top-0 right-0 -mr-64 -mt-64" />
      <div className="bg-blob bg-[#1E3A8A]/5 bottom-0 left-0 -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8 sm:space-y-12"
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#0F2A44]/5 text-xs sm:text-sm font-bold tracking-[0.2em] text-[#0F2A44] uppercase"
              >
                Get In Touch
              </motion.span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#0F2A44] leading-tight tracking-tight font-brand">
                Let's Connect <br />
                <span className="text-gradient-navy italic">Beyond Design.</span>
              </h2>
              <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-lg">
                Ready to elevate your digital presence? Our team is standing by to discuss your next breakthrough project.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-6 glass-card rounded-2xl group transition-all hover:shadow-xl hover:shadow-[#0F2A44]/5"
                  >
                    <div className={`size-12 rounded-xl ${info.color} flex items-center justify-center mb-4 transition-transform group-hover:rotate-6`}>
                      <Icon className="size-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-[#475569] uppercase tracking-widest">{info.label}</div>
                      <div className="text-sm font-bold text-[#0F2A44]">{info.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0F2A44]/5 rounded-bl-[4rem]" />
            
            <form ref={formRef} className="space-y-8 relative z-10" onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#0F2A44]/60 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0F2A44]/20 focus:border-[#0F2A44] transition-all text-[#0F2A44] font-medium" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#0F2A44]/60 ml-1">Work Email</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="john@company.com"
                      className="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0F2A44]/20 focus:border-[#0F2A44] transition-all text-[#0F2A44] font-medium" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[#0F2A44]/60 ml-1">Interested In</label>
                  <select name="service" className="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0F2A44]/20 focus:border-[#0F2A44] transition-all text-[#0F2A44] font-medium appearance-none cursor-pointer">
                    <option>Performance Marketing</option>
                    <option>Web Development</option>
                    <option>Brand Identity</option>
                    <option>UI/UX Design</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[#0F2A44]/60 ml-1">Your Vision</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    placeholder="Tell us about your project goals..."
                    className="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0F2A44]/20 focus:border-[#0F2A44] transition-all text-[#0F2A44] font-medium resize-none" 
                  />
                </div>
              </div>

              <Button size="lg" className="w-full bg-[#0F2A44] hover:bg-[#1E3A8A] text-white py-8 rounded-2xl text-lg font-bold shadow-xl shadow-[#0F2A44]/20 group">
                Send Message
                <Send className="ml-2 size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              {statusMessage && (
                <p className={`text-center text-sm mt-4 ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
