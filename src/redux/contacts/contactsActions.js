import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

// import { ADD, GET, DELETE, FILTER } from "../contacts/contactsType";

// export const addContact = (contact) => ({
//   type: ADD,
//   payload: { id: uuidv4(), ...contact },
// });

// export const getContacts = (contacts) => ({
//   type: GET,
//   payload: contacts,
// });

// export const deleteContact = (id) => ({
//   type: DELETE,
//   payload: id,
// });

// export const filterContact = (value) => ({
//   type: FILTER,
//   payload: value,
// });

// ! Toolkit

export const filterContact = createAction("contactsActions/filterContact");
export const deleteContact = createAction("contactsActions/deleteContact");
export const getContacts = createAction("contactsActions/getContacts");
export const addContact = createAction(
  "contactsActions/addContact",
  (contact) => ({
    payload: {
      id: uuidv4(),
      ...contact,
    },
  })
);

// export default { filterContact, deleteContact, getContacts, addContact };
