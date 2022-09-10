import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Input from "./../form";

// context
import { Context } from "../../context/UserContext";

function Register() {
  const [user, setUser] = useState({});
  const { register } = useContext(Context);

  function handleOnChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    register(user);
  }

  return (
    <main className="container">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal text-color">Criar conta</h1>

        <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Nome"
          handleOnChange={handleOnChange}
        />

        <Input
          text="Email"
          type="email"
          name="email"
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

        <Input
          text="Telefone"
          type="tel"
          name="telefone"
          placeholder="Telefone"
          handleOnChange={handleOnChange}
        />

        <div className="d-grid gap-2 col-6">
          <button className="btn-custom" type="submit">
            Criar
          </button>
        </div>
        <p>
          Já tem conta? <Link to="/login">Entrar</Link>
        </p>
      </form>
    </main>
  );
}

export default Register;
