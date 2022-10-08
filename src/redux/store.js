import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from './slices/catalogSlice'
import filmInfoReducer from './slices/filmInfoSlice'
import mainReducer from './slices/mainSlice'

export const store = configureStore({
  reducer: {
    catalogReducer,
    filmInfoReducer,
    mainReducer
  },
})