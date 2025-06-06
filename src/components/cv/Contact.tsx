
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Get In Touch</h2>
        <p className="text-slate-600">Let's discuss your next project or opportunity</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">Email</p>
                  <p className="text-slate-600">john.doe@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">Phone</p>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">Location</p>
                  <p className="text-slate-600">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-semibold text-slate-800 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-slate-100 hover:bg-slate-200 p-3 rounded-lg transition-colors"
                >
                  <Github className="h-5 w-5 text-slate-600" />
                </a>
                <a 
                  href="#" 
                  className="bg-blue-100 hover:bg-blue-200 p-3 rounded-lg transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-blue-600" />
                </a>
                <a 
                  href="#" 
                  className="bg-sky-100 hover:bg-sky-200 p-3 rounded-lg transition-colors"
                >
                  <Twitter className="h-5 w-5 text-sky-600" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-800 mb-2">Availability</h4>
              <p className="text-slate-600 text-sm">
                Currently available for freelance projects and full-time opportunities. 
                I typically respond to emails within 24 hours.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full flex items-center justify-center space-x-2">
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Additional Info */}
      <Card className="bg-white/70 backdrop-blur-sm border-slate-200">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Ready to Work Together?</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you're a company looking to hire, or you have a project you'd like to collaborate on, 
              I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Email Me</span>
              </Button>
              <Button variant="outline" size="lg" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Schedule a Call</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
