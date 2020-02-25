import React, { Component } from "react";
import List from "./List/List"
import Form from "./Form/Form"
import Filter from "./Filter/Filter"
import styles from "./App.module.css"


const uuidv4 = require('uuid/v4')

const changeFinalList = (prevArray, filter) => {
  return prevArray.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
}


export default class App extends Component {

  state = {
    contacts: [],
    filter: ""
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
      alert(`${contact.name} is already in contacts`)
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

  deleteContact = (id) => {
    this.setState(state => ({ contacts: state.contacts.filter(item => item.id !== id) }))
  }

  render() {
    const { contacts, filter } = this.state
    const finalList = changeFinalList(contacts, filter)

    return (
      <div>
        <Form onAddContact={this.addContact} />
        <div className={styles.container}>
          <h2>Contacts</h2>
          {(contacts.length > 2 || filter) && <Filter value={filter} changeFilter={this.changeFilter} />}
          <List items={finalList} toDeleteContact={this.deleteContact} />
        </div>
      </div>
    )
  }

}

