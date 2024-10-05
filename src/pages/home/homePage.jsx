import Loading from "../../components/loading";
import useLogements from "../../utils/hooks/useLogements";
import Image from "../../components/image";
import Logements from "./components/logements";

const HomePage = () => {
  const { logements, loaded, getAllLogements } = useLogements();
  getAllLogements();

  if (!loaded) return <Loading />;
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
