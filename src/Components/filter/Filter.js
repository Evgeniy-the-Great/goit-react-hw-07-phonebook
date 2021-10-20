import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterContact } from "../../redux/contacts/contactsActions";
import PropTypes from "prop-types";
import style from "./Filter.module.css";
import { contactFilterSelector } from "../../redux/contacts/contactsSelectors";

const Filter = () => {
  const filter = useSelector(contactFilterSelector);
  const dispatch = useDispatch();

  const addToFilterState = (e) => {
    const value = e.target.value;
    dispatch(filterContact(value));
  };

  return (
    <label className={style.filterLabel}>
      Find contact by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={addToFilterState}
        className={style.filterInput}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  filterContact: PropTypes.func,
};

export default Filter;
