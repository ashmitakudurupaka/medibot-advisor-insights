
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Clock, Database, Zap, TrendingUp, TrendingDown } from "lucide-react";

const ModelComparison = () => {
  const models = [
    {
      id: "prompt-tuning",
      name: "Prompt Tuning",
      description: "Lightweight parameter updates through soft prompts",
      metrics: {
        rouge1: 0.42,
        rouge2: 0.28,
        rougeL: 0.38,
        perplexity: 15.2,
        latency: 120,
        modelSize: "7.1 GB",
        trainTime: "2.5 hrs"
      },
      pros: [
        "Minimal computational requirements",
        "Fast training and inference",
        "Maintains base model integrity",
        "Easy deployment"
      ],
      cons: [
        "Limited adaptation capability",
        "May struggle with complex medical queries",
        "Less domain-specific knowledge"
      ],
      color: "blue"
    },
    {
      id: "peft-lora",
      name: "PEFT LoRA",
      description: "Low-rank adaptation with parameter-efficient fine-tuning",
      metrics: {
        rouge1: 0.58,
        rouge2: 0.41,
        rougeL: 0.52,
        perplexity: 11.8,
        latency: 185,
        modelSize: "7.3 GB",
        trainTime: "6.2 hrs"
      },
      pros: [
        "Excellent performance-efficiency balance",
        "Strong medical domain adaptation",
        "Moderate resource requirements",
        "Good generalization"
      ],
      cons: [
        "Higher complexity than prompt tuning",
        "Longer training time",
        "Requires careful hyperparameter tuning"
      ],
      color: "green"
    },
    {
      id: "qlora",
      name: "QLoRA",
      description: "Quantized LoRA with 8-bit precision optimization",
      metrics: {
        rouge1: 0.61,
        rouge2: 0.45,
        rougeL: 0.55,
        perplexity: 10.3,
        latency: 245,
        modelSize: "3.8 GB",
        trainTime: "8.7 hrs"
      },
      pros: [
        "Best performance metrics",
        "Significantly reduced memory footprint",
        "Superior medical accuracy",
        "Cost-effective for deployment"
      ],
      cons: [
        "Longest training time",
        "Highest inference latency",
        "Complex quantization setup",
        "Potential precision loss"
      ],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      green: "bg-green-50 border-green-200 text-green-800",
      purple: "bg-purple-50 border-purple-200 text-purple-800"
    };
    return colors[color as keyof typeof colors];
  };

  const getBestModel = (metric: string) => {
    const values = models.map(m => {
      switch (metric) {
        case "rouge1":
        case "rouge2":
        case "rougeL":
          return m.metrics[metric as keyof typeof m.metrics] as number;
        case "perplexity":
        case "latency":
          return -(m.metrics[metric as keyof typeof m.metrics] as number); // Lower is better
        default:
          return 0;
      }
    });
    const maxIndex = values.indexOf(Math.max(...values));
    return models[maxIndex].id;
  };

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {models.map((model) => (
          <Card key={model.id} className={`border-l-4 ${getColorClasses(model.color)}`}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg">{model.name}</span>
                <Badge variant="outline" className={getColorClasses(model.color)}>
                  {model.color === "green" ? "Recommended" : 
                   model.color === "purple" ? "Best Performance" : "Fastest"}
                </Badge>
              </CardTitle>
              <p className="text-sm text-gray-600">{model.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">ROUGE-1</span>
                  <span className="text-sm">{(model.metrics.rouge1 * 100).toFixed(1)}%</span>
                </div>
                <Progress value={model.metrics.rouge1 * 100} className="h-2" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Model Size</span>
                  <span className="text-sm">{model.metrics.modelSize}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Training Time</span>
                  <span className="text-sm">{model.metrics.trainTime}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Performance Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="metrics" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="metrics">Performance Metrics</TabsTrigger>
              <TabsTrigger value="tradeoffs">Trade-offs Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="metrics" className="mt-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium">Metric</th>
                      {models.map((model) => (
                        <th key={model.id} className="text-center p-3 font-medium">
                          {model.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { key: "rouge1", label: "ROUGE-1", format: (v: number) => `${(v * 100).toFixed(1)}%` },
                      { key: "rouge2", label: "ROUGE-2", format: (v: number) => `${(v * 100).toFixed(1)}%` },
                      { key: "rougeL", label: "ROUGE-L", format: (v: number) => `${(v * 100).toFixed(1)}%` },
                      { key: "perplexity", label: "Perplexity", format: (v: number) => v.toFixed(1) },
                      { key: "latency", label: "Latency (ms)", format: (v: number) => v.toString() },
                      { key: "modelSize", label: "Model Size", format: (v: string) => v },
                      { key: "trainTime", label: "Training Time", format: (v: string) => v }
                    ].map((metric) => (
                      <tr key={metric.key} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{metric.label}</td>
                        {models.map((model) => {
                          const value = model.metrics[metric.key as keyof typeof model.metrics];
                          const isBest = getBestModel(metric.key) === model.id && typeof value === "number";
                          return (
                            <td key={model.id} className="text-center p-3">
                              <div className="flex items-center justify-center space-x-2">
                                <span>{metric.format(value as any)}</span>
                                {isBest && <CheckCircle className="h-4 w-4 text-green-600" />}
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="tradeoffs" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {models.map((model) => (
                  <Card key={model.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{model.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-green-700 mb-2 flex items-center">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            Advantages
                          </h4>
                          <ul className="space-y-1">
                            {model.pros.map((pro, index) => (
                              <li key={index} className="text-sm text-gray-600 flex items-start">
                                <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-red-700 mb-2 flex items-center">
                            <TrendingDown className="h-4 w-4 mr-1" />
                            Limitations
                          </h4>
                          <ul className="space-y-1">
                            {model.cons.map((con, index) => (
                              <li key={index} className="text-sm text-gray-600 flex items-start">
                                <span className="w-3 h-3 bg-red-200 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Recommendation */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800">Deployment Recommendation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Recommended Strategy:</strong> <Badge className="bg-green-100 text-green-800">PEFT LoRA</Badge>
            </p>
            <p className="mb-4">
              Based on the comparative analysis, PEFT LoRA offers the optimal balance between performance, resource efficiency, and deployment feasibility for medical applications:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Performance:</strong> Strong ROUGE scores (58.1% ROUGE-1) with reasonable perplexity (11.8)</li>
              <li><strong>Efficiency:</strong> Moderate training time (6.2 hours) and acceptable inference latency (185ms)</li>
              <li><strong>Deployment:</strong> Manageable model size (7.3 GB) suitable for cloud and edge deployment</li>
              <li><strong>Medical Accuracy:</strong> Good domain adaptation while maintaining safety guardrails</li>
            </ul>
            <p className="mt-4">
              For resource-constrained environments, consider QLoRA. For rapid prototyping, Prompt Tuning provides a good starting point.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModelComparison;
