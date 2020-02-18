import React from "react";

const Contact = ({ name, number, onDelete }) => (
  <>
    <p>{name}</p>
    <p>{number}</p>
    <button type="button" onClick={onDelete}>Delete</button>
  </>
)

export default Contact