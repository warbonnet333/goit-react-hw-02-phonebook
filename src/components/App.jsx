import React, { Component } from "react";
import List from "./List/List"
import Form from "./Form/Form"
import Filter from "./Filter/Filter"
import styles from "./App.module.css"
import Alert from "./Alert/Alert"

import changeFinalList from './service/changeFilter/changeFilter'
import { CSSTransition } from "react-transition-group";
import popTransition from '../transitions/pop.module.css';
import slideTransition from "../transitions/slide.module.css"
const uuidv4 = require('uuid/v4')




export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
    isAlertOpen: false,
    existedName: ""
  }

  componentDidMount() {
    const persistedConracts = localStorage.getItem("contacts")
    if (persistedConracts) {
      this.setState({ contacts: JSON.parse(persistedConracts) })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  changeFilter = ({ target }) => this.setState({ filter: target.value })

  checkedName = (newContact) => this.state.contacts.find(({ name }) => name.toLowerCase() === newContact.name.toLowerCase())

  addContact = (contact) => {

    if (this.checkedName(contact)) {
      this.setState({ isAlertOpen: true, existedName: contact.name })
      return
    }
    const contactToAdd = {
      ...contact,
      id: uuidv4()
    }

    this.setState(state => ({
      contacts: [...state.contacts, contactToAdd]
    }))

  }

  closeAlert = () => {
    this.setState({ isAlertOpen: false })
  }

  deleteContact = (id) => {
    this.setState(state => ({ contacts: state.contacts.filter(item => item.id !== id) }))
  }

  render() {
    const { contacts, filter, existedName, isAlertOpen } = this.state
    const finalList = changeFinalList(contacts, filter)
    const isFilterShown = !!(contacts.length > 2 || filter)

    return (
      <div>
        <Form onAddContact={this.addContact} />
        <CSSTransition in={isAlertOpen} timeout={5000} classNames={popTransition} unmountOnExit>
          <Alert existedName={existedName} onCloseAlert={this.closeAlert} />
        </CSSTransition>
        <div className={styles.container}>
          <CSSTransition in={isFilterShown} timeout={250} classNames={popTransition} unmountOnExit>
            <Filter value={filter} changeFilter={this.changeFilter} />
          </CSSTransition>
          <List items={finalList} toDeleteContact={this.deleteContact} />
        </div>
      </div >
    )
  }
}
