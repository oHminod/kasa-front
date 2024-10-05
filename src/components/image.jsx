import PropTypes from "prop-types";
import { useState } from "react";
import ImageLoader from "./imageLoader";

const Image = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <ImageLoader />}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className={`${className} ${isLoading ? "hidden" : "block"}`}
      />
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Image;
