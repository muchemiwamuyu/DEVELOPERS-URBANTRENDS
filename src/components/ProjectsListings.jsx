import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, Eye, Heart, MessageSquare, Filter, TrendingUp, Clock, Code2 } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectsListing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const allTags = ['React', 'TypeScript', 'Node.js', 'Python', 'AI', 'Web3', 'Mobile', 'DevOps', 'Database', 'API'];

  const projects = [
    {
      id: 1,
      title: 'AI Code Assistant',
      description: 'VSCode extension that uses AI to help write better code with intelligent suggestions and refactoring.',
      author: 'Sarah Chen',
      authorUsername: '@sarahchen',
      tags: ['TypeScript', 'AI', 'VSCode'],
      stars: 342,
      views: 5234,
      likes: 189,
      comments: 45,
      trending: true,
      createdAt: '2 days ago',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQxOTY5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Real-time Collaboration Tool',
      description: 'Build collaborative apps with WebRTC. Features include video chat, screen sharing, and real-time document editing.',
      author: 'Marcus Johnson',
      authorUsername: '@marcusj',
      tags: ['WebRTC', 'React', 'Node.js'],
      stars: 287,
      views: 4120,
      likes: 156,
      comments: 38,
      trending: true,
      createdAt: '5 days ago',
      image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NjQxMTc4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'DevOps Dashboard',
      description: 'Comprehensive Kubernetes monitoring dashboard with real-time metrics, logs, and deployment management.',
      author: 'Emily Rodriguez',
      authorUsername: '@emilydev',
      tags: ['Kubernetes', 'Go', 'Docker', 'DevOps'],
      stars: 195,
      views: 3890,
      likes: 123,
      comments: 29,
      trending: false,
      createdAt: '1 week ago',
      image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2NDE3ODgzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'GraphQL API Generator',
      description: 'Automatically generate type-safe GraphQL APIs from your database schema with built-in authentication.',
      author: 'David Kim',
      authorUsername: '@davidk',
      tags: ['GraphQL', 'TypeScript', 'API'],
      stars: 421,
      views: 6780,
      likes: 267,
      comments: 52,
      trending: true,
      createdAt: '3 days ago',
      image: 'https://images.unsplash.com/photo-1603575448360-153f093fd0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBsYXB0b3AlMjBjb2RlfGVufDF8fHx8MTc2NDE0NjkzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Mobile Design System',
      description: 'Cross-platform design system for React Native with 100+ customizable components and dark mode support.',
      author: 'Lisa Wang',
      authorUsername: '@lisawang',
      tags: ['React', 'Mobile', 'Design'],
      stars: 512,
      views: 8340,
      likes: 398,
      comments: 67,
      trending: true,
      createdAt: '1 day ago',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0MjAzMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Blockchain Explorer',
      description: 'Explore and analyze blockchain transactions with detailed analytics and visualization tools.',
      author: 'James Anderson',
      authorUsername: '@jamesand',
      tags: ['Web3', 'TypeScript', 'Database'],
      stars: 178,
      views: 2950,
      likes: 94,
      comments: 21,
      trending: false,
      createdAt: '2 weeks ago',
      image: 'https://images.unsplash.com/photo-1555209183-8facf96a4349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBzZXR1cHxlbnwxfHx8fDE3NjQxNTE4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => project.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Explore Projects</h1>
          <p className="text-text-secondary">
            Discover amazing projects from developers around the world
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-surface border-dev-charcoal focus:border-dev-light"
              />
            </div>
            <Button
              variant="outline"
              className="border-dev-charcoal hover:border-dev-light lg:w-auto"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Tags Filter */}
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Badge
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`cursor-pointer font-mono text-xs transition-all ${
                  selectedTags.includes(tag)
                    ? 'bg-dev-light text-dev-dark border-dev-light'
                    : 'bg-dev-grey/20 border-dev-grey text-dev-light hover:bg-dev-grey/30'
                }`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-surface border border-dev-charcoal mb-6">
            <TabsTrigger value="all" className="data-[state=active]:bg-dev-grey text-gray-400">
              <Code2 className="h-4 w-4 mr-2" />
              All Projects
            </TabsTrigger>
            <TabsTrigger value="trending" className="data-[state=active]:bg-dev-grey text-gray-400">
              <TrendingUp className="h-4 w-4 mr-2" />
              Trending
            </TabsTrigger>
            <TabsTrigger value="recent" className="data-[state=active]:bg-dev-grey text-gray-400">
              <Clock className="h-4 w-4 mr-2" />
              Recent
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-6">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trending" className="space-y-4">
            <div className="grid gap-6">
              {filteredProjects.filter(p => p.trending).map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="space-y-4">
            <div className="grid gap-6">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredProjects.length === 0 && (
          <Card className="bg-surface border-dev-charcoal p-12 text-center">
            <Code2 className="h-16 w-16 mx-auto mb-4 text-text-muted" />
            <h3 className="mb-2">No projects found</h3>
            <p className="text-text-secondary">Try adjusting your search or filters</p>
          </Card>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const [liked, setLiked] = useState(false);

  return (
    <Card className="bg-surface border-dev-charcoal hover:border-dev-light transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Project Icon */}
          <div className="flex-shrink-0">
            <div className="h-20 w-20 lg:h-24 lg:w-24 rounded-lg overflow-hidden">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="flex-grow">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-grow">
                <Link to={`/project/${project.id}`}>
                  <h3 className="mb-1 group-hover:text-dev-light transition-colors cursor-pointer">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-sm text-text-secondary mb-2">
                  by <span className="text-dev-light hover:underline cursor-pointer">{project.author}</span> {project.authorUsername}
                </p>
              </div>
              {project.trending && (
                <Badge className="bg-warning/20 border-warning text-warning flex-shrink-0 ml-4">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Trending
                </Badge>
              )}
            </div>

            <p className="text-text-secondary mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-dev-grey/20 border-dev-grey text-dev-light font-mono text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-6 text-sm text-text-secondary">
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {project.views}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  {project.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  {project.comments}
                </span>
                <span className="text-text-muted">• {project.createdAt}</span>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLiked(!liked)}
                  className={`border-dev-charcoal transition-colors ${
                    liked ? 'bg-error/20 border-error text-error' : 'hover:border-dev-light text-gray-400'
                  }`}
                >
                  <Heart className={`h-4 w-4 mr-2 ${liked ? 'fill-current' : ''}`} />
                  {liked ? 'Liked' : 'Like'}
                </Button>
                <Link to={`/project/${project.id}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-dev-charcoal hover:border-dev-light text-gray-400"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}