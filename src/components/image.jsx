import PropTypes from "prop-types";
import { useState } from "react";
import ImageLoader from "./imageLoader";

const Image = ({
  src,
  alt,
  className,
  setLoaded = null,
  loading = "eager",
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);

    if (setLoaded) {
      setLoaded(true);
    }
  };

  return (
    <>
      {isLoading && <ImageLoader className={className} />}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className={`${className} ${isLoading ? "hidden" : "block"}`}
        loading={loading}
      />
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  setLoaded: PropTypes.func,
  loading: PropTypes.oneOf(["eager", "lazy"]),
};

export default Image;
