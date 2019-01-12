import { Component } from '@angular/core';

// para agregar nuevas funciones a una clase debemos agregarla desde prototipe

FileList.prototype["forEach"] ()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appDirectivas';

	aplicarHover: boolean = false 

	accion(valor: boolean){
		this.aplicarHover = valor
	}

	archivosSelecionados(archivos: FileList){
		archivos
	}

}
