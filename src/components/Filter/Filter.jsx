import React from "react";
import PropTypes from 'prop-types';
import style from "./Filter.module.css"
import * as filterActions from "../redux/filterActions"
import { connect } from "react-redux"


const Filter = ({ value, changeFilter }) => (
  <div className={style.container}>
    <label htmlFor="find">Find contact by name</label>
    <input type="text" name="find" value={value} onChange={changeFilter} />
  </div>
)

Filter.propTypes = {
  value: PropTypes.string,
  changeFilter: PropTypes.func.isRequired
}

const mSTP = state => ({
  value: state.filter
})

const mDTP = (dispatch) => ({
  changeFilter: (event) => dispatch(filterActions.fillFilter(event.target.value))
})

export default connect(mSTP, mDTP)(Filter)