import { useEffect, useState } from "react";
import Collapse from "../../components/collapse";
import Image from "../../components/image";
import Loading from "../../components/loading";
import ErrorPage from "../error/errorPage";

const AboutPage = () => {
  const [aboutJSON, setAboutJSON] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch("/data/about.json");
        const data = await response.json();
        setAboutJSON(data);
        // const error = new Error("Error while fetching about.json");
        // error.status = 400;
        // throw error;
      } catch (error) {
        setError(error);
      }
    };

    fetchAbout();
  }, []);

  if (error) return <ErrorPage error={error} />;
  if (!aboutJSON) return <Loading />;
  return (
    <div id="about-page">
      <div className="banner">
        <Image
          src="/IMAGE_2.jpg"
          alt="image de bannière"
          className="banner-image"
        />
      </div>
      <div className="content">
        {aboutJSON.map((section, i) => (
          <Collapse
            key={i}
            trigger={section.title}
            text={section.text}
            rounded={false}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
