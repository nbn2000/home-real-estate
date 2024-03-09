import Card from "../components/card";
import Img from "/featured-listings.png";
import { Couch, Jacuzzi, SquareM, RightArrow } from "src/svg";

const Products = () => {
  return (
    <section id="product" className="container-y-axis container-x-axis">
      <h3 className="typography-xxl3-huge text-center mb-10 md:hidden ">
        Featured Listings
      </h3>
      <Card>
        <div className="md:flex hidden p-4 flex-col justify-between items-start gap-[15px] max-w-[191px] md:max-w-[294px] xl:max-w-[342px] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.1)] bg-white rounded-[10px]">
          <span className="typography-xxl3-huge ">Featured Listings</span>
          <a
            href="#"
            className="flex flex-row justify-start items-center gap-[13px] text-primary typography-md"
          >
            <span>Learn More</span> <RightArrow />
          </a>
        </div>
        {array.map((i, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-start items-start gap-[15px] max-w-[191px] md:max-w-[294px] xl:max-w-[342px] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.1)] bg-white rounded-[10px]"
          >
            <img src={Img} alt="card img" />
            <div className="w-full flex flex-col justify-between min-h-[181px] md:min-h-[227px] items-start gap-[14px] p-[15px]">
              <div className="flex flex-row justify-center items-end gap-1">
                <span className="typography-md-600-inter text-[rgba(25,26,35,1)] md:text-[25px] md:leading-[40px]">
                  $4,299
                </span>{" "}
                <span className="typography-sm-300-inter md:text-[17px] md:leading-[28px] text-[rgba(104,106,121,1)]">
                  /month
                </span>
              </div>
              <span className="typography-sm-600-inter text-[rgba(25,26,35,1)] md:text-[23px] md:leading-[32px]">
                {i}
              </span>
              <span className="typography-xs-inter !leading-[26px] text-[rgba(92,92,92,1)] md:text-[15px] md:leading-[26px]">
                709 West Drive Chicago, IL 60606
              </span>
              <div className="flex flex-row justify-between items-center flex-wrap gap-3">
                <div className="flex flex-row justify-center items-center gap-1 mx-auto">
                  <Couch />
                  <span className="typography-xs-inter text-[rgba(104,106,121,1)] md:text-[12px] md:leading-[20px]">
                    4 Beds
                  </span>
                </div>
                <div className="flex flex-row justify-center items-center gap-1 mx-auto">
                  <Jacuzzi />
                  <span className="typography-xs-inter text-[rgba(104,106,121,1)] md:text-[12px] md:leading-[20px]">
                    4 Baths
                  </span>
                </div>
                <div className="flex flex-row justify-center items-center gap-1 mx-auto">
                  <SquareM />
                  <span className="typography-xs-inter text-[rgba(104,106,121,1)] md:text-[12px] md:leading-[20px]">
                    6*8 m²
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex md:hidden p-4 flex-col justify-between items-start gap-[15px] max-w-[191px] md:max-w-[294px] xl:max-w-[342px] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.1)] bg-white rounded-[10px]">
          <span className="typography-xxl1-inter">Featured Listings</span>
          <a
            href="#"
            className="flex flex-row justify-start items-center  gap-[13px] text-primary typography-md"
          >
            <span>Learn More</span> <RightArrow />
          </a>
        </div>
      </Card>
    </section>
  );
};

const array = [
  "Luxury Loft By Victoria Park",
  "Perfect Family Villa On Sale",
  "Comfortable Apartment",
  "Luxury Loft By Victoria Park",
  "Perfect Family Villa On Sale",
];

export default Products;
