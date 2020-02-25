import React from "react";
import styles from './List.module.css'
import Contact from "../Contact/Contact"
import PropTypes from 'prop-types';



const List = ({ items, toDeleteContact }) =>
  !!items.length &&
  (
    <div className={styles.container}>
      <ul className={styles.contactList}>
        {items.map(({ id, name, number }) => (
          <li key={id}>
            <Contact name={name} number={number} onDelete={() => toDeleteContact(id)} />
          </li>
        ))}
      </ul>
    </div>
  )

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string
  })
  ).isRequired,
}

export default List