import { VideoCameraIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "./ui/input";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center gap-10 py-40">
      <div className="flex flex-col gap-3">
        {/* Titles */}
        <h1 className="text-d2 text-center font-semibold leading-tight">
          Quick & Reliable{" "}
          <span className="text-d1 text-secondary font-bold leading-3">
            Warehousing and Logistics
          </span>{" "}
          Solution.
        </h1>

        {/* Desc */}
        <p className="text-base text-center text-neutral-700">
          ShipUp delivers an unparalleled customer service through dedicated
          customer teams, engaged people working in an agile culture, and a
          global footprint
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <Button size="lg" className="bg-primary px-4 py-2 h-12">
            Join Now
          </Button>

          <Button
            size="lg"
            className="w-full flex items-center gap-2 justify-center bg-transparent text-neutral-800 px-4 py-2 h-12"
          >
            <div className="rounded-full p-2 shadow-xl">
              <VideoCameraIcon className="size-6 text-primary" />
            </div>
            Play Demo
          </Button>
        </div>
      </div>

      {/* Image */}
      <Image src="/bike.png" height="366" width="366" alt="100"></Image>

      {/* Form */}
      <div className="rounded-xl py-8 px-4 shadow-xl flex flex-col gap-5">
        <Input placeholder="Origin" className="h-12" />
        <Input placeholder="Destination" className="h-12" />
        <Input placeholder="Weight" className="h-12" />
        <Button size="lg" className="bg-primary px-8 py-2 h-12">
          Check Price
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
