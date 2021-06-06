import React  from 'react'; // Importando o React 
import Lixeira from './lixeira.png'; // Importando imagem
import On from './on.png'; // Importando imagem
import Of from './off.png'; // Importando imagem

function Listfs(props){
   //Função criada para trocar a imagem ao click
    function ImgFS(props){
        if(props.done){
            return (<img src={On} alt="Marcado como concluida"/>)
        }else{
            return (<img src={Of} alt="Marcado como não concluida"/>)
        }
    }

    return(
        <div className="list1">
            <ul>
            {props.fsemana.map(fs => 
                    <li key={fs.id}  className={fs.done?"done item": "item"}>
                      {fs.textfs}
                      <div>
                      <button onClick={()=>{props.onDoneFinalsemana(fs)}} className="bton"><ImgFS done={fs.done} className="on"/></button>
                      <button onClick={()=>{props.deletedFinalS(fs)}}className="btli"><img src={Lixeira} alt="Excluir tarefa" className="li" /></button> 
                   </div>
                   </li>)}
            </ul>

        </div>
    )

}

export default Listfs