import React, {useState} from 'react' // Importando o react e o useState
import "./formev.css"// Importando o css

function FormEV(props){
  const [textev,setTextev] = useState(""); // criando as varias para usar como useState

  // Função criada para ao clicar enviar os dados 
  function eventoSubmit(e){
      e.preventDefault()
      if(textev){
          props.onAddItemEvento(textev)
          setTextev("")
      }
  }

  // Função criada para salva dados do textarea
  function eventoChange(e){
      let ev = e.target.value;
      setTextev(ev)
  }
  return(
    <div>
          <textarea placeholder="Digite sua tarefa" value={textev} className="c-t" onChange={eventoChange}/>
         <form>
             <button className="enviar" onClick={eventoSubmit}>Enviar</button>
             </form> 
    </div>
    )
}
export default FormEV;
