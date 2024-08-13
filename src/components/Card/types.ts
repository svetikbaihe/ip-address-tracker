export interface CardInterface {
  cardElement: HTMLElement | null
}

export interface CardConstructor {
  cardData: CardDataType[]
}

export interface CardDataType {
  title: string
  body: string
}