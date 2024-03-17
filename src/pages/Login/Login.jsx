import React from "react";
import style from "./Login.module.css";
import image from "../../images/TEST.png";

const login = () => {
  const usernameArray = ["admin", "lukapetrovic00@gmail.com", "milan"];
  const passwordArray = ["admin", "luka", "jasamlanmimajami"];

  function openHomepage() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (
      (usernameArray[0] === usernameInput &&
        passwordArray[0] === passwordInput) ||
      (usernameArray[1] === usernameInput &&
        passwordArray[1] === passwordInput) ||
      (usernameArray[2] === usernameInput && passwordArray[2] === passwordInput)
    ) {
      window.location.replace("http://localhost:3000/#/Homepage");
      console.log("Gay");
    } else {
      alert("Kredencijali nisu na mestu, MAJMUNEEEEE!!");
    }
  }

  return (
    <div className={style.background}>
      <div className={style.main}>
        <div>
          <h1 className={style.heading}>Uloguj se...</h1>
          <h4 className={style.sub_heading}>ako smes</h4>
        </div>

        <label htmlFor="username">e-mail adresa</label>

        <input
          type="text"
          name="username"
          id="username"
          className={style.input}
        />

        <br></br>
        <label htmlFor="password">Lozinka</label>

        <input
          type="password"
          name="password"
          id="password"
          className={style.input}
        />

        <div className={style.buttons}>
          <div className={style.button1} onClick={openHomepage}>
            Prijavi se
          </div>
          <div className={style.button2}>Registruj se</div>
        </div>
      </div>

      <div>
        <img className={style.image} src={image} alt="icon" />
      </div>
    </div>
  );
};

export default login;
