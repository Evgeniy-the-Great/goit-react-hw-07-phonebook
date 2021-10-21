import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import style from "./ContactList.module.css";
import { deleteContactOperation } from "../../redux/contacts/contactsOperation";
import { filteredContactsSelector } from "../../redux/contacts/contactsSelectors";

const ContactList = () => {
  const filteredContacts = useSelector(filteredContactsSelector);
  const dispatch = useDispatch();

  const onDeleteBtnClick = (e) => {
    const id = e.target.id;
    dispatch(deleteContactOperation(id));
  };

  return (
    <ul className={style.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={style.contactItem}>
          <p className={style.contactText}>
            {contact.name}: {contact.number}
          </p>
          <button type="button" id={contact.id} onClick={onDeleteBtnClick}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func,
};

export default ContactList;
