import React, { Component } from "react";
import List from "./List/List"
import Form from "./Form/Form"
import Filter from "./Filter/Filter"
import Alert from "./Alert/Alert"
import styles from "./App.module.css"
// import changeFinalList from './service/changeFilter'
import { CSSTransition } from "react-transition-group";
import popTransition from '../transitions/pop.module.css';
import slideTopTransition from '../transitions/slideFromTop.module.css'
import { connect } from "react-redux"


class App extends Component {

  componentDidMount() {
    const persistedConracts = localStorage.getItem("contacts")
    if (persistedConracts) {
      this.setState({ contacts: JSON.parse(persistedConracts) })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.props.contacts))
    }
  }

  changeFilter = ({ target }) => this.setState({ filter: target.value })



  render() {
    const { contacts, isShown, filter } = this.props
    const isFilterShown = !!(contacts.length > 2 || filter)

    return (
      <div>
        <CSSTransition in={isShown} timeout={250} classNames={slideTopTransition} unmountOnExit>
          <Alert />
        </CSSTransition>
        <Form />
        <div className={styles.container}>
          <CSSTransition in={isFilterShown} timeout={250} classNames={popTransition} unmountOnExit>
            <Filter changeFilter={this.changeFilter} />
          </CSSTransition>
          <List />
        </div>
      </div >
    )
  }
}

const mSTP = state => ({
  contacts: state.contacts,
  isShown: state.alert.showAlert,
  filter: state.filter
})


export default connect(mSTP)(App)


