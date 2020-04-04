import React, { Component } from "react";
import styles from "./Form.module.css"
import { CSSTransition } from "react-transition-group"
import slideTransition from '../../transitions/slide.module.css'
import checkedName from "../service/checkedName"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as listActions from "../redux/listActions"
import * as alertActions from '../redux/alertActions'
const uuidv4 = require("uuid/v4");

const initialState = {
  name: "",
  number: "",
}

class Form extends Component {
  state = {
    name: "",
    number: "",
    isShown: false
  }

  componentDidMount() {
    this.setState({ isShown: true })
  }

  hendleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  hendleSubmit = (e) => {
    e.preventDefault()

    const { name, number } = this.state
    const { contacts, addContact } = this.props
    if (!checkedName(contacts, name)) {
      const contactToAdd = {
        name,
        number,
        id: uuidv4()
      }
      addContact(contactToAdd)
    } else {
      this.props.switchAlert(name)
    }


    this.setState(state => ({ ...state, ...initialState }))
  }

  render() {
    const { name, number, isShown } = this.state
    return (
      <div className={styles.container}>
        <CSSTransition in={isShown} timeout={500} classNames={slideTransition}>
          <h2 className={styles.title}>Phonebook</h2>
        </CSSTransition>
        <form onSubmit={this.hendleSubmit} className={styles.form} >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={this.hendleChange} required />
          <label htmlFor="number">Number</label>
          <input type="number" name="number" value={number} onChange={this.hendleChange} required />
          <button type="submit">Add contact</button>
        </form>
      </div>

    )
  }
}

const mSTP = state => ({
  contacts: state.contacts
})

const mDTP = dispatch => ({
  addContact: (name, number) => dispatch(listActions.addContact(name, number)),
  switchAlert: name => dispatch(alertActions.switchAlert(name))
})

Form.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
  })
  ).isRequired,
  addContact: PropTypes.func.isRequired,
  switchAlert: PropTypes.func.isRequired
}

export default connect(mSTP, mDTP)(Form)






