import React, { useState, useEffect } from 'react';  // Importando o REACT
import Listfs from './Listfs'; // importando a lista onde mostra a tarefa na pagina web
import Final from './Final'; // Importando os Items/ texto e ID
import FormFs from './FormFS'; // Importando formulario

const SAVED_FINALS = "savedFinalS"   // Variavel criada para usar no lugar de savedFinals

function Fsemana () {

    const [fsemana,setFsemana] = useState([]); //Variveis criadas para utilizar os estados do Reactjs

    // useEffect criado para salva os dados no localStorage
    useEffect(() => {
        let savedFinalS = JSON.parse(localStorage.getItem(SAVED_FINALS))
        if(savedFinalS){
            setFsemana(savedFinalS);
        }
    },[])

    // useEffect criado para não acontecer erros ao salvar no localStorage
    useEffect(()=>{
        localStorage.setItem(SAVED_FINALS, JSON.stringify(fsemana))
    },[fsemana])


      // Função criada para salvar o item 
    function onAddItemFinalS(textfs){
        let fs = new Final (textfs);
        setFsemana([...fsemana,fs])
    }
    // Função criada para Deletar item que foi criado
    function deletedFinalS(itemfs){
        let ftFinal = fsemana.filter(ft => ft.id !== itemfs.id)
        setFsemana(ftFinal)
    }
   // Função Criada para marcar como concluido e desmarca.
    function onDoneFinalsemana(itemfs){
        
        let upFinal = fsemana.map(ft=>{
            if(ft.id === itemfs.id){
                ft.done = !ft.done;
            }
            return ft;
        })
        setFsemana(upFinal)
    }
    return(
        <div>
        <div className="container">
            <h2>Agendamento Final de Semana</h2>
            <p className="pS">Aqui vai ser agendado suas tarefas do final de semana.</p>
            <FormFs onAddItemFinalS={onAddItemFinalS}/>
        </div>
        <div className="container2">
            <Listfs fsemana={fsemana} deletedFinalS={deletedFinalS} onDoneFinalsemana={onDoneFinalsemana}/>
        </div>
       </div>
    )
}
export default Fsemana // Exportando o Semanal