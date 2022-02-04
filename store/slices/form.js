import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from '../middleware/apiActions';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    list: {
      formData: {},
      receivedResponse: {}, // Could be string 'Network Error' but reverts back to object
      receivedValidationErrors: []
    },
    loading: false,
  },
  reducers: {
    formInputs: (state, action) => {
      state.list.formData = action.payload
    },
    formDataSending: (state, action) => {
      state.loading = true;
    },
    mailSendSuccess: (state, action) => {
      state.loading = false;
      state.list.receivedResponse = action.payload
      state.list.receivedValidationErrors = []
      state.list.formData = {}
    },
    mailSendFailed: (state, action) => {
      state.loading = false;
      state.list.receivedResponse = action.payload
    },
    validatonErrorsReceived: (state, action) => {
      state.list.receivedValidationErrors = action.payload
    },
    responseDeleted: (state, action) => {
      state.list.receivedResponse = {}
    }
  }
})

export const {
  formInputs, 
  formDataSending, 
  mailSendSuccess, 
  mailSendFailed,
  deleteValidationsErrors,
  validatonErrorsReceived, 
  responseDeleted
} = formSlice.actions
export default formSlice.reducer

const url = `'https://mindkeyz-api.herokuapp.com/api/contact'`

// Action Creator
export const sendMail = (data) => (dispatch, getState) => {
  dispatch(formInputs(data))

  const { formData } = getState().form.list
  
  dispatch(
    apiCallBegan({
      url,
      method: 'post',
      body: JSON.stringify(formData),
      headers: JSON.stringify({ 'Content-Type': 'application/json' }),
      onStart: formDataSending.type,
      onSuccess: mailSendSuccess.type,
      onError: mailSendFailed.type,
      onValidationError: validatonErrorsReceived.type
    })
  )
}