import perfectway from "/perfect-way.png";
import { BrokenHome, People } from "src/svg";

const PerfectWay = () => {
  return (
    <div className="container-x-axis container-y-axis">
      <div className="flex flex-col justify-center items-center gap-[41px] lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center items-center gap-[53px] lg:gap-[96px] lg:w-[600px] lg:justify-between">
          <div className="flex flex-col justify-center items-center gap-[26px]">
            <span className="text-[rgba(64,63,70,1)] typography-xxl text-center lg:text-start">
              The perfect way to get best property
            </span>
            <span className="text-[rgba(157,157,157,1)] typography-lg text-center lg:text-start">
              The property that suits you, Choose an apartment that suits your
              requirements and financial capabilities, Attractive location close
              to business centers provides guaranteed rental,
            </span>
          </div>
          <div className="flex flex-col justify-start items-start gap-[50px] w-full md:flex-row lg:flex-col lg:justify-start lg:items-start md:justify-center md:items-center">
            <div className="flex flex-row justify-center items-center gap-[26px]">
              <People />{" "}
              <div className="flex flex-col justify-start items-start">
                <span className="typography-xxl text-primary">Service</span>
                <span className="typography-xl1">
                  Smart real estate service
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-[26px]">
              <BrokenHome />{" "}
              <div className="flex flex-col justify-start items-start">
                <span className="typography-xxl text-primary">More saver</span>
                <span className="typography-xl1">Low taxes and interest</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto sm:!w-[80%] md:w-[70%] lg:w-[480px]">
          <img
            src={perfectway}
            alt=" perfect way"
            className="w-full lg:w-[480px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PerfectWay;
