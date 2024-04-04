
import './App.css';
import AnotherComponet from "./components/AnotherComponet"

function App() {

  const x = 5
  const message = "hello"

  const person = {
    name: "Bob",
    favFood: "🍝",
    age: 45
  };
  const animals = ['🦁', '🦒', '🦓', '🐊',"dsd"];

  return (
    <fieldset>
      <legend>App.js</legend>
      <h1>Hello React</h1>

      <p>this x :{x} </p>
      <p>this is our message : {message} </p>

      <h3>this is the object of the person : {JSON.stringify(person)}</h3>
      <h3>this is the object of the person : {person.name}</h3>

      this is array of animals {JSON.stringify(animals)}

      <AnotherComponet animals={animals} />

    </fieldset>
  );
}

export default App;
