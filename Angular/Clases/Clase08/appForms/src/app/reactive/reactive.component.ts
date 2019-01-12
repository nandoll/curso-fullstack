import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
	selector: 'app-reactive',
	templateUrl: './reactive.component.html',
	styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

	grupo: FormGroup
	dominiosValidos : string[] = ["cachina.com", "sub.cachina.com"]
	constructor() { }

	ngOnInit() {
		this.grupo = new FormGroup({
			name: new FormControl(null, Validators.required),
			email: new FormControl(null, [Validators.required, Validators.email, this.validarCorreosEmpresariales.bind(this)]),
			pass: new FormControl(null, [Validators.required, Validators.minLength(4)]),
			confirmPass: new FormControl(null, [Validators.required, this.validadorConfirmarPass])
			// tiene 2 parametros 
			// el 1ero es obligatrio : el valor que va a tner el control		
			// el 2do es un validador : El 2do puede ser un arreglo.
			// en el caso del correo es un valor unico 
			// en el caso del correo al tener mas validaciones puede ser un arreglo
		})
	}

	// el BIND  se utiliza para poner en contexto las variables

	// es por eso que se utilizo en los validades del email 
	// y no en el validador de la confirmacion del password porque no tenia
	//ninguna referencia externa
	validarCorreosEmpresariales(control : FormControl) : { [p: string]: boolean } {
		if(!control || !control.value) return null
		const correo = control.value 
		//este es el valor del control
		// pero nos interesa lo que esta despues del arroba
		const dominioAverificar = correo.split("@")[1].toLowerCase()

		let encontrado = false
		this.dominiosValidos.forEach(dominio =>{
			if(dominio == dominioAverificar ) encontrado = true

		})

		if(encontrado){
			return null
			// retorna vacio porque paso la validacion
		}
		else{
			return { correoInvalido : true}
			// si no paso la verificacion encontes se devuelve el valor true
		}
	}

	validadorConfirmarPass(control : AbstractControl ) : {[p:string] : boolean} {
		if( !control || !control.parent ) return null 
		//Aun no hay nada para validad


		const pass = control.parent.get("pass"),
		confirm = control.parent.get("confirmPass")
		// es importante usasr un AbstractControl para obtener el parent


		if( !pass || !confirm ) return null 
		// Si son nullos no deberia de haber ninguna verificacion aun
		// A partir de este punto se puede validar

		if(confirm.value=="") return null 
		// Al estar vacio tampoco se vdeberia de comprar

		if(confirm.value != pass.value ) {
			// si son diferentes eniar un mensaje de error
			return {contrasenaNoCoincide: true}
		}

		return null
	  }

	grabar() {
		const datos = this.grupo.getRawValue()
		console.log(datos)
		
	/* Verificar la validez del formulario desde el typescript */
	}

	cargarDatos() {
		//Ahora vmaos a cargar datos
		// de esta forma vamos a cargas datos relacionados con el formulario	

		//1 hacer referencia al formulario 
		// nombrar los elementos como en el formulario y la etiqueta name
		this.grupo.setValue({
			name: "Fernando Antezana",
			email: "correo@correo.com",
			pass: "Contraseña"
		})
	}

	cargarDatosParcialConPatch(){
		this.grupo.patchValue({
			/* name : "", */
			/* Al utulizar patchValue se carga parcialmente los valores
				de esta manera si se puede omitir el campo name y no dara error*/
			email : "correo@correo.net",
			pass : "myPassword"
		})
	}

}
