import React, { Component } from "react";
import List from "./List/List"
import Form from "./Form/Form"
import Filter from "./Filter/Filter"
import Alert from "./Alert/AlertContainer"
import { CSSTransition } from "react-transition-group";
import popTransition from '../transitions/pop.module.css';
import slideTopTransition from '../transitions/slideFromTop.module.css'
import { connect } from "react-redux"
import * as listActions from "./redux/listActions"
import PropTypes from 'prop-types';
import styles from "./App.module.css"


class App extends Component {

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts")
    if (persistedContacts) {
      this.props.fetchFromLocal(JSON.parse(persistedContacts))
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contacts !== this.props.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.props.contacts))
    }
  }

  render() {
    const { contacts, isShown, filter } = this.props
    const isFilterShown = !!(contacts.length > 2 || filter)

    return (
      <div className={styles.container}>
        <CSSTransition in={isShown} timeout={250} classNames={slideTopTransition} unmountOnExit>
          <Alert />
        </CSSTransition>
        <Form />
        <CSSTransition in={isFilterShown} timeout={250} classNames={popTransition} unmountOnExit>
          <Filter />
        </CSSTransition>
        <List />
      </div>
    )
  }
}

const mSTP = state => ({
  contacts: state.contacts,
  isShown: state.alert.showAlert,
  filter: state.filter
})

const mDTP = dispatch => ({
  fetchFromLocal: array => dispatch(listActions.addFromLocalStorage(array))
})

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
  })
  ).isRequired,
  isShown: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired
}


export default connect(mSTP, mDTP)(App)


