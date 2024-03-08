import Homey from "/homey.png";
import Luminous from "/luminous.png";
import Umbrella from "/umbrella.png";
import Border from "/border.png";
import Product from "/product.png";

const Badges = () => {
  return (
    <div className="container-x-axis container-y-axis flex flex-row justify-center gap-[7px] items-center md:flex-nowrap flex-wrap">
      <div className="w-max">
        <img src={Homey} alt="hommey logo" className="w-full" />
      </div>
      <div className="w-max">
        <img src={Luminous} alt="luminouse logo" className="w-full" />
      </div>
      <div className="w-max">
        <img src={Umbrella} alt="umbrella logo" className="w-full" />
      </div>
      <div className="w-max">
        <img src={Border} alt="border logo" className="w-full" />
      </div>
      <div className="w-max">
        <img src={Product} alt="product logo" className="w-full" />
      </div>
      <div className="w-max">
        <img src={Homey} alt="homey logo" className="w-full" />
      </div>
    </div>
  );
};

export default Badges;
