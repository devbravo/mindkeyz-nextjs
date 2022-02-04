import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReducer";
import api from "./middleware/api";

// const bindMiddleware = middleware => {
//   if (process.env.NODE_ENV !== "production") {
//     // I require this only in dev environment
//     const { composeWithDevTools } = require("redux-devtools-extension");
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware();
// };

export const makeStore = () => {
  return configureStore({
    reducer,
    middleware: getDefaultMiddleware => [...getDefaultMiddleware(), api],
    devTools: false,
  });
};

export const wrapper = createWrapper(makeStore, { debug: true });
