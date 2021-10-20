import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  filterContact,
  deleteContact,
  getContacts,
  addContact,
  setLoader,
  setError,
} from "./contactsActions";

const itemsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [getContacts]: (_, { payload }) => payload,
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filterReducer = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

const loaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const errorReducer = createReducer("", {
  [setError]: (_, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loader: loaderReducer,
  error: errorReducer,
});
