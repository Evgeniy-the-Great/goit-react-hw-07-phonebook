import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getContacts } from "../../redux/contacts/contactsActions";
import ContactForm from "../contactForm/ContactForm ";
import ContactList from "../contactList/ContactList";
import Filter from "../filter/Filter";
import styles from "./App.module.css";

const App = ({ contactList, getContacts }) => {
  useEffect(() => {
    getContacts && getContacts(JSON.parse(localStorage.getItem("contacts")));
  }, [getContacts]);

  useEffect(() => {
    contactList &&
      localStorage.setItem("contacts", JSON.stringify(contactList));
  }, [contactList]);

  return (
    <>
      <div className={styles.box}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  contactList: state.contacts.items,
});

const mapDispatchToProps = {
  getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
