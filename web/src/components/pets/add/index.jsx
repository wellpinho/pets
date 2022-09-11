import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./../../../utils/api";
import useFlashMessage from "../../../hooks/useFlashMessage";

import "./addpet.css";
import Petform from "../petform";

const AddPet = () => {
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();
  const navigate = useNavigate();

  async function createPet(e) {
    let msgType = "success";
    const formData = new FormData();

    Object.keys(pet).forEach((key) => {
      if (key === "images") {
        for (let i = 0; i < pet[key].length; i++) {
          formData.append("images", pet[key][i]);
        }
      } else formData.append(key, pet[key]);
    });

    const data = await api
      .post("pets/create", formData, {
        Authorization: `Bearer ${JSON.parse(token)}`,
        "Content-Type": "nultipart/form-data",
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        msgType = "error";

        return err.response.data;
      });

    setFlashMessage(data.message, msgType);

    if (msgType !== "error") navigate.push("/pets/mypets");
  }

  return (
    <>
      <div>
        <h2>Cadstre seu pet</h2>
        <p className="alert alert-warning" role="alert">
          Ao finalizar o cadastro, o pet ficará disponível para adoção.
        </p>
      </div>
      <form>
        <Petform handlSubmit={createPet} />
      </form>
    </>
  );
};

export default AddPet;
