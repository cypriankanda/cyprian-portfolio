
import { Code, Palette, Server, Layout, Bot, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.',
      delay: '0.1s'
    },
    {
      icon: <Server className="h-10 w-10" />,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Flask, Python, and SQL/NoSQL databases.',
      delay: '0.2s'
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces and experiences with a focus on usability and aesthetics.',
      delay: '0.3s'
    },
    {
      icon: <Layout className="h-10 w-10" />,
      title: 'Web Application Development',
      description: 'Full-stack development of custom web applications tailored to specific business needs.',
      delay: '0.4s'
    },
    {
      icon: <Bot className="h-10 w-10" />,
      title: 'API Development & Integration',
      description: 'Creating and integrating RESTful APIs to connect various services and systems.',
      delay: '0.5s'
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: 'Responsive Design',
      description: 'Ensuring applications look and function perfectly across all devices and screen sizes.',
      delay: '0.6s'
    }
  ];

  return (
    <section id="services" className="section-padding py-20 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="inline-block text-4xl font-serif font-bold mb-4 relative">
            My Services
            <div className="absolute -bottom-2 left-0 h-1 w-full bg-accent"></div>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer a comprehensive range of services designed to bring your digital vision to life
            with a focus on quality, performance, and user experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "glass p-8 transition-all duration-300",
                "hover:shadow-[0_0_20px_rgba(46,213,115,0.15)] hover:translate-y-[-5px]",
                "border border-white/5 animate-fade-in"
              )}
              style={{animationDelay: service.delay}}
            >
              <div className="p-4 rounded-lg bg-secondary inline-block mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 glass p-10 relative overflow-hidden animate-fade-in">
          <div className="absolute -top-20 -right-20 h-64 w-64 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-64 w-64 bg-accent/5 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold mb-2">Ready to start your project?</h3>
              <p className="text-muted-foreground max-w-lg">
                Let's collaborate to create something amazing that meets your business needs and exceeds your expectations.
              </p>
            </div>
            
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 100,
                    behavior: 'smooth'
                  });
                }
              }}
              className="btn-primary px-8 py-3 rounded-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
