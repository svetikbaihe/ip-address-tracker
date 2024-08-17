import './style.scss';
import $app from '@constants/app';
import Card, { type CardDataType } from '@components/Card';
import Map from '@components/Map';
import HeaderSearch from '@modules/HeaderSearch';

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

const $header = new HeaderSearch();

const $map = new Map({
  longtitude: -122.0838,
  langtitude: 37.3861
});

if ($card.cardElement && $map.mapElement && $header.headerElement) {
  $app?.appendChild($header.headerElement);
  $app?.appendChild($card.cardElement);
  $app?.appendChild($map.mapElement);
}

