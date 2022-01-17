import React from "react";
import Typical from "react-typical";
import { RiAttachment2 } from "react-icons/ri";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import AboutMe from "../AboutMe/AboutMe";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="header-profile">
        <h1>Caio Albuka</h1>
        <span>
          <a href="#">Home</a>
        </span>
        <span>
          <a href="#">Sobre Mim</a>
        </span>
        <span>
          <a href="#">Resumo</a>
        </span>
        <span>
          <a href="#">Referências</a>
        </span>
        <span>
          <a href="#">Contato</a>
        </span>
      </div>
      <div className="profile-parent">
        <div className="photo-perfil">
          <img src="fotocaio.png" />
        </div>
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              {/* Colocar os links corretor */}
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
                  No momento estou estudando Frontend e Backend.
                </span>
              </span>
              <div className="profile-options">
                <button className="btn-primary-btn">
                  {""}
                  Contrate-me
                  {""}
                </button>
                {/* Aqui vai o pdf do cv comum */}
                <a href="cv-caio.pdf" download="Caio Cv cv-caio.pdf">
                  <button className="btn-highlighted-btn">
                    CV em Pdf
                    <RiAttachment2 />
                  </button>
                </a>
              </div>
            </div>
            <div className="profile-picture">
              <div className="profile-picture-background"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutMe">
        <AboutMe />
      </div>
    </div>
  );
}
