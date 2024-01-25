import { useState } from "react";

function Form() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });
  const handleInput = (e) => {
    const newPerson = structuredClone(person);
    newPerson[e.target.name] = e.target.value;
    setPerson(newPerson);
    // setPerson({ ...person, [e.target.name]: e.target.value });
  }; // input 'name' atribute can be used as e.target.name to take value from "named" input

  return (
    <>
      <label>
        First name
        <input
          type="text"
          value={person.firstName}
          name="firstName"
          onChange={handleInput}
        />
      </label>
      <label>
        Last name
        <input
          type="text"
          value={person.lastName}
          name="lastName"
          onChange={handleInput}
        />
      </label>
      <p>{person.firstName}</p>
      <p>{person.lastName}</p>
    </>
  );
}
export default Form;
