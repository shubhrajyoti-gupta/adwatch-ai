import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, MapPin, AlertTriangle, CheckCircle, Eye } from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const DashboardSection = () => {
  const stats = [
    {
      title: "Total Reports",
      value: "2,847",
      change: "+12%",
      trend: "up",
      icon: BarChart3,
      color: "text-primary"
    },
    {
      title: "Active Violations",
      value: "156",
      change: "-8%",
      trend: "down",
      icon: AlertTriangle,
      color: "text-warning"
    },
    {
      title: "Resolved Cases",
      value: "2,691",
      change: "+15%",
      trend: "up",
      icon: CheckCircle,
      color: "text-success"
    },
    {
      title: "Response Time",
      value: "2.3h",
      change: "-25%",
      trend: "down",
      icon: TrendingUp,
      color: "text-secondary"
    }
  ];

  const recentViolations = [
    {
      id: "VR2024-156",
      location: "Main Street & 5th Ave",
      type: "Oversized",
      severity: "High",
      status: "Under Review",
      reportedBy: "Field Officer #23",
      time: "1 hour ago"
    },
    {
      id: "VR2024-155",
      location: "Highway 101 Mile Marker 45",
      type: "Unlicensed",
      severity: "Critical",
      status: "Investigating",
      reportedBy: "Citizen Report",
      time: "3 hours ago"
    },
    {
      id: "VR2024-154",
      location: "Shopping Plaza North",
      type: "Content Policy",
      severity: "Medium",
      status: "Resolved",
      reportedBy: "AI Detection",
      time: "6 hours ago"
    }
  ];

  return (
    <section id="dashboard" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Regulatory Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive oversight with real-time analytics, violation tracking, 
            and actionable insights for municipal authorities and regulators.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card shadow-elevation-1 border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <Badge variant={stat.trend === 'up' ? 'default' : 'secondary'}>
                    {stat.change}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Dashboard Preview */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src={dashboardImage} 
                alt="Regulatory Dashboard Interface" 
                className="w-full rounded-2xl shadow-elevation-3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Interactive Map View</h3>
              <p className="text-muted-foreground leading-relaxed">
                Visualize violations across your jurisdiction with our interactive heatmap. 
                Filter by violation type, severity, and status for targeted enforcement actions.
              </p>
              <Button className="bg-gradient-primary">
                <Eye className="w-4 h-4 mr-2" />
                View Live Dashboard
              </Button>
            </div>
          </div>

          {/* Recent Violations Table */}
          <div className="space-y-6">
            <Card className="shadow-elevation-2">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Recent Violations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentViolations.map((violation, index) => (
                    <div key={index} className="p-4 rounded-lg bg-muted/50 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm text-primary">{violation.id}</span>
                        <Badge 
                          variant={
                            violation.severity === 'Critical' ? 'destructive' : 
                            violation.severity === 'High' ? 'default' : 'secondary'
                          }
                        >
                          {violation.severity}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">{violation.location}</p>
                        <p className="text-sm text-muted-foreground">
                          Type: {violation.type} • Status: {violation.status}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Reported by {violation.reportedBy} • {violation.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Items */}
            <Card className="shadow-elevation-1">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Generate Monthly Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="w-4 h-4 mr-2" />
                  Export Violation Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Priority Alerts Setup
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;