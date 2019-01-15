import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss']
})
export class DebouncetimeComponent implements OnInit {

	@ViewChild("texto") el:ElementRef

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
	  fromEvent(this.el.nativeElement, "input")
	  .pipe(
		  debounceTime(100),
		  map((value :any )=> value.target.value),
		  //espera que el usuario deje de teclear medio segundo para hacer la consulta
		  // la primera vez lo deja pasar
		  // porque no tiene con que comparar
		  distinctUntilChanged()
	  )
	  .subscribe(
		  data => console.log(data)
	  )
  }

  

}
