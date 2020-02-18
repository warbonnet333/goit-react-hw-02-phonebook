import React from "react";
import PropTypes from 'prop-types';

const Contact = ({ name, number, onDelete }) => (
  <>
    <p>{name}</p>
    <p>{number}</p>
    <button type="button" onClick={onDelete}>Delete</button>
  </>
)

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Contact