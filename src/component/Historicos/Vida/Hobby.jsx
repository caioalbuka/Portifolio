import React from "react";

// const Hobby = Hobby.map((photo, descricao) => {
//   return { imagem: photo, descricao: descricao };
// });
// export default Hobby;

// import styled from "styled-components";

import "./Hobby.css";
const Hobby = () => {
  return (
    <div className="hobby">
      <div className="foto-container">
        <img className="foto" src="violao.jpeg" />
        <div className="descricao">Curtindo um Violão em casa</div>
      </div>

      <div className="foto-container">
        <img className="foto" src="malabares.jpeg" />
        <div className="descricao">Um pouco de Malabares pra viver a vida!</div>
      </div>

      <div className="foto-container">
        <img className="foto" src="mel.jpeg" />
        <div className="descricao">Mel na Praia</div>
      </div>
    </div>
  );
};

export default Hobby;
