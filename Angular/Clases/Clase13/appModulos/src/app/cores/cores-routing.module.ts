import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AntoLoginComponent } from './anto-login/anto-login.component';

const routes: Routes = [
  {
    path:"", component:AntoLoginComponent

  },
  /* {path: "login", redirectTo:""}
  para la version 6 y 5 este es el parche
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoresRoutingModule { }
