import { useEffect, useState } from "react";
import styles from "./flashMessage.module.css";
import bus from "./../../utils/bus";

const FlashMessage = () => {
  const [visibility, setVisibility] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    bus.addListener("flash", ({ message, type }) => {
      setVisibility(true);
      setMessage(message);
      setType(type);

      setTimeout(() => {
        setVisibility(false);
      }, 3000);
    });
  }, []);

  return (
    visibility && (
      <div className={`${styles.message} ${styles.type}`}>{message}</div>
    )
  );
};

export default FlashMessage;
