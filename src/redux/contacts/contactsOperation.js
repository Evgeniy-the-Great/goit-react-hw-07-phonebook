import axios from "axios";
import {
  addContact,
  deleteContact,
  getContacts,
  setError,
  setLoader,
} from "./contactsActions";

const addContactOperation = (contacts) => async (dispatch) => {
  dispatch(setLoader());
  try {
    const response = await axios.post(
      `https://phonebook-de2b8-default-rtdb.firebaseio.com/contacts.json`,
      contacts
    );
    dispatch(addContact({ ...contacts, id: response.data.name }));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};

const getContactOperation = () => async (dispatch) => {
  dispatch(setLoader());
  try {
    const response = await axios.get(
      `https://phonebook-de2b8-default-rtdb.firebaseio.com/contacts.json`
    );

    if (response.data) {
      const contacts = Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
      dispatch(getContacts(contacts));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};

const deleteContactOperation = (id) => async (dispatch) => {
  dispatch(setLoader());
  try {
    await axios.delete(
      `https://phonebook-de2b8-default-rtdb.firebaseio.com/contacts/${id}.json`
    );

    dispatch(deleteContact(id));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};

export { addContactOperation, getContactOperation, deleteContactOperation };
