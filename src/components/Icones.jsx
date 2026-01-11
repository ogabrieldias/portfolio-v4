import React from "react";
import "../Contato.css"; // importa o CSS que você já criou

const Contato = () => {
  return (
    <div className="container_contato">
      <div className="contato-item">
        <a href="mailto:gabrieldiass707@gmail.com" aria-label="E-mail">
          <div className="icone" id="email">
            <img src="/icons/email.svg" loading="lazy" alt="Email" width="32" height="32" />
          </div>
          <h3>E-mail</h3>
        </a>
      </div>

      

      <div className="contato-item">
        <a
          href="https://www.linkedin.com/in/ogabrieldias/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icone" id="linkedin">
            <img src="/icons/linkedin.svg" loading="lazy" alt="Linkedin" width="32" height="32" />
          </div>
          <h3>Linkedin</h3>
        </a>
      </div>

      <div className="contato-item">
        <a
          href="https://github.com/ogabrieldias"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icone" id="github">
            <img src="/icons/github.svg" loading="lazy" alt="Github" width="32" height="32" />
          </div>
          <h3>Github</h3>
        </a>
      </div>

      <div className="contato-item">
        <a
          href="https://instagram.com/_ogabrieldias"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icone" id="instagram">
            <img src="/icons/instagram.svg" loading="lazy" alt="Instagram" width="32" height="32" />
          </div>
          <h3>Instagram</h3>
        </a>
      </div>
    </div>
  );
};

export default Contato;
