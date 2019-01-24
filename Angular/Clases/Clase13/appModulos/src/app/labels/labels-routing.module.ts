import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AntoListLabelsComponent } from './anto-list-labels/anto-list-labels.component';
import { AntoEditLabelComponent } from './anto-edit-label/anto-edit-label.component';

const routes: Routes = [

  {
    path:"editoriales", children: [
      {path:"", component: AntoListLabelsComponent},
      {path:"edicion", component: AntoEditLabelComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LabelsRoutingModule { }
