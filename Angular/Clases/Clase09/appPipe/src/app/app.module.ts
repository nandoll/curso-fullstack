import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReducerPipe } from 'reducer.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
	AppComponent,
	ReducerPipe,
	FilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
