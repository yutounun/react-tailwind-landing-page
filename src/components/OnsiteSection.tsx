import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import Subtitle from "./Subtitle";
import { Button } from "./ui/button";

const OnsiteSection = () => {
  return (
    <div className="flex flex-col gap-16 px-[30px] py-16 bg-primary-light">
      <Subtitle>
        <span className="font-bold">Warehouse</span> Onsite
      </Subtitle>
      <div className="flex justify-center">
        <Image src="/onsite.png" height="100" width="300" alt="map" />
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

export default OnsiteSection;
