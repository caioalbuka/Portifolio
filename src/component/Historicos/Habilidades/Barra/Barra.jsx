import React from "react";
import styled from "styled-components";

const Barra = styled.div`
  width: ${(props) => `${props.porcentagem}%`};

  font-size: 18px;
  background-color: #0fd439;
  /* animation: progress-animation 5s 0; */
`;

const BarraSkill = ({ porcentagem, nome }) => {
  return (
    <Barra porcentagem={porcentagem}>
      <div>{nome}</div>
    </Barra>
  );
};

export default BarraSkill;
