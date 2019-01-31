import fs = require("fs")

console.log("Inicio")

fs.readFile("./asincrono.txt", {encoding: "utf8"},
(err, contenido)=>{
    if(err) return console.log(err)

    console.log(contenido)
})