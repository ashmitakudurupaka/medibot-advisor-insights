
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      period: "2015 - 2019",
      gpa: "3.8/4.0",
      description: "Focused on software engineering, algorithms, and data structures. Active member of the Computer Science Society.",
      coursework: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems", "Machine Learning", "Web Development"]
    },
    {
      id: 2,
      degree: "Full Stack Web Development Bootcamp",
      school: "General Assembly",
      period: "2019",
      description: "Intensive 12-week program covering modern web development technologies and practices.",
      coursework: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Git"]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-DEV-2023-001"
    },
    {
      id: 2,
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PRO-2022-456"
    },
    {
      id: 3,
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2021",
      credentialId: "CKA-2021-789"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Education & Certifications</h2>
        <p className="text-slate-600">My academic background and continuous learning journey</p>
      </div>

      {/* Education Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
          <GraduationCap className="h-5 w-5" />
          <span>Education</span>
        </h3>
        
        {education.map((edu) => (
          <Card key={edu.id} className="bg-white/70 backdrop-blur-sm border-slate-200">
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                <div>
                  <CardTitle className="text-lg text-slate-800">{edu.degree}</CardTitle>
                  <div className="flex items-center space-x-2 text-slate-600 mt-1">
                    <span className="font-medium">{edu.school}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <div className="flex items-center space-x-2 text-slate-500">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                  {edu.gpa && (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      GPA: {edu.gpa}
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">{edu.description}</p>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center space-x-1">
                  <BookOpen className="h-4 w-4" />
                  <span>Relevant Coursework</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, idx) => (
                    <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
          <Award className="h-5 w-5" />
          <span>Certifications</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <Card key={cert.id} className="bg-white/70 backdrop-blur-sm border-slate-200">
              <CardContent className="p-6">
                <div className="text-center space-y-3">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">{cert.name}</h4>
                    <p className="text-sm text-slate-600">{cert.issuer}</p>
                    <p className="text-sm text-slate-500">Issued: {cert.date}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    ID: {cert.credentialId}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
