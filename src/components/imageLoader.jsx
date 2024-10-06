import PropTypes from "prop-types";

const ImageLoader = ({ className }) => {
  return (
    <div className={`image-loader ${className}`}>
      <div className="spinner"></div>
    </div>
  );
};

ImageLoader.propTypes = {
  className: PropTypes.string,
};

export default ImageLoader;
