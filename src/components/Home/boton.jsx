import React, { useState } from "react";
import { Link } from "react-router-dom";
function Boton() {
  const [texto, setTexto] = useState(true);

  const change = () => {
    setTexto(!texto);
  };

  return (
    <>
      <div className="btncontenedor">
        {texto ? (
          <>
            <Link to="/about" className="pone">
              <strong>
                <p>Hola, soy</p>
              </strong>
            </Link>
            <Link to="/contact" className="ptwo">
              <strong>
                <p>Ignacio Ibañez</p>
              </strong>
            </Link>
            <Link to="/proyects" className="ptree">
              <strong>
                <p>Desarrollador Web</p>
              </strong>
            </Link>
          </>
        ) : (
          <>
            <Link to="/about" className="pone">
              <strong>
                <p>Sobre mí</p>
              </strong>
            </Link>
            <Link to="/contact" className="ptwo">
              <strong>
                <p>Contacto</p>
              </strong>
            </Link>
            <Link to="/proyects" className="ptree">
              <strong>
                <p>Proyectos</p>
              </strong>
            </Link>
          </>
        )}
        <button onClick={change} className="mobile-tap-area">
          Mostrar Menú
        </button>
      </div>
    </>
  );
}

export default Boton;
