import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactReducer from "../redux/contacts/contactReducer";
// import logger from "redux-logger";

const defaultMiddleware = getDefaultMiddleware();

// const md1 = (store) => (next) => (action) => {
//   console.log("Hello");
//   return next(action);
// };

// const md2 = (store) => (next) => (action) => {
//   console.log("Hello bfbf");
//   return next(action);
// };

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware: [...defaultMiddleware],
});

export default store;
