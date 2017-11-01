import { MapSliderComponent } from './map-slider/map-slider.component';
import { Routes } from '@angular/router';

export const routesConfig:Routes = [
    { path : '', redirectTo : 'slider', pathMatch : 'full' },
    { path : 'slider', component : MapSliderComponent }
];
