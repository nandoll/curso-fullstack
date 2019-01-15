import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

@ViewChild("texto") el:ElementRef

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    fromEvent(this.el.nativeElement, "input")
    .pipe(
      /* //switch Map :  
       Es un operador secundario 


       Recibe : el valor del evento inputEvent


      */

      switchMap(
        evento => interval(1000)
        //evento recibe un obserbavle del tipo input event
        // este obserbavle se trasnfroma
        //en unparaemtro de mil milisegundos
        //el interval nos devuelve un valor cada 1sg

      )
      



    )
    .subscribe(
      res => console.log(res)
      // laa respuesta seran los numeros de un contador de cada 1sg
      // el switchMap cambio el valor de evneto de tipo inputEvent a otro !!!
    )
  }

}
