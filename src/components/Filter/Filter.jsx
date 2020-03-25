import React from "react";
import PropTypes from 'prop-types';
import style from "./Filter.module.css"


const Filter = ({ value, changeFilter }) => (
  <div className={style.container}>
    <label htmlFor="find">Find contact by name</label>
    <input type="text" name="find" value={value} onChange={changeFilter} />
  </div>
)

Filter.propTypes = {
  value: PropTypes.string
}

export default Filter