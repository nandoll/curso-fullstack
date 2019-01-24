import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoresRoutingModule } from './cores-routing.module';
import { AntoLoginComponent } from './anto-login/anto-login.component';
import { AntoHeaderComponent } from './anto-header/anto-header.component';

@NgModule({
  declarations: [
    AntoLoginComponent,
    AntoHeaderComponent
  ],
  imports: [
    CommonModule,
    CoresRoutingModule
  ],
  // se necesita exportar la cabecera para que sea visible
  exports : [
    AntoHeaderComponent
  ]
})
export class CoresModule { }
