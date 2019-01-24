import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReducerPipe } from '../reducer.pipe';

@NgModule({
  declarations: [
    ReducerPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ReducerPipe
  ]
})
export class SharedModule { }
