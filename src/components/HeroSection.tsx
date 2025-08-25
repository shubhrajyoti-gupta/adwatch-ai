import { Button } from "@/components/ui/button";
import { Camera, Eye, MapPin, Zap } from "lucide-react";
import heroImage from "@/assets/hero-billboard-ai.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Billboard Detection System" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
              AI-Powered Billboard
              <br />
              Compliance System
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Revolutionizing billboard regulation with computer vision, real-time reporting, 
              and intelligent violation detection for smarter cities.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-smooth text-lg px-8 py-6">
              <Camera className="w-5 h-5 mr-2" />
              Start Reporting
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Eye className="w-5 h-5 mr-2" />
              View Dashboard
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">2.3s</div>
              <div className="text-muted-foreground">Average Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-muted-foreground">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning">10K+</div>
              <div className="text-muted-foreground">Reports Processed</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Action */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-elevation-2">
          <Zap className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;