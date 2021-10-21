import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetError } from "../../redux/contacts/contactsActions";
// import { addContact } from "../../redux/contacts/contactsActions";
import { addContactOperation } from "../../redux/contacts/contactsOperation";
import { contactListSelector } from "../../redux/contacts/contactsSelectors";
import styles from "./ContactForm.module.css";

const initialState = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const contactList = useSelector(contactListSelector);
  const error = useSelector((state) => state.contacts.error);
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    error && dispatch(resetError());
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

    dispatch(addContactOperation(form));

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

export default ContactForm;
