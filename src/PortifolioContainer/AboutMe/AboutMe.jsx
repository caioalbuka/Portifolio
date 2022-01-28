import React, { useEffect, useState } from "react";
import axios from "axios";

// import Button from "../../Buttons/Button";
import Projetos from "../../component/Projetos";
// import Info from "../../component/Info";

import "./AboutMe.css";
import Title from "../../Style/Title/Title";
import SubTitle from "../../Style/SubTitle/SubTitle";
import TitleP from "../../Style/TitleP/TitleP";
import SubtitleP from "../../Style/SubTitleP/SubtitleP";

export default function AboutMe() {
  // const handleContrate = () => {};

  const info = [
    {
      projetos: "Crachá NLW",
      url: "https://caioalbuka.github.io/NLW/",
    },
    {
      projetos: "Jogo do quadrado",
      url: "https://caioalbuka.github.io/Jogo-do-Quadrado/",
    },
    {
      projetos: "Lista de Tarefas",
      url: "https://caioalbuka.github.io/Lista-de-Tarefas/",
    },
    {
      projetos: "Contador",
      url: "https://caioalbuka.github.io/Contador/",
    },
  ];

  // const [data, setdata] = useState();

  // useEffect(() => {
  //   Info.then((item) => {
  //     setdata(item.data.data);
  // useEffect(() => {
  //   axios.get("https://gorest.co.in/public/v1/todos").then((item) => {
  //     setdata(item.data.data);
  // setdata([item.data.data[0]]);
  // -TESTEMUNHAL;
  //   });
  // }, []);
  // console.log(data);

  return (
    <div className="container">
      <div className="header-about">
        <span>
          <TitleP title="Sobre Mim" />
        </span>
        <SubtitleP title="Um pouco da minha tragetoria e realizações" />
      </div>
      <div className="photo-info">
        {/* <div className="photo"> */}
        <img src="photoAboutMe.jpg" />
        {/* </div> */}
        <div className="about-me">
          <div className="text">
            Olá sou o Caio, iniciei minha jornada de trabalho como T.I.. Após um
            tempo fora da area resolvi voltar aos estudos e voltei com tudo,
            hoje estou trabalhando e estudando junto com um amigo. Além desse
            portifolio que eu mesmo fiz utilizando ReactJs, Html e Css e
            JavaScript tenho criado outros projetos. Aqui estão alguns deles que
            fiz e publiquei no GitHub-Pages.
          </div>
          <div className="projetos">
            <Title title="Meus Projetos" />
          </div>
          <div className="subtitle-projetos">
            <SubTitle title="Abaixo meus projetos publicados no GH-Pages" />
          </div>
          <h8>Click para acessar!</h8>
          <div className="array-projetos">
            {info &&
              info.map((item) => (
                // <Projetos info={item.projetos}>
                <a href={item.url} target="_blank">
                  {" "}
                  <Projetos info={item.projetos}></Projetos>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
