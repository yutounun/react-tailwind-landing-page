import Image from "next/image";
import React from "react";

const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-h3 text-neutral-900">{children}</h2>
      <Image
        src="/service-heading.png"
        height="100"
        width="100"
        alt="service-heading"
      ></Image>
    </div>
  );
};

export default Subtitle;
