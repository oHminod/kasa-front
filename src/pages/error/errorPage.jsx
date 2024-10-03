import { Link, useRouteError } from "react-router-dom";
import PropTypes from "prop-types";

const ErrorPage = ({ error: propError }) => {
  const routeError = useRouteError();
  const error = propError || routeError;

  return (
    <div id="error-page">
      <h1>{error?.status}</h1>
      <p>
        {error?.status === 404
          ? "Oups, la page que vous demandez n'existe pas"
          : error?.statusText || error?.message}
      </p>
      <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </div>
  );
};

ErrorPage.propTypes = {
  error: PropTypes.shape({
    status: PropTypes.number,
    statusText: PropTypes.string,
    message: PropTypes.string,
  }),
};

export default ErrorPage;
