import { createAction } from "@reduxjs/toolkit";

export const filterContact = createAction("contactsActions/filterContact");

export const deleteContactRequest = createAction(
  "contactsActions/deleteContactRequest"
);

export const deleteContactSuccess = createAction(
  "contactsActions/deleteContactSuccess"
);
export const deleteContactError = createAction(
  "contactsActions/deleteContactError"
);

// export const deleteContact = createAction("contactsActions/deleteContact");

export const getContactsRequest = createAction(
  "contactsActions/getContactsRequest"
);
export const getContactsSuccess = createAction(
  "contactsActions/getContactsSuccess"
);
export const getContactsError = createAction(
  "contactsActions/getContactsError"
);

// export const getContacts = createAction("contactsActions/getContacts");

export const addContactRequest = createAction(
  "contactsActions/addContactRequest"
);
export const addContactSuccess = createAction(
  "contactsActions/addContactSuccess"
);
export const addContactError = createAction("contactsActions/addContactError");

// export const addContact = createAction(
//   "contactsActions/addContact",
//   (contact) => ({
//     payload: { contact },
//   })
// );

// export const setLoader = createAction("contactsActions/setLoader");
export const resetError = createAction("contactsActions/resetError");
