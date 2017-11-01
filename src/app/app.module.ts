import { MultiMarkersComponent } from './multi-markers/multi-markers.component';
import { routesConfig } from './routes-config';
import { TimelineComponent } from './timeline/timeline.component';
import { MapSliderComponent } from './map-slider/map-slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MapSliderComponent,
    TimelineComponent,
    MultiMarkersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LeafletModule.forRoot(),
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
