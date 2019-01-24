import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReducerPipe } from './reducer.pipe';

//rutas
import { AppRouting } from './app.routing.module';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { LabelsModule } from './labels/labels.module';
import { CoresModule } from './cores/cores.module';
//rutas




@NgModule({
  declarations: [
    AppComponent,
    /* ReducerPipe */
  ],
  imports: [
    BrowserModule,
    AppRouting,
    /* BooksModule, */
    AuthorsModule,
    LabelsModule,
    CoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
