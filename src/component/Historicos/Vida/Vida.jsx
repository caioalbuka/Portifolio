import React from "react";

import Hobby from "./Hobby";
import "./Vida.css";

import useSound from "use-sound";

import audio from "../../../Audio/audio.mp3";

const BoopButton = () => {
  const [play, { stop }] = useSound(audio);

  return (
    <button onMouseEnter={() => play()} onMouseLeave={() => stop()}>
      <span role="img" aria-label="trumpet">
        🎺
      </span>
    </button>
  );
  // <button onClick={play}>Play</button>;
};

const Vida = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="scroll-text">
          <span>A long time in this galaxy...</span>
          Iniciei minha jornada de trabalho aos 16 anos na empresa Denoir, eu
          trabalhava fazendo as manutenções e configurações dos computadores,
          impressoras, redes, resumindo era o "faz tudo" da área de informática,
          gostava do que eu fazia mas a vida no centro de São Paulo dentro do
          escritorio com uma janela sem ventilação estava me sufocando
          (Literalmente) e resolvi viajar por um tempo, morei um tempo em
          Paraty, no Rio e voltei, voltei mas mudando de área para Biologia e
          comecei a trabalhar em um centro de pesquisa da unicamp o CPQBA, lá eu
          entrei concursado em um projeto da petrobrás, trabalhava tanto em
          laboratório quanto no campo, trabalhando em equipe, escrevendo artigos
          entre outras funções. Quando acabou o projeto, comecei a trabalhar com
          palhaçaria que era um desejo antigo, e gostei muito, segui trabalhando
          com palhaçaria até o meio da pândemia, onde resolvi voltar a estudar
          programação, e voltei com tudo, fazendo diversos cursos online e aulas
          e me aprimorando. Hoje conto com o apoio de um Amigo que me
          "contratou" nas condições que eu estudasse as linguagem sugeridas por
          ele enquato ele passaria alguns trabalhos para eu ir fazendo. Então no
          momento estou estudando e tendo práticas de como é a vivência
          empresarial em estilo Home-Office. No momento estou gostando muito do
          que estou fazendo e faz sentido para mim trabalhar com isso, evoluir e
          obter as minhas conquistas.
          <h1>Que a força esteja conosco!</h1>
        </div>
        <div className="button-music">
          Passe o mouse no Trompete!
          <div className="icone">
            <BoopButton />
          </div>
        </div>
        <div className="hobby">
          <Hobby />
        </div>
      </div>
    </div>
  );
};

export default Vida;
