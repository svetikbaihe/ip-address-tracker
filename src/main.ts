import './style.scss';
import $app from '@constants/app';
import InputText from '@elements/InputText';
import Spinner from '@elements/Spinner';

const $input = new InputText({
  name: 'ip-domain',
  placeholder: 'Search for any IP adress or domain'
});

const $spinner = new Spinner({size: 'medium'});

if($input.inputTextElement) {
  $app?.appendChild($input.inputTextElement);
}

if($spinner.spinnerElement) {
  $app?.appendChild($spinner.spinnerElement);
}