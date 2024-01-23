const person = {
  name: "Gregorio y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

function TodoList() {
  return (
    <>
      <h1> Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technilogies</li>
      </ul>
      <div style={person.theme}>
        <h1>{person.name}</h1>
        <img src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </>
  );
}
export default TodoList;
