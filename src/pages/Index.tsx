
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Activity, BarChart3, Shield, Clock, Brain } from "lucide-react";
import ChatInterface from "@/components/ChatInterface";
import ModelComparison from "@/components/ModelComparison";
import PerformanceMetrics from "@/components/PerformanceMetrics";

const Index = () => {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">MedAI Assistant</h1>
                <p className="text-sm text-gray-600">AI-Powered Medical Guidance System</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <Shield className="h-3 w-3 mr-1" />
                HIPAA Compliant
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                <Brain className="h-3 w-3 mr-1" />
                ML Research
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Medical Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Alert className="bg-amber-50 border-amber-200">
          <Shield className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-800">
            <strong>Important Medical Disclaimer:</strong> This AI system provides informational guidance only and does not replace professional medical diagnosis or treatment. Always consult with qualified healthcare providers for medical decisions.
          </AlertDescription>
        </Alert>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="chat" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>AI Consultation</span>
            </TabsTrigger>
            <TabsTrigger value="comparison" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Model Comparison</span>
            </TabsTrigger>
            <TabsTrigger value="metrics" className="flex items-center space-x-2">
              <Activity className="h-4 w-4" />
              <span>Performance Metrics</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat">
            <ChatInterface />
          </TabsContent>

          <TabsContent value="comparison">
            <ModelComparison />
          </TabsContent>

          <TabsContent value="metrics">
            <PerformanceMetrics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
