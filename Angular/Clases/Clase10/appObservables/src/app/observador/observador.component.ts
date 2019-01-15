import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-observador',
  templateUrl: './observador.component.html',
  styleUrls: ['./observador.component.scss']
})
export class ObservadorComponent implements OnInit {
	@ViewChild("boton") el:ElementRef
  constructor() { }

  ngOnInit() {
  }

  afterViewInit(){

	// siemmpre tenemos un obserbable y un observador

	//suscriptior : dueno
	// obsevador : wachi
	//obserbavle : casa

	const observador = {
		//1era forma 
		// observador como un json

		/* un json con 3 parametros 
		no importa el orden, lo importante son las 3 funciones
		*/

		next : data => console.log(data), // en la analolgia este seria como el wachi...es quien informa ...
		error : err => console.log(err), //tambien existen errores ... 
		/* Si fuera una llamada a un api rest.... el observador seria next .... esperando la data, si hubiera un error el seungo se ejectua la segunda funcion, existen muchos errores, por ejemplo falta de autenticacion */
		complete: () => console.log("end")
		//Esta tercera funcion muestra el final de la consulta.

		//como aplicamos el observador

		
	}

	fromEvent(this.el.nativeElement, "click" )
		.subscribe(observador)

  }

}
