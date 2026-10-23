import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
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
      imagePosition: 'object-left-top',
      description: 'A jewelry studio for artisan brass, cowrie, and calabash pieces handmade in Kenya and Tanzania, with shop, rental, membership, and events.',
      technologies: ['React', 'TanStack Router', 'Tailwind CSS', 'Vite', 'Stripe', 'Paystack'],
      link: 'https://www.adornedrootsafrica.com'
    },
    {
      id: 4,
      title: 'Pullova Beauty',
      category: ['web', 'ui', 'app'],
      image: pullovaBeauty,
      imagePosition: 'object-left-top',
      description: 'An on-demand beauty platform for booking verified professionals for hair, makeup, nails, and grooming at home, work, or anywhere.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'React Router', 'Vite'],
      link: 'https://beauty-pullova.vercel.app'
    },
    {
      id: 5,
      title: 'Mwalimu Swap',
      category: ['web', 'ui', 'app'],
      image: mwalimuSwap,
      description: 'A Teachers Service Commission transfer portal where educators find vacancies, apply, track approvals, and swap stations across Kenya.',
      technologies: ['React', 'Tailwind CSS', 'Supabase', 'Mapbox', 'Recharts', 'Vite'],
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
        
        <div className="mb-12 flex justify-center animate-fade-in">
          <div className="flex max-w-full flex-wrap justify-center gap-2 sm:gap-1 sm:rounded-full sm:border sm:border-border/70 sm:bg-secondary/60 sm:p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-all duration-300",
                  filter === category.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary/70 text-muted-foreground hover:text-foreground sm:bg-transparent"
                )}
                aria-pressed={filter === category.id}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article 
              key={project.id} 
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-in"
              style={{animationDelay: `${0.1 + index * 0.1}s`}}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-56 overflow-hidden"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={cn(
                    "h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105",
                    project.imagePosition
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent"></div>
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-background/95 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm">
                  View project
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-2xl font-semibold leading-tight">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-auto pt-5">
                  <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">Tech stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-border/80 bg-secondary/70 px-2.5 py-1 text-xs text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
