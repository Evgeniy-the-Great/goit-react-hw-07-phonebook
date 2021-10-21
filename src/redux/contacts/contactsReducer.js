import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  filterContact,
  deleteContact,
  getContacts,
  addContact,
  setLoader,
  setError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactError,
  deleteContactSuccess,
  deleteContactRequest,
  resetError,
} from "./contactsActions";

const itemsReducer = createReducer([], {
  // [addContact]: (state, { payload }) => [...state, payload],
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  // [getContacts]: (_, { payload }) => payload,
  [getContactsSuccess]: (_, { payload }) => payload,
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filterReducer = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

const loaderReducer = createReducer(false, {
  // [setLoader]: (state) => !state,
  [getContactsRequest]: () => true,
  [addContactRequest]: () => true,
  [deleteContactRequest]: () => true,

  [getContactsSuccess]: () => false,
  [addContactSuccess]: () => false,
  [deleteContactSuccess]: () => false,

  [getContactsError]: () => false,
  [addContactError]: () => false,
  [deleteContactError]: () => false,
});

const errorReducer = createReducer("", {
  // [setError]: (_, action) => action.payload,
  [resetError]: () => "",
  [getContactsError]: (_, action) => action.payload,
  [addContactError]: (_, action) => action.payload,
  [deleteContactError]: (_, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loader: loaderReducer,
  error: errorReducer,
});
