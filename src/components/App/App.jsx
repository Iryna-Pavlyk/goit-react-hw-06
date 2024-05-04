// import { useState } from 'react'
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";

const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={{}} />
      <SearchBox value={{}} onFilter={{}} />
      <ContactList items={{}} onDelete={{}} />
    </>
  );
};

export default App;
