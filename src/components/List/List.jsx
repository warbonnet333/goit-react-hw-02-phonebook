import React, { Component } from "react";
import styles from './List.module.css'
import Contact from "../Contact/Contact"
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from "react-transition-group"
import slideTransition from '../../transitions/slide.module.css'
import { connect } from "react-redux"
import * as listActions from "../redux/listActions"
import changeFinalList from "../service/changeFilter"


class List extends Component {
  render() {
    const { items, deleteContact, filter } = this.props
    const finalList = changeFinalList(items, filter)

    return <TransitionGroup component="ul" className={styles.list} >
      {
        finalList.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames={slideTransition}>
            <Contact name={name} number={number} onDelete={() => deleteContact(id)} />
          </CSSTransition>
        ))
      }
    </TransitionGroup >
  }

}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
  })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired
}

const mstp = state => ({
  items: state.contacts,
  filter: state.filter
})

const mDTP = dispatch => ({
  deleteContact: id => dispatch(listActions.deleteContact(id))
})

export default connect(mstp, mDTP)(List)