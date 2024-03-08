import PropTypes from "prop-types";
import "../animation.css";

const MenuModal = ({ open, links, setOpen }) => {
  if (!open) return null;
  return (
    <div
      className={`sm:w-[300px] w-[70%] shadow-[-14px_3px_21px_-7px_rgba(0,0,0,0.46)] bg-white z-50 fixed
       buttom-0 right-0 p-6 ${open ? "show-height" : "hide-height"}`}
    >
      <div className="flex flex-col justify-start items-start gap-5">
        {links.map(({ link, name }, idx) => (
          <a
            className="typography-md hover:text-white hover:bg-primary rounded-[5px] p-4 w-full transition-colors"
            key={idx}
            href={`${link}`}
            onClick={() => setOpen(false)}
          >
            {name}
          </a>
        ))}
        <button className="typography-md bg-black text-white w-[141px] h-[41px] rounded-[5px]">
          Request a Call
        </button>
      </div>
    </div>
  );
};

MenuModal.propTypes = {
  open: PropTypes.bool.isRequired,
  links: PropTypes.array.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default MenuModal;
