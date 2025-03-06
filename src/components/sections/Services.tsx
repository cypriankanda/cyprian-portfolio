
import { Code, Palette, Server, Layout, Bot, Smartphone, Image } from 'lucide-react';
import { cn } from '@/lib/utils';

const Services = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8 text-foreground" />,
      title: 'UI/UX Design',
      items: [
        'Landing Pages',
        'User Flow',
        'Wireframing',
        'Prototyping',
        'Mobile App Design',
      ]
    },
    {
      icon: <Code className="h-8 w-8 text-foreground" />,
      title: 'Development',
      items: [
        'HTML/CSS',
        'JavaScript',
        'Animation',
        'WordPress',
        'React',
      ]
    },
    {
      icon: <Image className="h-8 w-8 text-foreground" />,
      title: 'Illustration',
      items: [
        'Character Design',
        'Icon Set',
        'Illustration Guide',
        'Illustration Set',
        'Motion Graphic',
      ]
    }
  ];

  return (
    <section id="services" className="section-padding py-20 bg-background">
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
              className="service-card animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
              <ul className="service-list">
                {service.items.map((item, idx) => (
                  <li key={idx} className="service-item">{item}</li>
                ))}
              </ul>
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
