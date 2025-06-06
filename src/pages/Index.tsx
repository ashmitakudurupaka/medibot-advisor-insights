
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Mail, Linkedin, User, Bot, BarChart3, GitCompare } from "lucide-react";
import PersonalInfo from "@/components/cv/PersonalInfo";
import Experience from "@/components/cv/Experience";
import Education from "@/components/cv/Education";
import Skills from "@/components/cv/Skills";
import Projects from "@/components/cv/Projects";
import Contact from "@/components/cv/Contact";
import ChatInterface from "@/components/ChatInterface";
import ModelComparison from "@/components/ModelComparison";
import PerformanceMetrics from "@/components/PerformanceMetrics";

const Index = () => {
  const [activeView, setActiveView] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">MedBot AI</h1>
                <p className="text-sm text-slate-600">Medical AI Assistant Portfolio</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-1">
              <Button
                variant={activeView === "overview" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveView("overview")}
                className="flex items-center space-x-2"
              >
                <Bot className="h-4 w-4" />
                <span>Project Overview</span>
              </Button>
              <Button
                variant={activeView === "demo" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveView("demo")}
                className="flex items-center space-x-2"
              >
                <Bot className="h-4 w-4" />
                <span>Live Demo</span>
              </Button>
              <Button
                variant={activeView === "analysis" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveView("analysis")}
                className="flex items-center space-x-2"
              >
                <BarChart3 className="h-4 w-4" />
                <span>Analysis</span>
              </Button>
              <Button
                variant={activeView === "comparison" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveView("comparison")}
                className="flex items-center space-x-2"
              >
                <GitCompare className="h-4 w-4" />
                <span>Models</span>
              </Button>
              <Button
                variant={activeView === "cv" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveView("cv")}
                className="flex items-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span>Developer CV</span>
              </Button>
            </nav>

            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4" />
                <span className="hidden sm:inline">Deploy</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeView === "overview" && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">MedBot AI</h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-6">
                  Advanced Medical AI Assistant with Fine-Tuned Models
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge className="bg-white/20 text-white text-sm px-3 py-1">
                    Prompt Tuning
                  </Badge>
                  <Badge className="bg-white/20 text-white text-sm px-3 py-1">
                    PEFT LoRA
                  </Badge>
                  <Badge className="bg-white/20 text-white text-sm px-3 py-1">
                    QLoRA
                  </Badge>
                  <Badge className="bg-white/20 text-white text-sm px-3 py-1">
                    Medical NLP
                  </Badge>
                </div>
              </div>
            </div>

            {/* Project Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bot className="h-5 w-5 text-blue-600" />
                    <span>AI Chat Interface</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Interactive medical consultation interface with real-time AI responses and medical-specific formatting.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GitCompare className="h-5 w-5 text-green-600" />
                    <span>Model Comparison</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Comprehensive comparison of three fine-tuning approaches with detailed performance metrics and trade-offs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                    <span>Performance Analytics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Advanced analytics dashboard with ROUGE metrics, training curves, and medical accuracy assessments.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Technical Highlights */}
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Technical Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Fine-Tuning Approaches</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1.5 text-xs">●</span>
                        <span className="text-slate-700"><strong>Prompt Tuning:</strong> Lightweight parameter updates through soft prompts</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1.5 text-xs">●</span>
                        <span className="text-slate-700"><strong>PEFT LoRA:</strong> Low-rank adaptation with parameter-efficient fine-tuning</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1.5 text-xs">●</span>
                        <span className="text-slate-700"><strong>QLoRA:</strong> Quantized LoRA with 8-bit precision optimization</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Key Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "TypeScript", "Tailwind CSS", "Recharts", "Shadcn/ui", "Medical NLP", "ROUGE Metrics", "WebGPU"].map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-slate-50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => setActiveView("demo")} className="flex items-center space-x-2">
                <Bot className="h-4 w-4" />
                <span>Try Live Demo</span>
              </Button>
              <Button variant="outline" onClick={() => setActiveView("analysis")} className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span>View Analytics</span>
              </Button>
              <Button variant="outline" onClick={() => setActiveView("comparison")} className="flex items-center space-x-2">
                <GitCompare className="h-4 w-4" />
                <span>Compare Models</span>
              </Button>
            </div>
          </div>
        )}

        {activeView === "demo" && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">MedBot AI Demo</h2>
              <p className="text-slate-600">Interact with our fine-tuned medical AI models</p>
            </div>
            <ChatInterface />
          </div>
        )}

        {activeView === "analysis" && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Performance Analysis</h2>
              <p className="text-slate-600">Detailed metrics and training analytics</p>
            </div>
            <PerformanceMetrics />
          </div>
        )}

        {activeView === "comparison" && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Model Comparison</h2>
              <p className="text-slate-600">Compare fine-tuning approaches and performance</p>
            </div>
            <ModelComparison />
          </div>
        )}

        {activeView === "cv" && (
          <div className="space-y-8">
            {/* CV Header */}
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-slate-800 mb-2">John Doe</h1>
              <p className="text-xl text-slate-600 mb-4">AI Research Engineer & Medical NLP Specialist</p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>john.doe@email.com</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <LinkedIn className="h-4 w-4" />
                  <span>LinkedIn</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </Button>
              </div>
            </div>

            {/* CV Tabs */}
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-6 bg-white/70 backdrop-blur-sm">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-6">
                <PersonalInfo />
              </TabsContent>

              <TabsContent value="experience" className="mt-6">
                <Experience />
              </TabsContent>

              <TabsContent value="education" className="mt-6">
                <Education />
              </TabsContent>

              <TabsContent value="skills" className="mt-6">
                <Skills />
              </TabsContent>

              <TabsContent value="projects" className="mt-6">
                <Projects />
              </TabsContent>

              <TabsContent value="contact" className="mt-6">
                <Contact />
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-slate-600">
              © 2024 MedBot AI - Medical AI Assistant Portfolio
            </p>
            <p className="text-sm text-slate-500 mt-2">
              Built with React, TypeScript, and advanced AI fine-tuning techniques
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
