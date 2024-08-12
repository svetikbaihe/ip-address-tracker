import styles from './styles.module.scss';
import type { InputTextConstructor, InputTextInterface } from './types';
import Button from '@elements/Button';

class InputText implements InputTextInterface{
  protected name: string = '';
  protected placeholder: string = '';
  protected $inputTextWrapper: HTMLElement | null = null;

  constructor({ 
    name, 
    placeholder }: InputTextConstructor) {
      this.name = name;
      
      if(placeholder) {
        this.placeholder = placeholder;
      }

      this.buildInputTextWrapper();
  }

  public get inputTextElement() {
    return this.$inputTextWrapper;
  }

  protected buildInputText = () => {
    const $inputText = document.createElement('input');

    $inputText.className = styles.input_text;

    $inputText.setAttribute('type', 'text');
    $inputText.setAttribute('name', this.name);
    $inputText.setAttribute('id', `id-${this.name}`);
    $inputText.setAttribute('placeholder', this.placeholder);

    return $inputText;
  }

  protected buildInputTextWrapper = () => {
    const $inputTextWrapper = document.createElement('div')

    $inputTextWrapper.className = styles.input_text_wrapper;

    $inputTextWrapper.appendChild(this.buildInputText())

    const $button = new Button({});

    if($button.buttonElement) {
      $inputTextWrapper?.appendChild($button.buttonElement);
    }

    this.$inputTextWrapper = $inputTextWrapper;
  }
}

export default InputText;