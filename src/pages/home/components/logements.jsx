import PropTypes from "prop-types";
import LogementCard from "./logementCard";

const Logements = ({ logements }) => {
  return (
    <div className="logements">
      {logements.map((logement, index) => (
        <LogementCard key={index} logement={logement} />
      ))}
    </div>
  );
};

Logements.propTypes = {
  logements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Logements;
