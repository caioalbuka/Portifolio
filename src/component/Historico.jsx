import React, { useState } from "react";

import Button from "../Buttons/Button";
import Escolar from "./Historicos/Escolar/Escolar";
import Inicio from "./Historicos/Inicio/Inicio";
import Profissional from "./Historicos/Profissional/Profissional";
import Habilidades from "./Historicos/Habilidades/Habilidades";
import Vida from "./Historicos/Vida/Vida";

import "./Historico.css";
import Title from "../Style/Title/Title";
import Skill from "./Historicos/Habilidades/Skill";

const Historico = () => {
  const [historico, setHistorico] = useState(<Inicio />);

  const trocaHistorico = (meuComponente) => {
    setHistorico(meuComponente);
  };

  return (
    <div className="historico-main">
      <Title title="Históricos e Vida" />
      <div className="historico-container">
        <div className="historico-menu">
          <span>
            <button onClick={() => trocaHistorico(<Inicio />)}>Inicio</button>
          </span>
          <span>
            <button onClick={() => trocaHistorico(<Escolar />)}>
              Histórico Escolar
            </button>
          </span>
          <span>
            <button onClick={() => trocaHistorico(<Profissional />)}>
              Histórico Profissional
            </button>
          </span>
          <span>
            <button onClick={() => trocaHistorico(<Habilidades />)}>
              Cursos e Habilidades
            </button>
          </span>
          <span>
            <button onClick={() => trocaHistorico(<Vida />)}>
              Histórico de Vida
            </button>
          </span>
        </div>
        <div className="historico-componet">{historico}</div>
      </div>
    </div>
  );
};

export default Historico;
