import { Link } from "react-router-dom";
import Input from "./../form";
import "./login.css";

const Login = () => {
  function handleOnChange(event) {}

  return (
    <main className="container">
      <form>
        <h1 className="h3 mb-3 fw-normal text-color">Login</h1>

        <Input
          text="Nome"
          type="email"
          name="name"
          placeholder="Email"
          handleOnChange={handleOnChange}
        />

        <Input
          text="Senha"
          type="text"
          name="password"
          placeholder="Senha"
          handleOnChange={handleOnChange}
        />

        <div class="d-grid gap-2 col-6">
          <button className="btn-custom" type="submit">
            Entrar
          </button>
        </div>
        <p>
          Não tem conta? <Link to="/register">Criar conta</Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
