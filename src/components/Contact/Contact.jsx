import css from "./Contact.module.css";

import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

function Contact({ id, name, number, onDelete }) {
  return (
    <li className={css.card}>
      <div>
        <ContactData icon={<IoPersonSharp />}>{name}</ContactData>
        <ContactData icon={<FaPhone />}>{number}</ContactData>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

function ContactData({ icon, children }) {
  return (
    <p className={css.info}>
      <span className={css.icon}>{icon}</span>
      <span>{children}</span>
    </p>
  );
}

export default Contact;
