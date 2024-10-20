export interface InputTextInterface {
  inputTextElement: HTMLElement | null
}

export interface InputTextConstructor {
  name: string
  placeholder?: string
  onChange: (value: string) => void
}
