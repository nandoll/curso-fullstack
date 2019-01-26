import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AntoAutentitationGuard implements CanActivate, CanLoad {

  constructor(private router: Router){}

  //Canload devuelve una promesa un observable o oun boolean




  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
  canLoad(): boolean{
    this.router.navigate([""])
    // en la version 6 o 5 no funciona
    // solucion: ver en core router
    return false
  }

  // los guards sirven para proteger rutas

}
