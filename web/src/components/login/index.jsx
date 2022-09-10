import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Input from "./../form";
import "./login.css";
import { Context } from "./../../context/UserContext";

const Login = () => {
  const [user, setUser] = useState({});
  const { login } = useContext(Context);

  function handleOnChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    login(user);
  }

  return (
    <main className="container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="h3 mb-3 fw-normal text-color">Login</h1>

        <Input
          text="Email"
          type="email"
          name="name"
          placeholder="Email"
          handleOnChange={handleOnChange}
        />

        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Senha"
          handleOnChange={handleOnChange}
        />

        <div className="d-grid gap-2 col-6">
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
