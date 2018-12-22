import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private router:Router) { }

  login(){
    //Al ingresar nos redirige hacia recetas y luego almacena en session
    sessionStorage.setItem("usuario","fantezana")
    this.router.navigate(["recetas"])
    // console.log('click desde el servicio')
  }

  logout(){
    this.router.navigate(["/"])
    sessionStorage.clear()
  }

  isLog(){
    return sessionStorage.getItem("usaurio") ? true : false
  }
}
