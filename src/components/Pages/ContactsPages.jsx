import React from "react";
import { useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Loader from "../../components/Loader";
import {
  selectIsLoading,
  selectContacts,
} from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <h1>PHONEBOOK</h1>
      <ContactForm />
      <SearchBox />
      {isLoading ? <Loader /> : contacts && <ContactList />}
    </div>
  );
};

export default ContactsPage;
