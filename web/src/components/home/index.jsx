import api from "../../utils/api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get("/pets").then((response) => response.data.pets);
    console.log(pets); // precisa criar rota listagem dos pets no backend
  }, []);

  return (
    <section>
      <div className="banner">
        <h1 className="text-center">Adote um pet</h1>
      </div>

      <div className="row">
        {pets.length &&
          pets.map((pet) => {
            if (pet.available === true) {
              <div className="col-xs-12 col-md-6 col-lg-3" key={pet._id}>
                <div className="card">
                  <img
                    src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{pet.name}</h5>
                    <small className="card-text">idade: {pet.age}</small>
                    <small className="card-text">peso: {pet.weight}</small>
                    <small className="card-text">cor: {pet.color}</small>
                    <Link
                      to={`/pets/${pet._id}`}
                      className="btn btn-sm btn-primary"
                    >
                      Mais detalhes...
                    </Link>
                  </div>
                </div>
              </div>;
            }
          })}
        {pets.length === 0 && (
          <p class="alert alert-dark" role="alert">
            Não há pets para adoção no momento
          </p>
        )}
      </div>
    </section>
  );
};

export default Home;
