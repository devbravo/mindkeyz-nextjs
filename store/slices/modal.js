import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: false,
  },
  reducers: {
    handleOpen: (state, action) => void(state.value = action.payload),
    handleClose: (state, action) => void(state.value = action.payload) 
  }
})

export const {handleOpen, handleClose} = modalSlice.actions
export default modalSlice.reducer