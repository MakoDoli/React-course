import { people } from "./data";
import { getImageUrl } from "./utils";

function List() {
  const listitems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}: </b> {" " + PermissionStatus.profession + " "} known
        for {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <article>
      <h1> Scientists</h1>
      {listitems}
    </article>
  );
}
export default List;
