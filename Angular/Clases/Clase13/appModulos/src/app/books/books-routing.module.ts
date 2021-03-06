import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AntoListBooksComponent } from './anto-list-books/anto-list-books.component';
import { AntoEditBookComponent } from './anto-edit-book/anto-edit-book.component';


const routes: Routes = [
  {
    path:"", children: [
      {path:"", component: AntoListBooksComponent},
      {path:"edicion", component: AntoEditBookComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
