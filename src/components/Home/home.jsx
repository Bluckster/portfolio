import React, { useState } from "react";
import './home.css'
import Boton from "./boton";
import { Link } from "react-router-dom";



function Home() {
  return (<>
  <div className="father">
  <div className="primary">
    <div className="contenedor">
      <Link to="/about"className="pone"><strong><ParrafoCambiante  textoInicial="Hola, soy" textoHover="Sobre mí" /></strong></Link>
      <Link to="/contact"className="ptwo"><strong ><ParrafoCambiante  textoInicial="Ignacio Ibañez" textoHover="Contactos" /></strong></Link>
      <Link to="/proyects"className="ptree"> <strong><ParrafoCambiante  textoInicial="Desarrollador Web" textoHover="Proyectos" /></strong></Link>
    </div>
    <div>
            <img id="profilepic" src="/src/assets/profilepic1png.png" alt="fotoperfil" />
        </div>
        <Boton></Boton>
        </div>
        </div>
        </>
  )}

function ParrafoCambiante({ textoInicial, textoHover }) {
  const [texto, setTexto] = useState(textoInicial);

  const cambiarTexto = () => {
    setTexto(textoHover);
  };

  const restablecerTexto = () => {
    setTexto(textoInicial);
  };

  return (
    <><div className="change">
    <p className="texto-cambiar" onMouseEnter={cambiarTexto} onMouseLeave={restablecerTexto}>
      {texto}
    </p>
    
</div>


        </>  
  );
}

export default Home;