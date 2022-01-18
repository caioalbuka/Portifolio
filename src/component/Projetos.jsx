import React from "react";
import "./Projetos.css";

const Projetos = ({ children, info }) => {
  return (
    <div className="main">
      {info}
      {children}
    </div>
  );
};

export default Projetos;
