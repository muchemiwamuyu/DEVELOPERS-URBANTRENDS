import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Eye, Heart, MessageSquare, Github, Globe, Calendar, User, ArrowLeft, Share2, Bookmark, Code2 } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Avatar } from './ui/avatar';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProject() {
      try {
        const res = await fetch(
          `https://urbantrends-backend-production-fde8.up.railway.app/developers/project/${id}`
        );

        if (!res.ok) throw new Error("Failed to fetch project");

        const data = await res.json();

        const p = data.data;

        setProject({
          title: p.title,
          description: p.longDescription,
          shortDescription: p.shortDescription,
          tags: p.tags || [],
          image: p.imageUrl,
          stats: {
            stars: 0,
            views: 0,
            likes: 0,
            comments: 0,
          },
          links: {
            github: p.githubRepo,
            live: p.liveUrl,
          },
          author: {
            avatar: "UT",
            name: "UrbanTrends",
            username: "@urbantrends",
            bio: "Developer community by UrbanTrends.",
          },
          createdAt: new Date(p.createdAt).toDateString(),
          updatedAt: new Date(p.updatedAt).toDateString(),
        });

        setLoading(false);
      } catch (err) {
        console.log(err);
        setError("Could not load project");
        setLoading(false);
      }
    }

    fetchProject();
  }, [id]);


  return (
    <>
      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/projects">
          <Button variant="ghost" className="mb-6 hover:bg-surface-hover text-text-secondary hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Header */}
            <Card className="bg-surface border-dev-charcoal p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-grow">
                  <h1 className="mb-3 text-gray-500">{project?.title}</h1>
                  <p className="text-text-secondary text-lg mb-6">{project?.description}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project?.tags?.map((tag, idx) => (
                  <Badge key={idx} className="bg-dev-grey/20 border-dev-grey text-dev-light font-mono">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-6 text-text-secondary">
                <span className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  {project?.stats?.stars}
                </span>
                <span className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  {project?.stats?.views}
                </span>
                <span className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  {project?.stats?.likes}
                </span>
                <span className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  {project?.stats?.comments}
                </span>
              </div>
            </Card>

            {/* Project Image */}
            <Card className="bg-surface border-dev-charcoal overflow-hidden">
              <div className="h-96 relative overflow-hidden">
                <ImageWithFallback
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dev-dark/60 to-transparent" />
              </div>
            </Card>

            {/* Description */}
            <Card className="bg-surface border-dev-charcoal p-8">
              <h3 className="mb-4">About this project</h3>
              <div className="text-text-secondary whitespace-pre-line leading-relaxed">
                {project?.description}
              </div>
            </Card>

            {/* Links */}
            <Card className="bg-surface border-dev-charcoal p-6">
              <h4 className="mb-4">Project Links</h4>
              <div className="flex flex-wrap gap-3">
                {project?.links?.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-dev-grey hover:bg-dev-grey/80">
                      <Github className="h-4 w-4 mr-2" />
                      View on GitHub
                    </Button>
                  </a>
                )}
                {project?.links?.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-dev-charcoal hover:border-dev-light text-gray-500">
                      <Globe className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author Info */}
            <Card className="bg-surface border-dev-charcoal p-6">
              <h4 className="mb-4 text-white">Created by</h4>
              <div className="flex items-start gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-dev-light to-dev-grey flex items-center justify-center flex-shrink-0">
                  {project?.author?.avatar}
                </div>
                <div>
                  <p className="font-medium mb-1">{project?.author?.name}</p>
                  <p className="text-sm text-text-secondary">{project?.author?.username}</p>
                </div>
              </div>
              <p className="text-sm text-text-secondary mb-4">{project?.author?.bio}</p>
              <Button variant="outline" className="w-full border-dev-charcoal hover:border-dev-light text-gray-400">
                View Profile
              </Button>
            </Card>

            {/* Project Info */}
            <Card className="bg-surface border-dev-charcoal p-6">
              <h4 className="mb-4 text-white">Project Info</h4>
              <div className="space-y-3 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Created {project?.createdAt}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Updated {project?.updatedAt}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

    </>
  );
}