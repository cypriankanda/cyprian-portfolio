
import { useState } from 'react';
import { Code, Palette, Database, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  
  const tabs = [
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
  ];
  
  const skills = [
    { 
      icon: <Code className="h-8 w-8 text-accent" />, 
      title: 'Frontend Development',
      description: 'Building responsive web applications with React, TypeScript, and modern CSS frameworks.',
      technologies: ['React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'HTML/CSS']
    },
    { 
      icon: <Database className="h-8 w-8 text-accent" />, 
      title: 'Backend Development',
      description: 'Creating robust server-side applications with Flask, Python, and SQL/NoSQL databases.',
      technologies: ['Python', 'Flask', 'RESTful APIs', 'SQL', 'MongoDB']
    },
    { 
      icon: <Palette className="h-8 w-8 text-accent" />, 
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces and experiences with a focus on usability and aesthetics.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Wireframing', 'Prototyping']
    },
    { 
      icon: <Layers className="h-8 w-8 text-accent" />, 
      title: 'Full Stack Solutions',
      description: 'End-to-end development from conceptualization to deployment with a focus on scalability.',
      technologies: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile']
    }
  ];
  
  const experience = [
    {
      position: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2021 - Present',
      description: 'Leading development of enterprise applications, mentoring junior developers, and implementing modern architecture patterns.'
    },
    {
      position: 'UI/UX Designer & Frontend Developer',
      company: 'Creative Digital Agency',
      period: '2019 - 2021',
      description: 'Designed and developed user interfaces for clients across various industries, focusing on responsive design and accessibility.'
    },
    {
      position: 'Python Backend Developer',
      company: 'Data Solutions Ltd.',
      period: '2017 - 2019',
      description: 'Built RESTful APIs and data processing pipelines using Flask and PostgreSQL for financial technology applications.'
    }
  ];
  
  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Tech University',
      period: '2015 - 2017',
      description: 'Specialized in software engineering and human-computer interaction. Graduated with honors.'
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'National Institute of Technology',
      period: '2011 - 2015',
      description: 'Foundation in programming, algorithms, and software development methodologies.'
    },
    {
      degree: 'Professional Certification in UI/UX Design',
      institution: 'Design Academy',
      period: '2016',
      description: 'Intensive program covering user research, interaction design, and visual design principles.'
    }
  ];

  return (
    <section id="about" className="section-padding py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="inline-block text-4xl font-serif font-bold mb-4 relative">
            About Me
            <div className="absolute -bottom-2 left-0 h-1 w-full bg-accent"></div>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a versatile full stack developer and UI/UX designer with a passion for creating
            seamless digital experiences that merge functionality with beautiful design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="glass p-6 text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="text-4xl font-bold text-accent mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          
          <div className="glass p-6 text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          
          <div className="glass p-6 text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="text-4xl font-bold text-accent mb-2">30+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-serif font-bold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6">
              With over 5 years of professional experience, I've cultivated a deep understanding 
              of both frontend and backend technologies, allowing me to create cohesive full-stack solutions.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach integrates technical expertise with design thinking, 
              ensuring that I deliver solutions that are not only functionally robust 
              but also intuitive and visually appealing.
            </p>
            <p className="text-muted-foreground">
              I'm constantly exploring new technologies and methodologies to enhance my skillset 
              and deliver cutting-edge solutions to the challenges of modern web development.
            </p>
          </div>
          
          <div className="lg:col-span-2 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex border-b border-muted mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={cn(
                    "px-6 py-3 font-medium transition-colors relative",
                    activeTab === tab.id 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></div>
                  )}
                </button>
              ))}
            </div>
            
            <div className="transition-all duration-300">
              {activeTab === 'skills' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="glass p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(46,213,115,0.1)]">
                      <div className="flex items-start mb-4">
                        <div className="p-2 rounded-lg bg-secondary/60 mr-4">
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-1">{skill.title}</h4>
                          <p className="text-sm text-muted-foreground">{skill.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {skill.technologies.map((tech, idx) => (
                          <span key={idx} className="text-xs bg-secondary/80 px-2 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'experience' && (
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-6 border-l border-muted">
                      <div className="absolute top-0 left-[-8px] h-4 w-4 rounded-full bg-accent"></div>
                      <h4 className="text-lg font-medium">{exp.position}</h4>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-muted-foreground">{exp.company}</span>
                        <span className="text-sm text-accent">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'education' && (
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-6 border-l border-muted">
                      <div className="absolute top-0 left-[-8px] h-4 w-4 rounded-full bg-accent"></div>
                      <h4 className="text-lg font-medium">{edu.degree}</h4>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-muted-foreground">{edu.institution}</span>
                        <span className="text-sm text-accent">{edu.period}</span>
                      </div>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
