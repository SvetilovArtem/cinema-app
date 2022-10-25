import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from './slices/catalogSlice'
import filmInfoReducer from './slices/filmInfoSlice'
import mainReducer from './slices/mainSlice'
import bestFilmsReducer from './slices/bestSlice'

export const store = configureStore({
  reducer: {
    catalogReducer,
    filmInfoReducer,
    mainReducer,
    bestFilmsReducer
  },
})