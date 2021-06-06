import React, {useState} from 'react' //Importando o React e o useState
import "./formf.css" // Importando o css
function FormF(props){
  const [textf,setTextf] = useState(""); // criando as variaveis para usar o useState

  //Função criada para ao clicar enviar os dados 
  function feriadoSubmit(e){
      e.preventDefault()
      if(textf){
          props.onAddItemFeriado(textf)
          setTextf("")
      }
  }
  //Função criada para salva os dados do Textarea 
  function feriadoChange(e){
      let f = e.target.value;
      setTextf(f)
  }
  return(
    <div>
          <textarea placeholder="Digite sua tarefa" value={textf} className="c-t" onChange={feriadoChange}/>
         <form>
             <button className="enviar" onClick={feriadoSubmit}>Enviar</button>
             </form> 
    </div>
    )
}
export default FormF;
