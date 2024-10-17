import type { InputTextConstructor, InputTextInterface } from "./types"
import styles from "./styles.module.scss"

class InputText implements InputTextInterface {
  protected name: string = ""
  protected placeholder: string = ""
  protected $inputTextWrapper: HTMLElement | null = null
  protected handleChange: (value: string) => void

  constructor({ name, placeholder, onChange }: InputTextConstructor) {
    this.name = name

    if (placeholder) {
      this.placeholder = placeholder
    }

    this.handleChange = onChange

    this.buildInputTextWrapper()
  }

  public get inputTextElement() {
    return this.$inputTextWrapper
  }

  protected buildInputText = () => {
    const $inputText = document.createElement("input")

    $inputText.className = styles.inputText

    $inputText.setAttribute("type", "text")
    $inputText.setAttribute("name", this.name)
    $inputText.setAttribute("id", `id-${this.name}`)
    $inputText.setAttribute("placeholder", this.placeholder)

    $inputText.addEventListener("input", (e: Event) => {
      const target = e.target as HTMLInputElement

      this.handleChange(target.value)
    })

    return $inputText
  }

  protected buildInputTextWrapper = () => {
    const $inputTextWrapper = document.createElement("div")

    $inputTextWrapper.className = styles.inputTextWrapper

    $inputTextWrapper.appendChild(this.buildInputText())

    this.$inputTextWrapper = $inputTextWrapper
  }
}

export default InputText
