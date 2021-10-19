// import { combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsReducer";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// export const store = createStore(rootReducer, composeWithDevTools());

//! Toolkit

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
