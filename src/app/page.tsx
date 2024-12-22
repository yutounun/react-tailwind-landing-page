import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OnsiteSection from "@/components/OnsiteSection";
import OperationModeSection from "@/components/OperationModeSection";
import PrimaryBar from "@/components/PrimaryBar";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="font-lato">
      <PrimaryBar />
      <HeroSection />
      <ServicesSection />
      <OperationModeSection />
      <OnsiteSection />
      <Footer />
    </div>
  );
}
