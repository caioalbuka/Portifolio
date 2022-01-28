import React from "react";
import ButtonWhatz from "../../Buttons/ButtonWhats";
import ButtonEmail from "../../Buttons/ButtonEmail";
import Button from "../../Buttons/Button";

import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="container">
      <div className="header">
        <h1> Contato</h1>
      </div>
      <div className="body-contactme">
        <div className="links-contato">
          <ButtonWhatz />
          <ButtonEmail />
          <a href="https://github.com/caioalbuka">GitHub</a>
          <a href="https://www.linkedin.com/in/caio-albuquerque-dos-santos-53b592208/">
            Linkedin
          </a>
        </div>
        <div className="mesager-image">
          <div className="mens-download-cv">
            <div className="mensager">
              <form action="mailto:caioalbuka@gmail.com" method="GET">
                Nome:
                <input name="subject" type="text" />
                <br />
                E-mail:
                <input name="cc" type="email" />
                <br />
                Messagem<textarea name="body"></textarea>
                <br />
                <input type="submit" value="Send" />
              </form>
              {/* Nome: <input />
              E-mail: <input />
              Mensagem: <text-area />  */}
            </div>
            <div className="download-cv-container">
              <a href="cv-caio.pdf" download="Caio Cv cv-caio.pdf">
                <button className="download-cv">CV em Pdf</button>
              </a>
            </div>
          </div>
          <div className="image">
            Me Adicione no Whats
            <img src="imgqrcode.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
