import './style.scss';
import $app from '@constants/app';
import Button from '@elements/Button';

const $button = new Button({});

if($button.buttonElement) {
  $app?.appendChild($button.buttonElement);
}