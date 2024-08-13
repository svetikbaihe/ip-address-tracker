import styles from './styles.module.scss';
import type { 
  CardConstructor, 
  CardInterface, 
  CardDataType 
} from './types';

class Card implements CardInterface {
  protected cardData: CardDataType[] = [];
  protected $card: HTMLElement | null = null;

  constructor({ cardData }: CardConstructor) {
    this.cardData = cardData;

    this.buildCard();
  }

  public get cardElement() {
    return this.$card;
  }

  protected buildCard = () => {
    const $card = document.createElement('div');

    $card.className = styles.card;

    this.cardData.forEach((data, index) => {
      const $dataWrapper = document.createElement('div');

      $dataWrapper.className = styles.data_wrapper;

      const $title = document.createElement('h2');

      $title.className = styles.title;

      $title.innerText = data.title;

      const $body = document.createElement('p');

      $body.className = styles.body;

      $body.innerText = data.body;

      const $divider = document.createElement('div');

      $divider.className = styles.divider;

      $dataWrapper.appendChild($title);
      $dataWrapper.appendChild($body);

      if (this.cardData.length - 1 !== index) {
        $dataWrapper.appendChild($divider);
      }

      $card.appendChild($dataWrapper);
    })

    this.$card = $card;
  }
}

export default Card;