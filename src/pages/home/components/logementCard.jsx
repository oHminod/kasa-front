import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import ImageLoader from "../../../components/imageLoader";

const LogementCard = ({ logement }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="logementCard">
      <Link to={`/logement/${logement.id}`}>
        {isLoading && <ImageLoader />}
        <img
          src={logement.cover}
          alt="image du logement"
          onLoad={handleImageLoad}
          style={{ display: isLoading ? "none" : "block" }}
        />
        <div className="underLayout"></div>
        <div className="layout"></div>
        <h2>{logement.title}</h2>
      </Link>
    </div>
  );
};

LogementCard.propTypes = {
  logement: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default LogementCard;
