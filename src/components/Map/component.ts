import "leaflet/dist/leaflet.css"
import type { MapInterface, MapConstructor } from "./types"
import L from "leaflet"
import styles from "./styles.module.scss"

class Map implements MapInterface {
  protected $map: HTMLElement | null = null
  protected latitude: number = 0
  protected longtitude: number = 0

  constructor({ latitude, longtitude }: MapConstructor) {
    this.latitude = latitude
    this.longtitude = longtitude

    this.buildMap()
  }

  public get mapElement() {
    return this.$map
  }

  protected buildMap = () => {
    const $map = document.createElement("div")

    $map.setAttribute("id", "map")

    $map.id = styles.map

    const buffer = 0.05

    const southWest: L.LatLngTuple = [
      this.latitude - buffer,
      this.longtitude - buffer,
    ]

    const northEast: L.LatLngTuple = [
      this.latitude + buffer,
      this.longtitude + buffer,
    ]

    const bounds: L.LatLngBoundsExpression = [southWest, northEast]

    const map = L.map($map, {
      zoomControl: false,
      maxBounds: bounds,
      maxBoundsViscosity: 1.0,
    }).setView([this.latitude, this.longtitude], 13)

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)

    const newMarker = L.icon({ iconUrl: "icons/icon-location.svg" })

    L.marker([this.latitude, this.longtitude], { icon: newMarker }).addTo(map)

    this.$map = $map

    setTimeout(function () {
      map.invalidateSize()
    }, 0)
  }
}

export default Map
