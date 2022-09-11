import React from "react";
import logo from "../../Assets/Images/logo.png";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.content}>
        <img src={logo} alt="logo" />
        <h3>
          Посмотрите это видео и узнайте, как зарабатывать более $630,820 каждый
          месяц!
        </h3>
      </div>
    </header>
  );
};

export default Header;
