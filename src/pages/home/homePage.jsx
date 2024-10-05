import Loading from "../../components/loading";
import useLogements from "../../utils/hooks/useLogements";
import Image from "../../components/image";
import Logements from "./components/logements";
import ErrorPage from "../error/errorPage";
import { useEffect } from "react";

const HomePage = () => {
  const { logements, loaded, getAllLogements, error } = useLogements();

  useEffect(() => {
    const fetchLogements = async () => {
      await getAllLogements();
    };

    fetchLogements();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!loaded) return <Loading />;
  if (error) return <ErrorPage error={error} />;

  return (
    <div id="home-page">
      <div className="banner">
        <Image
          src="/IMAGE_1.jpg"
          alt="image de bannière"
          className="banner-image"
        />
        <div className="layout">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </div>
      <Logements logements={logements} />
    </div>
  );
};

export default HomePage;
