import Collapse from "../../components/collapse";
import Image from "../../components/image";

const AboutPage = () => {
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
        <Collapse
          trigger="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          rounded={false}
        />
        <Collapse
          trigger="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          rounded={false}
        />
        <Collapse
          trigger="Service"
          text="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
          rounded={false}
        />
        <Collapse
          trigger="Sécurité"
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          rounded={false}
        />
      </div>
    </div>
  );
};

export default AboutPage;
