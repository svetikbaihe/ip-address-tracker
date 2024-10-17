import { GeoDataType } from "@services/IPGeoAPI"
import { ObserverInterface } from "@services/Observer"

export interface GeoStateInterface extends ObserverInterface<GeoStateType> {
  state: GeoStateType
  toggleLoader: (loading: boolean) => void
  updateGeoData: (data: GeoDataType) => void
  setInitGeoData: VoidFunction
}

export interface GeoStateType {
  isLoading: boolean
  isInitData: boolean
  data: GeoDataType
}
