import React from 'react'; // importando o React
import {BrowserRouter, Route, Switch} from 'react-router-dom'; // importando o React-Router-Dom
import Header from './components/Header'; // importando o Header
import Semanal from './pages/Semanal'; // importando o semanal
import Feriado from './pages/Feriado'; // importando o feriado
import Fsemana from './pages/Fsemana'; // importando final de semana 
import Evento from './pages/Evento'; // importando o evento
import Home from './components/Home'; // importando a pagina inicial/ Home
import Erro from './pages/Erro'; // importando pagina de erro, onde se o usúario for tentar colocar uma url que não existe vai 
// enviado para essa pagina de erro.


const Routes = () => {
    return(
        // Configuração de rotas/ dos nomes que seram usados na url e links onde o nosso NavBar vai apontar.
    <BrowserRouter> 
    <Header/>
     <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/semanal" component={Semanal}/>
         <Route exact path="/feriado" component={Feriado}/>
         <Route exact path="/final-de-semana" component={Fsemana}/>
         <Route exact path="/evento" component={Evento}/>
         <Route  path="*" component={Erro}/>
     </Switch>
    </BrowserRouter>
    )
}

export default Routes; // exportando o Routes.js