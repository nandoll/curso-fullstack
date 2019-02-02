/* 
    Importaciones 
*/

import express = require("express")
import {Request, Response} from "express"

const app = express() // aca se crea el servidor

app.listen(4000, ()=> console.log("server corriendo en el puerto 4000")) //  y ya esta el servidor

//ahora definimos una ruta
app.get("/", (request: Request, response: Response)=>{
    //En el segundo parametro es un callback con request y response
    response
        .status(200) // por defecto express coloca el status en 200 asi q no es tan necesario colocar el estado
        .type(".html") //el type por defecto es plan/text
        .send(`
            <h1>Bienvenidos a express </h1> 
            <a href='/users'> Usuarios </a>
            <a href='/users/edit/50'> Editar usuario </a>
            <a href='/redirect'> Redireccionar </a>
            <a href='/download'> Descargar </a>
            `) 
    
})

app.get("/users", (request: Request, response: Response) =>{
    const lista = [
        {id:100, usuario:"usuario 1"},
        {id:200, usuario:"usuario 2"},
        {id:300, usuario:"usuario 3"},
        {id:400, usuario:"usuario 4"},
        {id:500, usuario:"usuario 5"},
        {id:600, usuario:"usuario 6"},
        {id:700, usuario:"usuario 7"},
        {id:800, usuario:"usuario 8"},
        {id:900, usuario:"usuario 9"}
    ]

    response
        .json(lista)
})

app.post("/users/edit/:id", (request : Request, response: Response)=>{
    // Ahora quiero editar un usuario
    const id = request.params.id

    response.send(id)

})

app.get("/redirect", (request: Request, response: Response)=>{
    response.redirect("http://gmail.com")
})

app.get("/download", (request: Request, response: Response)=>{
    response.download(__dirname + "/ux-for-developers.pdf") // download para archivos en algunas navegadores difretnes de chrome daria la opcion a descargar
    // seria lo mismo con sendFile pero sin descargar, o sea la forma normal
})