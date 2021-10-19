import React, { useState } from "react";
import { connect } from "react-redux";
import { addContact } from "../../redux/contacts/contactsActions";
import styles from "./ContactForm.module.css";

const initialState = {
  name: "",
  number: "",
};

const ContactForm = ({ addContact, contactList }) => {
  const [form, setForm] = useState(initialState);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isThereThisContact = (name) =>
    contactList.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (isThereThisContact(form.name)) {
      alert(`${form.name} is already in contacts`);
      return;
    }

    addContact(form);

    reset();
  };

  const reset = () => setForm({ name: "", number: "" });

  return (
    <form onSubmit={onHandleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          placeholder="Jacob Mercer"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={form.name}
          onChange={onHandleChange}
          className={styles.contactName}
        />
      </label>

      <label className={styles.label}>
        Number
        <input
          placeholder="+38(093)223-77-88"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={form.number}
          onChange={onHandleChange}
          className={styles.contactName}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  contactList: state.contacts.items,
});

const mapDispatchToProps = {
  addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
