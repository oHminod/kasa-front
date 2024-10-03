// import { Link } from "react-router-dom";
import useLogements from "../../utils/hooks/useLogements";
import Logements from "./components/logements";

const HomePage = () => {
  const { logements, loaded, getAllLogements } = useLogements();
  getAllLogements();

  if (!loaded) return <div>Loading...</div>;
  return (
    <div id="home-page">
      <div className="banner">
        <img
          className="banner-image"
          src="/public/image-1.jpg"
          alt="image de bannière"
        />
        <div className="layout">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </div>
      <Logements logements={logements} />
      {/* <ul>
        {logements.map((logement, index) => (
          <li key={index}>
            <h2>
              <Link to={`/logement/${logement.id}`}>{logement.title}</Link>
            </h2>
            <p>{logement.description}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default HomePage;
