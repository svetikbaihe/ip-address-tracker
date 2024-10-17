import type { DashboardConstructor, DashboardInterface } from "./types"
import styles from "./styles.module.scss"

class Dashboard implements DashboardInterface {
  protected header: HTMLElement | null = null
  protected body: HTMLElement | null = null
  protected $dashboard: HTMLElement | null = null

  constructor({ header, body }: DashboardConstructor) {
    this.header = header
    this.body = body

    this.buildDashboard()
  }

  public get dashboardElement() {
    return this.$dashboard
  }

  protected buildDashboard = () => {
    const $dashboard = document.createElement("div")

    $dashboard.className = styles.dashboard

    const $dashboardHeader = document.createElement("div")

    const $dashboardBody = document.createElement("div")

    $dashboardBody.className = styles.dashboardBody

    if (this.header) {
      $dashboardHeader?.appendChild(this.header)
    }

    if (this.body) {
      $dashboardBody?.appendChild(this.body)
    }

    $dashboard.appendChild($dashboardHeader)
    $dashboard.appendChild($dashboardBody)

    this.$dashboard = $dashboard
  }
}

export default Dashboard
