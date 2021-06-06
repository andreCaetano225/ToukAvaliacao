import React, { useEffect, useState } from 'react';  // Importando o REACT
import Form from './Form'; // Importando formulario
import "./semanal.css" // Importando css
import Item from './Item'; // Importando os Items/ texto e ID
import List from './List'; // importando a lista onde mostra a tarefa na pagina web

const SAVED_ITEMS = "savedItems" // Variavel criada para usar no lugar de savedItems

function Semanal () {
    const [items,setItems] = useState ([]); //Variveis criadas para utilizar os estados do Reactjs
    
    // useEffect criado para salva os dados no localStorage
    useEffect(()=>{
         let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
         if(savedItems){
             setItems(savedItems);
         }
    },[])
    // useEffect criado para não acontecer erros ao salvar no localStorage

    useEffect(()=>{
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    },[items])

    // Função criada para salvar o item 
    function onAddItem(text){
        let it = new Item (text);
        setItems([...items,it])
    }
   // Função criada para Deletar item que foi criado
    function onItemDeleted(item){
      
        let ftItems = items.filter(it => it.id !== item.id)
        setItems(ftItems)
    }
 // Função Criada para marcar como concluido e desmarca.
    function onDone(item){
        
        let upItems = items.map(it=>{
            if(it.id === item.id){
                it.done = !it.done;
            }
            return it;
        })
        setItems(upItems)
    }
  
    return(
        <div>
        <div className="container">
            <h2>Agendamento Semanal</h2>
            <p className="pS">Faça seu agendamento de tarefas</p>
            <Form onAddItem={onAddItem}/> 
          </div>
          <div className="container2">
          <List items={items} onDone={onDone} onItemDeleted={onItemDeleted} />

          </div>
</div>
    )

}

export default Semanal // Exportando o Semanal