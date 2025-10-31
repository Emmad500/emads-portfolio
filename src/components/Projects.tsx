import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects = () => {
  const projects = [
    {
      title: "X (Twitter) UI Clone",
      description: "A responsive single-page clone of X (formerly Twitter), built purely with HTML and Tailwind CSS. It replicates the modern interface design with precise layout styling, dark mode aesthetics, and pixel-perfect responsiveness across all screen sizes.",
      technologies: ["HTML", "CSS", "Tailwind CSS", "Responsive Design"],
      image: "/lovable-uploads/8c175843-0bb8-47e4-b4f3-552ef7fdad78.png", 
      links: {
        live: "#",
        github: "#"
      }
    },    
    // {
    //   title: "Polling Stations Locator",
    //   description: "A web application developed for TEC PEC Elections 2024 at NED University that helps users locate polling stations.",
    //   technologies: ["Web Development", "JavaScript", "Backend Integration", "Database"],
    //   image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop",
    //   links: {
    //     live: "#",
    //     github: "#"
    //   }
    // },
    // {
    //   title: "AI Virtual Assistant",
    //   description: "Developed an intelligent virtual assistant capable of handling various tasks including scheduling, information retrieval, and basic conversation. Incorporated natural language processing for improved user interaction.",
    //   technologies: ["AI Development", "Natural Language Processing", "JavaScript"],
    //   image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1970&auto=format&fit=crop",
    //   links: {
    //     live: "#",
    //     github: "#"
    //   }
    // },
    {
      title: "Interactive Spotify Clone",
      description: "Built a responsive and interactive Spotify clone featuring theme music and Islamic nasheeds. Implemented custom audio controls, playlist management, and a responsive design that works across all devices.",
      technologies: ["HTML", "CSS", "JavaScript", "Media API"],
      image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?q=80&w=1974&auto=format&fit=crop",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "EmmadTech Store (E-Commerce Website)",
      description: "A fully responsive multi-page eCommerce website built with HTML, CSS, and JavaScript. It includes a homepage, product listings, cart, blog, and contact pages with dynamic interactivity. Designed to showcase a modern shopping experience with features like promotional banners, newsletters, and product categories.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "/lovable-uploads/preview.png", 
      links: {
        live: "https://emmad500.github.io/E-Commerce-Website/", 
        github: "https://github.com/Emmad500/E-Commerce-Website"
      }
    }    
  ];

  // Show only first 3 by default
  const [visibleCount, setVisibleCount] = useState(4);

  const showMore = () => {
    setVisibleCount((prev) => (prev === 4 ? projects.length : 4));
  };

  const isShowingAll = visibleCount === projects.length;

  return (
    <section id="projects" className="py-16 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-3">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.slice(0, visibleCount).map((project, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white/70 backdrop-blur-sm border border-border rounded-lg overflow-hidden shadow-sm",
                "transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]"
              )}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.links.live} 
                    className="flex items-center text-sm text-accent hover:text-accent/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.links.github} 
                    className="flex items-center text-sm text-accent hover:text-accent/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more / less button */}
        <div className="mt-12 text-center">
          <button
            onClick={showMore}
            className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-md font-medium hover:bg-accent/90 transition-colors duration-200"
          >
            {isShowingAll ? "Show Less" : "View All Projects"}
            <ExternalLink className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
