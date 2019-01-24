import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AntoLoginComponent } from './anto-login/anto-login.component';

const routes: Routes = [
  {
    path:"", component:AntoLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoresRoutingModule { }
