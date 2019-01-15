import { Component, OnInit } from '@angular/core';
import {of } from 'rxjs'
import { reduce, scan } from 'rxjs/operators';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  // Este observable me envia una secuencia de valores
	  /* of(1,2,3,4,5,6,7,8,9,10) */ // envia numeros
	  of("Ola", "ke", "ase", "Esta", "practicando", "angular", "o", "ke", "ase")
	  .pipe(
		  // 1 con reduce 
		  //imaginaes que quiero hacer una sumatoria
		  /* reduce(   (total, valor)  => total + valor , 0 ) */
		  //recibe 2 parametros
		  // uno es una funcion
		  // El segundo parametro es el valor inicial de donde se iran sumando todos los valores que vna llegando

		  // ahora con scan
		  // son parecidos pero no son iguales
		  /* scan( (total, valor) => total + valor , 0)*/
		  // supongamos que no son numeros, sino cadenas

		reduce(   (total : any, valor)  => {
			//total es un json
			if(total[valor]){
				// si ya existe quiere decir que angular ya tiene un valor
				total[valor]++
			}
			else{
				//si no existe entonces valor es 1
				total[valor] = 1
			}

			return total

		} , {
			// y este es su valor inicial
		} )

	  )
	  .subscribe(
		  data => console.log(data)
	  )
  }

}
