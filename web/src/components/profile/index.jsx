import { useState } from "react";
import api from "./../../utils/api";
import userFlashMessage from "./../../hooks/useFlashMessage";
import Input from "./../form";
import ImageAvatar from "./../../components/imageAvatar";
import "./profile.css";

const Profile = () => {
  const [user, setUser] = useState({});
  const [preview, setPreview] = useState("");
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = userFlashMessage();

  useEffect(() => {
    api
      .get("/users", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      });
  }, [token]);

  function onFileChange(e) {
    setPreview(e.target.files[0]);
    setUser({ ...user, [e.target.name]: e.target.files[0] });
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let msgType = "success";
    const formData = new FormData();

    Object.keys(user).forEach((key) => {
      formData.append(key, user[key]);
    });

    const data = await api.put(
      (`/users/edit/${user._id}`,
      formData,
      {
        headers: {
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
        })
    );

    setFlashMessage(data.message, msgType);
  }

  return (
    <section>
      <div className="profile-header">
        <h1>Perfil</h1>
        {(user.image || preview) && (
          <ImageAvatar
            src={
              preview
                ? URL.createObjectURL(preview)
                : `${process.env.REACT_APP_API}/images/users${user.image}`
            }
            alt={user.name}
          />
        )}
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <Input
          text="Image"
          type="file"
          name="name"
          placeholder="avatar"
          handleOnChange={onFileChange}
        />
        <Input
          text="email"
          type="email"
          name="email"
          placeholder="Digite seu email"
          handleOnChange={handleChange}
          value={user.email || ""}
        />
        <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite seu nome"
          handleOnChange={handleChange}
          value={user.name || ""}
        />
        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          handleOnChange={handleChange}
        />
        <Input
          text="Confirme sua senha"
          type="password"
          name="confirmPassword"
          placeholder="Confirme a senha"
          handleOnChange={handleChange}
        />
        <Input
          text="Telefone"
          type="text"
          name="phone"
          placeholder="Digite seu telefone"
          handleOnChange={handleChange}
          value={user.phone || ""}
        />
        <div className="d-grid gap-2 col-6">
          <button className="btn-custom" type="submit">
            Atualizar perfil
          </button>
        </div>
      </form>
    </section>
  );
};

export default Profile;
