import { Link } from 'react-router-dom';
import { Code2, Users, Rocket, Star, TrendingUp, Award, ArrowRight, Github, Terminal } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function LandingPage() {
  const features = [
    {
      icon: Code2,
      title: 'Showcase Projects',
      description: 'Share your best work with the developer community and get valuable feedback.',
    },
    {
      icon: Users,
      title: 'Connect with Developers',
      description: 'Build your network and collaborate with talented developers worldwide.',
    },
    {
      icon: Rocket,
      title: 'Discover Innovation',
      description: 'Explore cutting-edge projects and stay updated with the latest tech trends.',
    },
    {
      icon: TrendingUp,
      title: 'Grow Your Portfolio',
      description: 'Build a professional portfolio that showcases your skills and achievements.',
    },
  ];

  const stats = [
    { value: '10K+', label: 'Developers' },
    { value: '25K+', label: 'Projects' },
    { value: '50K+', label: 'Interactions' },
    { value: '100+', label: 'Countries' },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'AI Code Assistant',
      author: 'Sarah Chen',
      tags: ['TypeScript', 'AI', 'VSCode'],
      stars: 342,
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQxOTY5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Real-time Collaboration',
      author: 'Marcus Johnson',
      tags: ['WebRTC', 'React', 'Node.js'],
      stars: 287,
      image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NjQxMTc4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'DevOps Dashboard',
      author: 'Emily Rodriguez',
      tags: ['Kubernetes', 'Go', 'Docker'],
      stars: 195,
      image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2NDE3ODgzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#62626210_1px,transparent_1px),linear-gradient(to_bottom,#62626210_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-dev-grey border-dev-light text-white px-4 py-2">
              <Terminal className="h-3 w-3 mr-2 inline" />
              Join 10,000+ Urbantrends-Developers
            </Badge>
            
            <h1 className="mb-6 bg-gradient-to-r from-white via-dev-light to-dev-grey bg-clip-text text-transparent">
              Build. Share. Grow.
            </h1>
            
            <p className="mb-8 text-xl text-text-secondary max-w-2xl mx-auto">
              The ultimate platform for developers to showcase their projects, 
              connect with peers, and accelerate their career growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/projects">
                <Button className="bg-dev-light hover:bg-dev-light/80 text-dev-dark px-8 py-6 text-lg group">
                  Explore Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/add-project">
                <Button 
                  variant="outline" 
                  className="border-dev-light text-dev-light hover:bg-dev-light/10 px-8 py-6 text-lg"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Add Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-dev-charcoal bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-mono mb-2">{stat.value}</div>
                <div className="text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-dev-grey border-dev-light text-white">Features</Badge>
            <h2 className="mb-4">Everything You Need</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A comprehensive platform designed specifically for developers to thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-surface border-dev-charcoal hover:border-dev-light transition-all duration-300 hover:shadow-lg hover:shadow-dev-light/5 group"
              >
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-dev-light to-dev-grey flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-dev-dark" />
                </div>
                <h3 className="mb-2 text-xl">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 lg:py-32 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <Badge className="mb-4 bg-dev-grey border-dev-light text-white">Featured</Badge>
              <h2 className="mb-2">Trending Projects</h2>
              <p className="text-text-secondary">Discover what the community is building</p>
            </div>
            <Link to="/projects">
              <Button variant="outline" className="border-dev-light text-dev-light hover:bg-dev-light/10">
                View All
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-background border-dev-charcoal hover:border-dev-light transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="h-48 relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dev-dark via-dev-dark/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-dev-dark/80 border-dev-light text-white backdrop-blur-sm">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      {project.stars}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl group-hover:text-dev-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-4">by {project.author}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-dev-grey/20 border-dev-grey text-dev-light font-mono text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="bg-gradient-to-br from-dev-grey to-dev-charcoal border-dev-light p-12 lg:p-16 text-center">
            <Award className="h-16 w-16 mx-auto mb-6 text-dev-light" />
            <h2 className="mb-4">Ready to Showcase Your Work?</h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of developers who are building their presence and 
              growing their network on Developer Hub.
            </p>
            <Link to="/add-project">
              <Button className="bg-dev-light hover:bg-dev-light/80 text-dev-dark px-8 py-6 text-lg">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dev-charcoal py-12 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-dev-light" />
              <span className="font-mono text-lg">urbantrends-developers</span>
            </div>
            <p className="text-text-secondary text-sm">
              © 2025 Developer Hub. Built by developers, for developers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}