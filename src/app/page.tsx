import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OnsiteSection from "@/components/OnsiteSection";
import OperationModeSection from "@/components/OperationModeSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="container font-lato">
      <HeroSection />
      <ServicesSection />
      <OperationModeSection />
      <OnsiteSection />
      <Footer />
    </div>
  );
}
