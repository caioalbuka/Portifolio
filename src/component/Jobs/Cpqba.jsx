import React from "react";

const list = [
  "Trabalho em equipe",
  "Elaboração e apresentação de artigos e projetos em simpósios",
  "Manutenção da área de pesquisa",
  "Extração de óleos",
];

const Cpqba = ({ info }) => {
  console.log(info);
  return (
    <div>
      <div>- {info}</div>
    </div>
  );
};

export default function Info() {
  return (
    <div className="Info">
      {list.map((item) => {
        return <Cpqba info={item} />;
      })}
    </div>
  );
}
