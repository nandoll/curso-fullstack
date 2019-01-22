import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() username : string = "Fernando"
  @Input() datos

  constructor() {
    console.log("ola desde app-user");

  }

  ngOnInit() {


  }



}
