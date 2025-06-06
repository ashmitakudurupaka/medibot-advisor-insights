
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import PersonalInfo from "@/components/cv/PersonalInfo";
import Experience from "@/components/cv/Experience";
import Education from "@/components/cv/Education";
import Skills from "@/components/cv/Skills";
import Projects from "@/components/cv/Projects";
import Contact from "@/components/cv/Contact";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  John Doe
                </h1>
                <p className="text-lg text-slate-600">Full Stack Developer</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </Button>
              <Button className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Contact Me</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="about" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>About</span>
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center space-x-2">
              <span>Experience</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center space-x-2">
              <span>Education</span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center space-x-2">
              <span>Skills</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center space-x-2">
              <span>Projects</span>
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <PersonalInfo />
          </TabsContent>

          <TabsContent value="experience">
            <Experience />
          </TabsContent>

          <TabsContent value="education">
            <Education />
          </TabsContent>

          <TabsContent value="skills">
            <Skills />
          </TabsContent>

          <TabsContent value="projects">
            <Projects />
          </TabsContent>

          <TabsContent value="contact">
            <Contact />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-slate-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <p className="text-slate-600">© 2024 John Doe. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
