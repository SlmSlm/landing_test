import React from "react";
import movie from "../../Assets/movie.mp4";
import Form from "./Form/Form";
import Player from "./Player/Player";
import styles from "./styles.module.scss";

const Content = () => {
  return (
    <div className={styles.content}>
      <Player movie={movie} />
      <Form />
    </div>
  );
};

export default Content;
