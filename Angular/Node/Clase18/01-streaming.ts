//importar el fs
import fs = require("fs")

/* Crear :

Estamos creando un archivpo lectura

y enviandolo a un punto final escritura


*/

const lector = fs.createReadStream("./lectura.txt", {encoding: "utf8"}) // crear un lector // parte el archivo en pequeños pedazos
const escritor = fs.createWriteStream("./escritura.txt", {encoding: "utf8"}) //el lo rearma el archivo

//ahora falta crear el streaming

lector.on("data", chunck =>{
    // ya leyo un pedazo
    console.log("chunk", chunck)
    escritor.write(chunck)
})

lector.on("end", () => console.log("fin de streaming"))

lector.on("error", error => console.log(error))


// otra forma de hacerlo es con pipe

