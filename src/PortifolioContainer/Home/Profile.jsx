import React from "react";
import Typical from "react-typical";
import { RiAttachment2 } from "react-icons/ri";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Historico from "../../component/Historico";

import "./Profile.css";
import Testemonial from "../Testimonial/Testimonial";
import ApiGit from "../../component/ApiGit";

export default function Profile() {
  return (
    <div id="profile-container" className="profile-container">
      <div className="header-profile">
        <h1>Caio Albuka</h1>
        <span>
          <a href="#profile-container">Home</a>
        </span>
        <span>
          <a href="#aboutMe">Sobre Mim</a>
        </span>
        <span>
          <a href="#historicos-main">Resumo</a>
        </span>
        <span>
          <a href="#testemonial-main">Referências</a>
        </span>
        <span>
          <a href="#contact-me-main">Contato</a>
        </span>
      </div>

      <div id="profile-parent" className="profile-parent">
        <div className="photo-perfil">
          <img src="fotocaio.png" />
        </div>
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="hhttps://www.linkedin.com/in/caio-albuquerque-dos-santos-53b592208/">
                <i className="linkedin">
                  <AiOutlineLinkedin />
                </i>
              </a>
              <a href="hhttps://github.com/caioalbuka">
                <i className="github">
                  <AiOutlineGithub />
                </i>
              </a>
            </div>
            <div className="profile-detail-name">
              <span className="primary-text">
                {" "}
                Olá, Sou o{" "}
                <span className="highlighted-text" font-color="orange">
                  Caio
                  <ApiGit />
                </span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "React😎",
                      1000,
                      "Html e Css💅",
                      1000,
                      "JavaScript🛠",
                      1000,
                      "Programador Jr💻",
                      1000,
                      "WordPress🛒",
                      1000,
                      "VsCode🗂",
                      1000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                  Bem Vindo ao meu Portifólio.
                </span>
              </span>
              <div className="profile-options">
                <button className="btn-primary-btn">
                  <span>
                    <a href="#contact-me-main">Entre em Contato</a>
                  </span>
                </button>
                {/* Aqui vai o pdf do cv comum */}
                {/* <a href="cv-caio.pdf" download="Caio Cv cv-caio.pdf">
                  <button className="btn-highlighted-btn">
                    CV em Pdf
                    <RiAttachment2 />
                  </button>
                </a> */}
              </div>
            </div>
            <div className="profile-picture">
              <div className="profile-picture-background"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-info-menu">
        <div className="info">
          <div id="aboutMe" className="aboutMe">
            <AboutMe />
          </div>
          <div id="historicos-main" className="historicos-main">
            <Historico />
          </div>
          <div id="testemonial-main" className="testemonial-main">
            <Testemonial />
          </div>
          <div id="contact-me-main" className="contact-me-main">
            <ContactMe />
          </div>
        </div>
        <div className="menu">
          <span>
            <a href="#profile-container">Home</a>
          </span>
          <span>
            <a href="#aboutMe">Sobre Mim</a>
          </span>
          <span>
            <a href="#historicos-main">Resumo</a>
          </span>
          <span>
            <a href="#testemonial-main">Referências</a>
          </span>
          <span>
            <a href="#contact-me-main">Contato</a>
          </span>
        </div>
      </div>
    </div>
    // </div>
  );
}
