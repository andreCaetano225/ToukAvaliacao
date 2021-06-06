import React, {useState} from 'react' // Importando o react
import "./form.css";
function Form(props){
   const [text,setText] = useState(""); // Usando o useState
   //Função criada para Enviar os dados 
   function handleSubmit(event){
   event.preventDefault()
   if(text){
     props.onAddItem(text)
     setText("")
   }
   }
   //Função Criada para receber os dados do Textarea
   function Change(event){
       let t = event.target.value;
       setText(t)
   }
    return(
    <div>
          <textarea placeholder="Digite sua tarefa" value={text} className="c-t" onChange={Change}/>
         <form>
             <button className="enviar" onClick={handleSubmit}>Enviar</button>
             </form>
            
    </div>
    )
}
export default Form;