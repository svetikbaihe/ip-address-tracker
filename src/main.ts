import './style.scss';
import $app from '@constants/app';
import InputText from '@elements/InputText';

const $input = new InputText({
  name: 'ip-domain',
  placeholder: 'Search for any IP adress or domain'
});

if($input.inputTextElement) {
  $app?.appendChild($input.inputTextElement);
}