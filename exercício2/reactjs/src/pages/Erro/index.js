import React from 'react'; //Importando o React 
import "./erro.css" // Importando o Css
import {Link} from 'react-router-dom'; // Importando Link do React-router-dom

function Erro(){
    return(
        <div className="erro">
            <h1 className="h1E">PAGINA NÃO ENCONTRADA</h1>
           <Link to="/"><button className="btnE">VOLTE PARA A PAGINA INICIAL</button></Link>
        </div>
    )
}

export default Erro; 