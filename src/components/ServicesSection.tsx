import React from "react";
import Service from "./Service";
import PrimaryButton from "./PrimaryButton";
import { Button } from "./ui/button";
import Subtitle from "./Subtitle";

const ServicesSection = () => {
  return (
    <div className="flex flex-col gap-16 bg-[#F4F6F9] px-[30px] py-16">
      <Subtitle icon>
        <span className="font-bold">Services</span> we offer
      </Subtitle>

      <div className="flex flex-col gap-16">
        <Service
          title="warehousing services"
          desc="A pay as-you-go solution for: pallet storage, inventory management, fulfillment(e.g. pick and pack), in/out-bound solutions, and more."
          icon="/track.png"
        />

        <Service
          title="Global Freight"
          desc="Search and compare the best shipping rates among dozens of trusted logistic partners for the last mile delivery and freight."
          icon="/flight.png"
        />

        <Service
          title="Packaging Solutions"
          desc="Our packaging solutions are optimized for each individual customer and are selected based on on the customer’s specific needs and requirements."
          icon="/bag.png"
        />
      </div>

      <div className="flex flex-col gap-5">
        <PrimaryButton>Join Now</PrimaryButton>
        <Button
          size="lg"
          variant="outline"
          className="text-primary px-4 py-2 h-12 w-full"
        >
          Request Quote
        </Button>
      </div>
    </div>
  );
};

export default ServicesSection;
