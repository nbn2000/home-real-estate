import PropTypes from "prop-types";
import "./animation.css";

const Modal = ({ open, children }) => {
  if (!open) return null;
  return (
    <div
      className={`sm:w-[300px] w-full shadow-[-14px_3px_21px_-7px_rgba(0,0,0,0.46)] bg-white z-50 absolute top-full overflow-y-scroll right-0 p-1 ${
        open ? "show-height" : "hide-height"
      }`}
    >
      {children}
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  absolute: PropTypes.bool,
};

export default Modal;
