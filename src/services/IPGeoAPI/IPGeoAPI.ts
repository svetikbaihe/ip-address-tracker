import { API_HOST, API_METHOD_GET } from "@constants/api";
import GeoState, { type GeoStateInterface } from "@state/GeoState";
import type { IPGeoAPIInterface, GeoDataType } from "./types";

class IPGeoAPI implements IPGeoAPIInterface {
  protected geoState: GeoStateInterface;

  constructor() {
    this.geoState = new GeoState();
  }

  public getInitGeoData = async () => {
    const { state, toggleLoader, updateGeoData, setInitGeoData } = this.geoState;

    toggleLoader(true);

    try {
      const response = await fetch(`${API_HOST}`, { method: API_METHOD_GET });

      const data: GeoDataType = await response.json();

      updateGeoData(data);

    } catch (error) {
      console.log('getGeoData => error', error);
    } finally {
      if (!state.isInitData) {
        setInitGeoData();
      }

      toggleLoader(false);
    }
  }

  public getGeoData = async (ip: string) => {
    const { state, toggleLoader, updateGeoData, setInitGeoData } = this.geoState;

    toggleLoader(true);

    try {
      const response = await fetch(`${API_HOST}&ipAddress=${ip}`, { method: API_METHOD_GET });

      const data: GeoDataType = await response.json();

      updateGeoData(data);

    } catch (error) {
      console.log('getGeoData => error', error);
    } finally {
      if (!state.isInitData) {
        setInitGeoData();
      }

      toggleLoader(false);
    }
  }
}

export default IPGeoAPI;