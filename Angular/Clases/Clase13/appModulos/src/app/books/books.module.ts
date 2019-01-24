import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { AntoListBooksComponent } from './anto-list-books/anto-list-books.component';
import { AntoEditBookComponent } from './anto-edit-book/anto-edit-book.component';

@NgModule({
  declarations: [
    AntoListBooksComponent,
    AntoEditBookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
