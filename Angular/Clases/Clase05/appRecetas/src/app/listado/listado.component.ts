import { Component, OnInit, Input } from '@angular/core';
import { IReceta } from '../receta.interface';
import { RecetaService } from '../receta.service';
import { LogService } from '../log.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	//@Input("listadoRecetas") recetas: Array<IReceta>

	recetas: Array<IReceta>

	constructor(
    private recetaService: RecetaService,
    private router: Router
    /*, private logService: LogService*/) { }

	ngOnInit() {
		this.recetas = this.recetaService.listarRecetas()
		//this.logService.escribir("Lista recetas", "info")
  }

  nuevaReceta(){

    //Este meteodo recibe como paramerto un arreglo
    // este arreglo contendra la estrucutra de la ruta
    // a donde quiero navegar ? ....
    // por ejemplo recetas/nuevo

    //this.router.navigate(["recetas/nuevo"])


    // otra forma es ponerlo separado por comas
    // y lo que ahra eangular es unirlo con join.slash
    this.router.navigate(["recetas","nuevo"])
  }

}
