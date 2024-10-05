import PropTypes from "prop-types";
import LeftArrow from "/src/assets/arrow_left.svg";
import RightArrow from "/src/assets/arrow_right.svg";
import { useEffect, useState } from "react";
import Image from "../../../components/image";

const Carousel = ({ pictures }) => {
  const [currentPicture, setCurrentPicture] = useState(0);
  const [hasClicked, setHasClicked] = useState(false);
  const imageNumber = currentPicture + 1;

  const handleForward = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
    setHasClicked(true);
  };

  const handleBackward = () => {
    setCurrentPicture(
      currentPicture === 0 ? pictures.length - 1 : currentPicture - 1
    );
    setHasClicked(true);
  };

  useEffect(() => {
    if (pictures.length <= 1 || hasClicked) return;

    const timeoutId = setTimeout(() => {
      setCurrentPicture((currentPicture + 1) % pictures.length);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentPicture, pictures.length, hasClicked]);

  if (pictures.length === 1)
    return (
      <div className="carousel">
        <Image
          src={pictures[0]}
          alt={"image" + (0 + 1)}
          className="carousel-image"
        />
      </div>
    );

  return (
    <div className="carousel">
      <Image
        src={pictures[currentPicture]}
        alt={"image" + imageNumber}
        className="carousel-image"
      />
      <button className="left-arrow" onClick={handleBackward}>
        <img className="arrow-icon" src={LeftArrow} alt="left arrow" />
      </button>
      <button className="right-arrow" onClick={handleForward}>
        <img className="arrow-icon" src={RightArrow} alt="right arrow" />
      </button>
      <p className="carousel-pagination">
        {imageNumber + "/" + pictures.length}
      </p>
    </div>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
