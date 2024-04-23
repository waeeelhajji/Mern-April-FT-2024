
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import AllNotes from "../src/components/AllNotes"
import CreateNote from "../src/components/CreateNote"
import OneNote from "../src/components/OneNote"
import UpdateNote from "../src/components/UpdateNote"


function App() {
  return (
    <div className="App">
      <h1>Notes</h1>
      <Link to="/notes">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/notes/create">Create</Link>

      <Routes>
        <Route path="/notes" element={<AllNotes />} />
        <Route path="/notes/create" element={<CreateNote />} />
        <Route path="/notes/:id" element={< OneNote/>} />
        <Route path="/notes/:id/edit" element={< UpdateNote/>} />

      </Routes>
  
    </div>
  );
}

export default App;
