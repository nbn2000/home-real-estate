import perfectway from "/perfect-way.png";
import { BrokenHome, People } from "src/svg";

const PerfectWay = () => {
  return (
    <div className="container-x-axis container-y-axis">
      <div>
        <div>
          <span>The perfect way to get best property</span>
          <span>
            The property that suits you, Choose an apartment that suits your
            requirements and financial capabilities, Attractive location close
            to business centers provides guaranteed rental,
          </span>
        </div>
        <div>
          <div>
            <People />{" "}
            <div>
              <span>Service</span> <span>Smart real estate service</span>
            </div>
          </div>
          <div>
            <BrokenHome />{" "}
            <div>
              <span>More saver</span> <span>Low taxes and interest</span>
            </div>
          </div>
        </div>
        <div>
          <img src={perfectway} alt=" perfect way" />
        </div>
      </div>
    </div>
  );
};

export default PerfectWay;
