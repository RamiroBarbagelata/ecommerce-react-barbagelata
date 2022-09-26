import React from 'react'
import github from '../assets/logotipo-github.png'
import linkedin from '../assets/logotipo-linkedin.png'

const Footer = () => {
    return (
        <div className='footer-container'>
            <h5>2022 NIKE SHOES. Todos los derechos reservados</h5>
            <h5>Desarrollado por Ramiro Barbagelata</h5>
            <div className='socialIcons'>
            <a href="https://github.com/RamiroBarbagelata" target="_blank" rel="noreferrer"><img src={github} className="footerImg px-1" alt="hithub" height="20"></img></a>
            <a href="https://www.linkedin.com/in/ramiro-barbagelata/" target="_blank" rel="noreferrer"><img src={linkedin} className="footerImg px-1" alt="hithub" height="20"></img></a>
            </div>
        </div>
    )
}

export default Footer