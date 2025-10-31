
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/90"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl"></div>
      </div>
      <div className="section-container">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
          <div className="flex-1 space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium animate-slide-in" style={{ animationDelay: '0.1s' }}>
                Software Developer & Content Creator
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold animate-slide-in" style={{ animationDelay: '0.2s' }}>
                Hi, I'm <span className="text-accent">Emad</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-slide-in" style={{ animationDelay: '0.3s' }}>
                A <span className="text-foreground font-medium">Full-Stack Developer</span> transitioning into <span className="text-foreground font-medium">AI/ML</span>, passionate about building intelligent and innovative tech.
              </p>
            </div>
            <div className="flex space-x-4 animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <a
                href="#contact"
                className="px-6 py-3 bg-accent text-white rounded-md font-medium hover:bg-accent/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-accent/70 text-accent rounded-md font-medium hover:bg-accent/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                View Projects
              </a>
            </div>
            <div className="flex items-center space-x-4 animate-slide-in" style={{ animationDelay: '0.5s' }}>
              <p className="text-sm text-muted-foreground">Connect with me:</p>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/Emmad500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/emad-raza-3b9293263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:emmadtechinfo@gmail.com"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Soft privacy-safe blur background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-300/40 via-white/60 to-indigo-300/40 blur-2xl scale-110"></div>

              {/* Profile image with elegant depth */}
              <img
                src="/lovable-uploads/c6487a21-956a-4ecc-a12e-d1ac6d8bfffc.png"
                alt="Emad's profile"
                className={cn(
                  "object-cover w-full h-full rounded-full border-4 border-white shadow-xl backdrop-blur-sm",
                  "hover:scale-105 transition-transform duration-300",
                  "brightness-110 contrast-110"
                )}
                style={{
                  filter: "brightness(1.1) contrast(1.1) saturate(1.05)"
                }}
              />
            </div>

          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="h-6 w-6 text-accent" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
