import { useState } from "react";

function Form() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });
  const handleInput = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

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
