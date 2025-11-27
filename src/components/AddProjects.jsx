import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Link2, Github, Globe, Plus, X, Image as ImageIcon } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import axios from 'axios';

export function AddProject() {
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const [imagePreview, setImagePreview] = useState(null)
  const [tagInput, setTagInput] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    longDescription: '',
    githubUrl: '',
    liveUrl: '',
    category: '',
  });

  const suggestedTags = [
    'React', 'TypeScript', 'Node.js', 'Python', 'AI', 'Web3',
    'Mobile', 'DevOps', 'Database', 'API', 'Docker', 'AWS'
  ];

  const addTag = (tag) => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  // Optional: limit file size (5MB)
  if (file.size > 5 * 1024 * 1024) {
    alert("File is too large (max 5MB).");
    return;
  }

  // Set preview
  const reader = new FileReader();
  reader.onloadend = () => {
    setImagePreview(reader.result);
  };
  reader.readAsDataURL(file);

  // Set file in formData
  setFormData({ ...formData, image: file });
};


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Create FormData to handle file upload
    const data = new FormData();
    data.append("title", formData.title);
    data.append("shortDescription", formData.description);
    data.append("longDescription", formData.longDescription);
    data.append("category", formData.category);
    data.append("tags", JSON.stringify(tags)); // send tags as JSON string
    data.append("githubRepo", formData.githubUrl);
    data.append("liveUrl", formData.liveUrl);

    // Append image file if exists
    if (formData.image) {
      data.append("image", formData.image);
    }

    const response = await axios.post(
      "https://urbantrends-backend-production-fde8.up.railway.app/developers/create",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("Project created:", response.data);
    navigate("/dashboard");
  } catch (error) {
    console.error(
      "Failed to create project:",
      error.response?.data || error.message
    );
  }
};


  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Add New Project</h1>
          <p className="text-text-secondary">
            Share your project with the developer community
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Basic Information */}
          <Card className="bg-surface border-dev-charcoal p-6 mb-6">
            <h3 className="mb-6">Basic Information</h3>

            <div className="space-y-6">
              <div>
                <Label htmlFor="title" className="text-text-secondary mb-2 block">
                  Project Title *
                </Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Enter your project title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="bg-background border-dev-charcoal focus:border-dev-light text-white"
                  required
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-text-secondary mb-2 block">
                  Short Description *
                </Label>
                <Input
                  id="description"
                  type="text"
                  placeholder="A brief one-line description of your project"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-background border-dev-charcoal focus:border-dev-light text-white"
                  required
                />
                <p className="text-xs text-text-muted mt-2">
                  Maximum 150 characters
                </p>
              </div>

              <div>
                <Label htmlFor="longDescription" className="text-text-secondary mb-2 block">
                  Detailed Description *
                </Label>
                <Textarea
                  id="longDescription"
                  placeholder="Provide a detailed description of your project, including features, technologies used, and any other relevant information..."
                  value={formData.longDescription}
                  onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                  className="bg-background border-dev-charcoal focus:border-dev-light min-h-[200px] text-white"
                  required
                />
              </div>

              <div>
                <Label htmlFor="category" className="text-text-secondary mb-2 block">
                  Category *
                </Label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-dev-charcoal rounded-lg focus:border-dev-light focus:outline-none text-white"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="web">Web</option>
                  <option value="mobile">Mobile</option>
                  <option value="ai">AI</option>
                  <option value="devops">DevOps</option>
                  <option value="blockchain">Blockchain</option>
                  <option value="tools">Developer</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Tags */}
          <Card className="bg-surface border-dev-charcoal p-6 mb-6">
            <h3 className="mb-6">Tags</h3>

            <div className="space-y-4">
              <div>
                <Label htmlFor="tags" className="text-text-secondary mb-2 block">
                  Add Tags
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="tags"
                    type="text"
                    placeholder="Enter a tag and press Enter"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addTag(tagInput);
                      }
                    }}
                    className="bg-background border-dev-charcoal focus:border-dev-light"
                  />
                  <Button
                    type="button"
                    onClick={() => addTag(tagInput)}
                    className="bg-dev-grey hover:bg-dev-grey/80"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Selected Tags */}
              {tags.length > 0 && (
                <div>
                  <Label className="text-text-secondary mb-2 block">Selected Tags</Label>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-dev-light text-dev-dark font-mono text-xs pl-3 pr-1 py-1 flex items-center gap-1"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="h-4 w-4 rounded-full hover:bg-dev-dark/20 flex items-center justify-center"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Suggested Tags */}
              <div>
                <Label className="text-text-secondary mb-2 block">Suggested Tags</Label>
                <div className="flex flex-wrap gap-2">
                  {suggestedTags.filter(tag => !tags.includes(tag)).map((tag) => (
                    <Badge
                      key={tag}
                      onClick={() => addTag(tag)}
                      className="bg-dev-grey/20 border-dev-grey text-dev-light font-mono text-xs cursor-pointer hover:bg-dev-grey/30"
                    >
                      + {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Links */}
          <Card className="bg-surface border-dev-charcoal p-6 mb-6">
            <h3 className="mb-6">Project Links</h3>

            <div className="space-y-6">
              <div>
                <Label htmlFor="github" className="text-text-secondary mb-2 block flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub Repository
                </Label>
                <Input
                  id="github"
                  type="url"
                  placeholder="https://github.com/username/repo"
                  value={formData.githubUrl}
                  onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                  className="bg-background border-dev-charcoal focus:border-dev-light text-white"
                />
              </div>

              <div>
                <Label htmlFor="live" className="text-text-secondary mb-2 block flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Live Demo URL
                </Label>
                <Input
                  id="live"
                  type="url"
                  placeholder="https://your-project.com"
                  value={formData.liveUrl}
                  onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                  className="bg-background border-dev-charcoal focus:border-dev-light text-white"
                />
              </div>
            </div>
          </Card>

          {/* Project Images */}
<Card className="bg-surface border-dev-charcoal p-6 mb-6">
  <h3 className="mb-6">Project Images</h3>

  <div className="space-y-4">
    {/* clickable upload area */}
    <label
      htmlFor="project-image"
      className="border-2 border-dashed border-dev-charcoal rounded-lg p-12 text-center hover:border-dev-light transition-colors cursor-pointer group"
    >
      {imagePreview ? (
        <img
          src={imagePreview}
          alt="Preview"
          className="mx-auto rounded-lg max-h-64 object-cover"
        />
      ) : (
        <>
          <ImageIcon className="h-12 w-12 mx-auto mb-4 text-text-muted group-hover:text-dev-light transition-colors" />
          <p className="text-text-secondary mb-2">
            Click to upload or drag and drop
          </p>
          <p className="text-sm text-text-muted">
            PNG, JPG or GIF (max. 5MB)
          </p>
        </>
      )}
    </label>

    {/* hidden input */}
    <input
      id="project-image"
      type="file"
      accept="image/*"
      className="hidden"
      onChange={handleImageUpload}
    />

    <p className="text-xs text-text-muted">
      Add screenshots or images of your project to help others understand what it does.
    </p>
  </div>
</Card>



          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate(-1)}
              className="border-dev-charcoal hover:border-dev-light"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-dev-light hover:bg-dev-light/80 text-dev-dark"
            >
              Publish Project
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}