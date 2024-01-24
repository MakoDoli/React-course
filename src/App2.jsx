import "./App.css";
import Gallery from "./gallery";
import List from "./List";
import Teaset from "./cup";
import Sculptures from "./Sculptures";
import Form from "./Form";
import ShoppingList from "./ShoppingLIst";

function App2() {
  return (
    <div>
      <ShoppingList />
      <Form />
      <Sculptures />
      <Gallery />
      <Teaset />
      <List />
    </div>
  );
}
export default App2;
