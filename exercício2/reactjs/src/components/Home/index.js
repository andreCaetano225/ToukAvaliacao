import React, {useEffect} from 'react'; // Importando o react e o useEffect
import Aos from 'aos' // Importando a ferramenta Aos que da efeito a pagina quando iniciada ou recarregada.
import 'aos/dist/aos.css'; // importando css de Aos

function Home(){

  // useEffect criado para fazer o calculo da duração da animação
  useEffect(() => {
    Aos.init({duration:2000});
    }, []);

   return(
     <div className="intro" data-aos="fade-up">
      <img src="./touk.png" alt="Home" className="imgH"/>
      <h2>Seja Bem-Vindo ao nosso sistema de agendamento de tarefas</h2>
      <p className="pH">No nosso sistema de agendamento você pode conferir suas tarefas e cadatrar suas tarefas
       através do menu de navegação acima.</p>
   </div>
    )
}

export default Home;
