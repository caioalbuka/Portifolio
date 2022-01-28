import React from "react";

import Bk from "../../Jobs/Bk";
import Denoir from "../../Jobs/Denoir";
import Cpqba from "../../Jobs/Cpqba";

import SubTitle from "../../../Style/SubTitle/SubTitle";
import Title from "../../../Style/Title/Title";
//O CSS nao esta importantando.. verificar erro.

import "./Style.css";
const Profissional = () => {
  return (
    <div className="profissional-main">
      <div className="profissional">
        <Title title="Experiencias Profissionais" />
      </div>

      <div id="profissional-container" className="profissional-container">
        <div>
          <SubTitle title="TÉCNICO DE CAMPO" />
          <SubTitle title="UNICAMP-CPQBA" />
          <SubTitle title="2009-2013" />
          <Cpqba />
        </div>
        <div>
          <SubTitle title="ATENTENDE DE HELP DESK" />
          <SubTitle title="BK CONSULTORIA-CORREIOS" />
          <SubTitle title="2008-2009" />
          <Bk />
        </div>
        <div>
          <SubTitle title="TÉCNICO DE INFORMATICA" />
          <SubTitle title="DENOIR" />
          <SubTitle title="2005-2006" />
          <Denoir />
        </div>
      </div>
    </div>
  );
};

export default Profissional;
