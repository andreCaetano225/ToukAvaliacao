
class Final {
  
    static finalId = 0; 
 
   constructor(textfs){
       this.id = Final.finalId++
       this.textfs = textfs;
       this.done = false;
   }
 }
 
 export default Final