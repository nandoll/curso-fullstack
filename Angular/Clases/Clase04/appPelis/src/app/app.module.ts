import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PelisFormComponent } from './pelis-form/pelis-form.component';
import { PelisListComponent } from './pelis-list/pelis-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PelisFormComponent,
    PelisListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
