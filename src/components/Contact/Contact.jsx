import React from "react";
import PropTypes from 'prop-types';

const Contact = ({ name, number, onDelete }) => (
  <div>
    <p>{name}</p>
    <p>{number}</p>
    <button type="button" onClick={onDelete}>Delete</button>
  </div>
)

Contact.propTypes = {
  onDelete: PropTypes.func.isRequired
}

export default Contact