import fs = require("fs")

// para que no marque error se instalan las referencias

/* Node_modules
    =>@types 
*/

console.log("Inicio de lectura")

const contenido = fs.readFileSync("./sincrono.txt-", {encoding:"utf8"})

/* 
    se necesita agregar una encondificacion
    Para que funiconen la letura los archivos
 */

 //para lectura de un certificado digital se debe de poner en asincorono
 

console.log("Fin de lectura")