
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const activeSection = () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    for (const section of sections) {
      const sectionElement = section as HTMLElement;
      const sectionHeight = sectionElement.offsetHeight;
      const sectionTop = sectionElement.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        return sectionId;
      }
    }
    return 'home';
  };

  const [active, setActive] = useState(activeSection());

  useEffect(() => {
    const handleScrollForActive = () => {
      setActive(activeSection());
    };

    window.addEventListener('scroll', handleScrollForActive);
    return () => window.removeEventListener('scroll', handleScrollForActive);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'backdrop-blur-lg bg-background/80 py-4' : 'py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-serif font-bold text-foreground animate-fade-in">CK</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path === '/' ? '#home' : `#${link.path.substring(1)}`}
              className={cn(
                'nav-link',
                active === (link.path === '/' ? 'home' : link.path.substring(1)) && 'active'
              )}
              onClick={(e) => {
                e.preventDefault();
                const targetId = link.path === '/' ? 'home' : link.path.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                  window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <Button 
          className="hidden md:flex btn-primary"
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              window.scrollTo({
                top: contactSection.offsetTop - 100,
                behavior: 'smooth'
              });
            }
          }}
        >
          Get in Touch
        </Button>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 transition-all duration-300 ease-in-out md:hidden',
          isOpen ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none -z-10'
        )}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path === '/' ? '#home' : `#${link.path.substring(1)}`}
              className="nav-link text-2xl"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                const targetId = link.path === '/' ? 'home' : link.path.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                  window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="btn-primary mt-4"
            onClick={() => {
              setIsOpen(false);
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop - 100,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
