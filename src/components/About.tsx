
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = [
    'JavaScript', 'Python', 'React', 'Node.js', 'HTML/CSS', 
    'Git', 'MongoDB', 'SQL', 'RESTful APIs', 'Responsive Design'
  ];

  const experiences = [
    {
      role: 'Software Development Intern',
      company: 'TechCorp Solutions',
      period: '2023 - Present',
      description: 'Developing web applications using React and Node.js, collaborating with cross-functional teams.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Charlie Vanity
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer passionate about creating innovative web solutions
            that make a difference in people's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg">
                View My Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 animate-slide-up">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                I'm a passionate full-stack developer with a strong foundation in modern web technologies. 
                I enjoy solving complex problems and creating user-friendly applications that provide real value.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or working on personal projects that challenge my skills and creativity.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h3>
                  <p className="text-white/70">University Name • 2020-2024</p>
                  <p className="text-white/80 mt-2">
                    Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/30 transition-colors duration-300"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-white/30 pl-6">
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-white/70 font-medium">{exp.company} • {exp.period}</p>
                  <p className="text-white/80 mt-2 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
