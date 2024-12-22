import Logo from "./Logo";
import { Bars3Icon } from "@heroicons/react/24/solid";

const PrimaryBar = () => {
  return (
    <div className="flex justify-between container p-[24px]">
      <Logo />

      <Bars3Icon className="size-6" />
    </div>
  );
};

export default PrimaryBar;
