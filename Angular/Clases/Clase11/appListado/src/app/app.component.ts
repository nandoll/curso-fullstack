import { Component, ViewChild } from '@angular/core';
import { Subject, merge, of } from 'rxjs';
import { switchMap, pluck} from "rxjs/operators"
import { NgForm, NgModel } from '@angular/forms'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http : HttpClient){}

  obsPage: Subject<number> = new Subject<number>()
  obsOrder: Subject<string> = new Subject<string>()
  resultados: Array<any> = []
  //Subjet envia el # de la página. (para el ejemplo)
  // por ese va a delver un numero al ser una clase generica se va a forzar para trabajar cn numeros

  page : number = 1
  order : string = "nombre"

  changePage(){
    /* console.log("pagina", this.page) */
    this.obsPage.next(this.page)
  }
  changeOrder(){
    /* console.log("pagina", this.order) */
    this.obsOrder.next(this.order)
  }

    ngOnInit(){

    merge( this.obsPage, this.obsOrder)
    .pipe(
      switchMap(()=> {
        /* const personas = [
          {nombre: "Sergio", sexo: "Hombre"},
          {nombre: "Kelly", sexo: "Mujer"},
          {nombre: "Marjorie", sexo: "Mujer"},
          {nombre: "Javier", sexo: "Hombre"},
          {nombre: "Clarisa", sexo: "Mujer"},
          {nombre: "Evelyn", sexo: "Mujer"},
          {nombre: "Alejandro", sexo: "Hombre"},
          {nombre: "Anthony", sexo: "Hombre"},
          {nombre: "Brenda", sexo: "Mujer"}
        ] */
        return this.http.post(`http://personas.tibajodemanda.com/users/${this.page}`, {orden: this.order})

        /* return of(
          personas
            .sort((a, b) =>  a[this.order]>b[this.order] ? 1 : -1)
            .slice((this.page-1)*4, (this.page-1)*4 + 4)
        ) */

      })
      /* ,pluck("results") */
    )
    .subscribe(
      (data:any) => {
        this.resultados = data.results
        console.log(this.resultados)
      }
     )

  }
}
