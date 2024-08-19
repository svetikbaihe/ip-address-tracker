import "leaflet/dist/leaflet.css";
import styles from './styles.module.scss';
import type { MapInterface, MapConstructor } from "./types";
import L from 'leaflet';

class Map implements MapInterface {
  protected $map: HTMLElement | null = null;
  protected langtitude: number = 0;
  protected longtitude: number = 0;

  constructor({
    langtitude,
    longtitude
  }: MapConstructor) {
    this.langtitude = langtitude;
    this.longtitude = longtitude;

    this.buildMap();
  }

  public get mapElement() {
    return this.$map;
  }

  protected buildMap = () => {
    const $map = document.createElement('div');

    $map.setAttribute('id', 'map');

    $map.id = styles.map;

    const map = L.map($map, {zoomControl: false}).setView([this.langtitude, this.longtitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const newMarker = L.icon({iconUrl: 'icons/icon-location.svg'});

    L.marker([this.langtitude, this.longtitude], {icon: newMarker}).addTo(map);

    this.$map = $map;

    setTimeout(function () {
      map.invalidateSize();
   }, 0);
    
  }
}

export default Map