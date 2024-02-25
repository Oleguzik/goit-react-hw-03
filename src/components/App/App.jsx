import { useState, useEffect } from "react";
import css from "../App/App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

const localStorageKey = "contacts";

// const contactBase = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

function getInitialContacts() {
  const storageData = localStorage.getItem(localStorageKey);
  return storageData // if there is some data in LocalStorage take as initial value
    ? JSON.parse(storageData)
    : []; // else reset Feedback data
}

function App() {
  const [contacts, setContacts] = useState(getInitialContacts());
  const [search, setSearch] = useState("");

  function handleAddContact(newContact) {
    setContacts((contacts) => [...contacts, newContact]);
  }

  function handleSearch(currentSearch) {
    setSearch(currentSearch);
  }

  function handleDelete(id) {
    setContacts((contacts) => contacts.filter((item) => item.id !== id));
  }

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts =
    search.trim() === ""
      ? contacts.slice()
      : contacts.filter((contact) =>
          contact.name.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <>
      <div className={css.form}>
        <ContactForm onAddContact={handleAddContact} />
        <SearchBox search={search} onSearch={handleSearch}>
          Find contacts by name
        </SearchBox>
      </div>
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </>
  );
}

export default App;
