import React from 'react'
import { Link } from 'react-router-dom'
export const contact = () => {
  return (<>
        <div className="navbar">
        <ul><Link  to="/" ><li>Inicio</li></Link>
    <Link to="/about"><li>Sobre mí</li></Link>
    <Link to="/proyects"><li>Proyectos</li></Link>
    </ul>
        </div>
    <div className='ctcontainer'>
        <p className='ctpone'>¿Estás pensando en un proyecto?</p>
        <p className='ctptwo'>¿buscas un desarrollador web?</p>
        <p className='cttre'>Te invito a contactarme y potenciar tu proyecto </p>

    </div>
    <div className='ctimgcontainer'>
        <div className='ctdiv' ><img src="/src/assets/gitlogo.png" alt="githublogo" className='ctgitlogo' /><a href="https://www.linkedin.com/in/ignacio-f-iba%C3%B1ez/" target='_blank'><p>GITHUB</p></a></div>
       <div className='ctdiv'> <img src="/src/assets/linkedin.png" alt="logo linkedin" className='ctgitlogo' /><a href="https://github.com/Bluckster" target='_blank'><p>LINKEDIN</p></a></div>
    </div>
    </>
  )
}
export default contact