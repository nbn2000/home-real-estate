import { useState } from "react";
import Logo from "/Logo.png";
import { Menu, Cancel } from "src/svg";
import MenuModal from "./MenuModal";
import "../animation.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    setAnimation(true);
    const time = setTimeout(() => {
      setAnimation(false);
      clearTimeout(time);
    }, 400);
  };
  return (
    <div className="w-full h-[91px] container-x-axis flex flex-row justify-between items-center gap-4 bg-white">
      <div className="w-max py-5 pr-5">
        <img src={Logo} alt="logo" className="w-full" />
      </div>
      <div className="flex-row justify-center items-center gap-16 hidden md:flex">
        {links.map(({ link, name }, idx) => (
          <div key={idx} className="deskLink">
            <a href={link} className="typography-md  whitespace-nowrap">
              {name}
            </a>
          </div>
        ))}
      </div>
      <button className="typography-md bg-black text-white w-[141px] h-[41px] rounded-[5px] hidden md:block">
        Request a Call
      </button>
      <div className="relative md:hidden">
        <button
          className={`bg-primary w-max h-max p-1 text-white text-primary rounded-sm ${
            animation && "animate-spin"
          }`}
          onClick={handleClick}
        >
          {open ? (
            <Cancel className="bg-transparent text-white " />
          ) : (
            <Menu className="bg-primary text-white" />
          )}
        </button>
        <MenuModal open={open} links={links} setOpen={setOpen} />
      </div>
    </div>
  );
};

const links = [
  { link: "/#product", name: "Product" },
  { link: "/#why-medix", name: "Why Medix" },
  { link: "/#blog", name: "Blog" },
];

export default Navbar;
