import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { RecetaService } from './receta.service';
import { LogService } from './log.service';
import { LoginComponent } from './login/login.component';

//Para manejar rutas
import {RouterModule, Route} from '@angular/router'

const ruta: Route[] = [

  //Primera forma
   {
    path : "",
    component : LoginComponent,
  },
  {
    path : "recetas",
    component: ListadoComponent
  },
  {
    path: "recetas/nuevo",
    component : FormularioComponent
  }

  //segunda forma

  /* {
    path:"recetas",
    children: [
      {path:"", component: ListadoComponent},
      {path:"nueva"}
    ]
  } */
]

@NgModule({
	declarations: [
		AppComponent,
		FormularioComponent,
		ListadoComponent,
		LoginComponent
	],
	imports: [
    BrowserModule,
    RouterModule.forRoot(ruta)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
