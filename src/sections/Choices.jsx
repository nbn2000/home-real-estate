import { Portfolio, Bank, Clock, Sheild, RightArrow } from "src/svg";
import Card from "../components/card";

const Choices = () => {
  return (
    <section className="bg-[url('/bg.png')] bg-no-repeat  bg-[length:100%_100%]">
      <div className="container-x-axis container-y-axis">
        <div className="!py-[120px] text-center md:max-w-[600px] md:mx-auto">
          <span className="typography-xxl text-[rgba(37,43,92,1)] md:text-[50px] md:leading-[65px]">
            Find
          </span>
          <span className="typography-xxl-raleway text-primary md:text-[50px] md:leading-[58.7px]">
            {" "}
            perfect choice{" "}
          </span>
          <span className="typography-xxl text-[rgba(37,43,92,1)] md:text-[50px] md:leading-[65px]">
            for your future house
          </span>
        </div>
        <Card>
          {array.map((i, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-start items-start gap-[55px] max-w-[191px] md:max-w-[294px] xl:max-w-[342px] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.1)] bg-white rounded-[10px] md:bg-transparent md:shadow-none p-3"
            >
              {i.img}
              <div className="w-full flex flex-col justify-between min-h-[215px] md:min-h-[258px] items-start ">
                <span className="typography-xl1-bold text-[rgba(64,63,70,1)] md:text-[34px] md:leading-[34px]">
                  {i.name}
                </span>
                <p className="text-[12px] leading-[15.6px] text-[rgba(64,63,70,1)] md:text-[18px] md:leading-[24px]">
                  {i.body}
                </p>
                <a
                  href="#"
                  className="flex flex-row justify-start items-center gap-[13px] text-primary typography-lg2"
                >
                  <span>Learn More</span> <RightArrow />
                </a>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
};

const array = [
  {
    name: "Experienced",
    img: <Portfolio />,
    body: "Our experienced of 25 years of building and making achivermants in the world of development",
  },
  {
    name: "Compatitive Price",
    img: <Bank />,
    body: "The prices we offer you are very compatitivewild out redicing the quality of the company",
  },
  {
    name: "On Time",
    img: <Clock />,
    body: "Our experienced of 25 years of building and making achivermants in the world of development",
  },
  {
    name: "Best Materials",
    img: <Sheild />,
    body: "The materials determines the building so we recommend that you use the best & quality materials",
  },
  {
    name: "Compatitive Price",
    img: <Bank />,
    body: "The prices we offer you are very compatitivewild out redicing the quality of the company",
  },
  {
    name: "On Time",
    img: <Clock />,
    body: "Our experienced of 25 years of building and making achivermants in the world of development",
  },
];
export default Choices;
