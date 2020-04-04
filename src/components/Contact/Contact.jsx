import React from "react";
import PropTypes from 'prop-types';
import style from './Contact.module.css'
import { TiDelete } from "react-icons/all"
import { connect } from "react-redux"
// import * as listActions from "../redux/listActions"

const Contact = ({ name, number, onDelete }) =>
  <li className={style.list__item}>
    <p>{name}</p>
    <p>{number}</p>
    <button type="button" onClick={onDelete}><TiDelete className={style.icon} /></button>
  </li>


Contact.propTypes = {
  onDelete: PropTypes.func.isRequired
}


// const mDTP = dispatch => ({
//   onDelete: () => dispatch(listActions.deleteContact())
// })

export default connect(null)(Contact)