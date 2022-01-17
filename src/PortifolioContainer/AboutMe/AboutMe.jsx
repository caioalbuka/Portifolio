import React from "react";

import Button from "../../Buttons/Button";

import "./AboutMe.css";

export default function AboutMe() {
  const handleContrate = () => {};
  var newArray = [];
  newArray[0] = ["Programador Jr", "JavaScript"];
  // var newArray[0] = [Caio, Pedro, Maria];
  return (
    <div className="container">
      <div className="header-about">
        <span>
          <h1>Sobre Mim</h1>
        </span>
        <span>Me conheça um pouco mais </span>
      </div>
      <div className="photo-info">
        {/* <div className="photo"> */}
        <img src="photoAboutMe.jpg" />
        {/* </div> */}
        <div className="about-me">
          <div className="text">
            Ola sou o Caio, iniciei minha jornada de trabalho como tecnico de
            T.I
          </div>
          <div className="hardskill">HardSkill</div>
          <div className="array-hardskill">
            <newArray />
          </div>
          <div className="bt-about">
            <Button onClick={handleContrate}> Contrate-me</Button>
            <a href="cv-caio.pdf" download="Caio Cv cv-caio.pdf">
              <button className="btn-highlighted-btn">CV em Pdf</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
