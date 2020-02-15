class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1);
    
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(string){
    let x=string.split(" ");
 return  x.map(e=>{
     if(e=="the"||e=="an"||e=="but"||e=="of"||e=="and"||e=="for"||e=="by"||e=="from"||e=="at"){
       return e;
     }
     else {
       return this.capitalize(e);
     } 
   }).join(" ");
  }
}