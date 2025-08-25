import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ReportSection from "@/components/ReportSection";
import DashboardSection from "@/components/DashboardSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ReportSection />
        <DashboardSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
