import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "./../../utils/api";
import useFlshMessage from "../../hooks/useFlashMessage";
import ImageAvatar from "../../components/imageAvatar";
import "./pets.css";

const MyPets = () => {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlshMessage();

  useEffect(() => {
    api
      .get("/pets/mypets", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPets(response.data.pets);
      });
  }, [token]); // quando algo depende para continuar deve ser passado aqui

  async function removePet(id) {
    let msgType = "success";

    const data = await api
      .delete(`/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        // forma simples de atualizar list sem fazer requests no banco
        const updateListPets = pets.filter((pet) => pet._id !== id);
        setPets(updateListPets);

        return response.data;
      })
      .catch((err) => {
        msgType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);
  }

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
          pets.map((pet) => {
            <div key={pet._id}>
              <ImageAvatar
                src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`}
                alt={pet.name}
                width="px75"
              />
              <strong>{pet.name}</strong>
              <div className="actions">
                {pet.available ? (
                  <>
                    {pet.adopter && <button>Cloncluir adoção</button>}
                    <Link to={`/pets/edit/${pet._id}`}>Editar</Link>
                    <button onClick={() => removePet(pet._id)}>Excluir</button>
                  </>
                ) : (
                  <p>Pet já foi adotado</p>
                )}
              </div>
            </div>;
          })
        ) : (
          <div className="text-danger">Não há pets cadastrados</div>
        )}
      </div>
    </>
  );
};

export default MyPets;
