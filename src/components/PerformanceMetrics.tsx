import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { TrendingUp, Clock, Database, Zap, Target, Shield } from "lucide-react";

interface MedicalMetrics {
  precision: number;
  recall: number;
  f1: number;
}

interface MedicalCategory {
  category: string;
  promptTuning: MedicalMetrics;
  peftLora: MedicalMetrics;
  qlora: MedicalMetrics;
}

const PerformanceMetrics = () => {
  const trainingData = [
    { epoch: 1, promptTuning: 2.8, peftLora: 2.5, qlora: 2.3 },
    { epoch: 2, promptTuning: 2.1, peftLora: 1.9, qlora: 1.7 },
    { epoch: 3, promptTuning: 1.8, peftLora: 1.5, qlora: 1.3 },
    { epoch: 4, promptTuning: 1.6, peftLora: 1.2, qlora: 1.0 },
    { epoch: 5, promptTuning: 1.5, peftLora: 1.1, qlora: 0.9 },
  ];

  const performanceComparison = [
    { metric: "ROUGE-1", promptTuning: 42, peftLora: 58, qlora: 61 },
    { metric: "ROUGE-2", promptTuning: 28, peftLora: 41, qlora: 45 },
    { metric: "ROUGE-L", promptTuning: 38, peftLora: 52, qlora: 55 },
    { metric: "Latency", promptTuning: 95, peftLora: 70, qlora: 55 }, // Inverted for visualization
  ];

  const radarData = [
    { subject: "Accuracy", promptTuning: 70, peftLora: 85, qlora: 95 },
    { subject: "Speed", promptTuning: 95, peftLora: 75, qlora: 60 },
    { subject: "Memory Efficiency", promptTuning: 85, peftLora: 80, qlora: 95 },
    { subject: "Training Cost", promptTuning: 95, peftLora: 70, qlora: 60 },
    { subject: "Deployment Ease", promptTuning: 90, peftLora: 80, qlora: 70 },
    { subject: "Medical Accuracy", promptTuning: 65, peftLora: 80, qlora: 90 },
  ];

  const medicalMetrics: MedicalCategory[] = [
    {
      category: "Diagnostic Accuracy",
      promptTuning: { precision: 0.72, recall: 0.68, f1: 0.70 },
      peftLora: { precision: 0.84, recall: 0.81, f1: 0.82 },
      qlora: { precision: 0.89, recall: 0.86, f1: 0.87 }
    },
    {
      category: "Treatment Recommendations",
      promptTuning: { precision: 0.68, recall: 0.65, f1: 0.66 },
      peftLora: { precision: 0.79, recall: 0.77, f1: 0.78 },
      qlora: { precision: 0.85, recall: 0.83, f1: 0.84 }
    },
    {
      category: "Safety Compliance",
      promptTuning: { precision: 0.85, recall: 0.82, f1: 0.83 },
      peftLora: { precision: 0.92, recall: 0.90, f1: 0.91 },
      qlora: { precision: 0.95, recall: 0.93, f1: 0.94 }
    }
  ];

  return (
    <div className="space-y-6">
      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Best ROUGE-1</p>
                <p className="text-2xl font-bold text-green-600">61.2%</p>
                <p className="text-xs text-gray-500">QLoRA Model</p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Fastest Inference</p>
                <p className="text-2xl font-bold text-blue-600">120ms</p>
                <p className="text-xs text-gray-500">Prompt Tuning</p>
              </div>
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Smallest Model</p>
                <p className="text-2xl font-bold text-purple-600">3.8GB</p>
                <p className="text-xs text-gray-500">QLoRA</p>
              </div>
              <Database className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Safety Score</p>
                <p className="text-2xl font-bold text-red-600">94%</p>
                <p className="text-xs text-gray-500">Medical Compliance</p>
              </div>
              <Shield className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Charts */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="training" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="training">Training Loss</TabsTrigger>
              <TabsTrigger value="metrics">ROUGE Metrics</TabsTrigger>
              <TabsTrigger value="radar">Overall Comparison</TabsTrigger>
              <TabsTrigger value="medical">Medical Metrics</TabsTrigger>
            </TabsList>

            <TabsContent value="training" className="mt-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trainingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="epoch" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="promptTuning" stroke="#3B82F6" strokeWidth={2} name="Prompt Tuning" />
                    <Line type="monotone" dataKey="peftLora" stroke="#10B981" strokeWidth={2} name="PEFT LoRA" />
                    <Line type="monotone" dataKey="qlora" stroke="#8B5CF6" strokeWidth={2} name="QLoRA" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="metrics" className="mt-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceComparison}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="metric" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="promptTuning" fill="#3B82F6" name="Prompt Tuning" />
                    <Bar dataKey="peftLora" fill="#10B981" name="PEFT LoRA" />
                    <Bar dataKey="qlora" fill="#8B5CF6" name="QLoRA" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="radar" className="mt-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar name="Prompt Tuning" dataKey="promptTuning" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.1} />
                    <Radar name="PEFT LoRA" dataKey="peftLora" stroke="#10B981" fill="#10B981" fillOpacity={0.1} />
                    <Radar name="QLoRA" dataKey="qlora" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.1} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="medical" className="mt-6">
              <div className="space-y-6">
                {medicalMetrics.map((category, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4">
                        {(['promptTuning', 'peftLora', 'qlora'] as const).map((model) => {
                          const metrics = category[model];
                          return (
                            <div key={model} className="text-center p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-medium mb-3 capitalize">{model.replace(/([A-Z])/g, ' $1').trim()}</h4>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-sm">Precision:</span>
                                  <Badge variant="outline">{(metrics.precision * 100).toFixed(1)}%</Badge>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm">Recall:</span>
                                  <Badge variant="outline">{(metrics.recall * 100).toFixed(1)}%</Badge>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm">F1-Score:</span>
                                  <Badge variant="outline">{(metrics.f1 * 100).toFixed(1)}%</Badge>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Dataset Information */}
      <Card>
        <CardHeader>
          <CardTitle>Dataset & Training Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Dataset Composition</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Training Samples:</span>
                  <Badge>45,000</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Validation Samples:</span>
                  <Badge>5,000</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Test Samples:</span>
                  <Badge>10,000</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Medical Domains:</span>
                  <Badge>12</Badge>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Privacy & Compliance</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-sm">HIPAA Anonymization: ✓</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-sm">PII Removal: ✓</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Medical Guidelines: ✓</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Ethical Review: ✓</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceMetrics;
