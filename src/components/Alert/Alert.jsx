import React from "react"
import style from "./Alert.module.css"

const Alert = ({ existedName, onCloseAlert }) =>
  <div className={style.alert}>
    <p>
      {`${existedName} is already in contacts`}
    </p>
    <button type="button" onClick={onCloseAlert}>OK</button>
  </div>

export default Alert