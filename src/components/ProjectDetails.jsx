import { useState } from 'react';
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
  const [liked, setLiked] = useState(false);
  const [starred, setStarred] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [commentText, setCommentText] = useState('');

  const project = {
    id: 1,
    title: 'AI Code Assistant',
    description: 'VSCode extension that uses AI to help write better code with intelligent suggestions and refactoring.',
    longDescription: `This AI-powered code assistant integrates seamlessly with Visual Studio Code to enhance your coding experience. 
    
Key Features:
• Intelligent code completions based on context
• Automatic code refactoring suggestions
• Bug detection and fixes
• Code documentation generation
• Multi-language support

The extension uses advanced machine learning models to understand your codebase and provide contextually relevant suggestions. It learns from your coding patterns and adapts to your style over time.

Perfect for developers who want to:
- Write code faster with smart suggestions
- Maintain consistent code quality
- Reduce debugging time
- Learn best practices while coding`,
    author: {
      name: 'Sarah Chen',
      username: '@sarahchen',
      avatar: 'SC',
      bio: 'AI/ML Engineer | VSCode Extension Developer',
    },
    tags: ['TypeScript', 'AI', 'VSCode', 'Machine Learning'],
    stats: {
      stars: 342,
      views: 5234,
      likes: 189,
      comments: 45,
    },
    links: {
      github: 'https://github.com/sarahchen/ai-code-assistant',
      live: 'https://marketplace.visualstudio.com/ai-assistant',
    },
    createdAt: '2 days ago',
    updatedAt: 'Yesterday',
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQxOTY5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  };

  const comments = [
    {
      id: 1,
      author: 'Marcus Johnson',
      avatar: 'MJ',
      username: '@marcusj',
      text: 'This is amazing! Been using it for a week and it has significantly improved my productivity. The AI suggestions are spot on!',
      time: '3 hours ago',
      likes: 12,
    },
    {
      id: 2,
      author: 'Emily Rodriguez',
      avatar: 'ER',
      username: '@emilydev',
      text: 'Great work! Would love to see support for more languages. Any plans for Python?',
      time: '1 day ago',
      likes: 8,
    },
    {
      id: 3,
      author: 'David Kim',
      avatar: 'DK',
      username: '@davidk',
      text: 'The code refactoring feature is a game changer. Saved me hours of manual work!',
      time: '2 days ago',
      likes: 15,
    },
  ];

  const relatedProjects = [
    { id: 2, title: 'Code Snippet Manager', author: 'Alex Brown', stars: 156 },
    { id: 3, title: 'AI Documentation Generator', author: 'Lisa Wang', stars: 234 },
    { id: 4, title: 'Smart Code Review Tool', author: 'Tom Wilson', stars: 189 },
  ];

  const handleComment = () => {
    if (commentText.trim()) {
      console.log('Comment:', commentText);
      setCommentText('');
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 lg:px-8">
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
                  <h1 className="mb-3">{project.title}</h1>
                  <p className="text-text-secondary text-lg mb-6">{project.description}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-dev-grey/20 border-dev-grey text-dev-light font-mono"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-6 text-text-secondary">
                <span className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  {project.stats.stars}
                </span>
                <span className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  {project.stats.views}
                </span>
                <span className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  {project.stats.likes}
                </span>
                <span className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  {project.stats.comments}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => setStarred(!starred)}
                  className={starred ? 'bg-warning text-dev-dark hover:bg-warning/80' : 'bg-dev-light text-dev-dark hover:bg-dev-light/80'}
                >
                  <Star className={`h-4 w-4 mr-2 ${starred ? 'fill-current' : ''}`} />
                  {starred ? 'Starred' : 'Star'}
                </Button>
                <Button
                  onClick={() => setLiked(!liked)}
                  variant="outline"
                  className={`border-dev-charcoal ${liked ? 'bg-error/20 border-error text-error' : 'hover:border-dev-light'}`}
                >
                  <Heart className={`h-4 w-4 mr-2 ${liked ? 'fill-current' : ''}`} />
                  {liked ? 'Liked' : 'Like'}
                </Button>
                <Button
                  onClick={() => setBookmarked(!bookmarked)}
                  variant="outline"
                  className={`border-dev-charcoal ${bookmarked ? 'bg-info/20 border-info text-info' : 'hover:border-dev-light'}`}
                >
                  <Bookmark className={`h-4 w-4 mr-2 ${bookmarked ? 'fill-current' : ''}`} />
                  Save
                </Button>
                <Button variant="outline" className="border-dev-charcoal hover:border-dev-light">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </Card>

            {/* Project Image */}
            <Card className="bg-surface border-dev-charcoal overflow-hidden">
              <div className="h-96 relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dev-dark/60 to-transparent" />
              </div>
            </Card>

            {/* Description */}
            <Card className="bg-surface border-dev-charcoal p-8">
              <h3 className="mb-4">About this project</h3>
              <div className="text-text-secondary whitespace-pre-line leading-relaxed">
                {project.longDescription}
              </div>
            </Card>

            {/* Links */}
            <Card className="bg-surface border-dev-charcoal p-6">
              <h4 className="mb-4">Project Links</h4>
              <div className="flex flex-wrap gap-3">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-dev-grey hover:bg-dev-grey/80">
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                  </Button>
                </a>
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-dev-charcoal hover:border-dev-light">
                    <Globe className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </a>
              </div>
            </Card>

            {/* Comments Section */}
            <Card className="bg-surface border-dev-charcoal p-8">
              <h3 className="mb-6">Comments ({comments.length})</h3>

              {/* Add Comment */}
              <div className="mb-8">
                <Textarea
                  placeholder="Share your thoughts..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="bg-background border-dev-charcoal focus:border-dev-light mb-3"
                />
                <Button
                  onClick={handleComment}
                  className="bg-dev-light hover:bg-dev-light/80 text-dev-dark"
                >
                  Post Comment
                </Button>
              </div>

              <Separator className="mb-6 bg-dev-charcoal" />

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-dev-light to-dev-grey flex items-center justify-center flex-shrink-0">
                      {comment.avatar}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{comment.author}</span>
                        <span className="text-sm text-text-muted">{comment.username}</span>
                        <span className="text-sm text-text-muted">• {comment.time}</span>
                      </div>
                      <p className="text-text-secondary mb-3">{comment.text}</p>
                      <div className="flex items-center gap-4">
                        <button className="text-sm text-text-muted hover:text-dev-light flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {comment.likes}
                        </button>
                        <button className="text-sm text-text-muted hover:text-dev-light">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author Info */}
            <Card className="bg-surface border-dev-charcoal p-6">
              <h4 className="mb-4">Created by</h4>
              <div className="flex items-start gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-dev-light to-dev-grey flex items-center justify-center flex-shrink-0">
                  {project.author.avatar}
                </div>
                <div>
                  <p className="font-medium mb-1">{project.author.name}</p>
                  <p className="text-sm text-text-secondary">{project.author.username}</p>
                </div>
              </div>
              <p className="text-sm text-text-secondary mb-4">{project.author.bio}</p>
              <Button variant="outline" className="w-full border-dev-charcoal hover:border-dev-light">
                View Profile
              </Button>
            </Card>

            {/* Project Info */}
            <Card className="bg-surface border-dev-charcoal p-6">
              <h4 className="mb-4">Project Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-text-secondary">
                  <Calendar className="h-4 w-4" />
                  <span>Created {project.createdAt}</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <Calendar className="h-4 w-4" />
                  <span>Updated {project.updatedAt}</span>
                </div>
              </div>
            </Card>

            {/* Related Projects */}
            <Card className="bg-surface border-dev-charcoal p-6">
              <h4 className="mb-4">Related Projects</h4>
              <div className="space-y-3">
                {relatedProjects.map((related) => (
                  <Link
                    key={related.id}
                    to={`/project/${related.id}`}
                    className="block p-3 rounded-lg hover:bg-background transition-colors"
                  >
                    <p className="font-medium mb-1 hover:text-dev-light transition-colors">
                      {related.title}
                    </p>
                    <div className="flex items-center justify-between text-sm text-text-secondary">
                      <span>by {related.author}</span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {related.stars}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}