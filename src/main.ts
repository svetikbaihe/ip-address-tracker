import './style.scss';
import $app from '@constants/app';
import Card, { type CardDataType } from '@components/Card';

const data: CardDataType[] = [
  {
    title: 'IP ADDRESS',
    body: "192.212.174.101"
  },
  {
    title: 'LOCATION',
    body: "Brooklyn, NY 10001"
  },
  {
    title: 'TIMEZONE',
    body: "UTC -05:00"
  },
  {
    title: 'ISP',
    body: "SpaceX Starlink"
  }
]

const $card = new Card({ cardData: data });

if ($card.cardElement) {
  $app?.appendChild($card.cardElement);
}

