import React, { useState } from "react";
import styles from "./styles.module.scss";

const PlacesLeft = () => {
  function generateRandomNum(min, max) {
    let randomNum = min + Math.random() * (max + 1 - min);
    randomNum >= min && randomNum <= max && (randomNum = Math.floor(randomNum));
    return randomNum;
  }

  const refresh = () => {
    return setFreePlaces(generateRandomNum(1, 10));
  };

  let [freePlaces, setFreePlaces] = useState(generateRandomNum(1, 10));

  setTimeout(refresh, 10000);

  return (
    <div className={styles.container}>
      <div className={styles.pin}>{Math.floor(freePlaces)}</div>
      <div className={styles.textContent}>
        <span>Свободных</span> мест
      </div>
    </div>
  );
};

export default PlacesLeft;
