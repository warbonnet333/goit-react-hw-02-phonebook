import React, { Component } from "react";
import styles from "./Form.module.css"

export default class Form extends Component {
  state = {
    name: "",
    number: "",
  }

  hendleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }


  hendleSubmit = (e) => {
    e.preventDefault()

    this.props.onAddContact({ ...this.state })

    this.setState({
      name: "",
      number: ""
    })
  }

  render() {
    const { name, number } = this.state
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Phonebook</h2>
        <form onSubmit={this.hendleSubmit} className={styles.form} >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} placeholder="Write contact name" onChange={this.hendleChange} required />
          <label htmlFor="number">Number</label>
          <input type="number" name="number" value={number} placeholder="Write contact number" onChange={this.hendleChange} required />
          <button type="submit">Add contact</button>
        </form>
      </div>
    )
  }
}