import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { ReactiveComponent } from './reactive/reactive.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [ReactiveComponent]
})
export class AppModule { }
