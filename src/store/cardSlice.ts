import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {CardState} from './../types/cards'

export const getCardNumber = (min: number = 100000, max: number = 999999) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};



const initialState: CardState = {
  cards: [{id: 555555, cardNumber:555555, balance:500}],
};

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state) => {
      const number = getCardNumber();
      state.cards.push({ id: number, cardNumber: number, balance:0 });
    },
    removeCard: (state, action) => {
      state.cards.filter(card => card.id !== action.payload.id )
    },
  },
});

export const {addCard, removeCard} = cardSlice.actions;

export default cardSlice.reducer;
