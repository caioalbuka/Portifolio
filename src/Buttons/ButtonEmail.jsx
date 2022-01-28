import React from "react";
import "./ButtonEmail.css";

function ButtonEmail() {
  return (
    <div className="buttonEmail">
      <form method="post" action="mailto:caioalbuka@gmail.com">
        <button title="Clique aqui para me mandar um E-mail">
          Enviar e-mail caioalbuka@gmail.com
        </button>
      </form>
    </div>
  );
}

export default ButtonEmail;
