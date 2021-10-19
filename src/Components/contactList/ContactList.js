import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsActions";
import PropTypes from "prop-types";
import style from "./ContactList.module.css";

const ContactList = ({ contactList, contactFilter, deleteContact }) => {
  const onDeleteBtnClick = (e) => {
    const id = e.target.id;
    deleteContact(id);
  };

  const findContact = () =>
    contactList.filter((contact) => {
      console.log(contact.name);
      console.log(contactFilter);
      return contact.name.toLowerCase().includes(contactFilter.toLowerCase());
    });

  return (
    <ul className={style.contactList}>
      {findContact().map((contact) => (
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
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contactList: state.contacts.items,
  contactFilter: state.contacts.filter,
});

const mapDispatchToProps = {
  deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
