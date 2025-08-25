import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Brain, MapPin, Shield, Smartphone, BarChart3 } from "lucide-react";
import mobileDetectionImage from "@/assets/mobile-detection.jpg";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: Camera,
      title: "Smart Camera Detection",
      description: "AI-powered computer vision instantly detects billboards and analyzes compliance violations in real-time.",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "Content Analysis",
      description: "Advanced OCR and NLP technology scans billboard text for policy violations and inappropriate content.",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      title: "Auto Geotagging",
      description: "Precise location tracking with automatic timestamp logging for comprehensive violation documentation.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Cross-reference with permit databases to identify unauthorized installations and licensing violations.",
      color: "text-warning"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Native mobile app with offline capabilities, designed for field officers and citizen reporters.",
      color: "text-success"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive reporting with heatmaps, violation trends, and actionable insights for regulators.",
      color: "text-destructive"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Comprehensive Detection Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI-powered detection to regulatory compliance, our platform covers every aspect 
            of billboard monitoring and violation management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card shadow-elevation-1 hover:shadow-elevation-2 transition-smooth border-0">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Demo Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Real-Time Mobile Detection</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Field officers and citizens can instantly detect violations using our mobile app. 
              The AI analyzes billboard size, content, and compliance status within seconds.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span className="text-muted-foreground">Instant violation detection</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-warning rounded-full"></div>
              <span className="text-muted-foreground">Automated report generation</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">GPS-tagged evidence</span>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={mobileDetectionImage} 
              alt="Mobile Detection Interface" 
              className="max-w-sm rounded-2xl shadow-elevation-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;