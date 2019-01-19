import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurso } from './cursos.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { } 

  

  listar(): Observable<ICurso[]>{
    return this.http.get<ICurso[]>("http://cursos.tibajodemanda.com/cursos")
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
