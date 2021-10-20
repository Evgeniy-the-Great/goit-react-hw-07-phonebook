import { createAction } from "@reduxjs/toolkit";

export const filterContact = createAction("contactsActions/filterContact");
export const deleteContact = createAction("contactsActions/deleteContact");
export const getContacts = createAction("contactsActions/getContacts");
export const addContact = createAction(
  "contactsActions/addContact",
  (contact) => ({
    payload: contact,
  })
);

export const setLoader = createAction("contactsActions/setLoader");
export const setError = createAction("contactsActions/setError");
