import PropTypes from "prop-types";
import LeftArrow from "/src/assets/arrow_left.svg";
import RightArrow from "/src/assets/arrow_right.svg";
import { useEffect, useState } from "react";
import Image from "../../../components/image";

const Carousel = ({ pictures }) => {
  const [currentPicture, setCurrentPicture] = useState(0);
  const [hasClicked, setHasClicked] = useState(false);
  const [loaded, setLoaded] = useState(false);
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
    if (pictures.length <= 1 || hasClicked || !loaded) return;

    const timeoutId = setTimeout(() => {
      setCurrentPicture((currentPicture + 1) % pictures.length);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentPicture, pictures.length, hasClicked, loaded]);

  if (pictures.length === 1)
    return (
      <div className="carousel">
        <Image
          src={pictures[0]}
          alt={"image" + (0 + 1)}
          className="carousel-image active"
        />
      </div>
    );

  return (
    <div className="carousel">
      {pictures.map((picture, index) => (
        <Image
          key={index}
          src={picture}
          alt={"image" + (index + 1)}
          className={`carousel-image ${
            index === currentPicture ? "active" : "inactive"
          }`}
          setLoaded={index === pictures.length - 1 ? setLoaded : null}
        />
      ))}
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
