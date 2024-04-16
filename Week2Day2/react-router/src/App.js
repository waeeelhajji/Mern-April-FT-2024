
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Dach from "./components/Dach"
import Cool from "./components/Cool"
import Contact from "./components/Contact"



function App() {
  return (
    <div className="App">
      <h1>React Routing </h1>
      {/* No anchor tag in React */}
      {/* <a href="/">Home</a> */}
      <Link to="/">Home with Link Tag</Link>
      {/* THEATER STAGE */}
      <Routes>
        {/* ACT 1 - DACH */}
        <Route path="/dach" element={<Dach />} />
        {/* ACT 2 - COOL */}
        <Route path="/cool" element={
          <>
            {/* <Dach /> */}
            <Cool />
          </>
        } />
        {/* ACT 3 - Contact */}
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<p>Not Found</p>} />


      </Routes>




    </div>
  );
}

export default App;
