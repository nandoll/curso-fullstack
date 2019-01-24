import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AntoLoginComponent } from './anto-login/anto-login.component';
import { AntoHeaderComponent } from './anto-header/anto-header.component';
import { AntoListBooksComponent } from './anto-list-books/anto-list-books.component';
import { AntoEditBookComponent } from './anto-edit-book/anto-edit-book.component';
import { AntoListAuthorsComponent } from './anto-list-authors/anto-list-authors.component';
import { AntoEditAuthorComponent } from './anto-edit-author/anto-edit-author.component';
import { AntoListLabelsComponent } from './anto-list-labels/anto-list-labels.component';
import { AntoEditLabelComponent } from './anto-edit-label/anto-edit-label.component';
import { ReducerPipe } from './reducer.pipe';

//rutas

import {RouterModule, Route} from '@angular/router'

//rutas

const router: Route[] = [
  {
    path:"", component:AntoLoginComponent
  },
  {
    path:"libros", children: [
      {path:"", component: AntoListBooksComponent},
      {path:"edicion", component: AntoEditBookComponent}
    ]
  },
  {
    path:"autores", children: [
      {path:"", component: AntoListAuthorsComponent},
      {path:"edicion", component: AntoEditAuthorComponent}
    ]
  },
  {
    path:"editoriales", children: [
      {path:"", component: AntoListLabelsComponent},
      {path:"edicion", component: AntoEditLabelComponent}
    ]
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AntoLoginComponent,
    AntoHeaderComponent,
    AntoListBooksComponent,
    AntoEditBookComponent,
    AntoListAuthorsComponent,
    AntoEditAuthorComponent,
    AntoListLabelsComponent,
    AntoEditLabelComponent,
    ReducerPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
