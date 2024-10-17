export interface SpinnerInterface {
  spinnerElement: HTMLElement | null
}

export interface SpinnerConstructor {
  size: SpinnerSize
}

export type SpinnerSize = "small" | "medium" | "large" | "page"
