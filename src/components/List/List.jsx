import React from "react";
import styles from './List.module.css'
import Contact from "../Contact/Contact"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import slideTransition from '../../transitions/slide.module.css'
import changeFinalList from "../service/changeFilter"


const List = ({ items, deleteContact, filter }) => {
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

export default List