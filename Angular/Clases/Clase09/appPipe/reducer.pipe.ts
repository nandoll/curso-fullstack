import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: "reducer"
})

// para que el pipe funcione se debe de crear un pipeTransform
export class ReducerPipe implements PipeTransform{
	//Para construir un valor personalizado en un pipe
	//cremamos una funcion que la manejara

	transform(value : string, longitud: number, texto:string ){
		
		console.log()
		console.log(value.split(" ", 14))
		return value.substr(0,longitud) + " ..."
		

	}

// Para utilizar hay que registrarlo

// para regitrarlo ponerlo en el componente 

// Para generar pipe

// ng g p 
}