import logo from './logo.svg';
import './App.css';
import SpookyParagraph from './components/SpookyParagraph';
import HelloName from './components/HelloName';
import GroceryList from './components/GroceryList';
import Mood from './components/Mood';

// Components or functional components
// const App = function()
// use arrow functions

// Try rendering a Grocery List
const groceryList = ["Bread", "Milk", "Eggs", "Chips", "Pizza"];
const groceryListObjects = [
  {
    name: "Bread",
    price: 5
  },
  {
    name: "Milk",
    price: 10
  },
  {
    name: "Eggs",
    price: 25
  },
  {
    name: "Chips",
    price: 100
  },
  {
    name: "Pizza",
    price: 50
  }];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* An array of items */}
        {/* List */}
        <GroceryList list={groceryListObjects} />
        <Mood name={"Bryan"} mood={"lazy"} />
        <Mood name={"Darth Vader"} mood={"mad"} />
        <Mood name={"Luke Skywalker"} mood={"happy"} />
        {/* {[<HelloName name={"Darth Vader"}/>, <HelloName name={"Obi Wan Kenobi"}/>]} */}
        {/* Create our own functional component */}
        {/* <HelloName name={"Darth Vader"}/>
        <HelloName name={"Obi Wan Kenobi"}/> */}
        {/* <SpookyParagraph/> */}
      </header>
    </div>
  );
}

export default App;
