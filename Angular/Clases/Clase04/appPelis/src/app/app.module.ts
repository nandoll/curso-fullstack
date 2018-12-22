import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PelisFormComponent } from './pelis-form/pelis-form.component';
import { PelisListComponent } from './pelis-list/pelis-list.component';

//Para manejar rutas
import {RouterModule, Route} from '@angular/router'

//import {LoginComponent} from '.'
//VOy a necesaitar rutas
//Definiendo rutas

const rutas: Route[] = [
  {
    path : "",
    component: LoginComponent
  },
  {
    path : "recetas",
    component : listadoC
  }
]


@NgModule({
  declarations: [
    AppComponent,
    PelisFormComponent,
    PelisListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
