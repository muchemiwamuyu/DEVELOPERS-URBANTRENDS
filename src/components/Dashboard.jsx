import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, MapPin, Link2, Calendar, Star, Eye, Heart, MessageSquare, Plus, Edit, Github, Twitter, Linkedin } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Dashboard() {
  const [likedProjects] = useState([1, 3]);

  const userProfile = {
    name: 'Alex Thompson',
    username: '@alexdev',
    bio: 'Full-stack developer passionate about building innovative solutions. Open source contributor and tech enthusiast.',
    location: 'San Francisco, CA',
    website: 'alexthompson.dev',
    joinDate: 'January 2024',
    avatar: 'AT',
    followers: 1234,
    following: 567,
    projects: 12,
  };

  const userProjects = [
    {
      id: 1,
      title: 'React Dashboard Kit',
      description: 'A comprehensive dashboard template with 50+ components',
      tags: ['React', 'TypeScript', 'Tailwind'],
      stars: 156,
      views: 2340,
      likes: 89,
      comments: 23,
      createdAt: '2 weeks ago',
      image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NjQxMTc4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'API Testing Tool',
      description: 'Simple yet powerful REST API testing tool for developers',
      tags: ['Node.js', 'Express', 'MongoDB'],
      stars: 92,
      views: 1850,
      likes: 67,
      comments: 15,
      createdAt: '1 month ago',
      image: 'https://images.unsplash.com/photo-1603575448360-153f093fd0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBsYXB0b3AlMjBjb2RlfGVufDF8fHx8MTc2NDE0NjkzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Design System Library',
      description: 'Accessible component library built with React and Radix UI',
      tags: ['React', 'Radix', 'Storybook'],
      stars: 234,
      views: 3420,
      likes: 145,
      comments: 34,
      createdAt: '3 months ago',
      image: 'https://images.unsplash.com/photo-1515504846179-94ac6b34ebb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGRhcmslMjB0aGVtZXxlbnwxfHx8fDE3NjQyMzIwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const activities = [
    {
      id: 1,
      type: 'star',
      user: 'Sarah Chen',
      action: 'starred your project',
      project: 'React Dashboard Kit',
      time: '2 hours ago',
    },
    {
      id: 2,
      type: 'comment',
      user: 'Marcus Johnson',
      action: 'commented on',
      project: 'API Testing Tool',
      time: '5 hours ago',
    },
    {
      id: 3,
      type: 'follow',
      user: 'Emily Rodriguez',
      action: 'started following you',
      time: '1 day ago',
    },
    {
      id: 4,
      type: 'like',
      user: 'David Kim',
      action: 'liked your project',
      project: 'Design System Library',
      time: '2 days ago',
    },
  ];

  const stats = [
    { label: 'Total Views', value: userProjects.reduce((acc, p) => acc + p.views, 0), icon: Eye },
    { label: 'Total Stars', value: userProjects.reduce((acc, p) => acc + p.stars, 0), icon: Star },
    { label: 'Total Likes', value: userProjects.reduce((acc, p) => acc + p.likes, 0), icon: Heart },
    { label: 'Total Comments', value: userProjects.reduce((acc, p) => acc + p.comments, 0), icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Profile Header */}
        <Card className="bg-surface border-dev-charcoal mb-8 overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-dev-grey to-dev-charcoal" />
          <div className="px-6 lg:px-8 pb-8">
            <div className="flex flex-col lg:flex-row gap-6 -mt-16 lg:-mt-12">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="h-32 w-32 rounded-lg bg-gradient-to-br from-dev-light to-dev-grey flex items-center justify-center text-4xl border-4 border-surface">
                  {userProfile.avatar}
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-grow">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mt-4 lg:mt-6">
                  <div>
                    <h1 className="mb-1">{userProfile.name}</h1>
                    <p className="text-text-secondary mb-3">{userProfile.username}</p>
                    <p className="text-text-secondary mb-4 max-w-2xl">{userProfile.bio}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {userProfile.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Link2 className="h-4 w-4" />
                        <a href="#" className="text-dev-light hover:underline">{userProfile.website}</a>
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Joined {userProfile.joinDate}
                      </span>
                    </div>

                    <div className="flex gap-6 mt-4">
                      <button className="hover:text-dev-light transition-colors">
                        <Github className="h-5 w-5" />
                      </button>
                      <button className="hover:text-dev-light transition-colors">
                        <Twitter className="h-5 w-5" />
                      </button>
                      <button className="hover:text-dev-light transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <Link to="/settings">
                    <Button variant="outline" className="border-dev-charcoal hover:border-dev-light">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="flex gap-6 mt-6 pt-6 border-t border-dev-charcoal">
                  <div>
                    <span className="font-mono text-xl">{userProfile.projects}</span>
                    <span className="text-text-secondary ml-2">Projects</span>
                  </div>
                  <div>
                    <span className="font-mono text-xl">{userProfile.followers}</span>
                    <span className="text-text-secondary ml-2">Followers</span>
                  </div>
                  <div>
                    <span className="font-mono text-xl">{userProfile.following}</span>
                    <span className="text-text-secondary ml-2">Following</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Analytics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-surface border-dev-charcoal p-6">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="h-5 w-5 text-dev-light" />
              </div>
              <div className="font-mono text-2xl mb-1">{stat.value.toLocaleString()}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="bg-surface border border-dev-charcoal mb-6">
            <TabsTrigger value="projects" className="data-[state=active]:bg-dev-grey">
              My Projects
            </TabsTrigger>
            <TabsTrigger value="activity" className="data-[state=active]:bg-dev-grey">
              Activity
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3>Your Projects</h3>
              <Link to="/add-project">
                <Button className="bg-dev-light hover:bg-dev-light/80 text-dev-dark">
                  <Plus className="h-4 w-4 mr-2" />
                  New Project
                </Button>
              </Link>
            </div>

            <div className="grid gap-4">
              {userProjects.map((project) => (
                <Card
                  key={project.id}
                  className="bg-surface border-dev-charcoal hover:border-dev-light transition-all duration-300 overflow-hidden group"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Project Image */}
                    <div className="lg:w-48 h-48 lg:h-auto flex-shrink-0 relative overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-surface to-transparent opacity-50" />
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex-grow">
                      <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                        <div className="flex-grow">
                          <Link to={`/project/${project.id}`}>
                            <h4 className="mb-2 group-hover:text-dev-light transition-colors cursor-pointer">
                              {project.title}
                            </h4>
                          </Link>
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
                        </div>

                        <div className="flex lg:flex-col gap-2">
                          <Button
                            variant="outline"
                            className="border-dev-charcoal hover:border-dev-light flex-1 lg:flex-none"
                          >
                            <Edit className="h-4 w-4 lg:mr-2" />
                            <span className="hidden lg:inline">Edit</span>
                          </Button>
                          <Button
                            variant="outline"
                            className="border-dev-charcoal hover:border-error hover:text-error flex-1 lg:flex-none"
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <h3 className="mb-4">Recent Activity</h3>
            
            <div className="space-y-3">
              {activities.map((activity) => (
                <Card
                  key={activity.id}
                  className="bg-surface border-dev-charcoal hover:border-dev-light transition-colors p-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-dev-grey flex items-center justify-center flex-shrink-0">
                      <User className="h-5 w-5" />
                    </div>
                    <div className="flex-grow">
                      <p>
                        <span className="text-dev-light">{activity.user}</span>
                        {' '}<span className="text-text-secondary">{activity.action}</span>
                        {activity.project && (
                          <>
                            {' '}<span className="text-white">{activity.project}</span>
                          </>
                        )}
                      </p>
                      <p className="text-sm text-text-muted mt-1">{activity.time}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}