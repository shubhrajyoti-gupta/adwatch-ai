import { Button } from "@/components/ui/button";
import { Shield, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">BillboardAI</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Revolutionizing billboard compliance with AI-powered detection and smart regulatory tools.
            </p>
            <div className="flex space-x-2">
              <Button size="sm" variant="ghost" className="text-background hover:bg-background/10">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-background hover:bg-background/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-background hover:bg-background/10">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Platform</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-smooth">Mobile App</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Dashboard</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">API Access</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Analytics</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Solutions</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-smooth">For Municipalities</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">For Citizens</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">For Regulators</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Enterprise</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-smooth">Documentation</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Help Center</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Training</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 BillboardAI. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-background/60 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-background transition-smooth">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;