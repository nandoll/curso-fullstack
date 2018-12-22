import { Component, OnInit } from '@angular/core';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private seguridad: SeguridadService) { }

  ngOnInit() {
  }

  ingresar(){
    this.seguridad.login();
    /* console.log() */
  }

}
