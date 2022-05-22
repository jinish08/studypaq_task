import React from "react";
import styles from "../../styles/Home.module.css";

const Button = ({ loading, fetchImages }) => {
  return (
    <button
      type="button"
      className={`${loading ? styles.button_loading : styles.button}`}
      onClick={fetchImages}
    >
      <span className={styles.button__text}>{loading ? "" : "Get Images"}</span>
    </button>
  );
};

export default Button;
