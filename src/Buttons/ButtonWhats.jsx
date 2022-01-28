import React from "react";
import "./ButtonWhats.css";

function ButtonWhatz() {
  return (
    <div className="buttonWhats">
      <form
        method="post"
        action="https://wa.me/qr/KEWQO6YMCYHIH1"
        target="_blank"
        rel="noreferrer"
      >
        <button title="Clique aqui para conversar comigo pelo WhatsApp!">
          Me chama no Whats!
        </button>
      </form>
    </div>
  );
}

export default ButtonWhatz;
