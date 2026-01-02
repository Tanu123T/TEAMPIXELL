import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { StatsSection } from './components/StatsSection';
import { Expertise } from './components/Expertise';
import { ProcessSection } from './components/ProcessSection';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Philosophy } from './components/Philosophy';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';
import { smoothScrollToId } from '../utils/smoothScroll';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { ScrollOptimizer } from './components/ScrollOptimizer';

export default function App() {
  return (
    <div className="min-h-screen relative">
      <ScrollOptimizer />
      <BackgroundEffects />
      <Navigation />
      
      <main id="top">
        <Hero />
        
        <div id="about">
          <About />
        </div>
        
        <StatsSection />
        
        <div id="expertise">
          <Expertise />
        </div>
        
        <div id="process">
          <ProcessSection />
        </div>
        
        <div id="portfolio">
          <Portfolio />
        </div>
        
        <div id="testimonials">
          <Testimonials />
        </div>
        
        <div id="philosophy">
          <Philosophy />
        </div>
        
        <div id="experience">
          <Experience />
        </div>
        
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
