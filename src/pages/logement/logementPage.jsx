import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useLogements from "../../utils/hooks/useLogements";
import ErrorPage from "../error/errorPage";
import Carousel from "./components/carousel";
import Tags from "./components/tags";
import Rating from "./components/rating";
import Collapse from "../../components/collapse";
import Loading from "../../components/loading";
import HostAvatar from "./components/hostAvatar";

const LogementPage = () => {
  const { id } = useParams();
  const { getLogement, loaded, error } = useLogements();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const fetchLogement = async () => {
      const fetchedLogement = await getLogement(id);
      setLogement(fetchedLogement);
    };

    fetchLogement();
  }, [id, getLogement]);

  if (!loaded) return <Loading />;
  if (error) return <ErrorPage error={error} />;
  if (!logement) return <ErrorPage error={{ status: 404 }} />;

  return (
    <div id="logement-page">
      <Carousel pictures={logement.pictures} />
      <div className="cartouche">
        <div className="bloc-gauche">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>
        <div className="bloc-droit">
          <div className="host">
            <p>{logement.host.name}</p>
            <HostAvatar src={logement.host.picture} alt={logement.host.name} />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="stuff">
        <div className="description">
          <Collapse trigger="Description" text={logement.description} />
        </div>
        <div className="equipements">
          <Collapse trigger="Équipements" text={logement.equipments} />
        </div>
      </div>
    </div>
  );
};

export default LogementPage;
