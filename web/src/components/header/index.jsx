import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./header.css";

import { Context } from "./../../context/UserContext";

const Header = () => {
  const { authenticated, logout } = useContext(Context);

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand logo" to="/">
            <img src={Logo} alt="Adote um pet" />
          </Link>
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
              {!authenticated ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <Link to="/pets/mypets">Minhas adoções</Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <Link to="/pets/mypets">Meus pets</Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <Link to="/users/profile">Perfil</Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link logout" onClick={logout}>
                      Sair
                    </a>
                  </li>
                </>
              ) : (
                <>
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
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
