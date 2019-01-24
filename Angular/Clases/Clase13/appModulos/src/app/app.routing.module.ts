import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import {RouterModule, Route} from '@angular/router'
import { AntoLoginComponent } from './anto-login/anto-login.component';

const router: Route[] = [
  {
    path:"", component:AntoLoginComponent
  }
]

@NgModule({

  imports:[
    CommonModule,
    RouterModule.forRoot(router)
  ],
  //aca se publica este modulo para que pueda ser visible desde el app module
  exports: [RouterModule]


})

export class AppRouting {}





