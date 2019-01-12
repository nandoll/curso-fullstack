import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicDirective } from './basic.directive';
import { ArrastreDirective } from './arrastre.directive';

@NgModule({
  declarations: [
	AppComponent,
	BasicDirective,
	ArrastreDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
