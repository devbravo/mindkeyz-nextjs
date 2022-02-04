import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    tick: 'init',
  },
  reducers: {
    HYDRATE: (state, action) => {
      return state = action.payload
    },
    TICK: (state, action) => {
      return state, { tick: action.payload }
    }
}})

export const {HYDRATE, TICK} = appSlice.actions
export default appSlice.reducer