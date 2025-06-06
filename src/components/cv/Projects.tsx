
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built for a client serving 10,000+ customers.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      features: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Advanced search and filtering",
        "Mobile-responsive design"
      ],
      github: "https://github.com/johndoe/ecommerce-platform",
      demo: "https://demo-ecommerce.com",
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management SaaS",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "Docker"],
      features: [
        "Real-time collaboration",
        "Kanban board interface",
        "Time tracking",
        "Advanced reporting"
      ],
      github: "https://github.com/johndoe/task-manager",
      demo: "https://taskmanager-demo.com",
      status: "Completed"
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "Data visualization platform that aggregates weather data from multiple APIs and provides interactive charts and forecasting.",
      image: "/placeholder.svg",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      features: [
        "Interactive data visualizations",
        "Real-time weather updates",
        "Historical data analysis",
        "Predictive forecasting"
      ],
      github: "https://github.com/johndoe/weather-dashboard",
      demo: "https://weather-analytics.com",
      status: "Completed"
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "Machine learning powered content generation tool that helps users create blog posts, social media content, and marketing copy.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "Vercel"],
      features: [
        "AI-powered content generation",
        "Multiple content types",
        "SEO optimization",
        "Team collaboration"
      ],
      github: "https://github.com/johndoe/ai-content-generator",
      demo: "https://ai-content-gen.com",
      status: "In Progress"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-50 text-green-700 border-green-200";
      case "In Progress":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Planning":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Featured Projects</h2>
        <p className="text-slate-600">Some of my recent work and side projects</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="bg-white/70 backdrop-blur-sm border-slate-200 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <Globe className="h-12 w-12 text-slate-400" />
            </div>
            
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg text-slate-800">{project.title}</CardTitle>
                <Badge variant="outline" className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">{project.description}</p>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Key Features</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1.5 text-xs">●</span>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="bg-slate-50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-3 pt-2">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </Button>
                <Button size="sm" className="flex items-center space-x-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* GitHub Stats */}
      <Card className="bg-white/70 backdrop-blur-sm border-slate-200">
        <CardHeader>
          <CardTitle className="text-center flex items-center justify-center space-x-2">
            <Github className="h-5 w-5" />
            <span>GitHub Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">150+</div>
              <div className="text-sm text-slate-600">Repositories</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-slate-600">Commits</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-600">25+</div>
              <div className="text-sm text-slate-600">Pull Requests</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-orange-600">50+</div>
              <div className="text-sm text-slate-600">Stars</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects;
