import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import {RouterModule, Route, PreloadAllModules} from '@angular/router'
import { AntoAutentitationGuard } from './servicios/anto-autentitation.guard';


const router: Route[] = [
  //OJO
  // quiero cargar las ruta de libros solamente cuando lo necesite
  //LazyLoad

  {path : "libros" , loadChildren: "./books/books.module#BooksModule", canLoad:[AntoAutentitationGuard] }
]

@NgModule({

  imports:[
    CommonModule,
    RouterModule.forRoot(router, {preloadingStrategy : PreloadAllModules } )
    
  ],
  //aca se publica este modulo para que pueda ser visible desde el app module
  exports: [RouterModule]


})

export class AppRouting {}





