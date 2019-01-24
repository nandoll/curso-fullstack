import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AntoListAuthorsComponent } from './anto-list-authors/anto-list-authors.component';
import { AntoEditAuthorComponent } from './anto-edit-author/anto-edit-author.component';

const routes: Routes = [
  {
    path:"autores", children: [
      {path:"", component: AntoListAuthorsComponent},
      {path:"edicion", component: AntoEditAuthorComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
