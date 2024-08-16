import type { ObserverInterface, ObserverType } from "./types";

abstract class Observer<State> implements ObserverInterface<State> {
  protected observers: ObserverType<State>[] = [];
  protected _prevState: State;
  protected abstract _state: State;

  constructor(state: State) {
    this._prevState = JSON.parse(JSON.stringify(state));
  }

  protected notificationObservers = (eventType: string) => {
    this.observers.forEach(observer => {
      if (observer.eventTypes.includes(eventType)) {
        observer.handleEvent(this._state, this._prevState, eventType)
      }
    })

    this._prevState = JSON.parse(JSON.stringify(this._state));
  }

  public addObserver = (observer: ObserverType<State>): this => {
    this.observers.push(observer);
    return this
  }

  public removeObserver = (observer: ObserverType<State>): this => {
    this.observers.filter(obs => obs !== observer);
    return this
  }
}
export default Observer;