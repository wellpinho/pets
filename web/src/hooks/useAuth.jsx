import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import useFlashMessage from "./useFlashMessage";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const { setFlashMessage } = useFlashMessage();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
  }, []);

  async function register(user) {
    let msgText = "Cadastrado com sucesso!";
    let msgType = "success";

    try {
      const data = await api.post("/users", user).then((response) => {
        return response.data;
      });

      await authUser(data);
    } catch (error) {
      msgText = error.response.data.message;
      msgType = "error";
    }

    setFlashMessage(msgText, msgType);
  }

  // get token from user authenticcated
  async function authUser(data) {
    setAuthenticated(true);

    // save token on localstore
    localStorage.setItem("token", JSON.stringify(data.token));

    // send user to home page
    navigate.push("/");
  }

  function logout() {
    msgText = "Deslogado com sucesso!";
    msgType = "success";

    setAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = undefined;
    navigate.push("/");

    setFlashMessage(msgText, msgType);
  }

  return { authenticated, register, logout };
}
