import "./footer.css";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24">
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>
            <span className="mb-3 text-muted logo-footer">
              <img src={Logo} alt="adote um pet" />
              <small>
                2022 Deus seja louvado! Desenvolvedor
                <a href="https://www.linkedin.com/in/wellpinho/">
                  <small> Wellington Pinho</small>
                </a>
              </small>
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#twitter" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" width="24" height="24">
                  <i class="bi bi-instagram"></i>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
