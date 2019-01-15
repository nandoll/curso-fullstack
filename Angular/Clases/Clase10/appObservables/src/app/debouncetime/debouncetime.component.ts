import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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
		  debounceTime(2000)
	  )
	  .subscribe(
		  data => console.log(data)
	  )
  }

  

}
