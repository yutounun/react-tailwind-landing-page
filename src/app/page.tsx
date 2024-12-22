import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="container px-[30px] font-lato">
      <HeroSection />
      <ServicesSection />
    </div>
  );
}
