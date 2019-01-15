import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators'
@Component({
  selector: 'app-throttle-time',
  templateUrl: './throttle-time.component.html',
  styleUrls: ['./throttle-time.component.scss']
})
export class ThrottleTimeComponent implements OnInit {
@ViewChild("button") el: ElementRef
  constructor() { }

  ngOnInit() {
  }
  ngViewAfterInit(){
	  /* 
	  Con javascript
	  const button = document.querySelector(".button")
	  var cuenta = 0
	  const lapso = 1000
	  let ultimo = Date().now() - lapso

	  button.addEventListener("click", e=> {
		  console.log(e)
	}) */
fromEvent(this.el.nativeElement, "click")
	.pipe(
		throttleTime(1000)
	)
	.subscribe(
		e => console.log(e)
	)

  }

  /* Que suecede cuando un usuario ver trello* */

}
