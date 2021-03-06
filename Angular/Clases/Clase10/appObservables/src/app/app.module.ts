import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FromEventComponent } from './from-event/from-event.component';
import { ThrottleTimeComponent } from './throttle-time/throttle-time.component';
import { MapComponent } from './map/map.component';
import { ObservadorComponent } from './observador/observador.component';
import { IntervalComponent } from './interval/interval.component';
import { FilterComponent } from './filter/filter.component';
import { DebouncetimeComponent } from './debouncetime/debouncetime.component';
import { OfComponent } from './of/of.component';
import { PluckComponent } from './pluck/pluck.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';

@NgModule({
  declarations: [
    AppComponent,
    FromEventComponent,
    ThrottleTimeComponent,
    MapComponent,
    ObservadorComponent,
    IntervalComponent,
    FilterComponent,
    DebouncetimeComponent,
    OfComponent,
    PluckComponent,
    SwitchMapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
