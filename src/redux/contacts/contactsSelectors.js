import { createSelector } from "reselect";

export const errorSelector = (state) => state.contacts.error;
export const loaderSelector = (state) => state.contacts.loader;
export const contactListSelector = (state) => state.contacts.items;
export const contactFilterSelector = (state) => state.contacts.filter;

export const filteredContactsSelector = createSelector(
  [contactListSelector, contactFilterSelector],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
