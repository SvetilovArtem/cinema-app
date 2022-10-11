import { createSlice } from '@reduxjs/toolkit'

const monthes = [
    {id: 0, name: 'JANUARY'}, 
    {id: 1, name: 'FEBRUARY'}, 
    {id: 2, name: 'MARCH'}, 
    {id: 3, name: 'APRIL'}, 
    {id: 4, name: 'MAY'}, 
    {id: 5, name: 'JUNE'}, 
    {id: 6, name: 'JULY'}, 
    {id: 7, name: 'AUGUST'}, 
    {id: 8, name: 'SEPTEMBER'}, 
    {id: 9, name: 'OCTOBER'}, 
    {id: 10, name: 'NOVEMBER'}, 
    {id: 11, name: 'DECEMBER'}
]

const initialState = {
    yearPremiere: new Date().getFullYear(),
    monthPremiere: monthes.filter(e => e.id === new Date().getMonth())[0].name,
    premieres: []
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setPremieres: (state, action) => {
      state.premieres = action.payload.splice(0, 10)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPremieres } = mainSlice.actions

export default mainSlice.reducer