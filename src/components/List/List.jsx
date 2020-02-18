import React from "react";
import styles from './List.module.css'
import Contact from "../Contact/Contact"


const List = ({ items, toDeleteContact }) =>
  items.length > 0 &&
  (
    <div className={styles.container}>
      <ul className={styles.contactList}>
        {items.map(item => (
          <li key={item.id}>
            <Contact name={item.name} number={item.number} onDelete={() => toDeleteContact(item.id)} />
          </li>
        ))}
      </ul>
    </div>
  )

export default List