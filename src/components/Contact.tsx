
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactLinks = [
    {
      name: 'Email',
      value: 'charlievanity7633@gmail.com',
      href: 'mailto:charlievanity7633@gmail.com',
      icon: Mail,
      color: 'hover:text-blue-300'
    },
    {
      name: 'GitHub',
      value: 'github.com/charlievanity',
      href: 'https://github.com/charlievanity',
      icon: Github,
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/charlievanity',
      href: 'https://linkedin.com/in/charlievanity',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-white mb-2 block">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-primary hover:bg-white/90 py-3 text-lg font-medium"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  I'm currently available for freelance work and full-time opportunities. 
                  Whether you have a project in mind or just want to chat about technology, 
                  I'd love to hear from you.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  Feel free to reach out through any of the channels below, and I'll get back to you as soon as possible.
                </p>
              </CardContent>
            </Card>

            {/* Contact Links */}
            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <Card 
                  key={link.name}
                  className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
                  onClick={() => window.open(link.href, '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                        <link.icon className={`w-6 h-6 text-white ${link.color} transition-colors`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg">{link.name}</h3>
                        <p className="text-white/70">{link.value}</p>
                      </div>
                      <ArrowUp className="w-5 h-5 text-white/50 rotate-45 group-hover:text-white transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Response Note */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Quick Response</h3>
                  <p className="text-white/70 text-sm">
                    I typically respond to messages within 24 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
