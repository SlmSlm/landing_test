import React, { useState } from "react";
import styles from "./styles.module.scss";

const UsersOnline = () => {
  function generateRandomNum(min, max) {
    let randomNum = min + Math.random() * (max + 1 - min);
    randomNum >= min && randomNum <= max && (randomNum = Math.floor(randomNum));
    return randomNum;
  }

  const refresh = () => {
    return setUsersOnline(generateRandomNum(100, 200));
  };

  let [usersOnline, setUsersOnline] = useState(generateRandomNum(100, 200));

  setTimeout(refresh, 20000);

  return (
    <div className={styles.container}>
      <div className={styles.pin}>{usersOnline}</div>
      <div className={styles.textContent}>
        <span>Человек</span> на странице
      </div>
    </div>
  );
};

export default UsersOnline;
