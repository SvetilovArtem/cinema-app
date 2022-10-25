import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bestFilms: []
}

export const bestSlice = createSlice({
  name: 'best',
  initialState,
  reducers: {
    setBestFilms: (state, action) => {
        const findItem = state.bestFilms.find((obj) => obj.kinopoiskId === action.payload.kinopoiskId)

        if(!findItem) {
            state.bestFilms.push({...action.payload})
        }
        
    },
    removeBestFilms: (state, action) => {
        state.bestFilms = state.bestFilms.filter(obj => obj.kinopoiskId !== action.payload.kinopoiskId)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setBestFilms, removeBestFilms } = bestSlice.actions

export default bestSlice.reducer