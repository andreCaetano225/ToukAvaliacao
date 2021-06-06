
class Ev {
  
    static evId = 0; 
 
   constructor(textev){
       this.id = Ev.evId++
       this.textev = textev;
       this.done = false;
   }
 }
 
 export default Ev