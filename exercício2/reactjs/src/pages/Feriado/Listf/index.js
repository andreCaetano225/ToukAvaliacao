import React  from 'react'; // Importando o React
import Lixeira from './lixeira.png'; // Importando imagem
import On from './on.png'; // Importando imagem
import Of from './off.png'; // Importando imagem
import "./listf.css" // Importando css

function Listf(props){
    //Função criada para trocar a imagem ao click
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
            {props.feriads.map(feri => 
                    <li key={feri.id}  className={feri.done?"done item": "item"}>
                      {feri.textf}
                      <div>
                      <button onClick={()=>{props.onDoneFeriado(feri)}} className="bton"><ImgFeri done={feri.done} className="on"/></button>
                      <button onClick={()=>{props.deletedFeriado(feri)}}className="btli"><img src={Lixeira} alt="Excluir tarefa" className="li" /></button> 
                   </div>
                   </li>)}
            </ul>

        </div>
    )

}

export default Listf