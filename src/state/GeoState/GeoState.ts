import Observer from "@services/Observer";
import type { GeoStateType, GeoStateInterface } from "./types";
import { GeoDataType } from "@services/IPGeoAPI";

class GeoState extends Observer<GeoStateType> implements GeoStateInterface {
  protected static instance: GeoState | null = null;

  static EVENT_TYPE_LOADING: string = 'EVENT_TYPE_LOADING';
  static EVENT_TYPE_UPDATE_GEO_DATA: string = 'EVENT_TYPE_UPDATE_GEO_DATA';
  static EVENT_TYPE_UPDATE_INIT: string = 'EVENT_TYPE_UPDATE_INIT';

  static INIT_STATE: GeoStateType = {
    isLoading: false,
    isInitData: false,
    data: {
      ip: "",
      location: null,
      domains: [],
      as: null,
      isp: ""
    }
  }

  protected _state: GeoStateType = GeoState.INIT_STATE;

  constructor() {
    super(GeoState.INIT_STATE);

    if (GeoState.instance && typeof GeoState.instance === "object") {
      return GeoState.instance;
    }

    GeoState.instance = this;
    return this;
  }

  public get state() {
    return this._state;
  }

  public toggleLoader = (loading: boolean) => {
    this._state.isLoading = loading;

    this.notificationObservers(GeoState.EVENT_TYPE_LOADING);
    return this;
  }

  public updateGeoData = async (data: GeoDataType) => {
    this._state.data = data;
  
    this.notificationObservers(GeoState.EVENT_TYPE_UPDATE_GEO_DATA);
    return this;
  }

  public setInitGeoData = () => {
    if (!this._state.isInitData) {
      this._state.isInitData = true;
      this.notificationObservers(GeoState.EVENT_TYPE_UPDATE_INIT);
    }
  }
}

export default GeoState;