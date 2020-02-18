import React from "react";
import PropTypes from 'prop-types';

const Filter = ({ value, changeFilter }) => (
  <>
    <h3>Find contact by name</h3>
    <input type="text" value={value} onChange={changeFilter} placeholder="Find a contact..." />
  </>
)

Filter.propTypes = {
  value: PropTypes.string
}

export default Filter