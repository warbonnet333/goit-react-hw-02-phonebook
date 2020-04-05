import React, { Component } from "react"
import style from "./Alert.module.css"
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import * as alertActions from '../redux/alertActions'


class Alert extends Component {

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

Alert.propTypes = {
  existedName: PropTypes.string,
  onCloseAlert: PropTypes.func.isRequired
}

const mSTP = state => ({
  existedName: state.alert.existedName
})

const mDTP = dispatch => ({
  onCloseAlert: () => dispatch(alertActions.closeAlert())
})


export default connect(mSTP, mDTP)(Alert)