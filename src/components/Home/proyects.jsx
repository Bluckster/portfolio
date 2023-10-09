import React from 'react'
import "../Proyects/proyects.css"
import { Link } from 'react-router-dom'
const proyects = () => {
  return (<>
    <div className='navbar'>
    <ul><Link  to="/" ><li>Inicio</li></Link>
    <Link to="/contact"><li>Contacto</li></Link>
    <Link to="/about"><li>Sobre mi</li></Link>
    </ul>
    </div>
<div className='ctbody'>
    <h1 className='prtitle'>Proyectos</h1>
   <div className="blog-card">
    <div className="meta">
      <div className="photo"  ></div>
      <ul className="details">
        <li className="author"><a href="https://www.linkedin.com/in/ignacio-f-iba%C3%B1ez/" target='_blank'>Ignacio Ibañez</a></li>
   
        <li className="tags">
          <ul>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="description">
      <h1>Blog de filosofía</h1>
      <h2>Nueva foma de pensar</h2>
      <p> Mi primera pagina dedicada
a una materia de mi interés
como es la filosofía, mi idea es agregar funcionalidades.</p>
      <p className="read-more">
        <a href="https://github.com/Bluckster/tpintegrador.git" target='_blank'>Ver mas</a>
      </p>
    </div>
  </div>
  <div className="blog-card alt">
    <div className="meta">
      <div className="photo" id='photo22' ></div>
      <ul className="details">
        <li className="author"><a href="https://www.linkedin.com/in/ignacio-f-iba%C3%B1ez/" target='_blank'>Ignacio, Mirko, Mateo</a></li>
        <li className="tags">
          <ul>
            <li><a href="#">React</a></li>
            <li><a href="#">Css</a></li>
            <li><a href="#">JavaScript</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="description">
      <h1>Ecommerce de juegos</h1>
      <h2>Compra rapida</h2>
      <p>Trabajo realizado con react
con consumo de api, sobre juegos, incluido un buscador totalmente funcional</p>
      <p className="read-more">
        <a href="https://github.com/MirkoSDev/MystiX.git" target='_blank'>Ver mas</a>
      </p>
    </div>
  </div>
  </div>
  </>
   
  )
}

export default proyects