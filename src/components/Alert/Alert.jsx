import React, { Component } from "react"
import style from "./Alert.module.css"

export default class Alert extends Component {

  componentDidMount() {
    const { onCloseAlert } = this.props
    setTimeout(onCloseAlert, 3000)
  }

  render() {
    const { existedName, onCloseAlert } = this.props
    return (
      <div className={style.alert}>
        <p>
          {`${existedName} is already in contacts`}
        </p>
        <button type="button" onClick={onCloseAlert}>OK</button>
      </div>
    )
  }
}