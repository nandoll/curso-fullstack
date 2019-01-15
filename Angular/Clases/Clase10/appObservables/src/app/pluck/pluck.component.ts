import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, pluck } from 'rxjs/operators';

@Component({
	selector: 'app-pluck',
	templateUrl: './pluck.component.html',
	styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

	@ViewChild("texto") el: ElementRef

	constructor() { }

	ngOnInit() {
	}

	ngAfterViewInit() {
		fromEvent(this.el.nativeElement, "input")
			.pipe(
				debounceTime(250),//evita que una accion se repita en el tiempo de 250 ms
				/* map((value: any) => value.target.value), */
				//espera que el usuario deje de teclear medio segundo para hacer la consulta
				// la primera vez lo deja pasar
				// porque no tiene con que comparar
				distinctUntilChanged(),

				// pluck de la entrada que yo tenga enviame solo la propiedad target
				// y de esa propiedad target enviame la propiedad value
				pluck("target", "value")

			)
			.subscribe(
				data => console.log(data)
			)
	}

}