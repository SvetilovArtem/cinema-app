import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bestFilms: [],
  viewed: [],
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
    },
    setViewed: (state, action) => {
      const findItem = state.viewed.find(obj => obj.kinopoiskId === action.payload.kinopoiskId)
      if(!findItem) {
        state.viewed.push({...action.payload})
      }
    },
    removeViewed: (state, action) => {
      state.viewed = state.viewed.filter(obj => obj.kinopoiskId !== action.payload.kinopoiskId)
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setBestFilms, removeBestFilms, setViewed, removeViewed } = bestSlice.actions

export default bestSlice.reducer