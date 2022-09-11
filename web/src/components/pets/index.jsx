import { useState } from "react";
import { Link } from "react-router-dom";
import "./pets.css";

const MyPets = () => {
  const [pets, setPets] = useState([]);
  return (
    <>
      <div className="alert alert-secondary" role="alert">
        <span className="align-itens">
          <h3>Meus pets</h3>
          <Link to="/pets/add" className="btn-pets">
            Cadastrar pets
          </Link>
        </span>
      </div>
      <div>
        {pets.length ? (
          <div className="text-success">Meus pets cadastrados</div>
        ) : (
          <div className="text-danger">Não há pets cadastrados</div>
        )}
      </div>
    </>
  );
};

export default MyPets;
