import { VideoCameraIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "./ui/input";
import PrimaryButton from "./PrimaryButton";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center gap-10 py-40 px-[30px] md:px-[150px]">
      <div className="flex gap-10 flex-col md:flex-row md:gap-20">
        <div className="flex flex-col gap-3 md:w-full">
          {/* Titles */}
          <h1 className="text-d2 text-center md:text-start font-semibold leading-tight md:leading-relaxed">
            Quick & Reliable{" "}
            <span className="text-d1 text-secondary font-bold leading-3">
              Warehousing and Logistics
            </span>{" "}
            Solution.
          </h1>

          {/* Desc */}
          <p className="text-base text-center md:text-start text-neutral-700">
            ShipUp delivers an unparalleled customer service through dedicated
            customer teams, engaged people working in an agile culture, and a
            global footprint
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <PrimaryButton>Join Now</PrimaryButton>

            <Button
              size="lg"
              className="w-full flex items-center gap-2 justify-center bg-transparent text-neutral-800 px-4 py-2 h-12"
            >
              <div className="rounded-full p-2">
                <VideoCameraIcon className="size-6 text-primary" />
              </div>
              Play Demo
            </Button>
          </div>
        </div>
        {/* Image */}
        <Image
          className="md:w-full"
          src="/bike.png"
          height="366"
          width="366"
          alt="100"
        ></Image>
      </div>

      {/* Form */}
      <div className="rounded-xl py-8 px-4 shadow-custom flex flex-col md:flex-row gap-5">
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
