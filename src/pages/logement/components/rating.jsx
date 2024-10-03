import PropTypes from "prop-types";
import StarActive from "/src/assets/star-active.svg";
import StarInactive from "/src/assets/star-inactive.svg";

const Rating = ({ rating }) => {
  const ratingNumber = parseInt(rating, 10);
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <div key={i}>
        {i <= ratingNumber ? (
          <img src={StarActive} alt="star active" />
        ) : (
          <img src={StarInactive} alt="star inactive" />
        )}
      </div>
    );
  }

  return <div className="rating">{stars}</div>;
};

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
