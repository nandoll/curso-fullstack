import http = require("http")


const servidor = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse ) =>{
        
        //me llegó una petición 

        // ahora sedebe de responder

        /* 
        
        Si estoy enviando un texto plano tengo que indicarlo que es un texto plano
        si es json, pdf, html 

        esta información es usada por el navegador
        
        writeHead() 
        Tiene dos parametros:
        1)  El primero es el estado de la respuesta ( Ejmplo : quiero obtener algo)
            Ok si hubo una respuesta correcta : 
                200 : cuado no hay error se indica con el codigo 200
                500 : excepecion para algo
        2) 
        
        
        */

        //Opcion 1 : Esta opcion sería más adecuada si tuvieramos varios tipos de cabeceras, ya que es un JSON        
       response.writeHead(200, { "content-type" : "text/html"} )
       

       //Opcion 2 : Esta seria una opción sería si solo hubiera una sola cabecera por ejemplo

       /*        
       response.setHeader("content-type", "text/plain")
       response.statusCode = 200 
       */

       response.write("Esta es el primer mensaje dede el servidor<br>")
    
       //Opcion 1
       response.write("Y este es el segundo mensaje dede el servidor")
       // Opcion 2 : Poner el end() como fin de la comunicacion y enviarle el ultimo mensaje 
       /* response.end("Y este es el segundo mensaje dede el servidor") */
       

        // Toda vez que la comunicacion termina se utiliza la funcion end()     
        response.end()
        
    })

    servidor.listen(4000, ()=>console.log("Servidor corriendo en el puerto 4000"))
    //en este punto hacemos que el servidor se coloque en el puerto 4000
    // y como segundo parametro enviamos un mensaje para saber que se esta ejecutando