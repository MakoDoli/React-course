import Profile from "./profile";
import TodoList from "./todolist";

function Gallery() {
  return (
    <section>
      <h1> Amazing scientist</h1>
      <Profile person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }} />

      <TodoList />
    </section>
  );
}
export default Gallery;
