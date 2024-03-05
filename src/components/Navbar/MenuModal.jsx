import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const MenuModal = ({ open, onClose }) => {
  if (!open) return null;
  return createPortal(
    <div className="w-[400px] h-[400] bg-gray-600 fixed top-0 right-0">
      <button onClick={onClose} className="text-white">
        x
      </button>
      a[]sdasd
    </div>,
    document.getElementById("modal")
  );
};

MenuModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MenuModal;
