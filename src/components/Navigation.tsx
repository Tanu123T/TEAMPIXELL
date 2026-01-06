import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { smoothScrollToId, smoothScrollToTop } from '../utils/smoothScroll';

export function Navigation() {
  const baseUrl = (import.meta as any).env?.BASE_URL ?? '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const { scrollY, scrollYProgress } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 14, 39, 0)', 'rgba(10, 14, 39, 0.95)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['top', 'about', 'expertise', 'process', 'portfolio', 'testimonials', 'philosophy', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    // Use enhanced smooth scroll
    smoothScrollToId(id, {
      duration: 1000,
      offset: 80,
    });
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Process', id: 'process' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.nav
        style={{ backgroundColor }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/5' : ''
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('top')}
              className="flex items-center gap-3 group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity"
                />
                <div className="relative w-14 h-14 flex items-center justify-center">
                        <img
                          src={baseUrl + 'logo.png'}
                          alt="TEAM PIXELL Logo"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,1)] transition-all duration-300 group-hover:brightness-110"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-lg tracking-tight bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  TEAM PIXELL
                </span>
                <span className="text-xs text-blue-400/70">Digital Excellence</span>
              </div>
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm rounded-lg transition-all relative group ${activeSection === item.id
                    ? 'text-blue-300 bg-blue-500/10'
                    : 'text-muted-foreground hover:text-blue-300 hover:bg-blue-500/5'
                    }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="hidden md:block relative group"
              >

                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 gap-2"
                  size="sm"
                >
                  Get Started
                  <ChevronDown className="size-3" />
                </Button>
              </motion.div>

              {/* Mobile menu button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-colors relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                {mobileMenuOpen ? (
                  <X className="size-5 text-blue-300 relative z-10" />
                ) : (
                  <Menu className="size-5 text-blue-300 relative z-10" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? 0 : -20,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-[73px] left-0 right-0 z-40 lg:hidden"
      >
        <div className="bg-background/98 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl shadow-blue-500/10">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 rounded-lg border transition-all ${activeSection === item.id
                  ? 'bg-blue-500/20 border-blue-500/50 text-blue-200'
                  : 'bg-blue-500/5 hover:bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40 text-muted-foreground hover:text-blue-300'
                  }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
                transition={{ delay: 0.05 * index }}
              >
                {item.label}
              </motion.button>
            ))}
            <div className="pt-2">
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
