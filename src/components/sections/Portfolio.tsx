
import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'ui', label: 'UI/UX Design' },
    { id: 'app', label: 'App Development' }
  ];
  
  // Behance projects data
  const projects = [
    {
      id: 1,
      title: 'Smart Home Dashboard',
      category: ['ui', 'web'],
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/e97d35195864909.6255aac7e87e0.jpg',
      description: 'A clean, modern dashboard UI for smart home management with intuitive controls and data visualization.',
      technologies: ['Figma', 'UI/UX', 'React', 'Tailwind CSS'],
      link: 'https://www.behance.net/gallery/195864909/Smart-Home-App'
    },
    {
      id: 2,
      title: 'SAAS Admin Dashboard',
      category: ['ui', 'web'],
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/6430ca156187257.63642c4e4df6c.jpg',
      description: 'A comprehensive admin dashboard for SaaS platforms with dark mode and responsive design.',
      technologies: ['Figma', 'UI/UX', 'Responsive Design'],
      link: 'https://www.behance.net/gallery/156187257/SaaS-Admin-Dashboard-UI-Design'
    },
    {
      id: 3,
      title: 'Music Player App',
      category: ['ui', 'app'],
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/30afb1155698051.635c4db5cca1e.jpg',
      description: 'A sleek music player app design with intuitive controls and beautiful visualizations.',
      technologies: ['Figma', 'UI/UX', 'Motion Design'],
      link: 'https://www.behance.net/gallery/155698051/Music-Player-Mobile-App-Design'
    },
    {
      id: 4,
      title: 'E-Learning Platform',
      category: ['web', 'ui'],
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/4eddac151557341.630e3b6175cb0.jpg',
      description: 'A comprehensive e-learning platform with course management, progress tracking, and interactive lessons.',
      technologies: ['React', 'Node.js', 'UI/UX', 'Firebase'],
      link: 'https://www.behance.net/gallery/151557341/Learning-Management-System-Website-Design'
    },
    {
      id: 5,
      title: 'Finance Mobile App',
      category: ['app', 'ui'],
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/bcb71a150872161.62ffa1ee6b162.jpg',
      description: 'A mobile application for personal finance management with expense tracking and budgeting features.',
      technologies: ['Figma', 'UI/UX', 'React Native'],
      link: 'https://www.behance.net/gallery/150872161/Mobile-App-Design-for-Finance'
    },
    {
      id: 6,
      title: 'Real Estate Listings',
      category: ['web', 'ui'],
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/89da25150871725.62ff9a20bd5da.jpg',
      description: 'A property listing website with map integration and advanced filtering options.',
      technologies: ['React', 'Google Maps API', 'UI/UX', 'Node.js'],
      link: 'https://www.behance.net/gallery/150871725/Property-Rental-App-UI-Design'
    }
  ];
  
  // Simulate loading the projects from Behance API
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
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
            Explore a selection of my recent projects from Behance, showcasing my expertise in web development, 
            UI/UX design, and application development.
          </p>
          <a 
            href="https://www.behance.net/cyprianboit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 text-accent hover:text-accent/80 transition-colors"
          >
            View all projects on Behance
          </a>
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
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="project-card animate-pulse h-[320px]">
                <div className="h-60 bg-secondary/80 rounded-lg mb-4"></div>
                <div className="h-6 bg-secondary/80 rounded w-2/3 mb-3"></div>
                <div className="h-4 bg-secondary/60 rounded w-full mb-4"></div>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="h-5 w-16 bg-secondary/40 rounded-full"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
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
        )}
        
        <div className="flex justify-center mt-10">
          <a 
            href="https://www.behance.net/cyprianboit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            See More Projects
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
