
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center pt-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 space-y-6 md:pr-10">
            <div className="inline-flex items-center space-x-2 bg-secondary/40 backdrop-blur-md px-3 py-1 rounded-full animate-fade-in" style={{animationDelay: '0.1s'}}>
              <span className="h-2 w-2 rounded-full bg-accent"></span>
              <span className="text-sm font-medium text-muted-foreground">Full Stack Engineer & UI/UX Designer</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-serif font-bold leading-tight animate-fade-in" style={{animationDelay: '0.2s'}}>
              Hello! I'm <br />
              <span className="text-foreground relative">
                Cyprian Kanda
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,5 C50,0 150,0 200,5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground animate-fade-in" style={{animationDelay: '0.3s'}}>
              I craft beautiful, functional digital experiences with React for frontend and 
              Flask for backend. My passion for design and code creates solutions that engage 
              users and solve real problems.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button 
                className="btn-primary flex items-center gap-2"
                onClick={() => {
                  const portfolioSection = document.getElementById('portfolio');
                  if (portfolioSection) {
                    window.scrollTo({
                      top: portfolioSection.offsetTop - 100,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                View My Work
                <ArrowRight size={16} />
              </Button>
              
              <a href="/cyprian-kanda-cv.pdf" download className="btn-outline flex items-center gap-2">
                <Download size={16} />
                Download CV
              </a>
            </div>
            
            <div className="flex items-center gap-6 pt-2 animate-fade-in" style={{animationDelay: '0.5s'}}>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="relative z-10 w-full h-[500px] rounded-2xl overflow-hidden border border-secondary shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent mix-blend-overlay"></div>
              <img 
                src="/lovable-uploads/98ea22ff-033a-440f-b247-b398efb273fa.png" 
                alt="Cyprian Kanda" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 h-72 w-72 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 h-72 w-72 bg-accent/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
