import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import {RouterModule, Route} from '@angular/router'


const router: Route[] = [
  //OJO
  // quiero cargar las ruta de libros solamente cuando lo necesite
  //LazyLoad

  {path : "libros" , loadChildren: "./books/books.module#BooksModule" }
]

@NgModule({

  imports:[
    CommonModule,
    RouterModule.forChild(router)
  ],
  //aca se publica este modulo para que pueda ser visible desde el app module
  exports: [RouterModule]


})

export class AppRouting {}





