
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Code, Database, GitBranch, Globe, Coffee, MessageCircle, Users, Briefcase, FileText, Shield, HardDrive, Target, Zap, User, Eye } from 'lucide-react';

const About = () => {
  const skillCategories = {
    communication: [
      { name: 'Excellent verbal and written communication', icon: MessageCircle },
      { name: 'Customer service', icon: Users },
      { name: 'Teamwork', icon: Users },
      { name: 'Multitasking', icon: Briefcase }
    ],
    technical: [
      { name: 'Java', icon: Coffee },
      { name: 'Python', icon: Code },
      { name: 'SQL', icon: Database },
      { name: 'Flask', icon: Globe },
      { name: 'Git', icon: GitBranch },
      { name: 'Backend & web development', icon: Code }
    ],
    toolsAndSoftware: [
      { name: 'Microsoft Word', icon: FileText },
      { name: 'Excel', icon: FileText },
      { name: 'PowerPoint', icon: FileText },
      { name: 'Access', icon: HardDrive },
      { name: 'Regulatory awareness', icon: Shield },
      { name: 'Data handling', icon: Database }
    ],
    attributes: [
      { name: 'Initiative', icon: Target },
      { name: 'Adaptability', icon: Zap },
      { name: 'Independent work ethic', icon: User },
      { name: 'Attention to detail', icon: Eye }
    ]
  };

  const experiences = [
    {
      role: 'Freelance Video Editor (Customer Operations Focus)',
      company: 'YouTube',
      period: 'Jan 2024 - Present',
      location: 'London, UK',
      achievements: [
        'Client Communication: Resolved queries and ensured high customer satisfaction',
        'Workflow Automation: Improved operational efficiency by 25%',
        'Project Management: Handled multiple projects, reducing turnaround time by 2 days',
        'Content Delivery: Created engaging content with 1M+ views, showing adaptability and customer insight'
      ]
    },
    {
      role: 'Web Developer (Operational Systems)',
      company: 'Whyspa',
      period: 'Jun 2020 - Mar 2022',
      location: 'Basildon, UK',
      achievements: [
        'System Development: Streamlined enrollment operations and customer data management',
        'AI Integration: Integrated ChatGPT-based assistant for customer query resolution',
        'Website Redesign: Increased customer retention and revenue by 17%'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Charles Ogunsanya
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Motivated second-year Computer Science student at Kingston University with a passion for technology, software systems, and operations. Skilled in problem-solving, teamwork, and automation, with hands-on experience in customer-facing and operational roles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg">
                View My Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-transparent px-8 py-3 text-lg">
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
                I'm a passionate Computer Science student with a strong foundation in modern web technologies and operations. 
                I enjoy solving complex problems and creating user-friendly applications that provide real value to customers and businesses.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to projects that challenge my skills, 
                or working on initiatives that improve operational efficiency and customer satisfaction.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">Kingston University</h3>
                  <p className="text-white/70 mb-2">2022-2026</p>
                  <p className="text-white font-medium mb-2">Bachelor of Science in Computer Science</p>
                  <p className="text-white/80 text-sm">
                    Relevant Modules: Data Structures & Algorithms, Java & Python Programming, User-Centred Design, Computing Systems
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Palmer's College</h3>
                  <p className="text-white font-medium mb-2">BTEC Level 2 & 3 in Information Technology</p>
                  <p className="text-white/80 text-sm">
                    Relevant coursework: Programming, Website Development, IT Systems, Databases, Social Media Marketing
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Communication</h3>
                <div className="space-y-2">
                  {skillCategories.communication.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={index} className="text-white/80 text-sm flex items-center gap-2">
                        <IconComponent size={16} className="text-white/60" />
                        • {skill.name}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Technical</h3>
                <div className="space-y-2">
                  {skillCategories.technical.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={index} className="text-white/80 text-sm flex items-center gap-2">
                        <IconComponent size={16} className="text-white/60" />
                        • {skill.name}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 animate-slide-up" style={{ animationDelay: '0.7s' }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Tools & Software</h3>
                <div className="space-y-2">
                  {skillCategories.toolsAndSoftware.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={index} className="text-white/80 text-sm flex items-center gap-2">
                        <IconComponent size={16} className="text-white/60" />
                        • {skill.name}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Attributes</h3>
                <div className="space-y-2">
                  {skillCategories.attributes.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={index} className="text-white/80 text-sm flex items-center gap-2">
                        <IconComponent size={16} className="text-white/60" />
                        • {skill.name}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Experience Section */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 animate-slide-up" style={{ animationDelay: '0.9s' }}>
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-white/30 pl-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-white/70 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-white/60 text-sm md:text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <div className="space-y-1 mt-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <p key={achIndex} className="text-white/80 text-sm leading-relaxed">• {achievement}</p>
                    ))}
                  </div>
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
