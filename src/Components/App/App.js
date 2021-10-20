import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactOperation } from "../../redux/contacts/contactsOperation";
import {
  errorSelector,
  loaderSelector,
} from "../../redux/contacts/contactsSelectors";
import ContactForm from "../contactForm/ContactForm ";
import ContactList from "../contactList/ContactList";
import Filter from "../filter/Filter";
import styles from "./App.module.css";

const App = () => {
  const loader = useSelector(loaderSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactOperation());
  }, [dispatch]);

  // useEffect(() => {
  //   contactList &&
  //     localStorage.setItem("contacts", JSON.stringify(contactList));
  // }, [contactList]);

  return (
    <>
      <div className={styles.box}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {loader && <h2>...loading</h2>}
        {error && <h2>{error}</h2>}
        <ContactList />
      </div>
    </>
  );
};

export default App;
