import styles from './styles.module.scss';
import type { DashboardConstructor, DashboardInterface } from './types';

class Dashboard implements DashboardInterface{
  protected header: HTMLElement | null = null;
  protected body: HTMLElement | null = null;
  protected $dashboard: HTMLElement | null = null;

  constructor({
    header,
    body
  }: DashboardConstructor) {
    this.header = header;
    this.body = body;

    this.buildDashboard();
  }

  public get dashboardElement() {
    return this.$dashboard;
  }

  protected buildDashboard = () => {
    const $dashboard = document.createElement('div');

    const $dashboardHeader = document.createElement('div');

    const $dashboardBody = document.createElement('div');

    $dashboard.className = styles.dashboard;

    if(this.header) {
      $dashboardHeader?.appendChild(this.header);
    }

    if(this.body) {
      $dashboardBody?.appendChild(this.body);
    }

    $dashboard.appendChild($dashboardHeader);
    $dashboard.appendChild($dashboardBody);

    this.$dashboard = $dashboard;
  }
}

export default Dashboard;