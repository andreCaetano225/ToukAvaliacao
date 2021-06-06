import React, { useState, useEffect } from 'react';  // Importando o REACT
import Ev from './EV'; // Importando os Items/ texto e ID
import FormEV from './FormEV'; // Importando formulario
import Listev from './Listev'; // importando a lista onde mostra a tarefa na pagina web

const SAVED_EVENTO = "savedEvento" // Variavel criada para usar no lugar de savedFeriados

function Evento () {
    const [evento,setEvento] = useState([]); //Variveis criadas para utilizar os estados do Reactjs
  
    // useEffect criado para salva os dados no localStorage
    useEffect(() => {
        let savedEvento = JSON.parse(localStorage.getItem(SAVED_EVENTO))
        if(savedEvento){
            setEvento(savedEvento);
        }
    },[])

    // useEffect criado para não acontecer erros ao salvar no localStorage
    useEffect(()=>{
        localStorage.setItem(SAVED_EVENTO, JSON.stringify(evento))
    },[evento])

    // Função criada para salvar o item 
    function onAddItemEvento(textev){
        let ev = new Ev (textev);
        setEvento([...evento,ev])
    }
    // Função criada para Deletar item que foi criado
    function deletedEvento(itemev){
        let ftEvento = evento.filter(ft => ft.id !== itemev.id)
        setEvento(ftEvento)
    }
    // Função Criada para marcar como concluido e desmarca.
    function onDoneEvento(itemev){
        let upEvento = evento.map(ft=>{
            if(ft.id === itemev.id){
                ft.done = !ft.done;
            }
            return ft;
        })
        setEvento(upEvento)
    }

    return(
        <div>
        <div className="container">
            <h2>Agendamento Evento</h2>
            <p className="pS">Aqui vai ser agendado suas tarefas do Evento.</p>
            <FormEV onAddItemEvento={onAddItemEvento}/>
        </div>
         <div className="container2">
             <Listev evento={evento} deletedEvento={deletedEvento} onDoneEvento={onDoneEvento}/>
         </div>
        </div>
    )

}

export default Evento // Exportando o Semanal