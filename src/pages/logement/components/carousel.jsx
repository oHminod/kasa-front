import PropTypes from "prop-types";

const Carousel = ({ pictures }) => {
  return (
    <div className="carousel">
      <img src={pictures[0]} alt={"image" + (0 + 1)} />
    </div>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
