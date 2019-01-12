import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appArrastre]'
})
export class ArrastreDirective {


	// como el componente le avisa a la direcitva ??
	// con outpus 
	@Output() onMouseOverOrNot = new EventEmitter<boolean>()
	
	// estamos creando una salida q informe que el arrastr esta fuera del elemento

	@Output() OnMouseSelectFiles = new EventEmitter<FileList>()
	//esta variable va a tomar la lista de los archivos que hemos soltado en el div

	// pero lo optimo sera  que con el mismo outup
	// utilizando un booleando
	// para detectar si esta o no sobre




	// estos dos eventos van a funcinar cuando arrastr un archivo encima del box
	// porque el box esta con el appArrstre
  @HostListener("dragover") OnMouseDragOver(){

	this.onMouseOverOrNot.emit(true)
	

  }
  @HostListener("dragleave") OnMouseDragLeave(){
	this.onMouseOverOrNot.emit(false)
  }
  // el event viene del div al momento de soltar el elemento
  @HostListener("drop", ["$event"]) OnMouseDropElement($event){
	  $event.preventDefault()

	  
	  this.OnMouseSelectFiles.emit($event.emit)
  }
	//files para que sea un arreglo 
	//files con una directiva 




  constructor() { }

}
