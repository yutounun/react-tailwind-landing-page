import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col gap-6 bg-[#F4F6F9] px-[30px] py-16 text-neutral-100 bg-primary">
      <h3 className="text-xl">
        <span className="text-secondary">Ship</span>Up
      </h3>
      <p className="text-sm">
        ShipUp delivers an unparalleled customer service through dedicated
        customer teams, engaged people working in an agile culture, and a global
        footprint
      </p>

      <div className="flex gap-10">
        <div className="flex flex-col gap-4">
          <span className="font-bold">Explore</span>
          <div className="flex flex-col gap-2 text-sm">
            <span>About Us</span>
            <span>Our Warehouses</span>
            <span>Blog</span>
            <span>News and Media</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-bold">Legal</span>
          <div className="flex flex-col gap-2 text-sm">
            <span>Terms</span>
            <span>Privacy</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-bold">Social Media</span>
        <div className="flex gap-3">
          <Image src="/facebook.png" alt="facebook" height="50" width="50" />
          <Image src="/x.png" alt="x" height="50" width="50" />
          <Image src="/whatsapp.png" alt="whatsapp" height="50" width="50" />
          <Image src="/ig.png" alt="ig" height="50" width="50" />
        </div>
      </div>
    </div>
  );
};

export default Footer;