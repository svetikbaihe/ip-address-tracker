import type { ButtonConstructor, ButtonInterface } from "./types"
import styles from "./styles.module.scss"

class Button implements ButtonInterface {
  protected handleClick: VoidFunction = () => {}
  protected $button: HTMLElement | null = null

  constructor({ onClick }: ButtonConstructor) {
    if (onClick) {
      this.handleClick = onClick
    }

    this.buildButton()
  }

  public get buttonElement() {
    return this.$button
  }

  protected buildButton = () => {
    const $button = document.createElement("button")

    $button.className = styles.button

    $button.addEventListener("click", () => this.handleClick())

    const $buttonIcon = document.createElement("img")

    $buttonIcon.setAttribute("src", "/icons/icon-arrow.svg")

    $button.appendChild($buttonIcon)

    this.$button = $button
  }
}

export default Button
