
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Globe } from "lucide-react";

const PersonalInfo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-white/70 backdrop-blur-sm border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>About Me</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            Passionate full-stack developer with 5+ years of experience building scalable web applications. 
            I specialize in React, Node.js, and cloud technologies. I love creating user-centric solutions 
            that make a real impact on people's lives.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-slate-600">
              <MapPin className="h-4 w-4" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-600">
              <Calendar className="h-4 w-4" />
              <span>Available for new opportunities</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-600">
              <Globe className="h-4 w-4" />
              <span>Open to remote work</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-800">Interests</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Machine Learning</Badge>
              <Badge variant="secondary">Open Source</Badge>
              <Badge variant="secondary">UI/UX Design</Badge>
              <Badge variant="secondary">Photography</Badge>
              <Badge variant="secondary">Travel</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/70 backdrop-blur-sm border-slate-200">
        <CardHeader>
          <CardTitle>Quick Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">5+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">50+</div>
              <div className="text-sm text-slate-600">Projects Completed</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">15+</div>
              <div className="text-sm text-slate-600">Technologies</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">3</div>
              <div className="text-sm text-slate-600">Certifications</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-800">Languages</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-600">English</span>
                <span className="text-sm text-slate-500">Native</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Spanish</span>
                <span className="text-sm text-slate-500">Conversational</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">French</span>
                <span className="text-sm text-slate-500">Basic</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalInfo;
