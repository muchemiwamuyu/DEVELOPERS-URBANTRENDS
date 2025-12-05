import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Trash2 } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import axios from "axios";

export function ProjectsListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const allTags = ["React", "TypeScript", "Node.js", "Python", "AI", "Web3", "Mobile", "DevOps", "Database", "API"];

  // Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          "https://urbantrends-backend-production-fde8.up.railway.app/developers/projects"
        );
        const data = res.data.success ? res.data.data : [];
        // Remove duplicates
        const unique = Array.from(new Map(data.map(item => [item._id, item])).values());
        setProjects(unique);
        setFilteredProjects(unique); // populate filteredProjects initially
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Filter projects based on search query and selected tags
  useEffect(() => {
    const filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTags = selectedTags.length === 0 || project.tags?.some(tag => selectedTags.includes(tag));
      return matchesSearch && matchesTags;
    });
    setFilteredProjects(filtered);
  }, [searchQuery, selectedTags, projects]);

  const toggleTag = tag => {
    setSelectedTags(prev => (prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]));
  };

  const handleDelete = async id => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      await axios.delete(`https://urbantrends-backend-production-fde8.up.railway.app/developers/project/${id}`);
      setProjects(prev => prev.filter(p => p._id !== id));
      setFilteredProjects(prev => prev.filter(p => p._id !== id));
    } catch (error) {
      console.error("Failed to delete project:", error);
    }
  };

  if (loading) return <p className="p-10 text-center">Loading projects...</p>;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Explore Projects</h1>
          <p className="text-text-secondary">Discover amazing projects from developers around the world</p>
        </div>

        {/* Search */}
        <div className="mb-4">
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

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allTags.map(tag => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className="cursor-pointer text-white"
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <Card key={project._id} className="p-4 hover:shadow-xl transition relative">
              {/* Delete button */}
              <button
                onClick={() => handleDelete(project._id)}
                className="absolute top-2 right-2 p-1 rounded-full hover:bg-red-600 transition-colors"
              >
                <Trash2 className="w-5 h-5 text-red-500 hover:text-white" />
              </button>

              <ImageWithFallback
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 rounded-md object-cover mb-4"
              />

              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{project.shortDescription}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags?.map(tag => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Link to={`/project/${project._id}`}>
                <Button className="bg-dev-light hover:bg-dev-light/80 text-dev-dark">View More</Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
