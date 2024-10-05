import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import UpArrow from "../assets/arrow_up.svg";

const Collapse = ({ trigger, text, rounded = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [collapseHeight, setCollapseHeight] = useState(null);
  const textRef = useRef(null);
  const triggerRef = useRef(null);

  const calculateCollapseHeight = () => {
    const triggerHeight = triggerRef.current
      ? triggerRef.current.offsetHeight
      : 0;
    if (isOpen && textRef.current) {
      const contentHeight = textRef.current.scrollHeight;
      setCollapseHeight(triggerHeight + contentHeight);
    } else {
      setCollapseHeight(triggerHeight);
    }
  };

  useEffect(() => {
    calculateCollapseHeight();
    window.addEventListener("resize", calculateCollapseHeight);

    return () => {
      window.removeEventListener("resize", calculateCollapseHeight);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div
      className={`collapse ${rounded ? "rounded" : ""} ${
        isOpen ? "open" : "closed"
      }`}
      style={{ height: collapseHeight }}
    >
      <button
        className="trigger"
        onClick={() => setIsOpen(!isOpen)}
        ref={triggerRef}
      >
        <h2>{trigger}</h2>
        <img src={UpArrow} alt="button" />
      </button>
      <div className="text" ref={textRef}>
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
