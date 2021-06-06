import React  from 'react'; // Importando o react
import Lixeira from './lixeira.png'; //Importando imagem
import On from './on.png'; // Importando imagem
import Of from './off.png'; // Importando imagem
import "./listev.css" // Importando css

function Listf(props){

    // Função criada para ao click trocar de imagem
    function ImgFeri(props){
        if(props.done){
            return (<img src={On} alt="Marcado como concluida"/>)
        }else{
            return (<img src={Of} alt="Marcado como não concluida"/>)
        }
    }

    return(
        <div className="list1">
            <ul>
            {props.evento.map(evt => 
                    <li key={evt.id}  className={evt.done?"done item": "item"}>
                      {evt.textev}
                      <div>
                      <button onClick={()=>{props.onDoneEvento(evt)}} className="bton"><ImgFeri done={evt.done} className="on"/></button>
                      <button onClick={()=>{props.deletedEvento(evt)}}className="btli"><img src={Lixeira} alt="Excluir tarefa" className="li" /></button> 
                   </div>
                   </li>)}
            </ul>

        </div>
    )

}

export default Listf