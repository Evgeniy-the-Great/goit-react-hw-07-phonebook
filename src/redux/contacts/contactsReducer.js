// import { combineReducers } from "redux";
import { createReducer, combineReducers } from "@reduxjs/toolkit";
// import actions from "./contactsActions";
import {
  filterContact,
  deleteContact,
  getContacts,
  addContact,
} from "./contactsActions";

// import actions from "./contactsActions";

// import { ADD, GET, DELETE, FILTER } from "../contacts/contactsType";
// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...state, payload];

//     case GET:
//       return payload;

//     case DELETE:
//       return state.filter((contact) => contact.id !== payload);
//     default:
//       return state;
//   }
// };
// const filterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// ! Toolkit

const itemsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [getContacts]: (_, { payload }) => payload,
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filterReducer = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
