
export interface ICard {
    id: number;
    cardNumber: number;
    balance: number
  }

  export interface CardState {
    cards: ICard[];
  }
  