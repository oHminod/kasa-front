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

        if (!response.ok) {
          const error = new Error(
            response.statusText || "Error while fetching about.json"
          );
          error.status = response.status || 500;
          throw error;
        }

        const data = await response.json();

        setAboutJSON(data);
      } catch (error) {
        setAboutJSON([]);
        setError(error);
      }
    };

    fetchAbout();
  }, []);

  if (!aboutJSON) return <Loading />;
  if (error) return <ErrorPage error={error} />;

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
