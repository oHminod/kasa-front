import { useState } from "react";
import AvatarLoader from "./avatarLoader";
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
        className={isLoading ? "hidden" : "block"}
      />
    </div>
  );
};

HostAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default HostAvatar;
