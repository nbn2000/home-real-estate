import Home from "/home.png";
const Header = () => {
  return (
    <header className="container-x-axis container-y-axis flex flex-col md:flex-row justify-center items-center gap-6 md:justify-between">
      <div className="flex flex-col justify-center items-center gap-[30px] md:w-1/2 xl:w-[60%]">
        <h1 className="typography-xxl2-heading text-[#403F46] text-center md:text-start xl:text-[85px] xl:leading-[90px]">
          Invest in real estate
        </h1>
        <span className="typography-lg1 text-[#403F46] text-center md:text-start">
          The property that suits you, Choose an apartment that suits your
          requirements and financial capabilities, Attractive location close to
          business centers provides guaranteed rental,
        </span>
        <div className="flex flex-row justify-center items-center gap-[27px] md:justify-start  w-full">
          <button className="typography-md-bold text-white bg-primary w-[130px] h-[41px] rounded-[5px]">
            Get started
          </button>
          <div className="relative w-max">
            <a href="#" className="typography-md-bold text-[#403F46] w-full">
              Watch Video
            </a>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-[#403F46] " />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-[40%]">
        <img src={Home} alt="home svg" className="w-full" />
      </div>
    </header>
  );
};

export default Header;
