// src/components/ContactList.jsx
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice"; // Перевірте правильність шляху

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} - {contact.phone}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
