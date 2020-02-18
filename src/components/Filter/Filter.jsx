import React from "react";

const Filter = ({ value, changeFilter }) => (
  <>
    <h3>Find contact by name</h3>
    <input type="text" value={value} onChange={changeFilter} placeholder="Find a contact..." />
  </>
)

export default Filter