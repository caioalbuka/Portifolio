import React from "react";

const list = [
  "Manutenção dos softwares dos correios via remoto",
  "Atendimento ao cliente",
  "Instalação e atualização de programas via remoto",
];

const Bk = ({ info }) => {
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
        return <Bk info={item} />;
      })}
    </div>
  );
}
