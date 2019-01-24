import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { AntoListBooksComponent } from './anto-list-books/anto-list-books.component';
import { AntoEditBookComponent } from './anto-edit-book/anto-edit-book.component';
import { SharedModule } from '../shared/shared.module';

import {ReactiveFormsModule} from "@angular/forms"
import { AntoBooksService } from './anto-books.service';

@NgModule({
  declarations: [
    AntoListBooksComponent,
    AntoEditBookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers : [
    AntoBooksService
  ]
})
export class BooksModule { }
