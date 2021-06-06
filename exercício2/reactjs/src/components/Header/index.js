import React from 'react';  // Importando o REACT
import "./header.css"; // Importando o CSS
import Logo from "./pp.jpg"; // Importando a Logo
import {Link} from 'react-router-dom'; // importei o Link de react-router-dom para ser utilizado como uma tag A.

function Header () { //Criado toda minha Navbar 
    return(
 <header className="header">
     <Link to="/"><img src={Logo} alt="logo" className="logo"/></Link>
  <ul className="ul"> 
        <li className="li"><Link to="/semanal">Agendamento Semanal </Link></li>
        <li className="li"><Link to="/feriado">Agendamento Feriado</Link></li>
        <li className="li"><Link to="/final-de-semana">Agendamento Final de semana</Link></li>
        <li className="li"><Link to="/evento">Agendamento de Evento</Link></li>
</ul>
</header>
)

}

export default Header // Exporrtando o Header