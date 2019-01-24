import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelsRoutingModule } from './labels-routing.module';
import { AntoListLabelsComponent } from './anto-list-labels/anto-list-labels.component';
import { AntoEditLabelComponent } from './anto-edit-label/anto-edit-label.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AntoListLabelsComponent,
    AntoEditLabelComponent
  ],
  imports: [
    CommonModule,
    LabelsRoutingModule,
    SharedModule
  ]
})
export class LabelsModule { }
