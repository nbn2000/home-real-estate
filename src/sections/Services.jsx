import Card from "../components/card";
import Service1 from "/service-1.png";
import Service2 from "/service-2.png";
import Service3 from "/service-1.png";
import { RightArrow } from "src/svg";
const Services = () => {
  return (
    <div className="bg-[url('/bg.png')] bg-no-repeat  bg-[length:100%_100%]">
      <div className="w-full !pt-60 flex flex-col justify-center items-center gap-[58px] container-x-axis container-y-axis">
        <div className="flex flex-col justify-center items-center gap-[29px]">
          <span className="typography-xxl3-heading text-textColor text-center">
            Our Excellent Services
          </span>
          <span className="typography-lg1 text-textColor text-center">
            Chek out our best service you can possibly orders in building your
            company and don’t forget to ask via our email or our customer
            service if you are interested in using our services
          </span>
        </div>
        <Card>
          {array.map((i, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-start items-start gap-[15px] max-w-[191px] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.1)] bg-white rounded-[10px]"
            >
              <img src={i.img} alt={`${i.name}`} />
              <div className="w-full flex flex-col justify-start items-start gap-[14px] p-[15px]">
                <span className="typography-md-bold text-textColor">
                  {i.name}
                </span>
                <p className="typography-xs text-textColor">{i.body}</p>
                <a
                  href="#"
                  className="flex flex-row justify-start items-center gap-[13px] text-primary typography-md"
                >
                  <span>Learn More</span> <RightArrow />
                </a>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};
const array = [
  {
    id: 1,
    name: "Studies and consepts, overall planning",
    body: "New construction and axpansion of roads, traffic areas, waterways and railways require convincing traffic concepts.",
    img: Service1,
  },
  {
    id: 2,
    name: "Traffic facilities engineering structures",
    body: "Traffic concepts are a decisive factor of any infrastructure, The weiss angineering office has therefore set up team of experts.",
    img: Service2,
  },
  {
    id: 3,
    name: "Design survery, 3D laser scanning",
    body: "We are a powerful partner when it come to carrying out all surveying task in the “design surveying” service.",
    img: Service3,
  },
];
export default Services;
