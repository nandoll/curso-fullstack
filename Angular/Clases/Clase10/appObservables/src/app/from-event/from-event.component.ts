import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {

  @ViewChild("button") el: ElementRef
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){

	  /*
	  La progrmacion normal 
	  const button = document.querySelector("button")

	  button.addEventListener() */

	  /* La programacion reactive
		 
	  COMO DISTINGUIR LOS ELEMENTOS

	  Los principales van en el pipe (RXJS) << PARA Los principales
	  Los otros no... (RXJS/OPERATORS) Los secundarios
	  
	  */

	  fromEvent(this.el.nativeElement, "click")
	  .subscribe(
		  e => console.log(e)
	  )
		/* Este Operador necesita dos elementos */
		/* Similar a eventListener se U_U */

		/* para la refere usarmos el viewchild */

		/* hasta ahi todo igual a la programacion normal  */

		/* A continuacion en el callback va eñ sibscrobe  */

		
	  

	  /* La programacion reactiva a partei de la version 6 es mas amigable */
  }

}
