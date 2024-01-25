import "./App.css";
import Gallery from "./gallery";
import List from "./List";
import Teaset from "./cup";
import Sculptures from "./Sculptures";
import Form from "./Form";
import ShoppingList from "./ShoppingLIst";
import ChatContacts from "./ChatContact";

function App2() {
  return (
    <div>
      <ChatContacts />
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
