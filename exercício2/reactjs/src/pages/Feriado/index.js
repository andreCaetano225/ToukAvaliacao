import React, { useEffect, useState } from 'react';  // Importando o REACT
import Feri from './Feri'; // Importando os Items/ texto e ID
import FormF from './FormF'; // Importando formulario
import Listf from './Listf'; // importando a lista onde mostra a tarefa na pagina web

const SAVED_FERIADOS = "savedFeriados" // Variavel criada para usar no lugar de savedFeriados

function Feriado () {
    const [feriads,setFeriads] = useState([]); //Variveis criadas para utilizar os estados do Reactjs

    // useEffect criado para salva os dados no localStorage
    useEffect(() => {
        let savedFeriados = JSON.parse(localStorage.getItem(SAVED_FERIADOS))
        if(savedFeriados){
            setFeriads(savedFeriados);
        }
    },[])

    // useEffect criado para não acontecer erros ao salvar no localStorage
    useEffect(()=>{
        localStorage.setItem(SAVED_FERIADOS, JSON.stringify(feriads))
    },[feriads])

    // Função criada para salvar o item 
    function onAddItemFeriado(textf){
        let ft = new Feri (textf);
        setFeriads([...feriads,ft])
    }

    // Função criada para Deletar item que foi criado
    function deletedFeriado(itemf){
      
        let ftFeri = feriads.filter(ft => ft.id !== itemf.id)
        setFeriads(ftFeri)
    }

    // Função Criada para marcar como concluido e desmarca.
    function onDoneFeriado(itemf){
        
        let upFeri = feriads.map(ft=>{
            if(ft.id === itemf.id){
                ft.done = !ft.done;
            }
            return ft;
        })
        setFeriads(upFeri)
    }
    return(
        <div>
        <div className="container">
            <h2>Agendamento do Feriado</h2>
            <p className="pS">Faça seu agendamento de tarefas</p>
            <FormF onAddItemFeriado={onAddItemFeriado}/>
        </div>
        <div className="container2">
        <Listf feriads={feriads}  onDoneFeriado={onDoneFeriado} deletedFeriado={deletedFeriado} />
        </div>
        </div>
    )

}

export default Feriado // Exportando o Semanal