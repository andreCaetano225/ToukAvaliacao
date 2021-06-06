
class Feri {
  
    static feriId = 0; 
 
   constructor(textf){
       this.id = Feri.feriId++
       this.textf = textf;
       this.done = false;
   }
 }
 
 export default Feri