import { CanActivate } from "@angular/router";
import { SeguridadService } from "./seguridad.service";

export class AuthGuard implements CanActivate{

  constructor( private AuthGuard: SeguridadService){}

  canActivate() : boolean {

    return this.AuthGuard.isLog()

  }
}
