import React from "react";
import style from "./Login.module.css";
import image from "../../images/TEST.png";

const login = () => {
  return (
    <div className={style.background}>
      <div className={style.main}>
        <div>
          <h1 className={style.heading}>Uloguj se...</h1>
          <h4 className={style.sub_heading}>ako smes</h4>
        </div>

        <label htmlFor="username">Korisnicko ime</label>

        <input
          type="text"
          name="username"
          id="username"
          className={style.input}
        />

        <br></br>
        <label htmlFor="password">Lozinka</label>

        <input
          type="text"
          name="password"
          id="password"
          className={style.input}
        />

        <div className={style.buttons}>
          <button>Prijavi se</button>
          <button>Registruj se</button>
        </div>
      </div>

      <div>
        <img className={style.image} src={image} alt="icon" />
      </div>
    </div>
  );
};

export default login;
