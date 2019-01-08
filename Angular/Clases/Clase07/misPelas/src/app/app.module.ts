import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PelasListadoComponent } from './pelas-listado/pelas-listado.component';
import { PelasNuevoComponent } from './pelas-nuevo/pelas-nuevo.component';
import { PelasModeloComponent } from './pelas-modelo/pelas-modelo.component';
import { PelasLoginComponent } from './pelas-login/pelas-login.component';
import { RouterModule, Route } from '@angular/router';
import { PelasAuthService } from './pelas-auth.service';

const path = [
	{ path : "", component : PelasLoginComponent},
	{ path : "listado", component : PelasListadoComponent, resolve: { datosPelas : PelasAuthService } },
	{ path : "nuevo", component : PelasNuevoComponent}
]
// para manejra el resolve al estar recibiendo un json el tipo del resolve
// debe de ser tipo json el primer parametro es la variable 
// y recibe el servicio donde se encuentra la implementacion

// ahora datosPelas es un arreglo de jsons por el .all
@NgModule({
  declarations: [
    AppComponent,
    PelasListadoComponent,
    PelasNuevoComponent,
    PelasModeloComponent,
    PelasLoginComponent
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot(path)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
