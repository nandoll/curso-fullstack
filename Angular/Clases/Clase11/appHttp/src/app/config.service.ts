import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurso } from './cursos.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http:HttpClient) { }

  api : string = "http://cursos.tibajodemanda.com/cursos"

  /* list()
  {
    this.http.get(this.api)
    .subscribe(
      data => console.table(data)
    )
  } */
/* Mejor asi */
  /* list() : Observable<any>
  {
   return this.http.get(this.api)

  } */

  /* Aun mejor asi */

  list() : Observable<ICurso[]>
  {
  return this.http.get<ICurso[]>(this.api)
   //el metodo get es un metodod generico
   // por lo tanto el metodo get debe teenr el formato de tipo icurso

  }
}
