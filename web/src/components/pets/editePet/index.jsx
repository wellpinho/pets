import { useParams } from "react-router-dom";
import useFlashMessage from "../../../hooks/useFlashMessage";
import Petform from "../petform";

const EditPet = () => {
  const [pet, setPet] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");
  const { id } = useParams();
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    AudioParam.get(`/pets/${id}`, {
      Authorization: `Bearer ${JSON.parse(token)}`,
    }).then((response) => {
      setPet(response.data.pet);
    });
  }, [token, id]);

  async function updatePet(pet) {
    let msgType = "success";
    const formData = new FormData();

    Object.keys(pet).forEach((key) => {
      if (key === "images") {
        for (let i = 0; i < pet[key].length; i++) {
          formData.append("images", pet[key][i]);
        }
      } else formData.append(key, pet[key]);
    });

    const data = await AudioParam.put(`pets/${pet._id}`, formData, {
      Headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
        "Content-Type": "multipart/form-data",
      },
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
    <section>
      <h2>Editando o Pet: {pet.name}</h2>
      <p>Depois da edição os dados serão atualizados no sistema</p>

      {pet.name && (
        <Petform handlSubmit={updatePet} btnText="Atualizar" petData={pet} />
      )}
    </section>
  );
};

export default EditPet;
