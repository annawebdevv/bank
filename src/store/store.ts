import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import cardSlice from './cardSlice'

export const store = configureStore({
  reducer: {
      card: cardSlice,
      auth: authSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch