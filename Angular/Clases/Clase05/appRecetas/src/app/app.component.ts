import { Component } from '@angular/core';
import { IReceta } from './receta.interface';
import { SeguridadService } from './seguridad.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

  logeado: boolean = false

  constructor(private seguridadService: SeguridadService){
    this.logeado = this.seguridadService.isLog()
  }
}
