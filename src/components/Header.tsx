import { Button } from "@/components/ui/button";
import { Camera, MapPin, Shield, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-elevation-1">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl text-foreground">BillboardAI</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
            Features
          </a>
          <a href="#report" className="text-muted-foreground hover:text-foreground transition-smooth">
            Report
          </a>
          <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-smooth">
            Dashboard
          </a>
          <Button variant="outline" size="sm">
            <Camera className="w-4 h-4 mr-2" />
            Quick Report
          </Button>
        </nav>
        
        <Button size="sm" className="md:hidden">
          <Menu className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;