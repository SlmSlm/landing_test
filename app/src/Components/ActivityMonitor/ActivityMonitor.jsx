import React from "react";
import PlacesLeft from "./PlacesLeft/PlacesLeft";
import styles from "./styles.module.scss";
import UsersOnline from "./UsersOnline/UsersOnline";

const ActivityMonitor = () => {
  return (
    <div className={styles.container}>
      <UsersOnline />
      <PlacesLeft />
    </div>
  );
};

export default ActivityMonitor;
