function ContactList({ contacts, onSelect, selectedContact }) {
  console.log(contacts);
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.email}>
          <button onClick={onSelect(contact)}>{contact.name}</button>
        </li>
      ))}
      <p>{selectedContact.name}</p>
    </ul>
  );
}
export default ContactList;
