import { useState } from "react";
import Modal from "src/components/modal/Modal";
import { Dollar, House, Rent, Rooms, DropDownIcon } from "src/svg";
import PropTypes from "prop-types";

const DropDown = ({ icon, dropDown }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(dropDown[0]);
  const handleClick = (e) => {
    setSelected(e);
    setOpen(false);
  };
  return (
    <div
      className="relative bg-[#F4F4F4] h-[41.88px] rounded-[50px] w-full flex flex-row justify-between px-[15px] items-center gap-[15px] cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      {icon}
      <span className="typography-md text-[#403F46]">{selected}</span>
      <DropDownIcon className={open ? "rotate-180" : ""} />
      <Modal open={open} absolute>
        <div className="flex flex-col justify-start items-start gap-5">
          {dropDown.map((i, idx) => (
            <span
              key={idx}
              className="typography-md hover:text-white hover:bg-primary rounded-[5px] p-4 w-full transition-colors"
              onClick={() => handleClick(i)}
            >
              {i}
            </span>
          ))}
        </div>
      </Modal>
    </div>
  );
};

DropDown.propTypes = {
  icon: PropTypes.node.isRequired,
  dropDown: PropTypes.array.isRequired,
};

const Search = () => {
  return (
    <div className="container-x-axis container-y-axis">
      <div className="flex flex-col justify-center items-center gap-5 md:flex-row md:shadow-[0px_8px_18px_0px_rgba(0,0,0,0.1)] p-5 rounded-[10px]">
        <input
          type="text"
          placeholder="Your desiered location goeshere"
          className="typography-md md:hidden w-full placeholder:text-[#C1C1C1] placeholder:text-[16px] placeholder:px-4 px-4 focus:outline-[#044fff] placeholder:leading-5 bg-[#F4F4F4] rounded-[50px] h-[41px]"
        />
        <div className="flex w-full px-1 flex-col sm:flex-row justify-between items-center gap-[16px]">
          <div className="flex w-full flex-col justify-center items-center gap-[35px]">
            {dropDowns1.map(({ icon, dropDown }, idx) => (
              <DropDown key={idx} icon={icon} dropDown={dropDown} />
            ))}
          </div>
          <input
            type="text"
            placeholder="Your desiered location goeshere"
            className="typography-md hidden md:block w-full placeholder:text-[#C1C1C1] placeholder:text-[16px] placeholder:px-4 px-4 focus:outline-[#044fff] placeholder:leading-5 bg-[#F4F4F4] rounded-[50px] h-[41px]"
          />
          <div className="flex w-full flex-col justify-center items-center gap-[35px]">
            {dropDowns2.map(({ icon, dropDown }, idx) => (
              <DropDown key={idx} icon={icon} dropDown={dropDown} />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-[11px] md:w-max">
          <div className="flex flex-col justify-center items-center">
            <span className="typography-xl2 md:text-[16px]">563</span>
            <span className="typography-md text-[#403F46]">Results</span>
          </div>
          <button className="bg-primary rounded-[5px] text-white w-full h-[60px] md:w-[93px] md:h-[41px] md:text-[16px]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

const dropDowns1 = [
  {
    icon: <Rent />,
    dropDown: ["Rent", "Anual", "Purchase"],
  },
  {
    icon: <Dollar />,
    dropDown: ["USD", "AED", "ZLOTY"],
  },
];

const dropDowns2 = [
  {
    icon: <House />,
    dropDown: ["House", "Appartment", "Villa"],
  },
  {
    icon: <Rooms />,
    dropDown: [
      "2 Rooms",
      "3 Rooms",
      "4 Rooms",
      "5 Rooms",
      "6 Rooms",
      "7 Rooms",
      "8 Rooms",
      "9 Rooms",
      "10 Rooms",
    ],
  },
];

export default Search;
