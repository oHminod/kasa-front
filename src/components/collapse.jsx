import PropTypes from "prop-types";
import { useState } from "react";
import UpArrow from "../assets/arrow_up.svg";

const Collapse = ({ trigger, text, rounded = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`collapse ${rounded ? "rounded" : ""} ${
        isOpen ? "open" : "closed"
      }`}
    >
      <button className="trigger" onClick={() => setIsOpen(!isOpen)}>
        <h2>{trigger}</h2>
        <img src={UpArrow} alt="button" />
      </button>
      <div className="text">
        {Array.isArray(text) ? (
          text.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p>{text}</p>
        )}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  trigger: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  rounded: PropTypes.bool,
};

export default Collapse;
