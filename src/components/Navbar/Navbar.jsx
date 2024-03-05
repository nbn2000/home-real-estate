import { useState } from "react";
import Logo from "/Logo.png";
import { Menu } from "src/svg";
import MenuModal from "./MenuModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-[134px] px-[7.5rem] flex flex-row justify-between items-center">
      <img src={Logo} alt="logo" />
      <div className="relative">
        <button
          className="bg-primary w-max h-max p-1 text-primary"
          onClick={() => setOpen(true)}
        >
          <Menu className="bg-primary " />
        </button>
        <MenuModal open={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
};

export default Navbar;
