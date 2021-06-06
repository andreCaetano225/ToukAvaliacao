import React, {useState} from 'react' //Importando o React e o useState
import "./formfs.css" // Importano css
function FormF(props){
  const [textfs,setTextfs] = useState(""); // criando o useState

  // Função criada para quando clicar em enviar, enviar os dados 
  function flsemanaSubmit(e){
      e.preventDefault()
      if(textfs){
          props.onAddItemFinalS(textfs)
          setTextfs("")
      }
  }
  // Função criada para salvar os dados da Textarea
  function flsemanaChange(e){
      let fs = e.target.value;
      setTextfs(fs)
  }
  return(
    <div>
          <textarea placeholder="Digite sua tarefa" value={textfs} className="c-t" onChange={flsemanaChange}/>
         <form>
             <button className="enviar" onClick={flsemanaSubmit}>Enviar</button>
             </form> 
    </div>
    )
}
export default FormF;
