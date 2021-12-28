import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import reducer from './rootReducer';
import api from './middleware/api'

export const makeStore = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      api
    ]
  })
}

export const wrapper = createWrapper(makeStore, {debug: true})