export interface IPGeoAPIInterface {
  getGeoData: (ip: string) => void
}

export interface GeoDataType {
  ip: string
  location: Location | null
  domains: string[]
  as: As | null
  isp: string
}

export interface Location {
  country: string
  region: string
  city: string
  lat: number
  lng: number
  postalCode: string
  timezone: string
  geonameId: number
}

export interface As {
  asn: number
  name: string
  route: string
  domain: string
  type: string
}