import styles from './styles.module.scss';
import type { 
  SpinnerConstructor, 
  SpinnerInterface, 
  SpinnerSize } from './types';

class Spinner implements SpinnerInterface{
  protected size: SpinnerSize = 'medium';
  protected $spinner: HTMLElement | null = null;

  constructor({ size }: SpinnerConstructor) {
    this.size = size;

    this.buildSpinner();
  }

  get spinnerElement() {
    return this.$spinner;
  }

  protected buildSpinner = () => {
    const $spinner = document.createElement('div');

    $spinner.className = [
      styles.spinner,
      styles[`${this.size}`]
    ].join(' ');

    this.$spinner = $spinner;
  }
}

export default Spinner;