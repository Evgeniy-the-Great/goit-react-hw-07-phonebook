import React from "react";
import { connect } from "react-redux";
import { filterContact } from "../../redux/contacts/contactsActions";
import PropTypes from "prop-types";
import style from "./Filter.module.css";

const Filter = ({ filterContact }) => {
  const addToFilterState = (e) => {
    const filter = e.target.value;
    filterContact(filter);
  };
  return (
    <label className={style.filterLabel}>
      Find contact by name
      <input
        type="text"
        name="filter"
        onChange={addToFilterState}
        className={style.filterInput}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  addToFilterState: PropTypes.func,
};

const mapDispatchToProps = {
  filterContact,
};

export default connect(null, mapDispatchToProps)(Filter);
