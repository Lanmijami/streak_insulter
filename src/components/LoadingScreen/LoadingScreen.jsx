import React from "react";
import style from "../LoadingScreen/LoadingScreen.module.css";
import image from "../../images/Icon.png";

const LoadingScreen = () => {
  function openLogin() {
    window.location.replace("http://localhost:3000/#/Login");
  }

  return (
    <div className={style.background}>
      <div className={style.container}>
        <img
          src={image}
          alt="icon"
          className={style.picture}
          onClick={openLogin}
        />
        <h1>BREAK FREE</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
