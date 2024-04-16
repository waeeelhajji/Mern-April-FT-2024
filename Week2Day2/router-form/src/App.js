import './App.css';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Error from './components/Error';
import Form from './components/Form';

function App() {
  return (
    <fieldset className="App">
      <legend>App.js</legend>
      <h1>routing with heroes 🦸‍♂️🦸‍♀️</h1>
      <Routes>
        <Route path="/hero/:id" element={<Hero />} />
        <Route path="/error" element={<Error />}/>
        <Route path="/form" element={<Form />}/>
      </Routes>
    </fieldset>
  );
}

export default App;
