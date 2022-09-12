import { useState, useEffect } from "react";
import api from "../../../utils/api";
import ImageAvatar from "../../../components/imageAvatar";

const MyAdoptions = () => {
  const [pets, setPets] = useState();
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api
      .get("/pets/myadoptions", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => setPets(response.data.pets));
  }, [token]);

  return (
    <section>
      <div>
        <h2>Minhas adoções</h2>
      </div>
      <div>
        {pets.length &&
          pets.map((pet) => {
            <div key={pet._id} className="pet-list">
              <ImageAvatar
                src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`}
                alt={pet.name}
                width="px75"
              />
              <strong>{pet.name}</strong>
              <strong>Ligue para:</strong> {pet.user.phone}
              <strong>Fale com :</strong> {pet.user.name}
              <div className="action">
                <p>Adoção em processo...</p>
              </div>
            </div>;
          })}
      </div>
    </section>
  );
};

export default MyAdoptions;
