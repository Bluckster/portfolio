import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
export const about = () => {
  return (
    <>
    <div className="navbar">
      <ul><Link  to="/" ><li>Inicio</li></Link>
    <Link to="/contact"><li>Contacto</li></Link>
    <Link to="/proyects"><li>Proyectos</li></Link>
    </ul>
    </div>
      <section className="abcontainer">
        <div className="abtext">
          <h1 className="abtitle">
            Lucho por mis sueños <br /> concreto objetivos
          </h1>
          <h2 className="absubtitle">
            “Activo, <span>responsable”</span>
          </h2>
        </div>
        <div>
          <img
            className="abimg"
            src="/src/assets/profileimage2.png"
            alt="imagen perfil"
          />
        </div>
      </section>
      <section>
        <article className="abartcontainer">
          <h1 className="abttart">Sobre mi</h1>
          <p className="abarticle">
            Soy un estudiante de la carrera de abogacía en la universidad
            nacional de la matanza que me interesé por el mundo it, ya que fue
            un interés persistente en mi vida. gracias al programa de la
            fundación empujar me encuentro no solo culminando mis estudios como
            programador full-stack con la diplomatura expedida por la utn sino
            cumpliendo uno de mis objetivos. Busco mejorar mis habilidades en el
            rubro aportando mi conocimiento y actitud activa por el aprendizaje.
          </p>
          <a
            href="/src/assets/Curriculum_Ignacio_Ibañez.pdf"
            download="Curriculum Ignacio Ibañez.pdf"
            title="descarga currriculum"
            className="btndownload"
          >
            {" "}
            Descarga mi curriculum
          </a>
        </article>
      </section>
    </>
  );
};
export default about;
