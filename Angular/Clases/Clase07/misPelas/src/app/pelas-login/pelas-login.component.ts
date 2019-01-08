import { Component, OnInit } from '@angular/core';
import { PelasAuthService } from '../pelas-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelas-login',
  templateUrl: './pelas-login.component.html',
  styleUrls: ['./pelas-login.component.scss']
})
export class PelasLoginComponent implements OnInit {

  constructor(private authLogin : PelasAuthService, private router : Router ) { }

  ngOnInit() {
  }

  doLogin(){
	  this.authLogin.login()
		  .then(
			  data => {
				  sessionStorage.setItem('userData', JSON.stringify(data))
				  // La propiedad setITEM ESPERA un dato serializable
				  // se debe de transfar el objeto json
				  // por lo cual se debe transformar el json
				  this.router.navigate(["listado"])
			  }
		  )
	  console.log("clic")
  }

}
