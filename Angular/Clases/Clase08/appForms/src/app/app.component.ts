import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms"

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	@ViewChild("f") formulario: NgForm
	title = 'appForms';

	grabar(f) {
		if(this.formulario.valid){
			alert("Se pudo grabar correctamente")
		}
		else{
			alert("No se pudo grabar =(")
		}
		console.log(f);
	/* Verificar la validez del formulario desde el typescript */
	}
	cargarDatos() {
		//Ahora vmaos a cargar datos
		// de esta forma vamos a cargas datos relacionados con el formulario	

		//1 hacer referencia al formulario 
		// nombrar los elementos como en el formulario y la etiqueta name
		this.formulario.setValue({
			name: "Fernando Antezana",
			email: "correo@correo.com",
			pass: "Contraseña"
		})
	}

	//2 Cargar datos de forma parcial
	cargarDatosParcial(){
		this.formulario.setValue({
			/* name : "", */
			/* Comentar el campo name dara error porque 
				se espera desde angular tener los 3 elementos completos al estar dentro del setValue
			--- para este caso usaremos el patchValue */
			email : "correo@correo.net",
			pass : "myPassword"
		})
	}

	cargarDatosParcialConPatch(){
		this.formulario.form.patchValue({
			/* name : "", */
			/* Al utulizar patchValue se carga parcialmente los valores
				de esta manera si se puede omitir el campo name y no dara error*/
			email : "correo@correo.net",
			pass : "myPassword"
		})
	}
}
