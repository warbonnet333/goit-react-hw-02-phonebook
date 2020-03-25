import React from "react";
import styles from './List.module.css'
import Contact from "../Contact/Contact"
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from "react-transition-group"
import slideTransition from '../../transitions/slide.module.css'


const List = ({ items, toDeleteContact }) =>
  <TransitionGroup component="ul" className={styles.list} >
    {items.map(({ id, name, number }) => (
      <CSSTransition key={id} timeout={250} classNames={slideTransition}>
        <Contact name={name} number={number} onDelete={() => toDeleteContact(id)} />
      </CSSTransition>
    ))}
  </TransitionGroup>

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string
  })
  ).isRequired,
}

export default List