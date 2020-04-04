import React from "react"
import style from "./Alert.module.css"
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import * as alertActions from '../redux/alertActions'


const Alert = ({ existedName, onCloseAlert }) =>
  <div className={style.alert}>
    <p>
      {`${existedName} is already in contacts`}
    </p>
    <button type="button" onClick={onCloseAlert}>OK</button>
  </div>

Alert.propTypes = {
  existedName: PropTypes.string.isRequired,
  onCloseAlert: PropTypes.func.isRequired
}

const mSTP = state => ({
  existedName: state.alert.existedName
})

const mDTP = dispatch => ({
  onCloseAlert: () => dispatch(alertActions.closeAlert())
})


export default connect(mSTP, mDTP)(Alert)