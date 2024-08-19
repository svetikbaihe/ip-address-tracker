import styles from './styles.module.scss';
import Card from '@components/Card';
import Map from '@components/Map';
import GeoState, { type GeoStateType } from '@state/GeoState';
import { type ResultDisplayInterface } from './types';

class ResultDisplay implements ResultDisplayInterface {
  protected $resultDisplay: HTMLElement | null = null;
  protected $infoCard: HTMLElement | null = null;
  protected $infoMap: HTMLElement | null = null;

  public eventTypes = [
    GeoState.EVENT_TYPE_LOADING,
    GeoState.EVENT_TYPE_UPDATE_GEO_DATA,
    GeoState.EVENT_TYPE_UPDATE_INIT
  ]

  constructor() {

    this.buildResultDisplay();
  }

  public get resultDisplayElement() {
    return this.$resultDisplay;
  }

  public handleEvent = (
    newState: GeoStateType,
    prevState: GeoStateType,
    eventType: string
  ) => {
    if (
      eventType === GeoState.EVENT_TYPE_UPDATE_GEO_DATA && 
      newState.isInitData || 
      eventType === GeoState.EVENT_TYPE_UPDATE_INIT
    ) {
      if (this.$resultDisplay) {
        this.$resultDisplay.innerHTML = '';
      }

      this.buildInfoCard(
        newState.data.ip,
        `${newState.data.location?.city}, ${newState.data.location?.region}${newState.data.location?.postalCode}`,
        `UTC ${newState.data.location?.timezone}` ?? '',
        newState.data.isp
      )

      this.buildInfoMap(
        newState.data.location?.lat ?? 0,
        newState.data.location?.lng ?? 0,
      )

      if (this.$resultDisplay && this.$infoCard && this.$infoMap) {
        this.$resultDisplay.appendChild(this.$infoCard);
        this.$resultDisplay.appendChild(this.$infoMap);
      }
    }
  }

  protected buildResultDisplay = () => {
    const $resultDisplay = document.createElement('div');

    $resultDisplay.className = styles.result_display;

    this.$resultDisplay = $resultDisplay;
  }

  protected buildInfoCard = (
    ip: string, 
    location: string, 
    timezone: string, 
    isp: string
  ) => {
    const $infoCard = new Card({ 
      cardData: [
        {
          title: 'IP ADDRESS',
          body: ip || '-'
        },
        {
          title: 'LOCATION',
          body: location || '-'
        },
        {
          title: 'TIMEZONE',
          body: timezone || '-'
        },
        {
          title: 'ISP',
          body: isp || '-'
        }
      ]
    }).cardElement;

    this.$infoCard = $infoCard;
  }

  protected buildInfoMap = (langtitude: number, longtitude: number) => {
    const $infoMap = new Map({
      langtitude,
      longtitude
    }).mapElement;

    this.$infoMap = $infoMap;
  }
}

export default ResultDisplay;

