export interface ObserverInterface<State> {
  addObserver: (observer: ObserverType<State>) => void
  removeObserver: (observer: ObserverType<State>) => void
}

export interface ObserverType<State> {
  handleEvent: (newState: State, prevState: State, eventType: string) => void
  eventTypes: string[]
}
