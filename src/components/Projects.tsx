import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUp, Car } from 'lucide-react';
const Projects = () => {
  const projects = [{
    title: 'Simplify My Car Web App',
    description: 'A comprehensive web application designed to streamline car management tasks. Features include maintenance tracking, expense monitoring, and service reminders with an intuitive user interface.',
    technologies: ['Flask', 'Python', 'Poetry', 'CSS'],
    githubUrl: 'https://github.com/charlie7633/car-savvy-simplify',
    image: null,
    // We'll use a car icon instead
    useIcon: true
  }, {
    title: 'Blackjack Game',
    description: 'An interactive web-based Blackjack game featuring smooth animations, score tracking, and responsive design. Built with Java to demonstrate fundamental programming concepts.',
    technologies: ['Java', 'HTML5', 'CSS3'],
    githubUrl: '#',
    // You'll provide this later
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    useIcon: false
  }, {
    title: 'Video Editing Portfolio Site',
    description: 'A modern, responsive portfolio website showcasing my video editing skills and projects. Features a sleek design inspired by modern UI/UX principles with smooth animations and transitions.',
    technologies: ['Canva', 'CapCut', 'YouTube'],
    githubUrl: 'https://charlieboi.my.canva.site/?fbclid=PAZXh0bgNhZW0CMTEAAadQQH4QFbes-3M-pdTnuwCo9tDIPlD9jk0x9ALUnJt8b6KLlBTY71k3Olj4Gw_aem_Kcq6JEO48aGy1U57-xQR6A',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop',
    useIcon: false,
    isPortfolio: true
  }];
  return <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">These Are a collection of My projects that showcase my skills in full-stack development, problem-solving, and creating user-centered solutions.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
          {projects.map((project, index) => <Card key={project.title} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 animate-slide-up overflow-hidden group" style={{
          animationDelay: `${0.2 * index}s`
        }}>
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center overflow-hidden">
                    {project.useIcon ? <Car size={120} className="text-white/60 group-hover:text-white/80 transition-colors duration-500" /> : <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
                  </div>
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-white group-hover:text-white/90 transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-white/80 text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map(tech => <span key={tech} className="px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm">
                              {tech}
                            </span>)}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button className="bg-white text-primary hover:bg-white/90 flex items-center gap-2" onClick={() => window.open(project.githubUrl, '_blank')}>
                      <ArrowUp className="w-4 h-4 rotate-45" />
                      {project.isPortfolio ? 'Portfolio' : 'GitHub'}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>)}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up" style={{
        animationDelay: '0.8s'
      }}>
          <p className="text-white/80 text-lg mb-6">
            Interested in working together or learning more about my projects?
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg" onClick={() => window.location.href = '/contact'}>
            Let's Connect
          </Button>
        </div>
      </div>
    </div>;
};
export default Projects;