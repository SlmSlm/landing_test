import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import styles from "./styles.module.scss";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2067ntv",
        "template_2t55ful",
        form.current,
        "rbZy0X9be0k91HNJZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.form}>
          <label>
            <div className={`${styles.icon} ` + `${styles.nameIcon}`}></div>
            <input type="text" name="name" placeholder="Введите Ваше имя" />
          </label>
          <label>
            <div className={`${styles.icon} ` + `${styles.emailIcon}`}></div>
            <input type="email" name="email" placeholder="Действующий e-mail" />
          </label>
        </div>
        <button type="submit">
          ДА! Я ХОЧУ ПОЛУЧИТЬ VIP ДОСТУП К QUANTUM SYSTEM ПРЯМО СЕЙЧАС
        </button>
      </form>
    </div>
  );
};

export default Form;
