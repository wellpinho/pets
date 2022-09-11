import styles from "./image.module.css";

const ImageAvatar = (src, alt, width) => {
  return (
    <img className={`${styles.image} ${styles[width]}`} src={src} alt={alt} />
  );
};

export default ImageAvatar;
