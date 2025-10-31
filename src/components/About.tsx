import { BookOpen, Award, GraduationCap, Calendar, Edit } from 'lucide-react';
import { cn } from '@/lib/utils';

const About = () => {
  const educationDetails = [
    {
      degree: "Bachelor's in Textile Science",
      institution: "NED University of Engineering & Technology",
      year: "Current",
      courses: ["Textile Science", "Pre-Spinning Process", "Textile Raw Material"]
    }
  ];

  const certifications = [
    {
      name: "NASA Open Science 101",
      issuer: "NASA",
      year: "2023",
      image: "/lovable-uploads/333a1e7a-9506-4cdb-abef-8fc7aa0d8cb4.png"
    },
    {
      name: "Google Soft Skills Program",
      issuer: "PAFLA - Pakistan Freelancers Association",
      year: "2024",
      image: "/lovable-uploads/68ca1582-dc26-46e8-81e6-08b05570a6e5.png"
    },
    {
      name: "Supervised Machine Learning: Regression and Classification",
      issuer: "Stanford University & DeepLearning.AI",
      year: "2024",
      image: "/lovable-uploads/ad26a3c9-7f81-446b-bd26-0b0c919f14b0.png"
    },
    {
      name: "Command Line Basics in Linux",
      issuer: "Coursera",
      year: "2022",
      image: "/lovable-uploads/f87c15da-7e7b-469c-9df0-bccb12e11696.png"
    },
    {
      name: "Understanding Einstein: The Special Theory of Relativity",
      issuer: "Stanford University",
      year: "2022",
      image: "/lovable-uploads/6ed5cb96-bc73-4885-9792-4a19853c1c12.png"
    },
    {
      name: "AI For Everyone",
      issuer: "DeepLearning.AI",
      year: "2021",
      image: "/lovable-uploads/e4031adf-fb84-478c-b52e-9a34da266966.png"
    },
    {
      name: "Introduction to the Internet of Things and Embedded Systems",
      issuer: "University of California, Irvine",
      year: "2021",
      image: "/lovable-uploads/6c8e7488-4bd4-4593-830c-60873f4a3015.png"
    },
    {
      name: "Astronomy: Exploring Time and Space",
      issuer: "University of Arizona",
      year: "2024",
      image: "/lovable-uploads/a39b4e88-630d-42d8-b6c7-22df9ed7e6a7.png"
    }
  ];

  return (
    <section id="about" className="py-16 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">My Background</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-2"></div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-accent mr-2" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {educationDetails.map((edu, index) => (
                  <div
                    key={index}
                    className={cn(
                      "border border-border bg-white/70 rounded-lg p-6 transition-all duration-300",
                      "hover:shadow-md hover:border-accent/40"
                    )}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <span className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">{edu.institution}</p>
                    <div>
                      <p className="text-sm font-medium mb-2">Relevant Courses:</p>
                      <div className="flex flex-wrap">
                        {edu.courses.map((course, idx) => (
                          <span key={idx} className="tag">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-accent mr-2" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[815px] overflow-y-auto pr-2">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={cn(
                      "border border-border bg-white/70 rounded-lg p-4 transition-all duration-300",
                      "hover:shadow-md hover:border-accent/40"
                    )}
                  >
                    {cert.image && (
                      <div className="flex justify-center mb-3">
                        <img
                          src={cert.image}
                          alt={`${cert.name} Certificate`}
                          className="h-24 w-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => window.open(cert.image, '_blank')}
                        />
                      </div>
                    )}
                    <h4 className="font-medium">{cert.name}</h4>
                    <div className="flex justify-between mt-2">
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <BookOpen className="h-6 w-6 text-accent mr-2" />
              <h3 className="text-2xl font-bold">My Story</h3>
            </div>
            <div className="bg-white/70 border border-border rounded-lg p-6 shadow-sm mb-8">
              <div className="prose max-w-none">
                <p className="mb-4">
                  I am currently pursuing a degree in Textile Science at NED University, but my true focus lies in technology. Alongside my studies, I’ve built a strong foundation in software development and full-stack web technologies while steadily transitioning into the world of AI and machine learning.
                </p>
                <p className="mb-4">
                  My journey into technology began with web development, starting from HTML, CSS, and JavaScript. Over time, I realized how much I enjoy building practical solutions that solve real problems, which fuels my drive to keep learning and creating. This led me to explore full-stack development, where I now focus on making projects using JavaScript, React.js, Next.js, Node.js, and MongoDB.
                </p>
                <p className="mb-4">
                  I am also deeply interested in AI and automation. I enjoy developing small AI programs for daily tasks and continuously learning about machine learning, deep learning, and neural networks. Python was the first language I learned and remains my strongest tool, especially for automation, data analysis, and AI projects.
                </p>
                <p>
                  Beyond development, I’ve always been passionate about space science and emerging technologies, which I explore through self-learning and content creation. I run EmmadTech Info on YouTube, Instagram, and Medium, where I share insights on AI, space exploration, IoT, and astronomy — connecting with like-minded people and sharpening my communication skills.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4 group">
                <Edit className="h-6 w-6 text-accent mr-2 transform transition-transform duration-300 group-hover:rotate-6" />
                <h3 className="text-2xl font-bold">Content Creation</h3>
              </div>

              <div className="border border-border bg-white/70 rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:border-accent/40">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">EmmadTech Info</h4>
                  <a
                    href="https://medium.com/@emmadtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline text-sm font-medium"
                  >
                    Visit Medium Blog
                  </a>
                </div>
                <div className="flex justify-center mb-4">
                  <img
                    src="/lovable-uploads/924a91ac-55d8-4a54-87f9-e882e261ba03.png"
                    alt="EmmadTech Info Logo"
                    className="h-28 w-28 object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  EmmadTech Info, under my leadership, is a dedicated platform for exploring the captivating world of science and technology. From computer science to AI to the vast horizon of space, Earth, and Biological sciences, I bring a unique perspective to our exploration of the latest advancements, innovative discoveries, and the inventive minds that shape our future.
                </p>
                <p className="text-sm text-muted-foreground">
                  Join me on this exciting journey of discovery into the world of knowledge and innovation. Discover informative articles,
                  interesting discussions, and interesting insights on a wide range of topics, from the latest emerging tech to the mysteries of the universe.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden space-y-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-6 w-6 text-accent mr-2" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {educationDetails.map((edu, index) => (
                <div
                  key={index}
                  className={cn(
                    "border border-border bg-white/70 rounded-lg p-6 transition-all duration-300",
                    "hover:shadow-md hover:border-accent/40"
                  )}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <span className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3">{edu.institution}</p>
                  <div>
                    <p className="text-sm font-medium mb-2">Relevant Courses:</p>
                    <div className="flex flex-wrap">
                      {edu.courses.map((course, idx) => (
                        <span key={idx} className="tag">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <BookOpen className="h-6 w-6 text-accent mr-2" />
              <h3 className="text-2xl font-bold">My Story</h3>
            </div>
            <div className="bg-white/70 border border-border rounded-lg p-6 shadow-sm">
              <div className="prose max-w-none">
                <p className="mb-4">
                  I'm a Textile Science student at NED University with a passion for software development, AI, and space science.
                  While pursuing my degree, I've been actively expanding my horizons in the tech world.
                </p>
                <p className="mb-4">
                  My journey into technology started with web development, learning HTML, CSS, and JavaScript.
                  I quickly became fascinated by the potential of creating digital solutions to real-world problems.
                  This led me to explore full-stack development, where I'm currently focusing on JavaScript, React.js,
                  and database management with MongoDB.
                </p>
                <p className="mb-4">
                  Beyond coding, I'm deeply interested in AI and automation. I enjoy developing AI programs for daily tasks
                  and am continuously learning about machine learning despite its intensive nature. My technical curiosity
                  extends to space science and various technologies, areas where I've engaged in self-paced learning.
                </p>
                <p>
                  I also run EmmadTech Info on YouTube, Instagram, and Medium, where I create content about AI, automation,
                  space exploration, IoT, technology and sciences, and astronomy. This platform allows me to share my knowledge
                  and passion with others while refining my communication skills.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="border-t border-accent/30 my-8"></div>
            <div className="flex items-center mb-4 group">
              <Edit className="h-6 w-6 text-accent mr-2 transform transition-transform duration-300 group-hover:rotate-6" />
              <h3 className="text-2xl font-bold">Content Creation</h3>
            </div>

            <div className="border border-border bg-gradient-to-br from-white/80 to-blue-50/50 rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:border-accent/40">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">EmmadTech Info</h4>
                <a
                  href="https://medium.com/@emmadtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-sm font-medium"
                >
                  Visit Medium Blog
                </a>
              </div>
              <div className="flex justify-center mb-4">
                <img
                  src="/lovable-uploads/924a91ac-55d8-4a54-87f9-e882e261ba03.png"
                  alt="EmmadTech Info Logo"
                  className="h-28 w-28 object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                EmmadTech Info, under my leadership, is a dedicated platform for exploring the captivating world of science and technology. From computer science to AI to the vast horizon of space, Earth, and Biological sciences, I bring a unique perspective to our exploration of the latest advancements, innovative discoveries, and the inventive minds that shape our future.
              </p>
              <p className="text-sm text-muted-foreground">
                Join me on this exciting journey of discovery into the world of knowledge and innovation. Discover informative articles,
                interesting discussions, and intriguing insights on a wide range of topics, from the latest tech gadgets to the mysteries of the universe.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-accent mr-2" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={cn(
                    "border border-border bg-white/70 rounded-lg p-4 transition-all duration-300",
                    "hover:shadow-md hover:border-accent/40"
                  )}
                >
                  {cert.image && (
                    <div className="flex justify-center mb-3">
                      <img
                        src={cert.image}
                        alt={`${cert.name} Certificate`}
                        className="h-24 w-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => window.open(cert.image, '_blank')}
                      />
                    </div>
                  )}
                  <h4 className="font-medium">{cert.name}</h4>
                  <div className="flex justify-between mt-2">
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
