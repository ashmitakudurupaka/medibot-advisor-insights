
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Lead development of customer-facing web applications serving 100K+ users. Mentor junior developers and drive technical architecture decisions.",
      achievements: [
        "Improved application performance by 40% through optimization",
        "Led team of 4 developers on major platform migration",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "Remote",
      description: "Built and maintained multiple client projects from concept to production. Worked directly with clients to understand requirements and deliver solutions.",
      achievements: [
        "Delivered 12+ projects on time and within budget",
        "Increased client retention rate by 25%",
        "Established coding standards and best practices"
      ],
      technologies: ["Vue.js", "Python", "MongoDB", "Google Cloud", "Kubernetes"]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "WebSolutions Ltd.",
      period: "2019 - 2020",
      location: "New York, NY",
      description: "Focused on creating responsive and accessible user interfaces. Collaborated with UX designers to implement pixel-perfect designs.",
      achievements: [
        "Reduced page load times by 50% across all projects",
        "Achieved 98% accessibility compliance score",
        "Created reusable component library used company-wide"
      ],
      technologies: ["React", "TypeScript", "Sass", "Jest", "Webpack"]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Professional Experience</h2>
        <p className="text-slate-600">My journey in software development</p>
      </div>
      
      {experiences.map((exp, index) => (
        <Card key={exp.id} className="bg-white/70 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
              <div>
                <CardTitle className="text-xl text-slate-800">{exp.title}</CardTitle>
                <div className="flex items-center space-x-2 text-slate-600 mt-1">
                  <Building className="h-4 w-4" />
                  <span className="font-medium">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-slate-500">
                <Calendar className="h-4 w-4" />
                <span>{exp.period}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">{exp.description}</p>
            
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Key Achievements</h4>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1.5 text-xs">●</span>
                    <span className="text-slate-600">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="bg-slate-50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Experience;
