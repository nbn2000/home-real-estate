import homeImg from "/WhyUs.png";
import WhyUs2 from "/WhyUs2.png";

const WhyUs = () => {
  return (
    <section id="why-medix" className="container-x-axis container-y-axis">
      <div className="flex flex-row justify-between items-center md:shadow-[0px_10px_10px_0px_rgba(0,0,0,0.1)] md:rounded-[10px] p-4">
        <div className="w-1/2 hidden md:block bg-slate-600">
          <img
            src={homeImg}
            alt="why us logo home img"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-[80px] lg:gap-[100px] md:w-1/2 p-3">
          <div className="flex flex-col justify-center items-center gap-[47px] md:justify-between h-max">
            <span className="typography-xxl2-heading text-primary text-center md:text-start">
              What Make Us Different?
            </span>
            <span className="typography-md text-textColor text-center md:text-start">
              The property that suits you, Choose an apartment that suits your
              requirements and financial capabilities, Attractive location close
              to business centers provides guaranteed rental,
            </span>
          </div>
          <br className="hidden lg:block" />
          <div className="w-full h-max">
            <img src={WhyUs2} alt="why us logo" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
