import React from "react";
import Typical from "react-typical";

import BarraSkill from "./Barra/Barra";
// import Espanhol from "../Habilidades/Barra/Espanhol.jsx";
// import Ingles from "../Habilidades/Barra/Ingles.jsx";
// import JavaScript from "../Habilidades/Barra/JavaScript.jsx";
// import Html from "../Habilidades/Barra/Html.jsx";
// import Manutencao from "../Habilidades/Barra/Manutencao.jsx";
// import Reacts from "../Habilidades/Barra/React";

import "./Skill.css";
// import { Barra } from "./Barra/style.js";
let listSkill = [
  {
    nome: "React",
    porcentagem: 10,

    nome: "JavaScript",
    porcentagem: 15,

    nome: "Html e Css3",
    porcentagem: 20,

    nome: "Manutenção de Computadores",
    porcentagem: 60,
  },
];
const Skill = () => {
  const listSkillNew = listSkill.map((nome, porcentagem) => {
    return { nome: nome, porcentagem: porcentagem };
  });
  return (
    <div className="skill-main">
      <div className="linguas">
        <h2>Idiomas</h2>
        <div className="lingua-max"></div>
      </div>

      <div className="hardSkill">
        <h2>HardSkill</h2>
        <div className="hard-max">
          <BarraSkill nome={"React"} porcentagem={10} />
          teste
          <listSkill />
        </div>
      </div>

      <div className="softSkill">
        <h2>SoftSkill</h2>
        <Typical
          loop={Infinity}
          steps={[
            "Carisma😎",
            1000,
            "Trabalho em Grupo",
            1000,
            "Comunicação",
            1000,
            "Pensamento Lógico",
            1000,
          ]}
        />
      </div>
    </div>
  );
};

export default Skill;
