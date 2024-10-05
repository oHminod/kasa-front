import { useEffect, useState } from "react";
import Collapse from "../../components/collapse";
import Image from "../../components/image";
import Loading from "../../components/loading";

const AboutPage = () => {
  const [aboutJSON, setAboutJSON] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      const response = await fetch("/data/about.json");
      const data = await response.json();
      setAboutJSON(data);
    };

    fetchAbout();
  }, []);

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
