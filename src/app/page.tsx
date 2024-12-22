import HeroSection from "@/components/HeroSection";
import OperationModeSection from "@/components/OperationModeSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="container font-lato">
      <HeroSection />
      <ServicesSection />
      <OperationModeSection />
    </div>
  );
}
