import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AntoListAuthorsComponent } from './anto-list-authors/anto-list-authors.component';
import { AntoEditAuthorComponent } from './anto-edit-author/anto-edit-author.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AntoListAuthorsComponent,
    AntoEditAuthorComponent
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    FormsModule
  ]
})
export class AuthorsModule { }
