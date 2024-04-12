
import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [people, setPeople] = useState([
    {
      name: "Mario",
      height: 7,
      color: "red",
    },
    {
      name: "Luigi",
      height: 8,
      color: "green",
    },
    {
      name: "Princess Peach",
      height: 6,
      color: "pink",
    },
  ]);
  const CreatePerson = (para) => {
    console.log("hello from App.js", para)
    setPeople([...people,para])
  }
  return (
    <fieldset className="App">
      <legend>App.js</legend>
      <Form people={people} functionCreate={CreatePerson} />
      <Display people={people} />
    </fieldset>
  );
}

export default App;
