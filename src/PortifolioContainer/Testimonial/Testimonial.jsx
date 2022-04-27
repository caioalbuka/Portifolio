import React from "react";
import "./animacao.css";
import "./Testimonial.css";
import Testemonials from "./Testemonials";

export default function Testemonial() {
  const info = [
    {
      fotopessoa: "deia.png",
      nome: "Andréia Maia",
      grau: "Cliente Inside-Tech",
      testemunho: "Focado, objetivo e bastante pró-ativo.",
    },
    {
      fotopessoa: "leal.png",
      nome: "Leandro Leal",
      grau: "CEO da Inside-Tech",
      testemunho:
        "Caio vai pensar em diversas soluções para os desafios apresentados, mesmo que nunca tenha passado pelo problema em questão. Persistência e resiliência como profissional.",
    },
    {
      fotopessoa: "malabares.jpeg",
      nome: "Jorge",
      grau: "Patrao",
      testemunho: "Vejo nessa pessoa uma oportunidade de criar.",
    },
    {
      fotopessoa: "familia.jpeg",
      nome: "Matilde",
      grau: "Patrao",
      testemunho:
        "Adoro quando o Caio vem aqui em casa, por que ele não tem frescura e come de tudo...de tudo mesmo.",
    },
    {
      fotopessoa: "familia.jpeg",
      nome: "Fatimá Boa",
      grau: "Patrao",
      testemunho:
        "Não gosto muito de tudo isso, mas se tem que gostar de alguma coisa é disso que gosto.",
    },
    // {
    //   fotopessoa: "familia.jpeg",
    //   nome: "Caio",
    //   testemunho: "Eu me acho, super amigo, carismatico.",
    // },
  ];

  return (
    <div className="container">
      <div className="header">
        <h1>Depoimentos</h1>
      </div>
      <div className="centralizar">
        <div className="depoimentos">
          {info &&
            info.map((item) => (
              <div className="galeria">
                <Testemonials
                  info={item.fotopessoa}
                  nome={item.nome}
                  grau={item.grau}
                  children={item.testemunho}
                />
              </div>
            ))}
        </div>
      </div>
      {/* <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide"></div>
          </div>
        </div>
      </div>
      <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>
      var swiper = new Swiper('.swiper-container',
      {
        effect: 'converflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination:{
          el: '.swiper-pagination',
        },
        });
        
      
    </script> */}
    </div>
  );
}
