
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Cloud, Palette, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      icon: Code,
      color: "blue",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      id: 2,
      title: "Backend Development",
      icon: Database,
      color: "green",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "Django", level: 75 },
        { name: "REST APIs", level: 95 },
        { name: "GraphQL", level: 80 }
      ]
    },
    {
      id: 3,
      title: "Database & Cloud",
      icon: Cloud,
      color: "purple",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "AWS", level: 85 },
        { name: "Google Cloud", level: 75 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 }
      ]
    },
    {
      id: 4,
      title: "Design & UX",
      icon: Palette,
      color: "pink",
      skills: [
        { name: "Figma", level: 80 },
        { name: "Adobe XD", level: 75 },
        { name: "User Research", level: 70 },
        { name: "Prototyping", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "Accessibility", level: 85 }
      ]
    },
    {
      id: 5,
      title: "Tools & Workflow",
      icon: Wrench,
      color: "orange",
      skills: [
        { name: "Git", level: 95 },
        { name: "Jest", level: 85 },
        { name: "Webpack", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "Agile/Scrum", level: 90 },
        { name: "Code Review", level: 90 }
      ]
    },
    {
      id: 6,
      title: "Soft Skills",
      icon: Users,
      color: "teal",
      skills: [
        { name: "Team Leadership", level: 85 },
        { name: "Communication", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "Mentoring", level: 80 },
        { name: "Project Management", level: 85 },
        { name: "Client Relations", level: 90 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      green: "bg-green-50 border-green-200 text-green-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700",
      pink: "bg-pink-50 border-pink-200 text-pink-700",
      orange: "bg-orange-50 border-orange-200 text-orange-700",
      teal: "bg-teal-50 border-teal-200 text-teal-700"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Skills & Expertise</h2>
        <p className="text-slate-600">Technologies and competencies I work with</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Card key={category.id} className="bg-white/70 backdrop-blur-sm border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${getColorClasses(category.color)}`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <span className="text-slate-800">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Technology Stack Overview */}
      <Card className="bg-white/70 backdrop-blur-sm border-slate-200">
        <CardHeader>
          <CardTitle className="text-center">Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Most Comfortable With</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-600">React</Badge>
                <Badge className="bg-green-600">Node.js</Badge>
                <Badge className="bg-blue-500">TypeScript</Badge>
                <Badge className="bg-purple-600">PostgreSQL</Badge>
                <Badge className="bg-orange-500">AWS</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Currently Learning</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Rust</Badge>
                <Badge variant="outline">Machine Learning</Badge>
                <Badge variant="outline">Web3</Badge>
                <Badge variant="outline">Microservices</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills;
