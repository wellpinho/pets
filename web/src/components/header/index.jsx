import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand logo" href="#">
            <img src={Logo} alt="Adote um pet" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active btn-menu"
                  aria-current="page"
                  href="#"
                >
                  <Link to="/">Adotar</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/login">Login</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/register">Cadastrar</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
