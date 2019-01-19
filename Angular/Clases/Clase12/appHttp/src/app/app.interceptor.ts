import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//esta clase es similar a un servicios
// por esos se puede uusar un inyectable

@Injectable()

// para los intercepetores se debe de añadir a traves del module
// no sirve para interceptres

//
export class AppInterceptor implements HttpInterceptor {

  //http interceptor necesita implementar un metodo
  // llamada intercept

  intercept(
    // lleva 2 parametros

    // el primero

    // la peticion

    req: HttpRequest<any>,
    // esta respuesta tiene que er de un tipo
    // de modo que al devolver  diferentes tipos de valor
    // le voy asignar un valor de tipo any

    next: HttpHandler
    // este seungo parametro va a enviar los paraemtros a la funcion
    //este segundo parametro es una funcion
    // los interceptores devuelven observables

    // el observalbe que retorna es un observable de eventos

    // es un observable quue retorna eventos de tipo httpEvent
    // httpEvent puede ser de diferentes tipos
    // puede ser any

    // ejemplo de observable de eventos : subida de archivos ... " ya estoy subiendo" "ya subi"

  ) : Observable<HttpEvent<any>>{

    const accesToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.he0ErCNloe4J7Id0Ry2SEDg09lKkZkfsRiGsdX_vgEg"

    const requestClone = req.clone({
      //este meotoddo clon
      //puede recibir parametros
      // y este parametro sera de cabecera

      headers : req.headers.append("authorization", accesToken)
    })

    return next.handle(requestClone) // aqui ya se ha enviado pero necesita un retorno por eso se envia return
  }


}
