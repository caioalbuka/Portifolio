import React from "react";
// import Typical from "react-typical";

import "./Vida.css";
// import ButtonPause from "../ButtonPause";
import playPause from "./ButtonPause";

const Vida = () => {
  // <audio id="audio">
  //   <source
  //     src="../Users/caioalbuka/VsCode/web-cv/public/audio.mp3"
  //     type="audio.mpeg"
  //   />
  //   ;
  // </audio>;
  return (
    <div className="wrapper">
      <div className="scroll-text">
        {/* <div className="vida-main">
      <div className="historia-vida"> */}
        {/* Esse Texto vai passando tipo StarWars - 
        sem tantos efeitos */}
        Sou o Caio, tenho 36 anos. Iniciei minha jornada de trabalho aos 16 anos
        na empresa Denoir, eu trabalhava fazendo as manutenções e configurações
        dos computadores, impressoras, redes, resumindo era o "faz tudo" da área
        de informática, gostava do que eu fazia mas a vida no centro de São
        Paulo dentro do escritorio com uma janela sem ventilação estava me
        sufocando (Literalmente) e resolvi viajar por um tempo, morei um tempo
        em Paraty, no Rio e voltei, voltei mas mudando de área para Biologia e
        comecei a trabalhar em um centro de pesquisa da unicamp o CPQBA, lá eu
        entrei concursado em um projeto da petrobrás, trabalhava tanto em
        laboratório quanto no campo, trabalhando em equipe, escrevendo artigos
        entre outras funções. Quando acabou o projeto, comecei a trabalhar com
        palhaçaria que era um desejo antigo, e gostei muito, segui trabalhando
        com palhaçaria até o meio da pândemia, onde resolvi voltar a estudar
        programação, e voltei com tudo, fazendo diversos cursos online e aulas e
        me aprimorando. Hoje conto com o apoio de um Amigo que me "contratou"
        nas condições que eu estudasse as linguagem sugeridas por ele enquato
        ele passaria alguns trabalhos para eu ir fazendo. Então no momento estou
        estudando e tendo práticas de como é a vivência empresarial em estilo
        Home-Office. No momento estou gostando muito do que estou fazendo e faz
        sentido para mim trabalhar com isso, evoluir e obter as minhas
        conquistas.
      </div>
      <div className="button-pause">
        {/* <ButtonPause>Pause a musicaIcone de pausar</ButtonPause> */}
        {/* <button id="playPauseBTN" onClick={playPause()}>
          Play
        </button> */}
        {/* <playPause>PAUSAR</playPause> */}
      </div>
      <div className="hobby"></div>
      {/* Essas fotos vao passando pela tela da direita para a esquerda - abaixo do texto
      <img "Mel na praia"/>
       <img "Tilha"/>
         <img "tocando violao" />
         <img "surfando" />
           <img "Palhaço" />
     </div> */}
    </div>
  );
};

export default Vida;
