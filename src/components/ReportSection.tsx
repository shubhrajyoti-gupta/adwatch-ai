import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Upload, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Report Submitted Successfully",
        description: "Your violation report has been processed and assigned ID #VR2024-001",
      });
    }, 2000);
  };

  const violationTypes = [
    { type: "Oversized", severity: "High", icon: AlertTriangle },
    { type: "Unlicensed", severity: "Critical", icon: AlertTriangle },
    { type: "Content Policy", severity: "Medium", icon: AlertTriangle },
    { type: "Structural Safety", severity: "High", icon: AlertTriangle },
    { type: "Location Violation", severity: "Medium", icon: AlertTriangle }
  ];

  const recentReports = [
    { id: "VR2024-001", location: "Downtown Plaza", status: "Under Review", timestamp: "2 hours ago" },
    { id: "VR2024-002", location: "Highway 101", status: "Resolved", timestamp: "1 day ago" },
    { id: "VR2024-003", location: "Market Street", status: "Investigating", timestamp: "3 days ago" }
  ];

  return (
    <section id="report" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Submit a Violation Report
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help keep our city compliant by reporting billboard violations. 
            Our AI will analyze your submission and route it to the appropriate authorities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Report Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elevation-2">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="w-5 h-5 text-primary" />
                  <span>New Violation Report</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="location" 
                          placeholder="Enter address or landmark" 
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="violation-type">Violation Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select violation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="oversized">Oversized Billboard</SelectItem>
                          <SelectItem value="unlicensed">Unlicensed Installation</SelectItem>
                          <SelectItem value="content">Content Policy Violation</SelectItem>
                          <SelectItem value="structural">Structural Safety Issue</SelectItem>
                          <SelectItem value="location">Location Violation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe the violation in detail..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Upload Evidence</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-smooth">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">
                        Drag and drop photos or <span className="text-primary">browse files</span>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        JPG, PNG up to 10MB each
                      </p>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-4 h-4 mr-2 animate-spin" />
                        Processing Report...
                      </>
                    ) : (
                      <>
                        <Camera className="w-4 h-4 mr-2" />
                        Submit Report
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Violation Types */}
            <Card className="shadow-elevation-1">
              <CardHeader>
                <CardTitle className="text-lg">Common Violations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {violationTypes.map((violation, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <violation.icon className="w-4 h-4 text-warning" />
                      <span className="text-sm font-medium">{violation.type}</span>
                    </div>
                    <Badge variant={violation.severity === 'Critical' ? 'destructive' : 'secondary'}>
                      {violation.severity}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Reports */}
            <Card className="shadow-elevation-1">
              <CardHeader>
                <CardTitle className="text-lg">Recent Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentReports.map((report, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-mono text-primary">{report.id}</span>
                      <div className="flex items-center space-x-1">
                        {report.status === 'Resolved' ? (
                          <CheckCircle className="w-3 h-3 text-success" />
                        ) : (
                          <Clock className="w-3 h-3 text-warning" />
                        )}
                        <span className="text-xs text-muted-foreground">{report.status}</span>
                      </div>
                    </div>
                    <p className="text-sm text-foreground">{report.location}</p>
                    <p className="text-xs text-muted-foreground">{report.timestamp}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportSection;