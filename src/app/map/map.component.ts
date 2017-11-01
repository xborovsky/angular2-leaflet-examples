import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  options:any;
  layersControl:any;
  private overlay: any;
  private map : any;

  private overlayBounds = [[51.003980, 11.874208], [48.480831, 19.048280]];
  private overlays:string[] = ['assets/test_overlay1.png', 'assets/test_overlay2.png', 'assets/test_overlay3.png', 'assets/test_overlay4.png',
    'assets/test_overlay5.png', 'assets/test_overlay6.png', 'assets/test_overlay7.png', 'assets/test_overlay8.png',
    'assets/test_overlay9.png', 'assets/test_overlay10.png', 'assets/test_overlay11.png', 'assets/test_overlay12.png'];
  
  ngOnInit(): void {
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
  }

  onMapReady(map: L.Map) {
    this.map = map;
    this.overlay = L.imageOverlay(this.overlays[0], this.overlayBounds, {opacity: 0.4});
    this.overlay.addTo(this.map);
  }

  updateOverlay(newVal:number) {
    if (this.overlay) {
      this.map.removeLayer(this.overlay);
    }
    this.overlay = L.imageOverlay(this.overlays[newVal], this.overlayBounds, {opacity: 0.4});
    this.overlay.addTo(this.map);
  }

}
