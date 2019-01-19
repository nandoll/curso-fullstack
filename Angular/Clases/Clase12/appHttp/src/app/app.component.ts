import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { ICurso } from './cursos.interface';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import {Subject} from 'rxjs'
import {startWith, switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cursos: ICurso[] = []
  grupo: FormGroup
  observador : Subject<any> = new Subject<any>()

  constructor(private cursosService: CursosService){}

  ngOnInit() {

    this.grupo = new FormGroup({
      titulo : new FormControl(null, Validators.required)
    })

    this.observador
    .pipe(
      startWith({}),
      switchMap(
        res => this.cursosService.listar()
      )
    )
    .subscribe(
      (data: ICurso[]) => this.cursos = data.sort(
        (a,b) => a.idCurso> b.idCurso ? -1 : 1
      )
    )
    //.subscribe(
      /* data => console.log(data) */
     // (data: ICurso[]) => this.cursos = data
    //)
    /* this.observador.next() */

    /* this.cursosService.listar()
      .subscribe(
        (data: ICurso[]) => this.cursos = data
      ) */
  }
  eliminar(indice){
    const pregunta = "Esta seguro que desea eliminar el registro "
    const confirmar = confirm(pregunta)
    if(confirmar){
      this.cursosService.eliminar(indice)
      .subscribe(
        (data) => {
          console.log("eliminado", indice)
          this.observador.next(data)
        }
      )
    }
  }

  refresh(){
    console.log("refrescar")
    this.observador.next({})
  }

  insertar(){

    const curso : ICurso = this.grupo.getRawValue()

    this.cursosService.insertar(curso)
    .subscribe(
      data => {
        console.log("registro insertado")
        this.observador.next(data)
        /* this.observador.reset() */
      }
    )

  }

}
