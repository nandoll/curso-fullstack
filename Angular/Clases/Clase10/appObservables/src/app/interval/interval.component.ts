import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  counter : number 
  constructor() { }

  ngOnInit() {
	  // <= cada segundo va a enviar un contador de un segundo	
	  interval(2000)
	  
	  .pipe(
		  map( val => val*1),
		  throttleTime ( 3000 )
	  )  
	  .subscribe(
		  data => {
			  console.log(data)
		  	  this.counter = data 
		   }
	  )
  }

  // encadenando pipes

}
