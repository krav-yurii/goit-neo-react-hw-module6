import styles from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import {deleteContact} from "../../redux/contactsSlice.js";
import {useDispatch} from "react-redux";

function Contact({ contact }) {
    const dispatch = useDispatch();

    const handleDeleteContact = (id) => {
        const confirmed = window.confirm(`Delete contact "${contact.name}"?`);
        if (!confirmed) return;
        dispatch(deleteContact(id));
    };

    console.log(contact);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.row}>
          <FaUser />
          <span>{contact.name}</span>
        </div>
        <div className={styles.row}>
          <FaPhoneAlt className="fas" />
          <span>{contact.number}</span>
        </div>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => handleDeleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
