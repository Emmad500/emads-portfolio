
import { Code, Brain, Laptop, Film, Rocket, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <Code className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design"]
    },
    {
      title: "AI & Automation",
      icon: <Brain className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600",
      skills: ["AI/ML Development", "Python", "Automation Solutions", "Problem Solving", "Learning Machine Learning", "Learning Neural Networks"]
    },
    {
      title: "Content Creation",
      icon: <Film className="h-6 w-6" />,
      color: "bg-red-100 text-red-600",
      skills: ["Video Scripting", "Educational Content", "Tech Tutorials", "EmmadTech Info (YouTube, Instagram & Medium)"]
    },
    {
      title: "Space Science",
      icon: <Rocket className="h-6 w-6" />,
      color: "bg-indigo-100 text-indigo-600", 
      skills: ["Astronomy", "Space Exploration", "NASA Open Science", "Astrobiology"]
    },
    {
      title: "Content Writing",
      icon: <FileText className="h-6 w-6" />,
      color: "bg-cyan-100 text-cyan-600",
      skills: ["Article Writing", "Blog Management", "Technical Writing", "Science & Tech Journalism"]
    }
  ];

  const technicalSkills = [
    { name: "Python", level: 95 },
    { name: "HTML/CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React.js", level: 70 },
    { name: "MongoDB", level: 65 },
    { name: "Machine Learning", level: 50 },
    { name: "Neural Networks", level: 30 }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="section-container">
        <div className="text-center mb-10">
          <p className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-3">
            My Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Capabilities</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={cn(
                "border border-border rounded-lg overflow-hidden transition-all duration-300 card-hover",
                "bg-white/70 backdrop-blur-sm"
              )}
            >
              <div className={`p-4 ${category.color} flex items-center`}>
                {category.icon}
                <h3 className="ml-2 font-semibold">{category.title}</h3>
              </div>
              <div className="p-5">
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-border rounded-lg p-6 md:p-8">
          <h3 className="text-xl font-bold mb-6">Technical Proficiency</h3>
          <div className="space-y-6">
            {technicalSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent rounded-full transition-all duration-1000" 
                    style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1}s` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
