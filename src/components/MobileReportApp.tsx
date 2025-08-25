import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Upload, CheckCircle, AlertTriangle, Smartphone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Camera as CapacitorCamera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { Device } from '@capacitor/device';

const MobileReportApp = () => {
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const takePicture = async () => {
    try {
      setIsCapturing(true);
      
      // Check if we're on a mobile device
      const deviceInfo = await Device.getInfo();
      
      const image = await CapacitorCamera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      setCapturedImage(image.dataUrl || null);
      
      // Get current location
      const coordinates = await Geolocation.getCurrentPosition();
      setLocation({
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      });

      // Simulate AI analysis
      analyzeImage();
      
      toast({
        title: "Photo Captured",
        description: "Image captured and location tagged successfully"
      });
      
    } catch (error) {
      console.error('Error taking picture:', error);
      toast({
        title: "Camera Error",
        description: "Could not access camera. Using file upload instead.",
        variant: "destructive"
      });
    } finally {
      setIsCapturing(false);
    }
  };

  const analyzeImage = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockAnalysis = {
        billboardDetected: true,
        violations: [
          { type: 'Oversized', confidence: 0.87, severity: 'High' },
          { type: 'Unlicensed', confidence: 0.92, severity: 'Critical' }
        ],
        dimensions: { width: '18.2m', height: '6.1m' },
        estimatedArea: '111.02 sq.m',
        compliance: false,
        riskScore: 8.4
      };
      
      setAnalysisResult(mockAnalysis);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Complete",
        description: "Violations detected! Report ready for submission."
      });
    }, 3000);
  };

  const submitReport = async () => {
    if (!capturedImage || !analysisResult) return;
    
    const reportData = {
      image: capturedImage,
      location: location,
      analysis: analysisResult,
      timestamp: new Date().toISOString(),
      reporterId: 'user_12345'
    };
    
    // Simulate API submission
    setTimeout(() => {
      toast({
        title: "Report Submitted",
        description: "Violation report #VR2024-" + Math.floor(Math.random() * 1000) + " submitted successfully"
      });
      
      // Reset form
      setCapturedImage(null);
      setAnalysisResult(null);
      setLocation(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <Card className="text-center bg-gradient-primary text-white border-0">
          <CardContent className="p-6">
            <Smartphone className="w-12 h-12 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">BillboardAI Mobile</h1>
            <p className="opacity-90">AI-Powered Violation Detection</p>
          </CardContent>
        </Card>

        {/* Camera Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Camera className="w-5 h-5" />
              <span>Capture Billboard</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {!capturedImage ? (
              <div className="text-center space-y-4">
                <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                  <Camera className="w-12 h-12 text-muted-foreground" />
                </div>
                <Button 
                  onClick={takePicture} 
                  disabled={isCapturing}
                  className="w-full bg-gradient-primary"
                >
                  {isCapturing ? "Opening Camera..." : "Take Photo"}
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <img 
                  src={capturedImage} 
                  alt="Captured billboard" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>
                    {location ? 
                      `${location.lat.toFixed(6)}, ${location.lng.toFixed(6)}` : 
                      "Location unavailable"
                    }
                  </span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Analysis Results */}
        {isAnalyzing && (
          <Card>
            <CardContent className="p-6 text-center">
              <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-muted-foreground">Analyzing billboard for violations...</p>
            </CardContent>
          </Card>
        )}

        {analysisResult && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <span>Analysis Results</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Dimensions:</span>
                  <p className="font-medium">{analysisResult.dimensions.width} x {analysisResult.dimensions.height}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Area:</span>
                  <p className="font-medium">{analysisResult.estimatedArea}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Risk Score:</span>
                  <p className="font-medium text-destructive">{analysisResult.riskScore}/10</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Compliance:</span>
                  <p className="font-medium text-destructive">Non-Compliant</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Detected Violations:</h4>
                {analysisResult.violations.map((violation: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm">{violation.type}</span>
                    <div className="flex items-center space-x-2">
                      <Badge variant={violation.severity === 'Critical' ? 'destructive' : 'default'}>
                        {violation.severity}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {Math.round(violation.confidence * 100)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Submit Button */}
        {analysisResult && (
          <Button 
            onClick={submitReport}
            className="w-full bg-gradient-primary text-lg py-6"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Submit Violation Report
          </Button>
        )}

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <Upload className="w-4 h-4 mr-2" />
              Upload from Gallery
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <MapPin className="w-4 h-4 mr-2" />
              View Nearby Reports
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MobileReportApp;