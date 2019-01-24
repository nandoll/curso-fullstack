import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AntoLoginComponent } from './anto-login/anto-login.component';
import { AntoHeaderComponent } from './anto-header/anto-header.component';
import { ReducerPipe } from './reducer.pipe';

//rutas
import { AppRouting } from './app.routing.module';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { LabelsModule } from './labels/labels.module';
//rutas




@NgModule({
  declarations: [
    AppComponent,
    AntoLoginComponent,
    AntoHeaderComponent,
    ReducerPipe
  ],
  imports: [
    BrowserModule,
    AppRouting,
    BooksModule,
    AuthorsModule,
    LabelsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
