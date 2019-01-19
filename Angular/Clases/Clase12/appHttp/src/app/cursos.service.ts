import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurso } from './cursos.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }



  /* listar(): Observable<ICurso[]>{
    const endpoint = "http://cursos.tibajodemanda.com/cursos"
    const accesToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.he0ErCNloe4J7Id0Ry2SEDg09lKkZkfsRiGsdX_vgEg"

    const cabecera = {
      authorization : "bearer " + accesToken
    }

    const header : HttpHeaders = new HttpHeaders( cabecera )

    return this.http.get<ICurso[]>(
      endpoint,
      {headers : header }
      )
  } */

  listar(): Observable<ICurso[]>{
    const endpoint = "http://cursos.tibajodemanda.com/cursos"
    const accesToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.he0ErCNloe4J7Id0Ry2SEDg09lKkZkfsRiGsdX_vgEg"

    const cabecera = {
      authorization : "bearer " + accesToken
    }

    const header : HttpHeaders = new HttpHeaders( cabecera )

    return this.http.get<ICurso[]>(
      endpoint
      )
  }

  insertar(curso:ICurso):Observable<any>{
    return this.http.post("http://cursos.tibajodemanda.com/cursos", curso)
  }

  actualizar(curso: ICurso):Observable<any>{
    return this.http.put("http://cursos.tibajodemanda.com/cursos/" + curso.idCurso , curso)
  }

  eliminar(idCurso: number):Observable<any>{
    return this.http.delete("http://cursos.tibajodemanda.com/cursos/" + idCurso)
  }
}
