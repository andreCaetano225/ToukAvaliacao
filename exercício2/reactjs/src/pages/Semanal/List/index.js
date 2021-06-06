import React from 'react'; // Importando o react
import Lixeira from './lixeira.png'; // Importando imagem
import On from './on.png'; // Importando imagem
import Of from './off.png'; // Importando imagem
import "./list.css" // Importando Css


function List(props){
    // Função criada para alterar a imagem 
    function DoneImg(props){

        if(props.done){
            return (<img src={On} alt="Marcado como concluida"/>)
        }else{
            return (<img src={Of} alt="Marcado como não concluida"/>)
        }
    }
    return(
        <div className="list1" >
            <ul>
                {props.items.map(item => 
                    <li key={item.id} className={item.done?"done item": "item"}>
                      {item.text}
                      <div>
                      <button onClick={()=>{props.onDone(item)}} className="bton"><DoneImg done={item.done} className="on"/></button>
                      <button onClick={()=>{props.onItemDeleted(item)}}className="btli"><img src={Lixeira} alt="Excluir tarefa" className="li" /></button> 
                   </div>
                   </li>)}
            </ul>
        </div>
    )
}

export default List;