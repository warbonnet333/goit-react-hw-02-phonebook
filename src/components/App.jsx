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
    name: '',
    filter: ""
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value })
  }



  addContact = (contact) => {

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

  filterContacts = () => {

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

