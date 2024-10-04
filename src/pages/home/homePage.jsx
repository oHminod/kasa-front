// import { Link } from "react-router-dom";
import { useState } from "react";
import Loading from "../../components/loading";
import useLogements from "../../utils/hooks/useLogements";
import Logements from "./components/logements";
import ImageLoader from "../../components/imageLoader";

const HomePage = () => {
  const { logements, loaded, getAllLogements } = useLogements();
  const [bannerIsLoading, setBannerIsLoading] = useState(true);
  getAllLogements();

  const handleImageLoad = () => {
    setBannerIsLoading(false);
  };

  if (!loaded) return <Loading />;
  return (
    <div id="home-page">
      <div className="banner">
        {bannerIsLoading && <ImageLoader />}
        <img
          className="banner-image"
          src="/IMAGE_1.jpg"
          alt="image de bannière"
          onLoad={handleImageLoad}
          style={{ display: bannerIsLoading ? "none" : "block" }}
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
