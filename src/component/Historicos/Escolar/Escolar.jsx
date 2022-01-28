import React from "react";

import "./Escolar.css";

import SubTitle from "../../../Style/SubTitle/SubTitle";
import Title from "../../../Style/Title/Title";

const Escolar = () => {
  return (
    <div className="escolar-main">
      <div className="escola">
        <Title title="Colégio e Faculdade Modúlo Paulista(Fiap)" />
        <SubTitle title="2001-2003" />
        <SubTitle title="- Colegial Técnico Voltado a Processamento de Dados" />
        <div id="imagem-escola" className="imagem-escola">
          <img src="modulo-info.png" />
        </div>
      </div>
      <div className="cursos">
        <div>
          <Title title="New Horizont" />
          <SubTitle title="2001-2002" />
          <SubTitle title="- Pacote Office" />
          <SubTitle title="- Flash 5.0" />
          <SubTitle title="- HTML - Intermediário" />
        </div>
        <div>
          <Title title="StackX" />
          <SubTitle title="- Python Basico" />
          <SubTitle title="- Soft Skills" />
        </div>
        <div>
          <Title title="Digital Innovation One" />
          <SubTitle title="2021" />
          <SubTitle title="- Introdução ao Git e Github" />
          <SubTitle title="- Introdução a criação de websites com HTML e CSS3" />
          <SubTitle title="- Programação para internet com JAVAScript" />
        </div>
      </div>
    </div>
  );
};

export default Escolar;
