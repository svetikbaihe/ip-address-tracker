import { type GeoStateType } from "@state/GeoState"

export interface ResultDisplayInterface {
  resultDisplayElement: HTMLElement | null
  eventTypes: string[]
  handleEvent: 
  ( 
    newState: GeoStateType,
    prevState: GeoStateType,
    eventType: string
  ) => void
}