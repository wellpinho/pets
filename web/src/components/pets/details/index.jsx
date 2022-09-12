import api from "../../../utils/api";
import { useParams } from "react-router-dom";
import useFlashMessage from "../../../hooks/useFlashMessage";
import { useState } from "react";
import { useEffect } from "react";

const PetDetails = () => {
  const [pet, setPet] = useState({});
  const { id } = useParams();
  const { setFlashMessage } = useFlashMessage();
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api.get(`/pets/${id}`).then((response) => {
      setPet(response.data.pet);
    });
  }, [id]); // useEffect depende do id

  async function schedule() {
    let msgType = "success";
    const data = await api
      .put(`pets/schedule/${pet._id}`, {
        Authorization: `Bearer ${JSON.parse(token)}`,
      })
      .then((response) => {
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
      {pet.name && (
        <section>
          <div>
            <h1>Au au... eu sou o {pet.name}</h1>
            <p>Se gostou de mim, entre em contato para uma visita!</p>
          </div>

          <div>
            {pet.images.map((image, index) => {
              <img
                src={`${process.env.REACT_APP_API}/images/pets/${pet.image}`}
                alt={pet.name}
                key={index}
              />;
            })}
          </div>
          {token ? (
            // solicitar visita via whatsapp
            <button onClick={schedule}>Solicitar visita</button>
          ) : (
            <p>
              Você precisa de uma <Link to="/users/register">conta para</Link>
              agendar visita
            </p>
          )}
        </section>
      )}
    </>
  );
};

export default PetDetails;
