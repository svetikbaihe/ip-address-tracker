import { type HeaderSearchInterface } from "./types"
import InputText, { type InputTextInterface } from "@elements/InputText"
import Button, { type ButtonInterface } from "@elements/Button"
import IPGeoAPI, { type IPGeoAPIInterface } from "@services/IPGeoAPI"
import styles from "./styles.module.scss"

class HeaderSearch implements HeaderSearchInterface {
  protected $headerSearch: HTMLElement | null = null
  protected $inputSearch: InputTextInterface | null = null
  protected $submitButton: ButtonInterface | null = null
  protected ipGeoApi: IPGeoAPIInterface
  protected ip: string = ""

  constructor() {
    this.$inputSearch = new InputText({
      name: "ip-search",
      placeholder: "Search for any IP address or domain",
      onChange: this.handleSearchChange,
    })

    this.$submitButton = new Button({
      onClick: this.handleFetchData,
    })

    this.ipGeoApi = new IPGeoAPI()

    this.ipGeoApi.getInitGeoData()

    this.buildHeader()
  }

  public get headerElement() {
    return this.$headerSearch
  }

  protected buildHeader = () => {
    const $headerSearch = document.createElement("div")

    $headerSearch.className = styles.headerSearch

    const $title = document.createElement("h1")

    $title.className = styles.title

    $title.innerText = "IP Address Tracker"

    $headerSearch.appendChild($title)

    $headerSearch.appendChild(this.buildInputWrapper())

    this.$headerSearch = $headerSearch
  }

  protected buildInputWrapper = () => {
    const $inputWrapper = document.createElement("div")

    $inputWrapper.className = styles.inputWrapper

    if (
      this.$inputSearch?.inputTextElement &&
      this.$submitButton?.buttonElement
    ) {
      $inputWrapper.appendChild(this.$inputSearch.inputTextElement)
      $inputWrapper.appendChild(this.$submitButton.buttonElement)
    }

    return $inputWrapper
  }

  protected handleSearchChange = (value: string) => {
    this.ip = value
  }

  protected handleFetchData = () => {
    this.ipGeoApi.getGeoData(this.ip)
  }
}

export default HeaderSearch
