import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <div className="logo">
        <Link to="/kasa-front/">
          <img src="/kasa-front/LOGO.png" alt="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              to="/kasa-front/"
              className={location.pathname === "/kasa-front/" ? "active" : ""}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/kasa-front/about"
              className={
                location.pathname === "/kasa-front/about" ? "active" : ""
              }
            >
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
