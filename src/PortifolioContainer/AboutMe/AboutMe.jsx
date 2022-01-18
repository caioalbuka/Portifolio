import React, { useEffect, useState } from "react";
import axios from "axios";

// import Button from "../../Buttons/Button";
import Projetos from "../../component/Projetos";
// import Info from "../../component/Info";

import "./AboutMe.css";

export default function AboutMe() {
  // const handleContrate = () => {};

  const info = [
    {
      projetos: "Jogo do quadrado",
      url: "https://caioalbuka.github.io/Jogo-do-Quadrado/",
    },
    {
      projetos: "Lista de Tarefas",
      url: "https://caioalbuka.github.io/Lista-de-Tarefas/",
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
          <h1>Sobre Mim</h1>
        </span>
        <span>Me conheça um pouco mais </span>
      </div>
      <div className="photo-info">
        {/* <div className="photo"> */}
        {/* <img src="photoAboutMe.jpg" /> */}
        {/* </div> */}
        <div className="about-me">
          <div className="text">
            Olá sou o Caio, iniciei minha jornada de trabalho como T.I.. Após um
            tempo fora da area resolvi voltar aos estudos e voltei com tudo,
            hoje estou trabalhando e estudando junto com um amigo. Além desse
            portifolio que eu mesmo fiz utilizando ReactJs, Html e Css e
            JavaScript tenho criando alguns projetos esses são alguns dos
            projetos que fiz.
          </div>
          <div className="projetos">Projetos</div>
          <h6>Abaixo meus projetos publicados</h6>
          <h8>Click para acessar!</h8>
          <div className="array-projetos">
            {info &&
              info.map((item) => (
                // <Projetos info={item.projetos}>
                <a href={item.url}>
                  {" "}
                  <Projetos info={item.projetos}></Projetos>
                </a>
                // </Projetos>
              ))}
            {/* {data &&
              data.map((item) => (
                <Button text={item.title} id={item.id} completed={item.status}>
                  {item.title}
                </Button>
              ))} */}
          </div>
          <div className="bt-about">
            {/* <Button onClick={handleContrate}> Contrate-me</Button> */}
            <a href="cv-caio.pdf" download="Caio Cv cv-caio.pdf">
              <button className="btn-highlighted-btn">CV em Pdf</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
