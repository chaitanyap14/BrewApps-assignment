import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

//Components
import Categories from "./components/Categories/Categories";
import CardList from "./components/CardList/CardList";

function App() {
  return (
    <div className="App">
      <h1>Live Spaces</h1>
      <h3>
        <FontAwesomeIcon icon={faCheckCircle} className="checkicon" />
        All NFTs on Cyber either belong to or were minted by their space
        creator.
      </h3>
      <Categories />
      <CardList />
    </div>
  );
}

export default App;
