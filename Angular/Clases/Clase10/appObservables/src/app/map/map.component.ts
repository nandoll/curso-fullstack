import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
 
	@ViewChild("boton") el: ElementRef
  constructor() { }

  ngOnInit() {
  }

  afterViewOnInit(){
	  fromEvent(this.el.nativeElement, "click")
	  .pipe(
		  throttleTime(1000),
		  map( (e:any) => e.clientX)
		  
		  //este map es un observable 
		  // no es el js
		  //devuelve un observable
		  //el mouse event
		  // pero no queremos que devulva el mouse event
	  )
	  .subscribe(
		pos => console.log(pos)	  
		)

  }

}
