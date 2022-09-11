import React from "react";
import styles from "./styles.module.scss";

import speaker from "../../../Assets/Images/speaker.svg";

const Player = (props) => {
  const unMute = () => {
    return (
      (document.querySelector("video").muted = false),
      (document.getElementById("volume").style.display = "none")
    );
  };

  return (
    <div className={styles.player}>
      <div className={styles.volume} id="volume" onClick={() => unMute()}>
        <img src={speaker} alt="speaker" />
        <span>Включить звук</span>
      </div>
      <video src={props.movie} autoPlay muted />
    </div>
  );
};

export default Player;
