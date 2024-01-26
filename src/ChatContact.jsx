import { useState } from "react";
import ContactList from "./ContactList";

const contacts = [
  { name: "Taylor", email: "taylor@mail.com" },
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob", email: "bob@mail.com" },
];

function ChatContacts() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <ContactList
      selectedContact={to}
      contacts={contacts}
      onSelect={(contact) => setTo(contact)}
    />
  );
}
export default ChatContacts;
