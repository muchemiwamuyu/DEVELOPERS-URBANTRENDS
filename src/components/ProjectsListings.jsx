import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectsListing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const allTags = ['React', 'TypeScript', 'Node.js', 'Python', 'AI', 'Web3', 'Mobile', 'DevOps', 'Database', 'API'];

  // **FETCH PROJECTS**
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          'https://urbantrends-backend-production-fde8.up.railway.app/developers/projects'
        );

        const json = await res.json();
        if (json.success) {

          // 🔥 remove duplicates
          const unique = Array.from(
            new Map(json.data.map(item => [item._id, item])).values()
          );

          setProjects(unique);
        } else {
          console.error("Error fetching projects:", json);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);


  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  // **Filter based on search + tags**
  const filteredProjects = projects.filter(project => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some(tag =>
        project.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
      );

    return matchesSearch && matchesTags;
  });

  if (loading) return <p className="p-10 text-center">Loading projects...</p>;

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

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 opacity-50" />
            <Input
              placeholder="Search projects..."
              className="pl-10"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <Card key={project._id || project.title + Math.random()} className="p-4 hover:shadow-xl transition">
              <ImageWithFallback
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 rounded-md object-cover mb-4"
              />

              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{project.shortDescription}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags?.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>

              <Link to={`/project/${project._id}`}>
  <Button className="bg-dev-light hover:bg-dev-light/80 text-dev-dark">
    View More
  </Button>
</Link>

            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
