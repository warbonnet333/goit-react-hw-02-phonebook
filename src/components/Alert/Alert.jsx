import React from "react"
import style from "./Alert.module.css"
import PropTypes from 'prop-types';


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

export default Alert