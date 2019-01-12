//basic.directive.ts
import {Directive, ElementRef, Renderer2, HostListener, Input} from "@angular/core"

@Directive({
	selector : "[basic]"
})
export class BasicDirective{

	@Input("basic") colorPorDefecto : string = "gold"
	@Input() colorHover : string = "pink"
	/* @Input() basic */


	@HostListener("mouseenter") mouseEntro(){
		this.renderer.setStyle( this.el.nativeElement, "background-color", this.colorHover)
	}
	@HostListener("mouseleave") mouseSalio(){
		this.renderer.setStyle( this.el.nativeElement, "background-color", this.colorPorDefecto)
	}
	
	
	// para crear una directiva se necesita 
// un valor
// en el primer parametro deberia ser un selector
// si fuera un selector de atributo []

// PAra usar una directiva hay que declarla en un componente 
// AppComponent

	constructor( private el: ElementRef, private renderer : Renderer2) {}

	ngOnInit(){
		//Ciclo de Vida del componente

		// lo usual en otros componentes diferentes a las directivas es no modificar el html desde el ngOnInit
		// pero para las directivas eso no aplica ya que en este punto ya se cargo el elemento

		/* this.el.nativeElement.style.backgroundColor = "red" */
		this.renderer.setStyle(this.el.nativeElement, "background-color", this.colorPorDefecto)
	}
}