import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Image from "../../../components/image";

const LogementCard = ({ logement }) => {
  return (
    <div className="logementCard">
      <Link to={`/kasa-front/logement/${logement.id}`}>
        <Image
          src={logement.cover}
          alt="image du logement"
          className="logementCard-image"
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
