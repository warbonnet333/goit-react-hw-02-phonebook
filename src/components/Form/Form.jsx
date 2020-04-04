import React, { Component } from "react";
import styles from "./Form.module.css"
import { CSSTransition } from "react-transition-group"
import slideTransition from '../../transitions/slide.module.css'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as listActions from "../redux/listActions"

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
    this.props.addContact(name, number)

    this.setState({
      name: "",
      number: ""
    })
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

const mDTP = dispatch => ({
  addContact: (name, number) => dispatch(listActions.addContact(name, number))
})

export default connect(null, mDTP)(Form)

Form.propTypes = {
  onAddContact: PropTypes.func.isRequired
}

// const Form = ({ name = 'hello', number = 0, hendleNameChange, hendleNumberChange, addContact }) =>
//   <div className={styles.container}>
//     <CSSTransition timeout={500} classNames={slideTransition}>
//       <h2 className={styles.title}>Phonebook</h2>
//     </CSSTransition>
//     <form className={styles.form} onSubmit={(e => {
//       e.preventDefault();
//       addContact(name, number);
//     })}>
//       <label htmlFor="name">Name</label>
//       <input type="text" name="name" value={name} onChange={hendleNameChange} required />
//       <label htmlFor="number">Number</label>
//       <input type="number" name="number" value={number} onChange={hendleNumberChange} required />
//       <button type="submit">Add contact</button>
//     </form>
//   </div >


