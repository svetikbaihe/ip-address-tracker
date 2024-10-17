import $app from "@constants/app"
import ResultDisplay from "@modules/ResultDisplay"
import GeoState from "@state/GeoState"
import HeaderSearch from "@modules/HeaderSearch"
import Dashboard from "@elements/Dashboard"
import "./style.scss"

const $header = new HeaderSearch()

const geoState = new GeoState()

const $resultDisplay = new ResultDisplay()

geoState.addObserver($resultDisplay)

const $dashboard = new Dashboard({
  header: $header.headerElement,
  body: $resultDisplay.resultDisplayElement,
})

if ($dashboard.dashboardElement) {
  $app?.appendChild($dashboard.dashboardElement)
}
