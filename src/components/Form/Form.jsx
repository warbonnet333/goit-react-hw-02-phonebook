import React, { Component } from "react";
import styles from "./Form.module.css"
import { CSSTransition } from "react-transition-group"
import slideTransition from '../../transitions/slide.module.css'
import checkedName from "../service/checkedName"

const uuidv4 = require("uuid/v4");

const initialState = {
  name: "",
  number: "",
}

export default class Form extends Component {
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
