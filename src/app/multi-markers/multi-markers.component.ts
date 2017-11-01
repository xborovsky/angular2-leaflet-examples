import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-multi-markers',
  templateUrl: './multi-markers.component.html',
  styleUrls: ['./multi-markers.component.css']
})
export class MultiMarkersComponent implements OnInit {

  options:any;
  layersControl:any;
  layers: any;
  private map : any;
  private markerIcon = L.icon({
    iconUrl: 'assets/marker-icon.png',
    shadowUrl: 'assets/marker-shadow.png',

    iconSize:     [18, 30], // size of the icon
    shadowSize:   [25, 25], // size of the shadow
    iconAnchor:   [22, 34], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 42],  // the same for the shadow
    popupAnchor:  [-3, -26] // point from which the popup should open relative to the iconAnchor
});

  constructor() { }

  ngOnInit() {
    this.options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' })
      ],
      zoom: 9,
      center: L.latLng(50.079606, 14.440882)
    };

    this.layersControl = {
      baseLayers: {
        'Open Street Map': L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      }
    }

    this.layers = [
      L.marker([ 50.079606, 14.470882 ], {icon: this.markerIcon}),
      L.marker([ 50.091606, 14.457882 ], {icon: this.markerIcon}),
      L.marker([ 50.047606, 14.456882 ], {icon: this.markerIcon}),
      L.marker([ 50.068606, 14.435882 ], {icon: this.markerIcon}),
      L.marker([ 50.080606, 14.497882 ], {icon: this.markerIcon})
    ];
  }

  onMapReady(map: L.Map) {
    this.map = map;
  }

}
