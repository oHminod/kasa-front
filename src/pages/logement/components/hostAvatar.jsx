import { useState } from "react";
import AvatarLoader from "../../../components/avatarLoader";
import PropTypes from "prop-types";

const HostAvatar = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="host-avatar">
      {isLoading && <AvatarLoader />}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </div>
  );
};

HostAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default HostAvatar;
