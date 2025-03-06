
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'ui', label: 'UI/UX Design' },
    { id: 'app', label: 'App Development' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      category: ['web'],
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'A responsive admin dashboard for managing online store products, orders, and customers.',
      technologies: ['React', 'TailwindCSS', 'Flask', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 2,
      title: 'Travel App UI Design',
      category: ['ui', 'app'],
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Modern UI/UX design for a travel booking mobile application focusing on user experience.',
      technologies: ['Figma', 'Adobe XD', 'Prototyping'],
      link: '#'
    },
    {
      id: 3,
      title: 'Healthcare Platform',
      category: ['web'],
      image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'A comprehensive healthcare platform connecting patients with healthcare providers.',
      technologies: ['React', 'Flask', 'MongoDB', 'WebRTC'],
      link: '#'
    },
    {
      id: 4,
      title: 'Finance Management App',
      category: ['app', 'ui'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Mobile application for personal finance management with budgeting and investment tracking.',
      technologies: ['React Native', 'Firebase', 'D3.js'],
      link: '#'
    },
    {
      id: 5,
      title: 'Real Estate Website',
      category: ['web', 'ui'],
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Responsive real estate property listing website with advanced search and filtering capabilities.',
      technologies: ['React', 'Flask', 'PostgreSQL', 'Google Maps API'],
      link: '#'
    },
    {
      id: 6,
      title: 'Social Media Analytics',
      category: ['web'],
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Data visualization dashboard for tracking social media performance and audience engagement.',
      technologies: ['React', 'D3.js', 'Flask', 'MongoDB'],
      link: '#'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="portfolio" className="section-padding py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="inline-block text-4xl font-serif font-bold mb-4 relative">
            My Portfolio
            <div className="absolute -bottom-2 left-0 h-1 w-full bg-accent"></div>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of my recent projects showcasing my expertise in web development, 
            UI/UX design, and application development.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category.id}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300",
                filter === category.id
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary/60 text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card group overflow-hidden animate-fade-in"
              style={{animationDelay: `${0.1 + index * 0.1}s`}}
            >
              <div className="relative h-60 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.link} 
                    className="bg-background p-3 rounded-full transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5 text-accent" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="text-xs bg-secondary/80 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
