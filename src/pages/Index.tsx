
import { useEffect } from 'react';
import NavBar from '@/components/navigation/NavBar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    // Add a custom cursor effect (optional)
    const cursor = document.createElement('div');
    cursor.className = 'hidden md:block fixed w-6 h-6 rounded-full pointer-events-none z-50 transition-transform duration-200 ease-out';
    cursor.style.background = 'rgba(46, 213, 115, 0.5)';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.mixBlendMode = 'difference';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      const isOverLink = (e.target as HTMLElement).tagName === 'A' || 
                         (e.target as HTMLElement).tagName === 'BUTTON' ||
                         (e.target as HTMLElement).closest('a') || 
                         (e.target as HTMLElement).closest('button');
      
      if (isOverLink) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      } else {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

  // Add a subtle noise texture
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    opacity: 0.015,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1,
  } as React.CSSProperties;

  return (
    <div className="relative">
      {/* Noise texture overlay */}
      <div style={noiseStyle}></div>
      
      {/* Gradient background elements */}
      <div className="fixed top-0 -left-96 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl opacity-30"></div>
      <div className="fixed bottom-0 -right-96 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl opacity-30"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <NavBar />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
