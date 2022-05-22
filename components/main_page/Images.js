import React from "react";
import uuid from "react-uuid";
import styles from "../../styles/Home.module.css";

const Images = ({ urls }) => {
  return (
    <div className={styles.imgcontainer}>
      {/* if urls are present then display them */}
      {urls.length > 0
        ? urls.map((url) => {
            // modify the url to be a link to the image
            const new_url = url.replaceAll("&amp;", "&");
            return (
              <img
                key={uuid()}
                className={styles.img}
                src={new_url}
                alt={new_url}
              />
            );
          })
        : null}
    </div>
  );
};

export default Images;
