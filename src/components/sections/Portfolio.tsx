import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import dashboardDesign from '@/assets/images/Dashboard.png';
import dmsServices from '@/assets/images/p.png';
import adornedRootsAfrica from '@/assets/images/adorned-roots-africa.jpg';
import pullovaBeauty from '@/assets/images/pullova-beauty.jpg';
import mwalimuSwap from '@/assets/images/mwalimu-swap.jpg';

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
      title: 'Dashboard Design',
      category: ['ui', 'web'],
      image: dashboardDesign,
      description: 'A modern and intuitive dashboard interface with clean design and user-friendly navigation.',
      technologies: ['Figma', 'UI/UX', 'React', 'Tailwind CSS'],
      link: 'https://www.behance.net/gallery/209861385/Car-Rental-UI'
    },
    {
      id: 2,
      title: 'DMS Services',
      category: ['web', 'ui'],
      image: dmsServices,
      description: 'A responsive portfolio website showcasing creative work and professional experience.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      link: 'https://www.behance.net/gallery/220115227/Data-Management-Website-UI-Design'
    },
    {
      id: 3,
      title: 'Adorned Roots Africa',
      category: ['web', 'ui'],
      image: adornedRootsAfrica,
      description: 'A jewelry studio for artisan brass, cowrie, and calabash pieces handmade in Kenya and Tanzania, with shop, rental, membership, and events.',
      technologies: ['React', 'TanStack Router', 'Tailwind CSS', 'Vite'],
      link: 'https://www.adornedrootsafrica.com'
    },
    {
      id: 4,
      title: 'Pullova Beauty',
      category: ['web', 'ui', 'app'],
      image: pullovaBeauty,
      description: 'An on-demand beauty platform for booking verified professionals for hair, makeup, nails, and grooming at home, work, or anywhere.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      link: 'https://beauty-pullova.vercel.app'
    },
    {
      id: 5,
      title: 'Mwalimu Swap',
      category: ['web', 'ui', 'app'],
      image: mwalimuSwap,
      description: 'A Teachers Service Commission transfer portal where educators find vacancies, apply, track approvals, and swap stations across Kenya.',
      technologies: ['React', 'Tailwind CSS', 'Mapbox', 'Vite'],
      link: 'https://smooth-transfer-portal.vercel.app/'
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
