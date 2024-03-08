import Logo from "/Logo-white.png";
import { Google, Linkedin, Twitter, Instagram } from "src/svg";
const Footer = () => {
  return (
    <footer className="bg-footerColor container-x-axis pt-[416px] pb-[20px]">
      <div className=" text-white flex flex-col justify-center items-center gap-[45px]">
        <div className=" flex flex-col justify-center items-center gap-[45px] xl:flex-row xl:w-full xl:items-start">
          <div className="flex flex-col justify-center items-center gap-[2.38rem]">
            <div className="flex flex-col justify-center items-center gap-[2.38rem] sm:flex-row xl:gap-[11px] xl:flex-col">
              <div className="w-max ">
                <img src={Logo} alt="logo" className="w-full" />
              </div>
              <span className="typography-xl text-[#989898] w-full text-center sm:text-start xl:w-[258px]">
                Search and find your dream house at affordable prices, but with
                the best quality. Only available in Brixhome!
              </span>
            </div>
            <div className="flex flex-row justify-center items-center gap-6">
              <Google />
              <Linkedin />
              <Twitter />
              <Instagram />
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-[50px] sm:justify-between sm:w-full">
            <div className="flex flex-col justify-start items-start gap-[43px] sm:items-center">
              <span className="typography-xxl">About</span>
              <span className="typography-xl1">About Us</span>
              <span className="typography-xl1">Product</span>
              <span className="typography-xl1">Feature</span>
            </div>

            <div className="flex flex-col justify-start items-start gap-[43px] sm:items-center">
              <span className="typography-xxl">Support</span>
              <span className="typography-xl1">FAQS</span>
              <span className="typography-xl1">Support Center</span>
              <span className="typography-xl1">Contact Us</span>
            </div>

            <div className="flex flex-col justify-start items-start gap-[43px] sm:items-center">
              <span className="typography-xxl">Services</span>
              <span className="typography-xl1">Help Center</span>
              <span className="typography-xl1">How it Works</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full items-center gap-[45px] sm:flex-row sm:justify-between sm:pt-[25px] sm:border-t-[#8C8A8A] sm:border-t-solid sm:border-t-[2px]">
          <span className="typography-lg text-[#989898] text-center">
            Copyright@2023HomeRealEstate All rights reserved
          </span>
          <span className="typography-lg text-[#989898] text-center">
            Term & Condition | Privacy & Policy
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
