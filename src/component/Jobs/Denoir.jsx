import React from "react";

const list = [
  "Responsável pelos serviços gerais de informática",
  "Instalação e configuração da rede na empresa",
];

const Denoir = ({ info }) => {
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
        return <Denoir info={item} />;
      })}
    </div>
  );
}
