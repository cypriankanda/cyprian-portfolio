
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-secondary/30 relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-serif font-bold text-foreground">Cyprian Kanda</div>
            <div className="text-muted-foreground mt-2">Full Stack Engineer & UI/UX Designer</div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="p-3 bg-accent text-accent-foreground rounded-full mb-6 hover:bg-accent/90 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
            
            <div className="text-muted-foreground text-center md:text-right">
              <p>&copy; {currentYear} Cyprian Kanda. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
